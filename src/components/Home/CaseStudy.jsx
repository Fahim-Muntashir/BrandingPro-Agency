import Container from "../Shared/Container";

const CaseStudy = () => {
  return (
    <Container>
      <div className="h-screen">
        <div className="flex justify-between items-end border-b-4 border-slate-300">
          <h1 className="text-8xl uppercase leading">
            <span className="text-primary">case</span> studies
          </h1>

          <a href="">View All</a>
        </div>
      </div>
    </Container>
  );
};

export default CaseStudy;
