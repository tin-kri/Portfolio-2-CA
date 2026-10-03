const education = [
  { years: "2023-2026", school: "Noroff", title: "Frontend Development" },
  {
    years: "2016-2019",
    school: "Dronning Mauds Minne Høgskole",
    title: "Bachelor in Early Childhood Education",
  },
];

const focus = [
  "Frontend & UX — Accessible, responsive and user-focused interfaces.",
  "Problem Solving — Structured thinking from idea to implementation.",
  "Collaboration — Clear communication and effective teamwork.",
];

const rowClass = "border-b border-muted-black/25 last:border-b-0";

export default function AboutSection() {
  return (
    <section
      id="experience"
      className="bg-greige px-gutter py-20 md:px-page md:py-24"
      aria-labelledby="education-heading, focus-heading"
    >
      <div className=" grid gap-16 md:grid-cols-2 ">
        <div>
          <h2  id="education-heading" className="section-label border-b border-muted-black/25 pb-5">
            education
          </h2>
          <ul>
            {education.map(({ years, school, title }) => (
              <li key={title} className={`${rowClass} py-4`}>
                <p className="font-mono text-small text-muted-black">
                  {years}, {school}
                </p>
                <p className="text-body">{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 id="focus-heading" className="section-label border-b border-muted-black/25 pb-5">
            focus
          </h2>
          <ul>
            {focus.map((focus) => (
              <li key={focus} className={`${rowClass} py-5 text-body`}>
                {focus}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
