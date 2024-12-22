import React from "react";
import { About } from "./About";
import { Sections } from "./Sections";
import Speach from "./Speach";
import TeamHierarchy from "./TeamHierarchy"
import Contact from "../../components/Contact";

const AlMoulhaqia: React.FC = () => {
  return (
    <div dir="rtl" className="py-12">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-2xl font-bold text-center mb-4">الملحقية الثقافية</h1>
        <p className="text-center mb-8 w-[70%]">تهدف الملحقية الثقافية إلى دعم الطلاب والباحثين من خلال تقديم خدمات تعليمية وأكاديمية متكاملة.</p>
      </div>
      <About />
      <Sections />
      <Speach />
      <TeamHierarchy />
      <Contact />
    </div>
  );
};

export default AlMoulhaqia;
