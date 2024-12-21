import React from 'react';

const Speach: React.FC = () => (
  <section className="py-16 relative">
    <div className="w-full max-w-5xl px-4 md:px-5 lg:px-5 mx-auto">
      <div className="w-full flex flex-col items-center gap-8">
        <h2 className="text-gray-900 text-3xl font-bold text-center leading-normal">
          كلمة المستشار الثقافي
        </h2>
        <p className="text-gray-500 text-base font-normal leading-relaxed text-center">
          أرحب بكم في موقع الملحقية الثقافية، حيث نسعى إلى تقديم أفضل الخدمات للطلاب والباحثين، وتعزيز التعاون الثقافي بين الدول.
          هدفنا هو دعم التميز الأكاديمي والإبداعي وتوفير بيئة تعليمية محفزة تساهم في بناء مستقبل أفضل للجميع.
        </p>
        <p className="text-gray-500 text-base font-normal leading-relaxed text-center">
          نؤمن بأن التعليم هو المفتاح لتحقيق الطموحات ونسعى لأن نكون جزءاً من نجاحكم الأكاديمي والثقافي.
        </p>
      </div>
    </div>
  </section>
);

export default Speach;
