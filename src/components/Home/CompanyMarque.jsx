import Marquee from "react-fast-marquee";
import logo1 from "../../../public/assets/company1.png";
import logo2 from "../../../public/assets/company2.png";
import logo3 from "../../../public/assets/company3.png";
import logo4 from "../../../public/assets/company4.png";
import logo5 from "../../../public/assets/company5.png";
import logo6 from "../../../public/assets/company6.png";
import logo7 from "../../../public/assets/company7.png";

const company = [
  {
    name: "acuazone",
    image: logo1,
  },
  {
    name: "trending",
    image: logo2,
  },
  {
    name: "acuazone",
    image: logo3,
  },
  {
    name: "acuazone",
    image: logo4,
  },
  {
    name: "acuazone",
    image: logo5,
  },
  {
    name: "acuazone",
    image: logo6,
  },
  {
    name: "acuazone",
    image: logo7,
  },
];

const CompanyMarque = () => {
  return (
    <Marquee pauseOnHover={true} speed={30} className="">
      {company.map((item, index) => (
        <img
          className="mx-10 "
          key={index}
          src={item.image}
          alt={item.name}
          width={170}
        />
      ))}
    </Marquee>
  );
};

export default CompanyMarque;
