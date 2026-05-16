import { useState, useEffect } from "react";

const links = ["Home", "About", "Projects", "Work"];
const hrefs = { Home: "#hero", About: "#about", Projects: "#projects", Work: "#work" };

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? (darkMode ? "bg-[#0d1117]/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-white/95 backdrop-blur-md shadow-lg shadow-black/10") : "bg-transparent"}`}>
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-16 py-3 sm:py-4">

        {/* Logo */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg font-black flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #818cf8, #2dd4bf)" }}>
          <span className="text-white">N</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 lg:gap-10 list-none">
          {links.map((l) => (
            <li key={l}><a href={hrefs[l]} className="nav-link">{l}</a></li>
          ))}
        </ul>

        {/* Right side — theme + hamburger */}
        <div className="flex items-center gap-3">
          <button onClick={() => setDarkMode(p => !p)}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center text-sm hover:border-teal-400 transition-all ${darkMode ? "border-white/20 bg-white/5" : "border-gray-300 bg-gray-100"}`}>
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Hamburger — mobile only */}
          <button className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1"
            onClick={() => setMenuOpen(p => !p)}>
            <span className={`block w-5 h-[1.5px] transition-all duration-300 ${darkMode ? "bg-gray-300" : "bg-gray-700"} ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block w-5 h-[1.5px] transition-all duration-300 ${darkMode ? "bg-gray-300" : "bg-gray-700"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] transition-all duration-300 ${darkMode ? "bg-gray-300" : "bg-gray-700"} ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden border-b flex flex-col items-center py-5 gap-5 ${darkMode ? "bg-[#0a0f1a] border-white/5" : "bg-white border-gray-200"}`}>
          {links.map((l) => (
            <a key={l} href={hrefs[l]} className="nav-link text-base" onClick={() => setMenuOpen(false)}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
