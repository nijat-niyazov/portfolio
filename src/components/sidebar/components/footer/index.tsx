const Footer = () => {
  return (
    <footer className="px-4 md:px-2 text-primary flex items-center justify-between">
      <span>&#169; Copyright</span> <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
