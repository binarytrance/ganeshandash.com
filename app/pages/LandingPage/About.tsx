import SocialIcons from "~/components/Navbar/SocialIcons";
import { RecTile } from "~/components/RecTile";
import { Section } from "~/components/Section";
import { SVG } from "~/SVG";

const About = ({}) => {
  return (
    <>
      <SVG name="hexagon" className="hero-pattern h-100" />
      <Section id={"about"} className="gap-10 align-center border-gold">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          <div className="flex justify-center items-center w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] border-3 border-gold rounded-full border-dotted">
            <img
              src="/images/self-potrait.png"
              alt="Ganeshan Dash"
              className="rounded-full w-[112px] h-[112px] sm:w-[192px] sm:h-[192px] object-cover"
            />
          </div>
          <h1 className="text-gold font-serif text-4xl sm:text-6xl">
            Ganeshan{" "}
            <span className="text-off-white text-stroke sm:strap-gold">
              Dash
            </span>
          </h1>
          <SocialIcons className="flex sm:hidden" />
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <div className="min-w-[200px] grid grid-cols-2 sm:flex flex-row flex-wrap sm:flex-col gap-6 text-lg">
            <RecTile>Developer</RecTile>
            <RecTile>Musician</RecTile>
            <RecTile>Blogger</RecTile>
            <RecTile>Painter</RecTile>
            <RecTile>Photographer</RecTile>
            <RecTile>Film Aficianado</RecTile>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-off-white text-lg mb-4 text-center sm:text-left">
              Hey, there! I build things for the web — with empathy, intention,
              and a lot of artistic flair. I care about clean code, meaningful
              interfaces, and experiences that feel as good as they look. I
              specialise in Javascript and React and CSS.
            </p>
            <p className="text-off-white text-lg mb-4 text-center sm:text-left">
              My background’s rooted in frontend engineering, and I love to be
              constantly learning, creating, tinkering, thinking of how to make
              things more efficient. When I am not at my desk coding, I am into
              music, photography, watching movies, writing, and the messy beauty
              of self-expression. A blog’s coming soon. This site's my little
              corner to create, explore, and share.
            </p>
            {/* <a href="#" className="inline-link text-pink-500">
            voluptate
          </a>{" "} */}
            <p className="text-off-white text-lg text-center sm:text-left">
              I am Ganeshan, and I could be your new favorite developer.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
