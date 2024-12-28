const Registration = () => {
  return (
    <div className="mb-6 p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">التسجيل في الملحقية</h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        يرجى ملء النموذج التالي لتسجيل بياناتك لدى الملحقية الثقافية.
      </p>
      <div className="w-full overflow-hidden rounded-lg">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfLH2WsXVXUUcu3jJw9eeMCdY8wSBm9vXWSkLFrDJWr-2lFYA/viewform?embedded=true"
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
