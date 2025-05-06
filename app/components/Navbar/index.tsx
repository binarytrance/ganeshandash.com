import { BiLogoGithub } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center mx-[10vw] py-8">
      <div className="navbar__site-links gap-4 flex">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar__contact-links flex gap-4 items-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/binarytrance/"
        >
          <BiLogoGithub />
        </a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;
