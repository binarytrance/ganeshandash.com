import { Section } from "~/components/Section";

const Contact = () => {
  return (
    <>
      <Section className="grid grid-cols-[40%_60%] gap-4">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl text-gold font-serif">
            Hey, don't be stranger!
          </h2>
          <p className="py-6">
            Whether it's an idea, an exciting opportunity, a geeky thought, or
            just a quick hello, drop a message — I'm all ears.
          </p>
          <p>ganeshan.dash@gmail.com</p>
        </div>
        <div>
          <form
            name="contact"
            className="border-4 border-dark bg-gold py-8 px-12 rounded-lg shadow-md"
            // @ts-ignore
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="mb-4">
              <label htmlFor="name" className="block text-dark font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 text-dark border-4 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-dark font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border-dark border-4 rounded-lg text-dark"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-dark font-bold">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                name="message"
                placeholder="Type your message here..."
                className="w-full px-3 py-2 border-dark border-4 rounded-lg text-dark"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 font-bold bg-pink text-dark rounded"
            >
              Send
            </button>
          </form>
        </div>
      </Section>
      <footer className="py-2 bg-gold w-full text-dark text-center font-bold">
        A developer is never late, nor is he early, he commits precisely when he
        means to.
      </footer>
    </>
  );
};

export default Contact;
