"use client";

import { useState } from "react";
import {
  Home,
  Info,
  Briefcase,
  Folder,
  Phone,
  Menu,
  X,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/Bosconnect Logo.png";
import { useLanguage } from "@/Context/LanguageContext";
import { Poppins } from "next/font/google";

// Import Poppins for navbar only
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t.home, icon: <Home size={18} /> },
    { href: "/about", label: t.about, icon: <Info size={18} /> },
    { href: "/services", label: t.services, icon: <Briefcase size={18} /> },
    { href: "/projects", label: t.projects, icon: <Folder size={18} /> },
    { href: "/contact", label: t.contact, icon: <Phone size={18} /> },
  ];

  // Language select handler
  const selectLanguage = (selectedLang: "en" | "rw") => {
    setLang(selectedLang);
    setLangOpen(false); // close dropdown
  };

  return (
    <header
      className={`${poppins.variable} bg-gradient-to-r from-blue-700 to-blue-500 text-white sticky top-0 z-50 font-poppins`}
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={Logo}
            alt="Bosconnect Logo"
            width={60}
            height={60}
          />
          <span className="text-lg font-bold text-gray-200">
            Bosconnect Ltd
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-1 px-3 py-1 rounded transition duration-300 font-medium ${
                pathname === href
                  ? "bg-white text-blue-700"
                  : "text-gray-100 hover:bg-blue-400 hover:text-white"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}

          {/* Language dropdown */}
          <div className="relative ml-4">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-3 py-1 bg-white text-blue-700 font-semibold rounded hover:bg-gray-100 transition"
            >
              <Globe size={18} />
              {lang.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white text-blue-700 rounded shadow-lg">
                <button
                  onClick={() => selectLanguage("en")}
                  className="w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => selectLanguage("rw")}
                  className="w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  Kinyarwanda
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-blue-500 px-4 pb-4 space-y-2">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 p-2 rounded-md transition font-medium ${
                pathname === href
                  ? "bg-white text-blue-700"
                  : "text-gray-100 hover:bg-blue-400 hover:text-white"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}

          {/* Language dropdown for mobile */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-3 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-gray-100 transition w-full"
            >
              <Globe size={18} />
              {lang.toUpperCase()}
            </button>
            {langOpen && (
              <div className="mt-2 w-full bg-white text-blue-700 rounded shadow-lg">
                <button
                  onClick={() => selectLanguage("en")}
                  className="w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => selectLanguage("rw")}
                  className="w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  Kinyarwanda
                </button>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
