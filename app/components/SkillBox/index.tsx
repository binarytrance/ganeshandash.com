import { IconContext } from "react-icons";
import useViewportSize from "~/customHooks/useViewPortSize";

const SkillBox = ({
  Icon,
  label,
}: {
  Icon: React.ComponentType;
  label: String;
}) => {
  const { width } = useViewportSize();
  console.log({ width });
  return (
    <IconContext.Provider
      value={{
        color: "#060606",
        size: width < 640 ? "3rem" : "6rem",
        className: "social-icons",
      }}
    >
      <figure className="border-4 border-solid border-dark rounded-lg bg-gold text-dark flex flex-col items-center px-0 sm:px-6 py-3 sm:py-2">
        <Icon />
        <figcaption className="font-bold text-xs sm:text-lg">
          {label}
        </figcaption>
      </figure>
    </IconContext.Provider>
  );
};

export default SkillBox;
