import { useParams } from "react-router";
import { projects } from "../data/projects";

export default function useProject() {
  const { id } = useParams();
  return projects.find((project) => project.id === id);
}
