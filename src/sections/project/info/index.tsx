import { MotionLi } from "@/components/motionGenerator";

const ProjectInfo = ({ about }: { about: string[] }) => {
  return (
    <div className="bg-content/80 md:p-4 p-4 rounded-lg">
      <h1 className="text-3xl  font-semibold mb-4">About Project: </h1>
      <ul role="list" className="pl-5 marker:text-2xl marker:text-white list-disc text-lg md:text-base text-justify ">
        {about.map((info, index) => (
          <MotionLi
            key={index}
            className="mb-3 text-base"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 1, type: "tween" } }}
          >
            {info}
          </MotionLi>
        ))}
      </ul>
    </div>
  );
};

export default ProjectInfo;
