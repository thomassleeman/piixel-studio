import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piixel - Professional Websites with Modular Add-Ons | From £45/month",
  description: "Subscribe to a professional website for £45/month. Add booking systems, member portals, AI chatbots, and more - only pay for what you need. No long-term contracts.",
  keywords: ["web development", "subscription website", "small business website", "member portal", "booking system", "AI chatbot", "professional website"],
  authors: [{ name: "Piixel" }],
  openGraph: {
    title: "Piixel - Professional Websites with Modular Add-Ons",
    description: "Start with a base website for £45/month. Add features as you grow. Cancel anytime.",
    type: "website",
    locale: "en_GB",
    siteName: "Piixel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piixel - Professional Websites with Modular Add-Ons",
    description: "Start with a base website for £45/month. Add features as you grow. Cancel anytime.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
