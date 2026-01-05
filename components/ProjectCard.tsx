import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <div className="relative h-[150px] w-full group z-0 hover:z-50">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 left-0 w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 h-[150px] overflow-hidden group-hover:h-auto group-hover:shadow-xl group-hover:border-blue-100 transition-all duration-300"
      >
        <div className="shrink-0 w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">{description}</p>
        </div>
      </a>
    </div>
  );
}
