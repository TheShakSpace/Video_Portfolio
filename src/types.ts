export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
  category: string;
}

export interface ProcessStep {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  rotation: string;
  position: "top-right" | "left-side" | "right-side" | "bottom-left";
}
