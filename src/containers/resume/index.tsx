import { Section, Title } from "@/components";

const Resume = () => {
  return (
    <Section title="Resume" className="min-h-screen bg-gray-800 text-white">
      <p className="mb-8 text-lg">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
        quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>

      <Title title="Sumary" className="mt-14 after:hidden text-2xl" />

      <ul className="grid md:grid-cols-2">
        <li className="px-4 pb-10  border-primary border-l-2 relative">
          <div className="rounded-full border-primary border-2 w-4 h-4 absolute top-1 right-full   -mr-[7px]  overflow-hidden "></div>
          <h3 className="text-primary font-semibold text-2xl">Nijat Niyazov</h3>

          <p className="text-lg italic">
            Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print
            marketing material from initial concept to final, polished deliverable.
          </p>

          <ul className="mt-10">
            <li className="before:content-[''] before:mr-2 before:w-4 before:h-4 before:rounded-full before:bg-white ">
              Portland par 127,Orlando, FL
            </li>
            <li>(123) 456-7891</li>
            <li>alice.barkley@example.com</li>
          </ul>
        </li>
        <li className="px-4 pb-10  border-primary border-l-2 relative">
          <div className="rounded-full border-primary border-2 w-4 h-4 absolute top-1 right-full   -mr-[7px]  overflow-hidden "></div>
          <h3 className="text-primary font-semibold text-2xl">Nijat Niyazov</h3>

          <p className="text-lg italic">
            Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print
            marketing material from initial concept to final, polished deliverable.
          </p>

          <ul className="mt-10">
            <li className="before:content-[''] before:mr-2 before:w-4 before:h-4 before:rounded-full before:bg-white ">
              Portland par 127,Orlando, FL
            </li>
            <li>(123) 456-7891</li>
            <li>alice.barkley@example.com</li>
          </ul>
        </li>
      </ul>
    </Section>
  );
};

export default Resume;
