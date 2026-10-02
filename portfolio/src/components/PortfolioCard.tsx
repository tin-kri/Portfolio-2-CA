import { Link } from "react-router";
import type { Project } from "../data/projects";

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const links = [
    { label: "live site", href: project.liveUrl },
    { label: "github", href: project.githubUrl },
  ].filter((link) => link.href);

  return (
    <article>
      <div className="aspect-16/10 w-full overflow-hidden bg-khaki">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-2 text-body font-medium uppercase">
        <Link
          to={`/projects/${project.id}`}
          className="underline-offset-2 hover:underline"
        >
          {project.title}
        </Link>
      </h3>

      <p className="mt-1 text-body">{project.description}</p>

      {links.length > 0 && (
        <ul className="mt-1 flex gap-4">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-small text-muted-black underline underline-offset-2 hover:text-sage hover:font-bold"
              >
                {label}
                <span className="sr-only">
                  for {project.title} (opens in new tab)
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
