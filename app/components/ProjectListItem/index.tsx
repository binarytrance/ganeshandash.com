import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";

const ProjectListItem = ({
  projectName,
  projectLink,
  company,
  role,
  technologies,
  onMouseEnter,
  notes,
}: {
  projectName: string;
  projectLink?: string;
  company: string;
  role: string;
  technologies?: Array<string>;
  onMouseEnter: () => void;
  notes?: Array<React.ReactNode>;
}) => {
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
        <p className="text-sm pl-2 mb-2">{role}</p>
        <p className="text-sm pl-2 pb-4">@ {company}</p>
        <p className="text-sm pl-2 pb-4">{notes}</p>
        {/* <ul className="pl-6 flex project-tech-ul justify-between pb-2 text-off-white">
          <li>
            <p>HTML</p>
          </li>
          <li>
            <p>CSS</p>
          </li>
          <li>
            <p>Javascript</p>
          </li>
        </ul> */}
      </li>
    </IconContext.Provider>
  );
};

export default ProjectListItem;
