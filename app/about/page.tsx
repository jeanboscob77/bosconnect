import Image from "next/image";
import Bosco from "@/public/founder.jpg";
export const metadata = {
  title: "About Us | Bosconnect Ltd",
  description:
    "Learn more about Bosconnect Ltd, our vision, mission, and the team driving digital growth with smart solutions.",
  openGraph: {
    title: "About Us | Bosconnect Ltd",
    description:
      "Learn more about Bosconnect Ltd, our vision, mission, and the team driving digital growth with smart solutions.",
    url: "https://bosconnect.vercel.app/about",
    images: [
      {
        url: "https://bosconnect.vercel.app/Bosconnect_Logo.png", // ✅ full URL required
        width: 1200,
        height: 630,
        alt: "Bosconnect Ltd Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Bosconnect Ltd",
    description:
      "Learn more about Bosconnect Ltd, our vision, mission, and the team driving digital growth with smart solutions.",
    images: [
      {
        url: "https://bosconnect.vercel.app/Bosconnect_Logo.png", // ✅ full URL required
        width: 1200,
        height: 630,
        alt: "Bosconnect Ltd Logo",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        About Us
      </h1>

      {/* Company Intro */}
      <p className="text-center max-w-2xl mx-auto text-gray-700 mb-12">
        At <span className="font-semibold text-blue-600">Bosconnect Ltd</span>,
        we are dedicated to driving digital growth and empowering businesses
        with innovative technology solutions. From web development to online
        services, we aim to connect people and ideas through technology.
      </p>

      {/* Mission / Vision / Values */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To provide affordable and reliable digital solutions that empower
            individuals, businesses, and communities in Rwanda and beyond.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To become a leading tech company that shapes the digital future
            across Africa by fostering innovation and inclusive growth.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Our Values
          </h2>
          <ul className="text-gray-600 space-y-2 list-disc list-inside">
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Customer-Centric Service</li>
          </ul>
        </div>
      </div>

      {/* Team Section - Single Founder */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Meet the Founder
        </h2>
        <div className="flex flex-col items-center">
          <Image
            src={Bosco} // Replace with your real photo in /public
            alt="Founder of Bosconnect Ltd"
            width={160}
            height={160}
            className="rounded-full shadow-lg"
          />
          <h3 className="mt-4 text-2xl font-semibold">Jean Bosco Bikorimana</h3>
          <p className="text-gray-500">Founder & CEO</p>
          <p className="mt-3 max-w-lg text-gray-600">
            With a strong background in Business Information Technology and a
            passion for innovation, Jean Bosco founded Bosconnect Ltd to empower
            communities through technology and digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
