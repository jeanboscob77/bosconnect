"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Laptop, Globe, Users, Layers } from "lucide-react";
import Infotech from "@/public/InfoTech logo.png";
import MSTECH from "@/public/mstech.jpg";

export default function Home() {
  const clients = [
    { id: 1, name: "Infotech Scholars", logo: Infotech },
    { id: 2, name: "MSTECH", logo: MSTECH },
    { id: 3, name: "Client 3", logo: Infotech },
    { id: 4, name: "Client 4", logo: Infotech },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Bosconnect Ltd
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          Empowering digital growth with smart solutions in web development,
          hosting, training, and online services.
        </motion.p>
        <motion.a
          href="/services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Explore Services <ArrowRight size={20} />
        </motion.a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-10">
          We provide digital services that empower individuals, businesses, and
          organizations to grow and succeed in the modern world.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-lg"
          >
            <Laptop className="text-blue-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              Professional and responsive websites tailored to your business
              needs.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-lg"
          >
            <Globe className="text-blue-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Hosting & Domains</h3>
            <p className="text-gray-600">
              Reliable hosting and domain services that keep you connected
              worldwide.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-lg"
          >
            <Users className="text-blue-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Training</h3>
            <p className="text-gray-600">
              Hands-on programming and digital skills training for all levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Bosconnect?</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-10">
          Our focus is on delivering innovative, affordable, and impactful tech
          solutions with customer satisfaction at the core.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 border rounded-2xl shadow-sm"
          >
            <Layers className="text-blue-600 mx-auto mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
            <p className="text-gray-600">
              We blend creativity and technology to create impactful products.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 border rounded-2xl shadow-sm"
          >
            <Users className="text-blue-600 mx-auto mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-2">Client-Centered</h3>
            <p className="text-gray-600">
              Every service we offer is customized to meet your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Trusted Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto items-center justify-items-center">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 flex items-center justify-center bg-white p-4 rounded-lg shadow transition-transform"
            >
              <Image
                src={client.logo} // works because it's imported
                alt={client.name}
                className="object-contain"
                width={80} // adjust size as needed
                height={80}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Ready to take your business to the next level? Partner with Bosconnect
          for reliable digital solutions.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us <ArrowRight size={20} />
        </motion.a>
      </section>
    </div>
  );
}
