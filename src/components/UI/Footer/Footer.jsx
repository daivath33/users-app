import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="text-center ">
        {new Date().getFullYear()} &copy; All rights reserved "www.themes.com"
      </p>
    </footer>
  );
};

export default Footer;
