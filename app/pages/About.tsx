"use client";
import Image from "next/image";
import Bosco from "@/public/founder.jpg";
import { useLanguage } from "@/Context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Background image layer */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/about.jpg"
          alt="Digital growth illustration"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
      </div>
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        {t.aboutTitle}
      </h1>

      {/* Company Intro */}
      <p className="text-center max-w-2xl mx-auto text-slate-900 font-semibold mb-12">
        {t.aboutDescription}
      </p>

      {/* Mission / Vision / Values */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            {t.missionTitle}
          </h2>
          <p className="text-gray-800">{t.missionDescription}</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            {t.visionTitle}
          </h2>
          <p className="text-gray-800">{t.visionText}</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            {t.valuesTitle}
          </h2>
          <ul className="text-gray-800 space-y-2 list-disc list-inside">
            <li>{t.innovation}</li>
            <li>{t.integrity}</li>
            <li>{t.excellence}</li>
            <li>{t.customerCentricService}</li>
          </ul>
        </div>
      </div>

      {/* Team Section - Single Founder */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          {t.meetTheFounder}
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
          <p className="text-gray-500">{t.founderTitle}</p>
          <p className="mt-3 max-w-lg text-gray-600">{t.aboutFounder}</p>
        </div>
      </div>
    </section>
  );
}
