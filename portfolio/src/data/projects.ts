import image from "../assets/placeholder.jpg"

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects = [
  {
    id: "semester-project",
    title: "Semester Project",
    image: image,
    alt: "picture of project",
    description: "Description of a project",
    liveUrl: "https://dropp-semester-project-2.netlify.app/",
    githubUrl: "https://github.com/tin-kri/Semester-Project-2",
  },
  {
    title: "Exam 1",
    id: "exam-project",
    image: image,
    alt: "picture of project",
    description: "Description of a project",
    githubUrl: "https://github.com/tin-kri/project-exam-1-tin-kri",
    liveUrl: "https://www.tinakristiansen.no/",
  },
  {
    title: "StoreFront",
    id: "frameworks-project",
    image: image,
    alt: "picture of project",
    description: "Description of a project",
    githubUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-tina-js-framework/tree/main/storefront",
    liveUrl: "https://jsfw-2025-v1-tina-js-framework.vercel.app/",
  },
];
