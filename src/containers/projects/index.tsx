import { Section } from "@/components";
import { CategoriesTabs, Projects } from "@/sections/projects";

const Portfolio = () => {
  return (
    <Section id="portfolio" className="bg-slate-700 text-white min-h-screen" title="Portfolio">
      <CategoriesTabs />

      <Projects />
    </Section>
  );
};

export default Portfolio;
