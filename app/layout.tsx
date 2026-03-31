import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bikram Upadhyay | Full Stack Developer Sydney",
    template: "%s | Bikram Upadhyay",
  },
  description:
    "Full Stack Developer based in Sydney specialising in AI-powered platforms, headless ecommerce, and cloud-native applications. Expert in Next.js, AWS Lambda, MedusaJS, PostgreSQL, and AWS Bedrock. Available for freelance and full-time roles globally.",
  keywords: [
    "Full Stack Developer Sydney",
    "Next.js developer Australia",
    "AWS Lambda developer",
    "MedusaJS developer",
    "Laravel developer Sydney",
    "AI developer Australia",
    "Node.js developer",
    "TypeScript developer",
    "freelance developer Australia",
    "headless ecommerce developer",
    "AWS Bedrock developer",
    "PostgreSQL developer",
    "React developer Sydney",
    "cloud developer Australia",
    "Bikram Upadhyay",
  ],
  authors: [{ name: "Bikram Upadhyay", url: "https://upadhyaybikram.vercel.app" }],
  creator: "Bikram Upadhyay",
  openGraph: {
    title: "Bikram Upadhyay | Full Stack Developer",
    description:
      "Full Stack Developer based in Sydney building AI-powered platforms and headless ecommerce systems. Specialised in Next.js, AWS Lambda, MedusaJS, and AWS Bedrock.",
    url: "https://upadhyaybikram.vercel.app",
    siteName: "Bikram Upadhyay Portfolio",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bikram Upadhyay | Full Stack Developer Sydney",
    description:
      "Full Stack Developer specialising in Next.js, AWS Lambda, MedusaJS, and AI-powered platforms. Available for freelance and full-time roles.",
    creator: "@upadhyaybikram",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://upadhyaybikram.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bikram Upadhyay",
  url: "https://upadhyaybikram.vercel.app",
  email: "upadhyaybikram@gmail.com",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer based in Sydney specialising in AI-powered platforms, headless ecommerce, and cloud-native applications.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  sameAs: [
    "https://www.linkedin.com/in/upadhyaybikram/",
    "https://github.com/upadhyaybikram",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Laravel",
    "MedusaJS",
    "AWS Lambda",
    "AWS Bedrock",
    "AWS CDK",
    "PostgreSQL",
    "Redis",
    "DynamoDB",
    "Tailwind CSS",
    "Full Stack Development",
    "AI Integration",
    "Headless Ecommerce",
    "Cloud Architecture",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
