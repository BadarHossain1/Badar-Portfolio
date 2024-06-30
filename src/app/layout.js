import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Badar Hossain Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="black">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
