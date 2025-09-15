import ContactPage from "@/app/pages/Contact";

export const metadata = {
  title: "Contact | Bosconnect Ltd",
  description: "Get in touch with Bosconnect Ltd for your digital projects.",
  openGraph: {
    title: "Contact | Bosconnect Ltd",
    description: "Get in touch with Bosconnect Ltd for your digital projects.",
    url: "https://bosconnect.vercel.app/contact",
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
    title: "Contact | Bosconnect Ltd",
    description: "Get in touch with Bosconnect Ltd for your digital projects.",
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
export default function Contact() {
  return <ContactPage />;
}
