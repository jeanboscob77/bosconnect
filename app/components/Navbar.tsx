"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Info, Briefcase, Folder, Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/Bosconnect Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "/about", label: "About", icon: <Info size={18} /> },
    { href: "/services", label: "Services", icon: <Briefcase size={18} /> },
    { href: "/projects", label: "Projects", icon: <Folder size={18} /> },
    { href: "/contact", label: "Contact", icon: <Phone size={18} /> },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white  sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={Logo} // put logo in /public folder
            alt="Bosconnect Logo"
            width={60}
            height={60}
          />
          <span className="text-lg font-bold text-gray-200">
            Bosconnect Ltd
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-1 px-2 pb-1 border-b-2 transition ${
                pathname === href
                  ? "border-white text-gray-100 font-semibold"
                  : "border-transparent text-gray-100 hover:text-white hover:bg-blue-400 hover:rounded-b-sm hover:rounded-t-sm hover:border-gray-300 transition duration-500"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
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
              className={`flex items-center gap-2 p-2 rounded-md transition ${
                pathname === href
                  ? "bg-blue-300 text-white font-semibold"
                  : "hover:bg-blue-200"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
