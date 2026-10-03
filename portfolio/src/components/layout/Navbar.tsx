import { Link } from "react-router";

const navLinks = [
  { label: "education", to: "/#education" },
  { label: "projects", to: "/#projects" },
  { label: "contact", to: "#contact" },
];

export default function Navbar() {
  return (
    <header className="bg-neutral-white px-gutter py-gutter md:px-page">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="section-label  ">
          Tina Kristiansen
        </Link>
        <nav aria-label="Tina Kristiansens Portfolio">
          <ul role="menubar" className="flex gap-6 md:gap-12">
            {navLinks.map(({ label, to }) => (
              <li role="none">
                <a role="menuitem" key={label}>
                  <Link
                    to={to}
                    className="font-mono text-label   hover:text-sage hover:underline underline-offset-2 "
                  >
                    {label}
                  </Link>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
