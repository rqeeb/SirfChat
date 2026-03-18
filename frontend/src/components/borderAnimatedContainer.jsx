function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full [background:linear-gradient(45deg,#e6dccb,#ddd1bf_50%,#e6dccb)_padding-box,conic-gradient(from_var(--border-angle),rgba(120,103,88,0.35)_80%,#d65a38_86%,#ef8b63_90%,#d65a38_94%,rgba(120,103,88,0.35))_border-box] rounded-2xl border border-transparent animate-border flex overflow-hidden">
      {children}
    </div>
  );
}
export default BorderAnimatedContainer;
