import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { BiSpreadsheet } from "react-icons/bi";
import { IconContext } from "react-icons";

const SocialIcons = ({ className }: { className: string }) => {
  return (
    <div
      className={`navbar__contact-links flex gap-4 items-center ${
        className ? className : ""
      }`}
    >
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
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ganeshandash/"
        >
          <BiLogoLinkedinSquare />
        </a>
        <a href="mailto:ganeshan.dash@gmail.com">
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
  );
};

export default SocialIcons;
