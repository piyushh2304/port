import os
import json
import httpx
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from typing import List, Dict

import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    os.getenv("FRONTEND_URL", "*"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
if not OPENROUTER_API_KEY:
    logger.warning("OPENROUTER_API_KEY is not set in environment variables or .env file")
RESUME_FILE = os.path.join(os.path.dirname(__file__), "resume.json")

# Load resume data once on startup
try:
    with open(RESUME_FILE, "r") as f:
        resume_data = json.load(f)
        resume_context = json.dumps(resume_data, indent=2)
except Exception as e:
    resume_context = "Resume data not found."
    print(f"Error loading resume: {e}")

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]

SYSTEM_PROMPT = f"""
You are the AI Digital Twin of Piyush Rajput. Your core purpose is to represent Piyush professionally and answer questions about his career, projects, and skills based ONLY on the provided resume data.

STRATEGIC GUIDELINES:
1. IDENTITY: Speak as Piyush's representative. Use "Piyush" or "He" to refer to him, or "I" if the user treats you like him.
2. ACCURACY: Do not hallucinate. Use the "resume_data" provided below as your single source of truth.
3. CONTEXT: If information is missing, admit it politely. (Example: "I'm sorry, I don't have specific details on that project, but here is what Piyush has worked on...")
4. PROJECTS: Highlight his work with AI (Sommaire, NotionGPT, CodeFoundry) and his technical range (FastAPI, React 19, Three.js).
5. TONE: Professional, innovative, and tech-forward.

RESUME DATA SOURCE:
{resume_context}

When asked about his contacts, mention his LinkedIn and GitHub links specifically.
"""

@app.get("/api")
@app.get("/")
async def root():
    return {"message": "Piyush Portfolio API is running"}

from fastapi.responses import StreamingResponse

@app.post("/api/chat")
@app.post("/chat")
async def chat(request: ChatRequest):
    global OPENROUTER_API_KEY
    if not OPENROUTER_API_KEY:
        # Re-try loading in case file was added
        load_dotenv()
        OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
    
    if not OPENROUTER_API_KEY:
        error_msg = "OPENROUTER_API_KEY is missing. Please create a .env file in the backend folder with OPENROUTER_API_KEY=your_key"
        logger.error(error_msg)
        raise HTTPException(status_code=500, detail=error_msg)

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    for msg in request.messages:
        messages.append({"role": msg.role, "content": msg.content})

    async def event_generator():
        async with httpx.AsyncClient() as client:
            try:
                async with client.stream(
                    "POST",
                    "https://openrouter.ai/api/v1/chat/completions",
                    headers={
                        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                        "HTTP-Referer": "http://localhost:3000",
                        "X-Title": "Piyush Portfolio Chat",
                    },
                    json={
                        "model": "google/gemini-2.0-flash-001",
                        "messages": messages,
                        "stream": True,
                    },
                    timeout=30.0
                ) as response:
                    if response.status_code != 200:
                        error_detail = await response.aread()
                        print(f"OpenRouter Error: {error_detail}")
                        yield f"Error: {response.status_code}"
                        return

                    async for chunk in response.aiter_lines():
                        if not chunk:
                            continue
                        
                        if chunk.startswith("data: "):
                            data_str = chunk[6:].strip()
                            if data_str == "[DONE]":
                                break
                            
                            try:
                                data_json = json.loads(data_str)
                                content = data_json["choices"][0]["delta"].get("content", "")
                                if content:
                                    yield content
                            except Exception as e:
                                print(f"Error parsing chunk: {e}")
            except Exception as e:
                print(f"Exception during chat stream: {e}")
                yield f"Error: {str(e)}"

    return StreamingResponse(event_generator(), media_type="text/event-stream")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
