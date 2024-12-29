import React from "react";
import { About } from "./About";
import { Sections } from "./Sections";
import Speach from "./Speach";
import TeamHierarchy from "./TeamHierarchy";
import Boffer from "./Boffer";
import Contact from "../../components/Contact";

const AlMoulhaqia: React.FC = () => {
  return (
    <div>
      <Boffer />
      <About />
      <Sections />
      <Speach />
      <TeamHierarchy />
      <Contact />
    </div>
  );
};

export default AlMoulhaqia;
