import { IconContext } from "react-icons";

const SkillBox = ({
  Icon,
  label,
}: {
  Icon: React.ComponentType;
  label: String;
}) => {
  return (
    <IconContext.Provider
      value={{ color: "#060606", size: "7rem", className: "social-icons" }}
    >
      <figure className="border-4 border-solid border-dark rounded-lg bg-gold text-dark flex flex-col items-center px-6 py-2">
        <Icon />
        <figcaption className="font-bold text-lg">{label}</figcaption>
      </figure>
    </IconContext.Provider>
  );
};

export default SkillBox;
