"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Xlogo from "@/public/Asset/logo-white.png";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Bosconnect Ltd</h3>
          <p className="text-gray-400 mb-2">
            Empowering digital growth with smart solutions.
          </p>
          <div className="flex items-center gap-2 text-gray-400 mb-1">
            <MapPin size={18} />
            <span>Gasabo, Kigali, Rwanda</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 mb-1">
            <Phone size={18} />
            <span>+250 788 123 456</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Mail size={18} />
            <span>info@bosconnect.rw</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-500 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              href="https://web.facebook.com/people/Bosconnect-Ltd/61578961479028/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Image src={Xlogo} alt="X" width={24} height={24} />
            </Link>
            <Link
              href="https://www.instagram.com/bosconnectltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Bosconnect Ltd. All rights reserved.
      </div>
    </footer>
  );
}
