import AboutSection from "../components/AboutSection";
import PortfolioCard from "../components/PortfolioCard";
import WorkSection from "../components/WorkSection";

export default function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <AboutSection />
      <WorkSection />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </div>
  );
}
