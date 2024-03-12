import { ChevronRight } from "@/assets/icons";

const personalInfo = [
  { category: "Github", url: "github.com/nijat-niyazov" },
  { category: "Live in", text: "Baku, Azerbaijan" },
  { category: "Phone", text: "+994 70 979 9034" },
  { category: "Degree", text: "Bachelor" },
  { category: "Email", text: "nijatniyazov56@gmail.com" },
  { category: "Occasion", text: "Accounting and Audit" },
  { category: "Freelance", text: "Available" },
];

const Info = () => {
  return (
    <ul className="grid gap-3 md:grid-cols-2 mb-5">
      {personalInfo.map(({ category, text }, i) => (
        <li key={i} className="flex  items-center group">
          <ChevronRight /> {category}:
          <span className="relative ml-2 after:content-[''] after:w-full after:scale-0 group-hover:after:scale-100 after:ease-in after:transition-all after:duration-300 after:mt-2 after:h-0.5 after:rounded-full after:bg-white after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 place-self-start">
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Info;
