import React from "react";
import PersonSection from "./PersonCard";
import { convenerData, convenerConfig } from "./convenerData";

// Main convener component
const Convener = () => {
  return (
    <PersonSection
      title={convenerConfig.title}
      people={convenerData}
      logo={convenerConfig.logo}
      logoAlt={convenerConfig.logoAlt}
      animationDelay={convenerConfig.animationDelay}
      showDepartment={convenerConfig.showDepartment}
    />
  );
};

export default Convener;
