"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <nav className={`${darkMode ? "bg-gradient-to-r from-black via-gray-900 to-black text-white" : "bg-gradient-to-r from-white via-gray-100 to-white text-black"} w-full px-6 md:px-12 py-6 transition-colors duration-700 shadow-md`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-extrabold tracking-wide">
          <span className="text-purple-500">S</span>adia <span className="text-pink-500">K</span>han
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-lg gap-10 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="hover:text-purple-500 transition duration-300 hover:underline underline-offset-4"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleDarkMode} className="text-2xl hover:scale-110 transition">
            {darkMode ? "🌙" : "☀️"}
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-2 rounded-full shadow-lg text-white font-semibold hover:scale-105 transition duration-300 hover:shadow-pink-500/40">
            HIRE ME →
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <XMarkIcon className={`h-8 w-8 ${darkMode ? "text-white" : "text-black"} transition`} />
          ) : (
            <Bars3Icon className={`h-8 w-8 ${darkMode ? "text-white" : "text-black"} transition`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden mt-4 flex flex-col items-center gap-6 py-6 transition-all duration-500 rounded-xl shadow-inner ${darkMode ? "bg-black/90 text-white" : "bg-white/90 text-black"} backdrop-blur`}>
          <ul className="text-lg flex flex-col gap-4 text-center font-semibold">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-purple-500 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 items-center mt-4">
            <button onClick={toggleDarkMode} className="text-3xl hover:scale-110 transition">
              {darkMode ? "🌙" : "☀️"}
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-2 rounded-full shadow-lg text-white font-semibold hover:scale-105 transition duration-300">
              HIRE ME →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
