import Container from "../Shared/Container";

const caseStudies = [
  {
    id: 1,
    title: "Transforming organizations to boost online presence",
    tag: "Who We Are",
    image: "/assets/contactbd.jpg",
    desc: "We help brands reimagine their digital presence with strategic design and tech. implementing SEO and targeted campaigns, we increased conversions by 60%.",
  },
  {
    id: 2,
    title: "Scaling local businesses with smart digital funnels",
    tag: "What We Did",
    image: "/assets/contactbd.jpg",
    desc: "By implementing SEO and targeted campaigns, we increased conversions by 60%  implementing SEO and targeted campaigns, we increased conversions by 60%..",
  },
  {
    id: 3,
    title: "Building strong personal brands for entrepreneurs",
    tag: "Our Impact",
    image: "/assets/contactbd.jpg",
    desc: "Crafted branding a implementing SEO and targeted campaigns, we increased conversions by 60%.nd sites that reflect personality, driving trust and leads.",
  },
];

const CaseStudy = () => {
  return (
    <Container>
      <div className="min-h-screen py-10">
        {/* Header */}
        <div className="md:flex justify-between items-end border-b-4 border-slate-300 mb-10">
          <h1 className="text-5xl md:text-8xl uppercase leading-none">
            <span className="text-primary">case</span> studies
          </h1>
          <a
            href="#"
            className="text-secondary text-2xl block sm:mt-4 text-end"
          >
            View All
          </a>
        </div>

        {/* Case Studies */}
        <div className="space-y-10">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className={`md:flex gap-4 items-center  ${
                item.id === 2 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="p-4 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`rounded-lg w-full max-w-lg object-cover shadow-lg 
                  `}
                />
              </div>

              <div className="bg-gradient-to-tl from-slate-950 to-slate-900 backdrop-blur-xl p-10 rounded-xl shadow-md">
                <h5 className="lg:font-semibold bg-cyan-950 text-white inline-block py-1 px-4 rounded-full text-sm mb-2">
                  <span className="text-primary">{item.tag.split(" ")[0]}</span>{" "}
                  {item.tag.split(" ").slice(1).join(" ")}
                </h5>
                <h1 className="text-2xl my-3 font-semibold">{item.title}</h1>
                <p className="text-gray-600 text-justify">{item.desc}</p>
                <br />
                <button>View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CaseStudy;
