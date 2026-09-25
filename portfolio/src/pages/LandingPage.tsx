import AboutSection from "../components/AboutSection";
import PortfolioCard from "../components/PortfolioCard";
import WorkSection from "../components/WorkSection";

export default function LandingPage() {
  return (
    <div className="bg-sage">
      <h1 className="font-plex-mono text-6xl">Landing Page</h1>
      <p className="font-archivo text-4xl">Some text about something</p>
      <AboutSection />
      <WorkSection />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </div>
  );
}
