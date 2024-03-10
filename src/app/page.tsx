import { About, Home, Projects, Resume, Skills } from "@/containers";

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Resume />

      <Skills />
      <Projects />
    </div>
  );
}
