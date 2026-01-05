import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/portfolio";

export default function ProfileSidebar() {
  return (
    <aside className="w-full lg:w-[350px] shrink-0 flex flex-col items-center text-center lg:sticky lg:top-0 lg:h-screen lg:justify-center">
      <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image
          src={profileData.avatarUrl}
          alt={profileData.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h1>
      <p className="text-gray-600 mb-6 max-w-md px-4 leading-relaxed">
        {profileData.bio}
      </p>

      <div className="flex items-center gap-6 mb-8">
        <Link href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-800"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </Link>
        <Link href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-800"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </Link>
        <Link href={profileData.socialLinks.resume} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform" title="Currículo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-800"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
        </Link>
      </div>

    </aside>
  );
}
