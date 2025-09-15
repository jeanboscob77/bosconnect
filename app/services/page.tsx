import Services from "@/app/pages/Services";
export const metadata = {
  title: "Services | Bosconnect Ltd",
  description: "Discover the range of services Bosconnect Ltd offers.",
  openGraph: {
    title: "Services | Bosconnect Ltd",
    description: "Discover the range of services Bosconnect Ltd offers.",
    url: "https://bosconnect.vercel.app/services",
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
    title: "Services | Bosconnect Ltd",
    description: "Discover the range of services Bosconnect Ltd offers.",
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

export default function ServicesPage() {
  return <Services />;
}
