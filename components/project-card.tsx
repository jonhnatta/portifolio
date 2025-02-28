"use client";

import { useContext } from "react";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { LanguageContext } from "@/app/layout";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
  imageUrl: string;
}

export function ProjectCard({
  title,
  description,
  githubUrl,
  demoUrl,
  technologies,
  imageUrl,
}: ProjectCardProps) {
  const { language } = useContext(LanguageContext);
  
  const codeText = language === 'en' ? 'Code' : 'Código';
  const demoText = language === 'en' ? 'Demo' : 'Demo';

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline" size="sm">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            {codeText}
          </Link>
        </Button>
        {demoUrl && (
          <Button asChild size="sm">
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {demoText}
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}