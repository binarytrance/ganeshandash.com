import { useState } from "react";
import ProjectListItem from "~/components/ProjectListItem";
import { Section } from "~/components/Section";
import HoveredProject from "./HoveredProject";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState("");
  return (
    <Section>
      <h2 className="font-serif text-4xl text-gold letter mb-12">
        Featured Projects
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="hovered-project-container">
          <HoveredProject hoveredProject={hoveredProject} />
        </div>
        <ol className="project-list-ol w-full">
          {/* // TODO: create an object and loop through it to create the list */}
          <ProjectListItem
            projectName={"Horizon360, Toro"}
            projectLink="https://horizon360.toro.com/"
            role="Senior Software Engineer"
            company={"Springworks"}
            key="springworks"
            onMouseEnter={() => setHoveredProject("Horizon360")}
          />
          <ProjectListItem
            projectName={"5% Nutrition"}
            projectLink={"https://5percentnutrition.com/"}
            role="Senior UI Developer"
            company={"Shoptrade"}
            key="shoptrade"
            onMouseEnter={() => setHoveredProject("5%Nutrition")}
          />
          <ProjectListItem
            projectName={"SPRO Sports Professionals"}
            role="Senior UI Developer"
            projectLink="https://www.spro.com/"
            company={"Shoptrade"}
            key="spro"
            onMouseEnter={() => setHoveredProject("SPRO")}
          />
          <ProjectListItem
            projectName={"Deccan Herald"}
            projectLink="https://www.deccanherald.com/"
            role="UI Developer"
            company={"Lollypop"}
            key="deccan"
            notes={[
              "🏆 Won ",
              <a
                className="text-pink"
                href="https://awards.kyoorius.com/2018/creative/black-elephant-blue-elephant-in-book-winners-2018/"
              >
                The Blue Elephant by Kyoorius Creative Awards <FiExternalLink />
              </a>,
            ]}
            onMouseEnter={() => setHoveredProject("DH")}
          />

          <ProjectListItem
            projectName={"Factspan"}
            projectLink="https://www.factspan.com/"
            role="UI Developer"
            company={"Lollypop"}
            key={"factspan"}
            notes={[
              "🏆 Won ",
              <a
                className="text-pink"
                href="https://www.cssdesignawards.com/sites/factspan/31152/"
              >
                Special Kudos of the day{" "}
                <span>
                  <FiExternalLink />
                </span>
              </a>,
              " on CSS Design Awards",
            ]}
            onMouseEnter={() => setHoveredProject("Factspan")}
          />
        </ol>
      </div>
    </Section>
  );
};

export default Projects;
