
import { Link } from "react-router";
import useProject from "../hooks/useProject";

export default function ProjectPage() {

  const project = useProject()
  if (!project) return <p>Project not found</p>;

  return (
    <article>
      <Link to="/"> Back</Link>
      <img src={project.image} alt={project.alt} />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </article>
  );
}
