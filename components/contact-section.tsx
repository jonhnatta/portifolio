"use client";

import { useContext } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LanguageContext } from "@/app/layout";

export function ContactSection() {
  const { language } = useContext(LanguageContext);
  
  const content = {
    en: {
      title: "Get in Touch",
      description: "Do you have a project in mind or want to discuss opportunities and technology? I'd love to hear from you.",
      contactInfo: "Contact Information",
      channels: "Feel free to reach out through any of these channels",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      availability: "I am currently open to full-time projects and opportunities."
    },
    pt: {
      title: "Entre em Contato",
      description: "Tem um projeto em mente ou quer discutir oportunidades e tecnológia? Adoraria ouvir de você.",
      contactInfo: "Informações de Contato",
      channels: "Sinta-se à vontade para entrar em contato através de qualquer um desses canais",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      availability: "Atualmente estou aberto a projetos e oportunidades de tempo integral."
    }
  };

  const currentContent = language === 'en' ? content.en : content.pt;

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {currentContent.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {currentContent.description}
          </p>
        </div>
        
        <div className="mt-16 w-full max-w-md">
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle>{currentContent.contactInfo}</CardTitle>
              <CardDescription>
                {currentContent.channels}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{currentContent.email}</p>
                  <p className="font-medium">jonhnatta.augusto@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{currentContent.github}</p>
                  <p className="font-medium">github.com/jonhnatta</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{currentContent.linkedin}</p>
                  <p className="font-medium">linkedin.com/in/jonhnata</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  {currentContent.availability}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}