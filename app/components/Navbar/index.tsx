import SocialIcons from "./SocialIcons";

function Navbar() {
  return (
    <nav className="navbar flex justify-center sm:justify-between items-center mx-[5vw] sm:mx-[10vw] py-8 ">
      <div className="navbar__site-links gap-4 flex items-center">
        <a href="/" className="w-[40px] h-[40px] hidden sm:flex">
          <img src="/images/logo.png" />{" "}
        </a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
      <SocialIcons className="hidden sm:flex" />
    </nav>
  );
}
export default Navbar;
