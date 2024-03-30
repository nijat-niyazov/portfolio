import { About, Home, Projects, Resume, Skills } from "@/containers";
import Providers from "@/provider";

export default function HomePage() {
  return (
    <Providers>
      {/* <Test /> */}
      <Home />
      <About />

      <Resume />

      <Skills />

      <Projects />
    </Providers>
  );
}
