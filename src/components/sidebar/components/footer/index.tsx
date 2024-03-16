const Footer = () => {
  return (
    <footer className="mt-20 text-primary flex items-center justify-between">
      <span>&#169; Copyright</span> <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
