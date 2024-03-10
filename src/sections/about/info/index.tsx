const personalInfo = [
  { category: "Github", text: "github.com/nijat-niyazov" },
  { category: "Phone", text: "+994 70 979 9034" },
  { category: "City", text: "Baku, Azerbaijan" },
  { category: "Degree", text: "Bachelor" },
  { category: "Email", text: "nijatniyazov56@gmail.com" },
  { category: "Freelance", text: "Available" },
];

const Info = () => {
  return (
    <ul className="grid gap-3 md:grid-cols-2 mb-5">
      {personalInfo.map(({ category, text }) => (
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
          <span className="font-semibold mr-2">{category}:</span> {text}
        </li>
      ))}
    </ul>
  );
};

export default Info;
