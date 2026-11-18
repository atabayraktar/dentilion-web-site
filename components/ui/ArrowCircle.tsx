/** The site's only round arrow. Put it inside a link/button; hovering that parent turns the arrow (see .arrow-btn). */
export default function ArrowCircle({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`arrow-btn ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17 17 7M8.5 7H17v8.5" />
      </svg>
    </span>
  );
}
