const ProjectFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full absolute justify-center text-center z-[100] bottom-10">
      <p className="text-xl text-white font-semibold">COGITO NTNU {year}</p>
    </footer>
  );
};

export default ProjectFooter;
