import { mine } from "@/assets/images";
import { Section, Title } from "@/components";
import Image from "next/image";

const personalInfo = [
  { category: "Birthday", value: "1 May 1995" },
  { category: "Website", value: "www.example.com" },
  { category: "Phone", value: "+123 456 7890" },
  { category: "City", value: "New York, USA" },
  { category: "Age", value: 30 },
  { category: "Degree", value: "Master" },
  { category: "Email", value: "email@example.com" },
  { category: "Freelance", value: "Available" },
];

const About = () => {
  return (
    <Section title="About" className="min-h-screen bg-slate-700 text-white">
      <p className="mb-8 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius ipsa accusantium facere, magnam unde distinctio veniam, voluptatum
        quis reprehenderit asperiores esse mollitia nisi in, odit ullam tempore officiis? Quos.
      </p>

      <div className="flex flex-col md:flex-row items-start gap-5 mb-14">
        <Image src={mine} alt="me" className="w-[340px] h-[340px] object-cover" />

        <div className="grid">
          <h2 className="font-bold text-3xl text-primary mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
            Web &
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            Mobile Developer.
          </h2>

          <p className="italic text-justify mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quaerat vero eius harum soluta itaque laboriosam explicabo
            perferendis ad, voluptas quisquam magni suscipit ipsum velit quam optio temporibus. Esse, sint?
          </p>

          <ul className="grid gap-3 md:grid-cols-2 mb-5">
            {personalInfo.map(({ category, value }) => (
              <li key={category} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="w-6 h-6 inline-block mr-1 stroke-primary font-bold stroke-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <span className="font-semibold mr-2">{category}:</span> {value}
              </li>
            ))}
          </ul>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima voluptas atque. Placeat aperiam rerum possimus. Excepturi
            debitis facere dicta, id nam et veniam iure autem esse ex quo. Corrupti! Voluptatum quasi modi aut nesciunt iste, vero
            architecto nostrum inventore doloribus expedita dolore iure eos maxime deleniti officiis aspernatur eum deserunt exercitationem
            quo repellat quos suscipit! Et porro dolorem sit. Totam accusantium fuga reiciendis odit ex itaque alias debitis cupiditate ut
            dicta natus ducimus ipsum excepturi, nostrum fugit assumenda temporibus delectus consequuntur a at? Reprehenderit incidunt
            necessitatibus dolor repellendus tempore.
          </p>
        </div>
      </div>

      <Title title="Facts" className="mt-14" />
    </Section>
  );
};

export default About;
