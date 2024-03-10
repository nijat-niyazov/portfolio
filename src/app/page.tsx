import { About, Home, Projects, Resume } from "@/containers";

export default function HomePage() {
  return (
    <div className=" grow">
      <Home />

      <About />
      <Resume />
      <Projects />
    </div>
  );
}
