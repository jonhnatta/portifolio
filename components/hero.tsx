"use client";

import { useContext } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { LanguageContext } from "@/app/layout";

export function Hero() {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      badge: "Portfolio",
      title: "Jonhnatta Augusto",
      titleHighlight: "Data Engineer",
      description: "Professional with over 9 years of experience in Networks, Infrastructure and Information Technology. My career began at the intersection between I.T. and Digital Marketing, where I used advanced techniques data analysis to optimize campaigns and maximize return on investment. I'm looking for constantly developing professional and personal, always looking for new opportunities to apply my technical skills and positively impact projects.",
      viewProjects: "View Projects",
      contactMe: "Contact Me"
    },
    pt: {
      badge: "Portfólio",
      title: "Jonhnatta Augusto",
      titleHighlight: "Engenheiro de Dados",
      description: "Profissional com mais de 9 anos de experiência em Redes, Infraestrutura e Tecnologia da Informação. Minha carreira começou na interseção entre T .I. e Marketing Digital, onde utilizei técnicas avançadas de análise de dados para otimizar campanhas e maximizar o retorno sobre o investimento. Busco constantemente a evolução profissional e pessoal, sempre em busca de novas oportunidades para aplicar minhas habilidades técnicas e impactar positivamente os projetos.",
      viewProjects: "Ver Projetos",
      contactMe: "Contato"
    }
  };

  const currentContent = language === 'en' ? content.en : content.pt;

  return (
    <div className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 z-10 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
            <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-primary"></span>
            {currentContent.badge}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {currentContent.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">{currentContent.titleHighlight}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {currentContent.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#projects">
                {currentContent.viewProjects}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">{currentContent.contactMe}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}