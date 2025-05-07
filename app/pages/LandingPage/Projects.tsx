import ProjectListItem from "~/components/ProjectListItem";
import { Section } from "~/components/Section";

const Projects = () => {
  return (
    <Section className="flex flex-col">
      <h2 className="font-serif text-4xl text-gold letter mb-12">
        Featured Projects
      </h2>
      <div className="flex flex-row grid-cols-2 gap-8">
        <div className="w-full flex items-center">
          <img src="/images/self-potrait.png" />
        </div>
        <ol className="project-list-ol w-full">
          {/* // TODO: create an object and loop through it to create the list */}
          <ProjectListItem
            projectName={"Horizon360, Toro"}
            projectLink="https://horizon360.toro.com/"
            company={"Springworks"}
          />
          <ProjectListItem
            projectName={"5% Nutrition"}
            projectLink={"https://5percentnutrition.com/"}
            company={"Shoptrade"}
          />
          <ProjectListItem
            projectName={"SPRO Sports Professionals"}
            projectLink="https://www.spro.com/"
            company={"Shoptrade"}
          />
          <ProjectListItem
            projectName={"Deccan Herald"}
            projectLink="https://www.deccanherald.com/"
            company={"Lollypop"}
          />

          <ProjectListItem
            projectName={"Factspan"}
            projectLink="https://www.factspan.com/"
            company={"Lollypop"}
          />
        </ol>
      </div>
    </Section>
  );
};

export default Projects;
