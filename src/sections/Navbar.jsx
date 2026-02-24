import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ closeMenu }) {
  const handleScroll = (id) => {
    if (id === "home") {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to section by id
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close mobile menu after clicking
    if (closeMenu) closeMenu();
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" }, // ✅ Added Project here
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <ul className="nav-ul flex flex-col sm:flex-row gap-5">
      {links.map((link) => (
        <motion.li
          key={link.id}
          className="nav-li list-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            className="nav-link text-neutral-400 hover:text-white transition-colors"
            onClick={() => handleScroll(link.id)}
          >
            {link.label}
          </button>
        </motion.li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Piyush
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.5 }}
        >
          <nav className="pb-5">
            <Navigation closeMenu={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
