import React from "react";
import { About } from "./About";
import { Sections } from "./Sections";
import Speach from "./Speach";
import Contact from "../../components/Contact";

const AlMoulhaqia: React.FC = () => {
  return (
    <div dir="rtl" className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">الملحقية الثقافية</h1>
      <About />
      <Sections />
      <Speach />
      <Contact />
    </div>
  );
};

export default AlMoulhaqia;
