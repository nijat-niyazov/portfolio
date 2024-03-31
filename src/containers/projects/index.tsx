import { Section } from "@/components";
import { Projects } from "@/sections/projects";

const Portfolio = () => {
  return (
    <Section id="portfolio" className="bg-content text-white border-0" title="Portfolio">
      {/* <CategoriesTabs /> */}

      <Projects />
    </Section>
  );
};

export default Portfolio;
