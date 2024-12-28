import React, { useState } from 'react';

const Speach: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="p-4 relative">

      <div className="py-16 w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full max-w-5xl">
          <div className="w-full flex flex-col items-start gap-4">
            <h2 className="text-gray-900 text-3xl font-bold text-start leading-normal">
              كلمة المستشار الثقافي
            </h2>
            <p className="text-gray-500 text-base font-normal leading-relaxed text-start">
              أرحب بكم في موقع الملحقية الثقافية، حيث نسعى إلى تقديم أفضل الخدمات للطلاب والباحثين، وتعزيز التعاون الثقافي بين الدول.
              هدفنا هو دعم التميز الأكاديمي والإبداعي وتوفير بيئة تعليمية محفزة تساهم في بناء مستقبل أفضل للجميع.
              {isExpanded && (
                <>
                  نسعى أيضًا إلى بناء جسور من التواصل الثقافي مع مختلف الجهات لتحقيق الأهداف المشتركة وتعزيز الحوار الثقافي.
                  تلتزم الملحقية بتوفير كافة أشكال الدعم للطلاب من خلال تقديم المشورة الأكاديمية وتسهيل التواصل مع الجامعات والمؤسسات.
                </>
              )}
            </p>
            <button
              onClick={toggleReadMore}
              className="text-blue-500 font-medium underline"
            >
              {isExpanded ? 'قراءة أقل' : 'قراءة المزيد'}
            </button>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Speach;
