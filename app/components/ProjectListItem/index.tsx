import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";
import useViewportSize from "~/customHooks/useViewPortSize";
import HoveredProject from "~/pages/LandingPage/HoveredProject";

const ProjectListItem = ({
  projectName,
  projectLink,
  company,
  role,
  technologies,
  onMouseEnter,
  notes,
  hoveredProject,
}: {
  projectName: string;
  projectLink?: string;
  company: string;
  role: string;
  technologies?: Array<string>;
  onMouseEnter: () => void;
  notes?: Array<React.ReactNode>;
  hoveredProject?: string;
}) => {
  const { width } = useViewportSize();
  return (
    <IconContext.Provider value={{ color: "#F26CA7", size: "0.80em" }}>
      <li className="project-list-item" onMouseEnter={onMouseEnter}>
        <h5 className="flex pl-2 2project-name text-2xl font-serif text-off-white pt-4 mb-2">
          {projectName}{" "}
          <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className="inline-link ml-auto "
          >
            <FiExternalLink />
          </a>
        </h5>

        <div className="mb-2 pl-2 sm:hidden">
          <HoveredProject hoveredProject={hoveredProject || ""} />{" "}
        </div>

        <p className="text-sm pl-2 mb-2">{role}</p>
        <p className="text-sm pl-2 pb-4">@ {company}</p>
        <p className="text-sm pl-2 pb-4">{notes}</p>
      </li>
    </IconContext.Provider>
  );
};

export default ProjectListItem;
