import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { BiSpreadsheet } from "react-icons/bi";

import { IconContext } from "react-icons";

function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center mx-[10vw] py-8 ">
      <div className="navbar__site-links gap-4 flex items-center">
        <a href="#home" className="w-[40px] h-[40px]">
          <img src="/images/logo.png" />{" "}
        </a>
        <a href="#about">About</a>
        <a href="#contact">Projects</a>
        <a href="#contact">Skills</a>
        <a href="#contact">Blog</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar__contact-links flex gap-4 items-center">
        <IconContext.Provider
          value={{ color: "#e4e4e4", size: "1.5em", className: "social-icons" }}
        >
          <a
            className="w-[20px]"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/binarytrance/"
          >
            <BiLogoGithub />
          </a>
          <a href="#linkedin">
            <BiLogoLinkedinSquare />
          </a>
          <a href="#mail">
            <BiMailSend />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1hbgrhlEHYbCNwlGsiIpzKSYa2hRZfcJg/view?usp=sharing"
          >
            <BiSpreadsheet />
          </a>
        </IconContext.Provider>
      </div>
    </nav>
  );
}
export default Navbar;
