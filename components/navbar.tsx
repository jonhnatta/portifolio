"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { Database, Github, Menu, X, Globe } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { LanguageContext } from "@/app/layout";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Database className="h-6 w-6 text-primary" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          <Link href="/" className="text-foreground/80 hover:text-primary">
            {language === 'en' ? 'Home' : 'Início'}
          </Link>
          <Link href="#projects" className="text-foreground/80 hover:text-primary">
            {language === 'en' ? 'Projects' : 'Projetos'}
          </Link>
          <Link href="#skills" className="text-foreground/80 hover:text-primary">
            {language === 'en' ? 'Skillss' : 'Habilidades'}
          </Link>
          <Link href="#contact" className="text-foreground/80 hover:text-primary">
            {language === 'en' ? 'Contact' : 'Contato'}
          </Link>
          <div className="flex items-center space-x-2">
            <Button 
              onClick={() => setLanguage('pt')} 
              variant={language === 'pt' ? "default" : "outline"} 
              size="sm" 
              className="rounded-md"
            >
              BR
            </Button>
            <Button 
              onClick={() => setLanguage('en')} 
              variant={language === 'en' ? "default" : "outline"} 
              size="sm" 
              className="rounded-md"
            >
              EN
            </Button>
          </div>
          <ThemeToggle />
          <Button asChild variant="outline">
            <Link href="https://github.com/jonhnatta" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <div className="flex items-center space-x-1 mr-2">
            <Button 
              onClick={() => setLanguage('pt')} 
              variant={language === 'pt' ? "default" : "outline"} 
              size="sm" 
              className="rounded-md h-8 px-2"
            >
              BR
            </Button>
            <Button 
              onClick={() => setLanguage('en')} 
              variant={language === 'en' ? "default" : "outline"} 
              size="sm" 
              className="rounded-md h-8 px-2"
            >
              EN
            </Button>
          </div>
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-b bg-background p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              {language === 'en' ? 'Home' : 'Início'}
            </Link>
            <Link
              href="#projects"
              className="text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              {language === 'en' ? 'Projects' : 'Projetos'}
            </Link>
            <Link
              href="#skills"
              className="text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              {language === 'en' ? 'Skills' : 'Habilidades'}
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              {language === 'en' ? 'Contact' : 'Contato'}
            </Link>
            <Button asChild variant="outline" className="w-full">
              <Link href="https://github.com/jonhnatta" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}