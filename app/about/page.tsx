import AboutPage from "../pages/About";
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

function About() {
  return <AboutPage />;
}

export default About;
