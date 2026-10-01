import { projects } from "../data/projects";
import PortfolioCard from "./PortfolioCard";

export default function ProjectList() {
  return (
    <ul className="grid gap-x-10 gap-y-14 md:grid-cols-2">
      {projects.map((project) => (
        <li key={project.id}>
          <PortfolioCard project={project} />
        </li>
      ))}
    </ul>
  );
}
