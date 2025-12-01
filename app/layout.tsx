import { ThemeProvider } from "@/components/theme-provider"

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mozio - Conectando Estudantes Moçambicanos pelo Mundo",
  description: "A rede social exclusiva para estudantes moçambicanos no estrangeiro. Partilhe experiências, encontre eventos e construa conexões.",
  keywords: ["Mozio", "estudantes moçambicanos", "rede social", "Moçambique", "networking", "comunidade"],
  authors: [{ name: "Mozio" }],
  openGraph: {
    title: "Mozio - Conectando Estudantes Moçambicanos pelo Mundo",
    description: "A rede social exclusiva para estudantes moçambicanos no estrangeiro.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} antialiased font-sans`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
