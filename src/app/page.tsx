import { About, Home, Resume } from "@/containers";

export default function HomePage() {
  return (
    <div className=" grow">
      <Home />

      <About />
      <Resume />
    </div>
  );
}
