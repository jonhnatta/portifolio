"use client";

import './globals.css';
import * as gtag from '../lib/google-analytics';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { useState, createContext } from 'react';
import Script from 'next/script';

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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />Ï
      </body>
    </html>
  );
}