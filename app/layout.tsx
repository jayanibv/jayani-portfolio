import "./globals.css";
import Sidebar from "@/components/Sidebar";
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
          flex bg-white
        `}
      >
        <Sidebar />

        <main className="ml-20 md:ml-64 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}