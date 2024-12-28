const Loading = () => {
  const colors = ["bg-red-500", "bg-white", "bg-black"];

  return (
    <div dir="rtl" className="flex items-center justify-center gap-4 min-h-screen">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-10 h-10 rounded-full animate-spin border-4 border-t-transparent ${color}`}
        ></div>
      ))}
    </div>
  );
};

export default Loading;
