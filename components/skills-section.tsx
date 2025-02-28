"use client";

import { useContext } from "react";
import { LanguageContext } from "@/app/layout";
import { Badge } from "./ui/badge";
import { Code2, Database, Server, Cloud, Cpu, Dock as Docker, Github as Git, Terminal, Workflow, Layers } from "lucide-react";

export function SkillsSection() {
  const { language } = useContext(LanguageContext);

  const skills = {
    en: [
      { name: "Python", icon: <Code2 className="h-4 w-4 mr-1" /> },
      { name: "JavaScript", icon: <Code2 className="h-4 w-4 mr-1" /> },
      { name: "TypeScript", icon: <Code2 className="h-4 w-4 mr-1" /> },
      { name: "SQL", icon: <Database className="h-4 w-4 mr-1" /> },
      { name: "Node.js", icon: <Server className="h-4 w-4 mr-1" /> },
      { name: "HTML", icon: <Code2 className="h-4 w-4 mr-1" /> },
      { name: "AWS", icon: <Cloud className="h-4 w-4 mr-1" /> },
      { name: "Docker", icon: <Docker className="h-4 w-4 mr-1" /> },
      { name: "Apache Spark", icon: <Cpu className="h-4 w-4 mr-1" /> },
      { name: "Git", icon: <Git className="h-4 w-4 mr-1" /> },
      { name: "Airflow", icon: <Workflow className="h-4 w-4 mr-1" /> },
      { name: "PostgreSQL", icon: <Database className="h-4 w-4 mr-1" /> },
      { name: "MongoDB", icon: <Database className="h-4 w-4 mr-1" /> }
    ],
    pt: [
      { name: "Python", icon: <Code2 className="h-4 w-4 mr-1" /> },
      { name: "JavaScript", icon: <Code2 className="h-4 w-4 mr-1" /> },
      { name: "TypeScript", icon: <Code2 className="h-4 w-4 mr-1" /> },
      { name: "SQL", icon: <Database className="h-4 w-4 mr-1" /> },
      { name: "Node.js", icon: <Server className="h-4 w-4 mr-1" /> },
      { name: "HTML", icon: <Code2 className="h-4 w-4 mr-1" /> },
      { name: "AWS", icon: <Cloud className="h-4 w-4 mr-1" /> },
      { name: "Docker", icon: <Docker className="h-4 w-4 mr-1" /> },
      { name: "Apache Spark", icon: <Cpu className="h-4 w-4 mr-1" /> },
      { name: "Git", icon: <Git className="h-4 w-4 mr-1" /> },
      { name: "Airflow", icon: <Workflow className="h-4 w-4 mr-1" /> },
      { name: "PostgreSQL", icon: <Database className="h-4 w-4 mr-1" /> },
      { name: "MongoDB", icon: <Database className="h-4 w-4 mr-1" /> }
    ]
  };

  const currentSkills = language === 'en' ? skills.en : skills.pt;

  const sectionTitle = language === 'en' ? "Technical Skills" : "Habilidades Técnicas";
  const sectionDescription = language === 'en' 
    ? "Technologies and tools I'm proficient with"
    : "Tecnologias e ferramentas em que sou proficiente";

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {sectionDescription}
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {currentSkills.map((skill) => (
              <Badge 
                key={skill.name} 
                variant="secondary"
                className="px-3 py-2 text-sm flex items-center"
              >
                {skill.icon}
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}