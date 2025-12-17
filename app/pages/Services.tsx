"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/Context/LanguageContext";
import Image from "next/image";

import {
  Code,
  Headphones,
  Cloud,
  GraduationCap,
  Briefcase,
  PenLine,
  Palette,
  Megaphone,
  Laptop2,
  Download,
  Wifi,
  Globe,
} from "lucide-react";

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

export default function ServicesPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const allServices = t.servicesSection.groupedServices.flatMap(
    (group) => group.services
  );

  const displayedServices =
    activeCategory === "All"
      ? allServices
      : t.servicesSection.groupedServices.find(
          (group) => group.category === activeCategory
        )?.services || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <Image
            src="/service.jpg"
            alt="Digital growth illustration"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-3xl md:text-4xl font-extrabold"
        >
          {t.ourService}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative text-gray-200 font-semibold z-10 mt-4 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {t.serviceTitle}
        </motion.p>
      </section>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-6">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-2 rounded-full border transition font-medium ${
            activeCategory === "All"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
          }`}
        >
          {t.all}
        </button>
        {t.servicesSection.groupedServices.map((group) => (
          <button
            key={group.category}
            onClick={() => setActiveCategory(group.category)}
            className={`px-4 py-2 rounded-full border transition font-medium ${
              activeCategory === group.category
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
            }`}
          >
            {group.category}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
          {activeCategory === "All" ? t.allservice : activeCategory}
        </h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-10"
          >
            {displayedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">{t.readyToWork}</h2>
        <p className="mb-6 max-w-xl mx-auto">{t.readyToworkDes}</p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          {t.cta.button}
        </motion.a>
      </section>
    </div>
  );
}
