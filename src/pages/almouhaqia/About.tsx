import React from 'react';

export const About: React.FC = () => (
  <section className="p-4 relative">
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
            <h2 className="text-gray-900 text-4xl font-bold leading-normal lg:text-start text-center">
              نبذة عن الملحقية
            </h2>
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              تهدف الملحقية الثقافية إلى دعم الطلاب والباحثين من خلال تقديم خدمات تعليمية وأكاديمية متكاملة، وتعزيز التعاون بين المؤسسات التعليمية والثقافية لخلق بيئة تُشجّع على التميز والإبداع.
            </p>
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              تهدف الملحقية الثقافية إلى دعم الطلاب والباحثين من خلال تقديم خدمات تعليمية وأكاديمية متكاملة، وتعزيز التعاون بين المؤسسات التعليمية والثقافية لخلق بيئة تُشجّع على التميز والإبداع.
            </p>
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              تهدف الملحقية الثقافية إلى دعم الطلاب والباحثين من خلال تقديم خدمات تعليمية وأكاديمية متكاملة، وتعزيز التعاون بين المؤسسات التعليمية والثقافية لخلق بيئة تُشجّع على التميز والإبداع.
            </p>
          </div>
          <button className="sm:w-fit hover:text-white w-full px-3.5 py-2 border hover:bg-red-500 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
            <span className="px-1.5 hover:text-white text-sm font-medium leading-6 text-black">تواصل معنا</span>
          </button>
        </div>
        <img
          className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
          src="https://pagedone.io/asset/uploads/1717751272.png"
          alt="عن الملحقية الثقافية"
        />
      </div>
    </div>
  </section>
);
