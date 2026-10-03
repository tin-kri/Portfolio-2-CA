import { Link } from "react-router";
import useProject from "../hooks/useProject";

export default function ProjectPage() {
  const project = useProject();
  if (!project)
    return (
      <div>
        <p>Project not found</p>
        <Link
          to="/#projects"
          className="mt-8 inline-block font-mono text-label underline underline-offset-2"
        >
          see all projects
        </Link>
      </div>
    );


  return (
 <div className="px-gutter pt-8 pb-20  md:px-page md:pt-16 md:pb-section">
  
      <article className="mt-10 flex flex-col gap-14 md:grid md:grid-cols-3 md:gap-8">
        <div>
          <h1 className="font-mono text-display">{project.title}</h1>
          <p className="mt-6 text-lead">{project.description}</p>

          <ul className="mt-10 flex gap-6">
            <li>
              <a
                href={project.liveUrl}
                className="font-mono text-label underline underline-offset-2"
              >
                live site
              </a>
            </li>
            <li>
              <a
                href={project.githubUrl}
                className="font-mono text-label underline underline-offset-2"
              >
                github
              </a>
            </li>
          </ul>
       

      
          <h2 className="section-label pb-5 md:mt-20 ">stack</h2>

          <ul>
            {project.stack.map((item) => (
              <li
                key={item}
                className="border-b border-muted-black/25 py-5 text-body last:border-b-0  "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
       
          <figure>
            <img src={project.image2} alt={project.alt} className="w-full" />
            <figcaption className="mt-3 font-mono text-small text-muted-black">
              {project.caption}
            </figcaption>
          </figure>
          <h2 className="section-label mt-10 text-pen-black">overview</h2>
          <p className="mt-4 text-body leading-relaxed">{project.main}</p>
        </div>
      </article>
   </div>
  );
}

