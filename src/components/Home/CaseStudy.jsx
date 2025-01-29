import Container from "../Shared/Container";

const CaseStudy = () => {
  return (
    <Container>
      <div className="h-screen">
        <div className="md:flex justify-between items-end border-b-4 border-slate-300 ">
          <h1 className="text-5xl md:text-8xl uppercase leading">
            <span className="text-primary">case</span> studies
          </h1>

          <a href="" className="text-secondary text-2xl block sm:mt-4 text-end">
            View All
          </a>
        </div>
      </div>
    </Container>
  );
};

export default CaseStudy;
