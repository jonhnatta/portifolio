"use client";

import { useContext } from "react";
import { ProjectCard } from "./project-card";
import { LanguageContext } from "@/app/layout";

export function ProjectsSection() {
    const { language } = useContext(LanguageContext);

    const projects = {
        en: [
            {
                title: "Real-time Data Processing with AWS Lambda and Kafka",
                description:
                    "Developed a serverless webhook using AWS Lambda, Python, and Flask to capture and stream real-time data to a Kafka cluster. The data was then consumed by a real-time application for continuous processing.",
                githubUrl: "https://github.com/jonhnatta/stream_dados_kafka",
                technologies: [
                    "Kafka",
                    "Python",
                    "Flash",
                    "Docker",
                    "AWS Lambda",
                ],
                imageUrl:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            },
            {
                title: "Argument Retrieval Using the Retrieve and Generate (RAG) Technique",
                description:
                    "This project implements a system for argument retrieval using the 'Retrieve and Generate' (RAG) technique. The code can extract information from .docx documents and generate answers based on user queries. The goal is to streamline information retrieval, enabling users to obtain answers quickly and efficiently.",
                githubUrl: "https://github.com/jonhnatta/retrieve-generate",
                technologies: ["Python", "Openai", "Langchain", "ChromaDB"],
                imageUrl:
                    "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            },
            {
                title: "Image Description Generation with Computer Vision and AI",
                description:
                    "This project is a web application developed with Streamlit that uses OpenAI's GPT-4o-mini model to automatically generate image descriptions.",
                githubUrl: "https://github.com/jonhnatta/computer-vision-gpt",
                technologies: ["Python", "Openai", "Streamlit"],
                imageUrl:
                    "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Image Generation with DALL-E and Streamlit",
              description:
                  "This project features an interactive web application developed with Streamlit, utilizing OpenAI's DALL-E model to generate images from user-provided textual descriptions. The user-friendly interface enables users to interact with the model and view the generated images in real-time.",
              githubUrl: "https://github.com/jonhnatta/dall-e-image-generator",
              technologies: [
                  "Python",
                  "Openai",
                  "Streamlit",
                  "DALL-E",
              ],
              imageUrl:
                  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
          },
          {
            title: "ETL Pipeline for Processing Multiple JSON Files with Output in Parquet or CSV",
            description:
                "This project features an ETL pipeline developed in Python to process multiple JSON files. By leveraging Pandas for data manipulation and transformation, and Pandera for data validation and quality assurance, the pipeline enables users to select the desired output format—either Parquet or CSV—upon completion of the processing.",
            githubUrl: "https://github.com/jonhnatta/exemplo-etl-multiplos-arquivos",
            technologies: [
                "Python",
                "Pandas",
                "Pandera",
            ],
            imageUrl:
                "https://images.unsplash.com/photo-1610986602538-431d65df4385?q=80&w=3007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
        ],
        pt: [
            {
                title: "Processamento de Dados em Tempo Real com AWS Lambda e Kafka",
                description:
                    "Desenvolvi um webhook serverless utilizando AWS Lambda, Python e Flask para capturar e encaminhar dados em tempo real para um cluster Kafka. Esses dados foram posteriormente consumidos por uma aplicação em tempo real para processamento contínuo.",
                githubUrl: "https://github.com/jonhnatta/stream_dados_kafka",
                technologies: [
                    "Kafka",
                    "Python",
                    "Flash",
                    "Docker",
                    "AWS Lambda",
                ],
                imageUrl:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            },
            {
                title: "Recuperação de Argumentos com a Técnica Retrieve and Generate (RAG)",
                description:
                    "Este projeto implementa um sistema de recuperação de argumentos utilizando a técnica 'Retrieve and Generate' (RAG). O código é capaz de extrair informações de documentos no formato .docx e gerar respostas com base nas perguntas feitas. O objetivo é facilitar a consulta de informações contidas nos documentos, permitindo que os usuários obtenham respostas de forma rápida e eficiente.",
                githubUrl: "https://github.com/jonhnatta/retrieve-generate",
                technologies: ["Python", "Openai", "Langchain", "ChromaDB"],
                imageUrl:
                    "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            },
            {
                title: "Geração de Descrições de Imagens com Visão Computacional e IA",
                description:
                    "Este projeto é uma aplicação web desenvolvida com Streamlit que utiliza o modelo GPT-4o-mini da OpenAI para gerar descrições de imagens de forma automatizada.",
                githubUrl: "https://github.com/jonhnatta/computer-vision-gpt",
                technologies: ["Python", "Openai", "Streamlit"],
                imageUrl:
                    "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                title: "Geração de Imagens com DALL-E e Streamlit",
                description:
                    "Este projeto apresenta uma aplicação web interativa desenvolvida com Streamlit, que utiliza o modelo DALL-E da OpenAI para gerar imagens a partir de descrições textuais fornecidas pelos usuários. A interface amigável permite que os usuários interajam com o modelo e visualizem as imagens geradas em tempo real.",
                githubUrl: "https://github.com/jonhnatta/dall-e-image-generator",
                technologies: [
                    "Python",
                    "Openai",
                    "Streamlit",
                    "DALL-E",
                ],
                imageUrl:
                    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            },
            {
              title: "Pipeline ETL para Processamento de Múltiplos Arquivos JSON com Saída em Parquet ou CSV",
              description:
                  "Este projeto apresenta um pipeline ETL desenvolvido em Python que processa múltiplos arquivos no formato JSON. Utilizando as bibliotecas Pandas para manipulação e transformação dos dados, e Pandera para validação e garantia da qualidade dos dados, o pipeline permite que, ao final do processamento, o usuário escolha o formato de saída desejado: Parquet ou CSV.",
              githubUrl: "https://github.com/jonhnatta/exemplo-etl-multiplos-arquivos",
              technologies: [
                  "Python",
                  "Pandas",
                  "Pandera",
              ],
              imageUrl:
                  "https://images.unsplash.com/photo-1610986602538-431d65df4385?q=80&w=3007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }
        ],
    };

    const currentProjects = language === "en" ? projects.en : projects.pt;

    const sectionTitle =
        language === "en" ? "Featured Projects" : "Projetos em Destaque";
    const sectionDescription =
        language === "en"
            ? "Projects that demonstrate my technical skills and problem-solving ability."
            : "Projetos que demonstram minhas habilidades técnicas e capacidade de resolução de problemas.";

    return (
        <section id="projects" className="py-16 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        {sectionTitle}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {sectionDescription}
                    </p>
                </div>
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {currentProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
