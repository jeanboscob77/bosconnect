"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          Have a question or feedback? Fill out the form below or reach out to
          us directly.
        </motion.p>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center gap-3">
            <MapPin className="text-blue-600" size={32} />
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-600">Gasabo, Kigali, Rwanda</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center gap-3">
            <Phone className="text-blue-600" size={32} />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-600">+250 782 214 787</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center gap-3">
            <Mail className="text-blue-600" size={32} />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600">bosconnect.ltd2025@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Google Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-[800px] md:h-[900px]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdCh8jpo-PfMVjscYPqJZITHekbcr3Gd5-P_hPtkpgs8SHD_w/viewform?embedded=true"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Form"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.573507443074!2d30.015733176032015!3d-1.8919288019379963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca3f19897a1bd%3A0xc6c3dca9971af3c7!2sG.S%20AGATEKO!5e0!3m2!1sen!2srw!4v1757928670808!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              //   allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bosconnect Location"
            ></iframe>
          </div>
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
          href="/services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Explore Services <ArrowRight size={20} />
        </motion.a>
      </section>
    </div>
  );
}
