import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ritik Bora | Full-Stack Developer",
  description:
    "Ritik Bora — Senior Software Developer building scalable web applications end-to-end. MERN, Next.js, Java.",
};

const themeBootstrap = `
try {
  var t = localStorage.getItem('rb-theme');
  if (t ? t === 'dark' : true) document.documentElement.classList.add('dark');
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className={`${outfit.variable} ${jetbrainsMono.variable}`}>{children}</body>
    </html>
  );
}
