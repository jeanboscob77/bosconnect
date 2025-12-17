"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/Context/LanguageContext";
import Infotech from "@/public/InfoTech logo.png";
import MSTECH from "@/public/mstech.jpg";

// Import your icons
import {
  GraduationCap,
  Briefcase,
  PenLine,
  Globe,
  Palette,
  Megaphone,
  Code,
  Headphones,
  Cloud,
  Laptop2,
  Download,
  Wifi,
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();
 
  const clients = [
    { id: 1, name: "Infotech Scholars", logo: Infotech },
    { id: 2, name: "MSTECH", logo: MSTECH },
    { id: 3, name: "Client 3", logo: Infotech },
    { id: 4, name: "Client 4", logo: Infotech },
  ];

  const iconMap = {
    GraduationCap: <GraduationCap size={40} className="text-teal-600" />,
    Briefcase: <Briefcase size={40} className="text-red-600" />,
    PenLine: <PenLine size={40} className="text-pink-600" />,
    Globe: <Globe size={40} className="text-green-500" />,
    Palette: <Palette size={40} className="text-indigo-600" />,
    Megaphone: <Megaphone size={40} className="text-yellow-600" />,
    Code: <Code size={40} className="text-blue-600" />,
    Headphones: <Headphones size={40} className="text-green-600" />,
    Cloud: <Cloud size={40} className="text-purple-600" />,
    Laptop2: <Laptop2 size={40} className="text-cyan-600" />,
    Download: <Download size={40} className="text-gray-700" />,
    Wifi: <Wifi size={40} className="text-blue-500" />,
  };

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white min-h-[75vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background image layer */}
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/hero.jpg"
            alt="Digital growth illustration"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
        </div>

        {/* Decorative floating circles */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white opacity-10"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white opacity-15"
          animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-3/4 w-20 h-20 rounded-full bg-white opacity-10"
          animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-4xl">
          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Bosconnect Ltd
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl font-bold text-gray-200 mb-8"
          >
            {t.hero}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
              {t.exploreService}
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-transform transform hover:scale-105"
            >
              {t.seeProjects}
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Services Section with Floating Scroll */}
      <section className="py-16 px-6 bg-gray-50 text-center overflow-hidden">
        <h2 className="text-3xl font-bold mb-6">{t.servicesSection.title}</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-10">
          {t.servicesSection.subtitle}
        </p>
        <div className="relative overflow-hidden">
          <div
            className="flex flex-nowrap w-[200%]"
            style={{ animation: "scrollLeft 30s linear infinite" }}
          >
            {/*
      Flatten all services into a single array once
      Then render them twice for seamless scrolling
    */}
            {[
              ...t.servicesSection.groupedServices.flatMap(
                (group) => group.services
              ),
              ...t.servicesSection.groupedServices.flatMap(
                (group) => group.services
              ),
            ].map((service, index) => (
              <div
                key={index}
                className="min-w-[300px] p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center"
              >
                {iconMap[service.icon]}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Keyframes for horizontal scroll */}
          <style jsx>{`
            @keyframes scrollLeft {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">{t.trustedClient}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto items-center justify-items-center">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 flex items-center justify-center bg-white p-4 rounded-lg shadow transition-transform"
            >
              <Image
                src={client.logo} //
                alt={client.name}
                className="object-contain"
                width={70}
                height={70}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg md:text-xl">
          {t.cta.subtitle}
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          {t.cta.button} <ArrowRight size={20} />
        </motion.a>
      </section>
    </div>
  );
}
