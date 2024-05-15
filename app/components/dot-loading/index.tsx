const DotLoading = () => (
  <div className="flex justify-center items-center py-6">
    <div className="flex">
      {[...Array(5)].map((_e, i) => (
        <div
          key={i}
          className="w-5 h-5 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-3 animate-bounce"
        />
      ))}
    </div>
  </div>
);

export default DotLoading;
