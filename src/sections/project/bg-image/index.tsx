const ProjectBgImage = ({ bg }: { bg: string }) => {
  return <div className={`w-full h-full absolute inset-0 -z-10   bg-cover bg-no-repeat bg-center brightness-[0.4] ${bg.toLowerCase()}`} />;
};

export default ProjectBgImage;
