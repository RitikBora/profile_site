import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        </head>
        <body className={`${outfit.variable} ${jetbrainsMono.variable}`}>
          <Toaster position="top-center" />
          <Navbar />
          {/* Boundary frame — matches the clone's PageContainer laptop sizing:
              w-8 (32px) hatched bands flanking a max-w-4xl (896px) content column,
              forced to the full 4xl at lg+ (lg:min-w-[56rem] = Tailwind-v3
              equivalent of the clone's v4 min-w-4xl); free to shrink below lg. */}
          <div className="rb-frame-outer flex min-h-screen w-full justify-center">
            <div aria-hidden className="rb-hatch-bg w-8 shrink-0 border-x border-border" />
            <div className="w-full max-w-4xl bg-background lg:min-w-[56rem]">
              {children}
              <Footer />
            </div>
            <div aria-hidden className="rb-hatch-bg w-8 shrink-0 border-x border-border" />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
