import React from "react";
import PersonSection from "./PersonCard";

// Coordinators data
const coordinatorsData = [
  {
    id: 1,
    name: "Ms. Priyanka Dhiman",
    position: "Associate Professor",
    department: "Sunstone",
    image: "/images/Priyanka Dhiman.jpeg",
    alt: "Sunstone - Associate Professor"
  },
  {
    id: 2,
    name: "Mr. Adil Raja",
    position: "Assistant Professor",
    department: "Sunstone",
    image: "/images/Adil Raja.jpeg",
    alt: "Sunstone - Assistant professor"
  },
];

// Configuration for coordinators
const coordinatorsConfig = {
  title: "Coordinators",
  logo: "/images/rrr.webp",
  logoAlt: "Rayat Bahra University Logo",
  showDepartment: true,
  animationDelay: 200
};

const Coordinators = () => {
  return (
    <PersonSection
      title={coordinatorsConfig.title}
      people={coordinatorsData}
      logo={coordinatorsConfig.logo}
      logoAlt={coordinatorsConfig.logoAlt}
      animationDelay={coordinatorsConfig.animationDelay}
      showDepartment={coordinatorsConfig.showDepartment}
    />
  );
};

export default Coordinators;
