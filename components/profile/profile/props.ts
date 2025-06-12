interface Socials {
  type: string;
  name: string;
  url: string;
}

export interface ProfileProps {
  avatar: string;
  fullName: string;
  profession: string;
  description: string;
  resume: string;
  socials: Socials[];
}
