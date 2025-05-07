import { Section } from "~/components/Section";
import SkillBox from "~/components/SkillBox";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoSass } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoShopify } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoFigma } from "react-icons/bi";
import { BiLogoBootstrap } from "react-icons/bi";
import { BiLogoGraphql } from "react-icons/bi";
import { SiJest } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { RiRemixRunFill } from "react-icons/ri";
import { BiLogoRedux } from "react-icons/bi";
import { SiSanity } from "react-icons/si";
import { IoLogoAmplify } from "react-icons/io5";
import { SiMdx } from "react-icons/si";
import { BiLogoVuejs } from "react-icons/bi";
import { SiFormik } from "react-icons/si";

type Props = {};
export const Skills = ({}: Props) => {
  return (
    <Section>
      <h2 className="font-serif text-4xl text-gold letter mb-12">Skills</h2>
      <div className="grid-cols-5  grid gap-4">
        <SkillBox label="HTML" Icon={BiLogoHtml5} />
        <SkillBox label="CSS" Icon={BiLogoCss3} />
        <SkillBox label="SASS" Icon={BiLogoSass} />
        <SkillBox label="Javascript" Icon={BiLogoJavascript} />
        <SkillBox label="React" Icon={BiLogoReact} />
        <SkillBox label="Redux" Icon={BiLogoRedux} />
        <SkillBox label="React Router" Icon={SiReactrouter} />
        <SkillBox label="Tailwind" Icon={BiLogoTailwindCss} />
        <SkillBox label="Bootstrap" Icon={BiLogoBootstrap} />
        <SkillBox label="Typescript" Icon={BiLogoTypescript} />
        <SkillBox label="Shopify" Icon={BiLogoShopify} />
        <SkillBox label="Remix" Icon={RiRemixRunFill} />
        <SkillBox label="Next" Icon={SiNextdotjs} />
        <SkillBox label="Vue" Icon={BiLogoVuejs} />
        <SkillBox label="Figma" Icon={BiLogoFigma} />
        <SkillBox label="Git" Icon={BiLogoGithub} />
        <SkillBox label="GraphQl" Icon={BiLogoGraphql} />
        <SkillBox label="Jest" Icon={SiJest} />
        <SkillBox label="Sanity" Icon={SiSanity} />
        <SkillBox label="AWS Amplify" Icon={IoLogoAmplify} />
        <SkillBox label="Formik" Icon={SiFormik} />
      </div>
    </Section>
  );
};
