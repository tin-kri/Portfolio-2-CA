import { Link } from "react-router";

const navLinks = [
  { label: "work", to: "/#work" },
  { label: "experience", to: "/#experience" },
  { label: "contact", to: "#contact" },
];

export default function Navbar() {
  return (
    <header className="bg-neutral-white px-gutter py-gutter md:px-page">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="text-label">
          Tina Kristiansen
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-6 md:gap-12">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="font-mono text-label underline-offset-2 hover:underline"
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
