const مجلة_ثقافية = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">المجلة الثقافية</h3>
      <p className="p-2">اقرأ أحدث إصدار من المجلة الثقافية.</p>
      <iframe
        src="/book.pdf"
        width="100%"
        height="600px"
        title="المجلة الثقافية"
      />
    </div>
  );
};

export default مجلة_ثقافية;
