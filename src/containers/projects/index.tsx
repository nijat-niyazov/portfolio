import { Section } from "@/components";
import { Projects } from "@/sections/projects";

const Portfolio = () => {
  return (
    <Section id="portfolio" className=" text-white border-0 min-h-screen" title="Portfolio">
      {/* <CategoriesTabs /> */}

      <Projects />
    </Section>
  );
};

export default Portfolio;
