import { RecTile } from "~/components/RecTile";
import { Section } from "~/components/Section";
import { SVG } from "~/SVG";

const About = ({}) => {
  return (
    <>
      <SVG name="hexagon" className="hero-pattern" />
      <Section className="flex flex-col gap-10 align-center border-gold">
        <div className="flex flex-row items-center gap-6">
          <div className="flex justify-center align-center min-w-[200px] h-[200px] border-3 border-gold rounded-full border-dotted">
            <img
              src="/images/self-potrait.png"
              alt="Ganeshan Dash"
              className="rounded-full w-48 h-48 object-cover"
            />
          </div>
          <h1 className="mb-6 text-gold font-serif text-6xl">
            Ganeshan{" "}
            <span className="text-off-white text-stroke strap-emerald">
              Dash
            </span>
          </h1>
        </div>
        <div className="flex flex-row gap-6">
          <div className="min-w-[200px] flex gap-6 flex-col text-lg">
            <RecTile>Developer</RecTile>
            <RecTile>Musician</RecTile>
            <RecTile>Blogger</RecTile>
            <RecTile>Painter</RecTile>
            <RecTile>Photographer</RecTile>
            <RecTile>Film Aficianado</RecTile>
          </div>
          <p className="text-off-white text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in{" "}
            <a href="#" className="inline-link text-pink-500">
              voluptate
            </a>{" "}
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          </p>
        </div>
      </Section>
    </>
  );
};

export default About;
