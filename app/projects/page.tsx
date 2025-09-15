"use client";
import { useState } from "react";
import { Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import infotech from "@/public/Asset/Infotech.png";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  category: string;
  date: string; // ISO date string
  link: string;
};

// Sample projects
const projects: Project[] = [
  {
    id: 1,
    title: "INFO TECH SCHOLARS LTD",
    description: `Providing innovative academic and tech solutions that empower learners and communities.`,
    image: infotech,
    category: "Education & Technology",
    date: "2025-09-15",
    link: "https://infotechscholars.com/",
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    description: "Online stores with secure payment integration.",
    image: "/project2.jpg",
    category: "Web Development",
    date: "2025-06-15",
    link: "https://infotechscholars.com/",
  },
  {
    id: 3,
    title: "Mobile Apps",
    description: "Cross-platform mobile apps for iOS and Android.",
    image: "/project3.jpg",
    category: "Mobile Apps",
    date: "2025-08-05",
    link: "https://infotechscholars.com/",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Boost your online presence and reach more customers.",
    image: "/project4.jpg",
    category: "Marketing",
    date: "2025-05-20",
    link: "https://infotechscholars.com/",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const categories = [
    "All",
    "Web Development",
    "Mobile Apps",
    "Marketing",
    "Education & Technology",
  ];

  // Filter projects by category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Sort filtered projects by date (fixed)
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOrder === "Newest")
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortOrder === "Oldest")
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    return 0;
  });

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 text-center px-6 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Our Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{ scale: 1.02 }}
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Take a look at some of the work we've done for our clients.
        </motion.p>
      </section>

      {/* Filters Section */}
      <section className="py-10 px-6 flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === cat
                  ? "bg-blue-700 text-white"
                  : "bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 rounded-full border border-blue-700 bg-white text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition"
        >
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <motion.div
          className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {sortedProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition"
              >
                {/* Responsive Next.js Image */}
                <div className="relative w-full h-64 overflow-hidden group rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-gray-400 text-sm mb-2">
                    {new Date(project.date).toLocaleDateString()}
                  </p>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                  >
                    View Project <ArrowRight size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Start Your Project With Us</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Want to see your ideas come to life? Contact Bosconnect and let's
          build something amazing together.
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
