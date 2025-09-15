export const metadata = {
  title: "Projects | Bosconnect Ltd",
  description: "Explore the projects and solutions provided by Bosconnect Ltd.",
  openGraph: {
    title: "Projects | Bosconnect Ltd",
    description:
      "Explore the projects and solutions provided by Bosconnect Ltd.",
    url: "https://bosconnect.vercel.app/projects",
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
    title: "Projects | Bosconnect Ltd",
    description:
      "Explore the projects and solutions provided by Bosconnect Ltd.",
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

import Projects from "@/app/pages/Project";

export default function ProjectsPage() {
  return <Projects />;
}
