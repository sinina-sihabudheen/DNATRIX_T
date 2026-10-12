// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WhatsAppButton from "@/components/WhatsAppButton";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "DNATRIX | Medical & Laboratory Solutions UAE",
//   description: "DNATRIX provides advanced medical equipment, laboratory solutions, and turnkey laboratory setups across the UAE and GCC. Specialized in Life Science, Food Microbiology, and Molecular Diagnostics.",
//   keywords: ["Medical Equipment UAE", "Laboratory Solutions Dubai", "Turnkey Laboratory", "Genomics UAE", "Molecular Diagnostics", "DNATRIX"],
//   icons: {
//     icon: '/images/dnalogo.png',
//     shortcut: '/images/dnalogo.png',
//     apple: '/images/dnalogo.png',
//   },
//   openGraph: {
//     title: "DNATRIX | Medical & Laboratory Solutions",
//     description: "Your trusted partner for medical and laboratory excellence in the UAE.",
//     url: 'https://dnatrixme.com',
//     siteName: 'DNATRIX',
//     locale: 'en_US',
//     type: 'website',
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         {children}
//         <WhatsAppButton />
//         <Footer />
//       </body>
//     </html>
//   );
// }








import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DNATRIX | Medical & Laboratory Solutions UAE",
  description:
    "DNATRIX provides advanced medical equipment, laboratory solutions, and turnkey laboratory setups across the UAE and GCC. Specialized in Life Science, Food Microbiology, and Molecular Diagnostics.",
  keywords: [
    "Medical Equipment UAE",
    "Laboratory Solutions Dubai",
    "Turnkey Laboratory",
    "Genomics UAE",
    "Molecular Diagnostics",
    "DNATRIX",
  ],
  icons: {
    icon: "/images/dnalogo.png",
    shortcut: "/images/dnalogo.png",
    apple: "/images/dnalogo.png",
  },
  openGraph: {
    title: "DNATRIX | Medical & Laboratory Solutions",
    description:
      "Your trusted partner for medical and laboratory excellence in the UAE.",
    url: "https://dnatrixme.com",
    siteName: "DNATRIX",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DYDH6246YJ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-DYDH6246YJ');
          `}
        </Script>
      </body>
    </html>
  );
}
