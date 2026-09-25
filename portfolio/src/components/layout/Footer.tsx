
const contactLinks = [
  { label: "tinakkristiansen@gmail.com", href: "mailto:tinakkristiansen@gmail.com" },
  { label: "github", href: "https://github.com/tin-kri" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-greige px-gutter py-24 md:px-page">
      <div className="mx-auto flex max-w-page flex-col gap-6 md:items-center">
        <h2 className="section-label font-bold">contact</h2>

        <ul role="list" className="flex flex-col gap-4 md:flex-row md:gap-14">
          {contactLinks.map(({ label, href }) => {
            const isEmail = href.startsWith("mailto:");
            return (
              <li key={label}>
                <a
                  href={href}
                  {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
                  className="font-mono text-label underline-offset-2 hover:underline"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
