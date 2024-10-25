import Container from "../Shared/Container";
import BookCall from "../ui/bookCall";
import ContactButton from "../ui/ContactButton";

const Banner = () => {
  return (
    <div className="">
      <Container>
        <div className="h-[70vh]  flex justify-center items-center text-center">
          <div className="mt-20">
            <h5 className=" font-semibold bg-cyan-950 inline-block py-1 px-4 rounded-full mb-6">
              Welcome to <span className="text-primary">Branding Pro</span>
            </h5>

            <h1 className="text-5xl md:text-7xl font-semibold">
              We make great digital products <br /> for{" "}
              <span className="text-primary">innovative</span> brands.
            </h1>

            <p className="mt-3 text-gray-400">
              Get your desired design services from our talented designers,
              <br />
              around the world at a reasonable cost
            </p>

            <div className="mt-6 flex items-center justify-center gap-x-3">
              <BookCall></BookCall>
              <ContactButton></ContactButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
