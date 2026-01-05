import { Profile, Project } from "@/types";

export const profileData: Profile = {
  name: "Jonhnatta Augusto",
  bio: "Engenheiro de Dados com base técnica, experiência em Inteligência Artificial, gestão de equipes e visão de negócio, focado em transformar dados para impulsionar o crescimento das empresas.",
  avatarUrl: "/jonhnatta.jpg",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/jonhnatta/",
    github: "https://github.com/jonhnatta",
    resume: "https://drive.google.com/file/d/1yEhVZh_zVohVwGtFkAWOKtwSBP4BugRu/view?usp=sharing"
  }
};

export const projectsData: Project[] = [
  {
    title: "ETL Facebook Ads",
    description: "Projeto para extração de dados de campanhas do Facebook Ads. O script obtém informações das campanhas ativas via API do Facebook e armazena os resultados em um banco de dados PostgreSQL.",
    imageUrl: "/etl_facebook.jpg",
    githubUrl: "https://github.com/jonhnatta/extract-facebook-ads"
  },
  {
    title: "ETL Google Ads",
    description: "Projeto para extração de dados de campanhas do Google Ads. O script obtém informações das campanhas via API do Google e armazena os resultados em um banco de dados PostgreSQL na AWS.",
    imageUrl: "/etl_google.jpg",
    githubUrl: "https://github.com/jonhnatta/extract-google-ads"
  },
  {
    title: "Pipeline Absenteísmo",
    description: "Este projeto implementa um pipeline ETL (Extract, Transform, Load) completo para consolidar dados de absenteísmo armazenados em múltiplos arquivos Excel. O sistema automatiza a extração, transformação e carregamento dos dados, gerando um arquivo único para análise.",
    imageUrl: "/pipeline_absenteísmo.jpg",
    githubUrl: "https://github.com/jonhnatta/absenteeism-etl-pipeline"
  },
  {
    title: "Dashboard de Gerenciamento de Produto",
    description: "Um sistema completo de gerenciamento de produtos desenvolvido com FastAPI (Backend), Next.js (Frontend) e PostgreSQL (Banco de Dados), totalmente containerizado com Docker.",
    imageUrl: "/dashboard.jpg",
    githubUrl: "https://github.com/jonhnatta/product-application-fullstack"
  },
  {
    title: "Backup S3",
    description: "Uma ferramenta simples em Python para automatizar backups de arquivos para o AWS S3. Este projeto monitora uma pasta local, faz upload dos arquivos para um bucket S3 e, opcionalmente, exclui os arquivos locais após o upload bem-sucedido.",
    imageUrl: "/backup_s3.jpg",
    githubUrl: "https://github.com/jonhnatta/backup-files-to-s3"
  },
  {
    title: "ETL Multiplos Arquivos",
    description: "Este projeto é um exemplo de um pipeline ETL para processar múltiplos arquivos *.json. O pipeline utiliza as bibliotecas Pandas para processamento de dados e Pandera para validação e garantia de qualidade dos dados. Ao final do processamento, o usuário pode escolher o formato de saída: Parquet ou CSV.",
    imageUrl: "/etl_arquivos.jpg",
    githubUrl: "https://github.com/jonhnatta/exemplo-etl-multiplos-arquivos"
  },

];
