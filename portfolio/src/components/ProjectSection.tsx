import ProjectList from "./ProjectList";

export default function ProjectSection() {
  return (
    <section id="projects" className="px-gutter py-20 md:px-page md:py-24">
      <h2 className="section-label pb-6">projects</h2>
      <ProjectList />
    </section>
  );
}
