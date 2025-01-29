import Container from "../Shared/Container";
import BookCall from "../ui/BookCall";
import ContactButton from "../ui/ContactButton";

const WeAre = () => {
  return (
    <Container>
      <div className="md:flex gap-x-4 justify-center my-36 md:px-10">
        <div className="md:w-2/4 my-10  md:me-20">
          <img src="../../../public/assets/contactbd.jpg" alt="" />
          <div className="flex w-full justify-between gap-1 mt-1 text-center">
            <div className="bg-white w-2/4 text-black p-10">
              <h1 className="text-2xl font-semibold">
                {" "}
                100+ <br />
                Case Studies
              </h1>
            </div>{" "}
            <div className="bg-white w-2/4 text-black p-10">
              <h1 className="text-2xl font-semibold">
                View <br />
                Case Studies
              </h1>
            </div>
          </div>
        </div>
        <div className="md:w-2/4">
          <h5 className=" lg:font-semibold  bg-cyan-950 inline-block py-1 px-4 rounded-full">
            <span className="text-primary">Who</span> We Are
          </h5>
          <h1 className="font-bold md:text-6xl text-5xl mt-4 leading-snug">
            <span className="text-gray-300">We Make Brand&lsquo;s</span> <br />
            <span className="text-gray-400">— </span>
            that fly.
          </h1>
          <p className="text-justify text-gray-300 font-light text-xl my-8">
            At Branding Proo, we specialize in elevating brands through
            innovative design and strategic online solutions. Based in Omaha,
            Nebraska, our expert team offers services including website
            development, SEO optimization, and brand identity design.
            <br />
            <br />— We focus on creating user-friendly, high-converting websites
            that enhance visibility and drive sales. Committed to your success,
            we provide ongoing support and resources to ensure your brand stands
            out in the digital landscape. Let’s work together to unlock your
            brand’s full potential!
          </p>
          <div className="mt-6 flex gap-x-3">
            <BookCall></BookCall>
            <ContactButton></ContactButton>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WeAre;
