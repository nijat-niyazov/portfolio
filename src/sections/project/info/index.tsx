const ProjectInfo = ({ about }: { about: string[] }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">About Project: </h1>
      <ul role="list" className="opacity-80  pl-5 marker:text-xl marker:text-white list-disc">
        {about.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectInfo;
