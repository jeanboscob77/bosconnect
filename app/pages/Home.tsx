"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Infotech from "@/public/InfoTech logo.png";
import MSTECH from "@/public/mstech.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
  const clients = [
    { id: 1, name: "Infotech Scholars", logo: Infotech },
    { id: 2, name: "MSTECH", logo: MSTECH },
    { id: 3, name: "Client 3", logo: Infotech },
    { id: 4, name: "Client 4", logo: Infotech },
  ];

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

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto"
        >
          {groupedServices.map((group) =>
            group.services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center"
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
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
