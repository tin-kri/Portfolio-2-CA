import AboutSection from "../components/AboutSection";
import WorkSection from "../components/WorkSection";

import ProjectList from "../components/ProjectList";

export default function LandingPage() {
  return (
    <div className="">
      <h1 className="font-plex-mono text-6xl">Landing Page</h1>
      <p className="font-archivo text-4xl">Some text about something</p>
      <AboutSection />
      <WorkSection />

      <ProjectList />
    </div>
  );
}
