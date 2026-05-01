import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import {
  Playfair_Display,
  Space_Grotesk,
  Great_Vibes,
  Merriweather,
} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-space",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-greatvibes",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${space.className}
          ${playfair.variable}
          ${greatVibes.variable}
          ${merriweather.variable}
          bg-[#050505] text-white
        `}
      >
        <CursorGlow />
        <Navbar />
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}