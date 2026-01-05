
import ProfileSidebar from "@/components/ProfileSidebar";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-24 flex-grow w-full">
        <ProfileSidebar />

        <div className="flex-1 py-12 md:py-20 flex flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>
          </div>

          <footer className="mt-16 text-center text-xs text-gray-400">
            Todos os direitos reservados © {new Date().getFullYear()}
          </footer>
        </div>
      </main>
    </div>
  );
}
