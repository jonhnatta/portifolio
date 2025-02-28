"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { useState, createContext } from 'react';

const inter = Inter({ subsets: ['latin'] });

// Create a language context
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {},
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState('en');

  return (
    <html lang={language} suppressHydrationWarning>
      <head>
        <title>Portfólio - Jonhnatta</title>
        <meta name="description" content="Portfólio showcasing data engineering projects and skills" />
      </head>
      <body className={inter.className}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </LanguageContext.Provider>
      </body>
    </html>
  );
}