const Registration = () => {
  return (
    <div className="mb-6 p-6 bg-white shadow-md rounded-lg w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">التسجيل في الملحقية</h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        يرجى ملء النموذج التالي لتسجيل بياناتك لدى الملحقية الثقافية.
      </p>
      <div className="w-full overflow-hidden rounded-lg">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSemywkmMs0GSmqmZ3BZtlRJBOljyNjGt5V294EEQJa3lqjw3A/viewform?usp=header"
          width="100%"
          height="600"
          frameBorder="0"
          title="Registration form"
          className="w-full"
        >
          جارٍ التحميل…
        </iframe>
      </div>
    </div>
  );
};

export default Registration;
