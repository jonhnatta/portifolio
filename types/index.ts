
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

export interface Profile {
  name: string;
  bio: string;
  avatarUrl: string;
  socialLinks: {
    linkedin: string;
    github: string;
    resume: string;
  };
}
