import { Geist, Outfit } from "next/font/google";

export const publicSans = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-public-sans",
});

export const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});