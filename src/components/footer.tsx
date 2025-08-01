const Footer = () => {
  return (
    <footer className="flex h-10 w-full items-center justify-center">
      <span className="w-full text-center font-medium text-sm">
        &copy; Digimark Developers {new Date().getFullYear()}. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
