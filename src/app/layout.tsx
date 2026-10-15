import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Namfon Bunkham — UX/UI Designer",
  description:
    "Portfolio of Namfon Bunkham, a UX/UI Designer crafting websites, applications, and back-office systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
