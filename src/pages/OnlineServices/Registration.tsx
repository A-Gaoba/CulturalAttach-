const Registration = () => {
  return (
		<div className="mb-6 p-6 bg-white shadow-md rounded-lg w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
			<h3 className="text-xl font-bold text-gray-800 mb-4">التسجيل في الملحقية</h3>
			<p className="text-gray-600 leading-relaxed mb-4">
				للطلبة الدارسين في روسيا الاتحادية و رابطة الدول المستقلة, يرجى التسجيل في هذا الرابط!
			</p>
			<div className="w-full overflow-hidden rounded-lg">
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSemywkmMs0GSmqmZ3BZtlRJBOljyNjGt5V294EEQJa3lqjw3A/viewform"
					className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
				>
					قم بالتسجيل الان
				</a>
			</div>
		</div>
  );
};

export default Registration;
