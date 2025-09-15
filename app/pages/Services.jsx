"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const groupedServices = [
  {
    category: "Education & Career Support",
    services: [
      {
        title: "University & School Applications",
        description:
          "We assist with applications to universities and schools to boost your success rate.",
        icon: <GraduationCap size={40} className="text-teal-600" />,
      },
      {
        title: "Job Application & CV Assistance",
        description:
          "Professional help with CV writing and job application strategies tailored to your goals.",
        icon: <Briefcase size={40} className="text-red-600" />,
      },
      {
        title: "Motivation Letter Writing",
        description:
          "Compelling motivation letters tailored to your academic or professional ambitions.",
        icon: <PenLine size={40} className="text-pink-600" />,
      },
      {
        title: "Education Consultancy & Advisory",
        description:
          "Get personalized guidance for academic planning, scholarships, and study abroad.",
        icon: <Globe size={40} className="text-green-500" />,
      },
      {
        title: "Online Programming Training",
        description:
          "Interactive training sessions to help learners master programming and technology skills.",
        icon: <GraduationCap size={40} className="text-orange-600" />,
      },
    ],
  },
  {
    category: "Business & Branding",
    services: [
      {
        title: "Graphic Design Services",
        description:
          "Creative design of banners, stickers, business cards, and other branding assets.",
        icon: <Palette size={40} className="text-indigo-600" />,
      },
      {
        title: "Marketing & Branding Services",
        description:
          "Boost your business visibility with our strategic marketing and branding solutions.",
        icon: <Megaphone size={40} className="text-yellow-600" />,
      },
    ],
  },
  {
    category: "Technology & IT Services",
    services: [
      {
        title: "Web and App Development",
        description:
          "We design and develop responsive, modern websites and mobile applications tailored to your needs.",
        icon: <Code size={40} className="text-blue-600" />,
      },
      {
        title: "24/7 Customer Support",
        description:
          "Our support team is available around the clock to help you resolve issues quickly and efficiently.",
        icon: <Headphones size={40} className="text-green-600" />,
      },
      {
        title: "Hosting",
        description:
          "Reliable and secure hosting services to keep your business online and running smoothly.",
        icon: <Cloud size={40} className="text-purple-600" />,
      },
      {
        title: "IT Support & Computer Skills Training",
        description:
          "Tech support and digital skills training to keep you ahead in a digital world.",
        icon: <Laptop2 size={40} className="text-cyan-600" />,
      },
      {
        title: "Software Installation & Troubleshooting",
        description:
          "Expert help with installing, configuring, and fixing software issues on your devices.",
        icon: <Download size={40} className="text-gray-700" />,
      },
      {
        title: "Affordable Internet Sharing Service",
        description:
          "Stay connected with cost-effective and accessible internet sharing solutions.",
        icon: <Wifi size={40} className="text-blue-500" />,
      },
    ],
  },
];

const allServices = groupedServices.flatMap((group) => group.services);

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const displayedServices =
    activeCategory === "All"
      ? allServices
      : groupedServices.find((group) => group.category === activeCategory)
          ?.services || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Trusted digital services tailored to meet your needs.
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
          All
        </button>
        {groupedServices.map((group) => (
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
          {activeCategory === "All" ? "All Services" : activeCategory}
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
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Whether you&apos;re looking for development, hosting, or training,
          Bosconnect has the right solution for you.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
}
