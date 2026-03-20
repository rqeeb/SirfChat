function PageLoader() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-[#f3eadf] overflow-hidden">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(110,95,80,0.12)_1px,transparent_1px),linear-gradient
      (to_bottom,rgba(110,95,80,0.06)_1px,transparent_1px)] bg-[size:22px_22px]"
      />

      <div className="absolute w-72 h-72 bg-[#d65a38]/20 blur-3xl rounded-full" />
      <div className="relative w-64 h-1 bg-[#d8cbb8] overflow-hidden rounded-full">
        <div className="absolute h-full w-1/3 bg-[#d65a38] animate-slide" />
      </div>

      <p className="absolute bottom-32 text-[#7a6d62] text-lg tracking-wider font-medium">
        initializing...
      </p>
    </div>
  );
}

export default PageLoader;
