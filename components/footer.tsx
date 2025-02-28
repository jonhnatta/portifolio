"use client";

import { useContext } from "react";
import Link from "next/link";
import { Database, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { LanguageContext } from "@/app/layout";

export function Footer() {
    const { language } = useContext(LanguageContext);
    const currentYear = new Date().getFullYear();

    const copyright =
        language === "en"
            ? `© ${currentYear} All rights reserved.`
            : `© ${currentYear} Todos os direitos reservados.`;

    return (
        <footer className="border-t bg-background">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    <Link
                        href="https://github.com/jonhnatta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <span className="sr-only">GitHub</span>
                        <Github className="h-6 w-6" />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/jonhnatta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link
                        href="mailto:jonhnatta.augusto@gmail.com"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <span className="sr-only">Email</span>
                        <Mail className="h-6 w-6" />
                    </Link>
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <Link
                        href="/"
                        className="flex items-center justify-center space-x-2 md:justify-start"
                    >
                        <Database className="h-6 w-6 text-primary" />
                        {/* <span className="text-lg font-semibold">Jonhnatta</span> */}
                    </Link>
                    <p className="mt-2 text-center text-sm text-muted-foreground md:text-left">
                        {copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}
