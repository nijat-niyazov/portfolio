import { About, Home, Projects, Resume, Skills } from "@/containers";
import Providers from "@/provider";

// edit
export default function HomePage() {
  return (
    <Providers>
      {/* <Zoom /> */}
      <Home />
      <About />

      <Resume />

      <Skills />

      <Projects />
    </Providers>
  );
}
