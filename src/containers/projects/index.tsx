import { Section } from "@/components";
import { Projects } from "@/sections/projects";

const Portfolio = () => {
  return (
    <Section id="portfolio" className="bg-slate-700 text-white " title="Portfolio">
      {/* <CategoriesTabs /> */}

      <Projects />
    </Section>
  );
};

export default Portfolio;
