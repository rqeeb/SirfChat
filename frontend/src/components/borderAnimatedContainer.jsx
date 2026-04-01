function BorderAnimatedContainer({ children }) {
  return (
    <div
      className="w-full h-full rounded-2xl border border-transparent animate-border flex overflow-hidden
      [background:linear-gradient(45deg,#e6dccb,#ddd1bf_50%,#e6dccb)_padding-box,conic-gradient(from_var(--border-angle),rgba(120,103,88,0.35)_80%,#d65a38_86%,#ef8b63_90%,#d65a38_94%,rgba(120,103,88,0.35))_border-box]
      shadow-[0_0_30px_rgba(214,90,56,0.18),0_20px_60px_rgba(0,0,0,0.12)]"
    >
      {children}
    </div>
  );
}

export default BorderAnimatedContainer;
