import { Link } from "react-router";

const navLinks = [
  { label: "experience", to: "/#experience" },
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
        <nav aria-label="Main">
          <ul className="flex gap-6 md:gap-12">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="font-mono text-label  hover:font-bold hover:text-sage "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
