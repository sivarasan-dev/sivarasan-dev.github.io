import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ponnuthurai Sivarasan - Senior Full Stack Developer",
  description: "Experienced Full Stack Developer with 8+ years in frontend and backend development. Specialized in React.js, Next.js, Node.js, GraphQL, and TypeScript.",
  keywords: "Full Stack Developer, React.js, Next.js, Node.js, GraphQL, TypeScript, AWS, MongoDB, PostgreSQL",
  authors: [{ name: "Ponnuthurai Sivarasan" }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Ponnuthurai Sivarasan - Senior Full Stack Developer",
    description: "Experienced Full Stack Developer with 8+ years in frontend and backend development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
