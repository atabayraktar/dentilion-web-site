import type { SVGProps } from "react";

const base = {
  width: 20,
  height: 20,
  className: "shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);
/** Brand WhatsApp logo (green disc, white bubble + handset). The only WhatsApp mark on the site. */
export const WhatsAppIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} stroke="none" {...p}>
    <circle cx="12" cy="12" r="12" fill="#25D366" />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinejoin="round"
      d="M6.2 17.8l.9-3A6 6 0 1 1 9.2 16.9l-3 .9z"
    />
    <path
      fill="#fff"
      d="M9.6 8.9c-.3.7.2 2 1.4 3.2 1.2 1.2 2.5 1.8 3.2 1.5l.7-.7c.1-.2.1-.4-.1-.5l-1-.5c-.2-.1-.4 0-.5.1l-.3.4c-.7-.3-1.4-1-1.7-1.7l.4-.3c.1-.1.2-.3.1-.5l-.5-1c-.1-.2-.3-.2-.5-.1z"
    />
  </svg>
);
export const MailIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M3 6h18v12H3zM3 7l9 7 9-7" />
  </svg>
);
export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
  </svg>
);
export const ArrowIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ChevronIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
export const CalendarIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 7h16v13H4zM4 11h16M8 3v4M16 3v4" />
  </svg>
);

export const SunMoonIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} strokeWidth={2} {...p}>
    <circle cx="12" cy="12" r="4" pathLength={1} className="theme-sun" />
    <path
      d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      pathLength={1}
      className="theme-sun"
    />
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" pathLength={1} className="theme-moon" />
  </svg>
);

const flags = {
  tr: (
    <>
      <rect width="24" height="24" fill="#e30a17" />
      <circle cx="9.5" cy="12" r="4.5" fill="#fff" />
      <circle cx="10.8" cy="12" r="3.6" fill="#e30a17" />
      <path fill="#fff" d="M15 9.8l.53 1.47 1.56.05-1.23.96.43 1.5L15 12.9l-1.29.88.43-1.5-1.23-.96 1.56-.05z" />
    </>
  ),
  en: (
    <>
      <rect width="24" height="24" fill="#012169" />
      <path d="M0 0l24 24M24 0L0 24" stroke="#fff" strokeWidth="4.5" />
      <path d="M0 0l24 24M24 0L0 24" stroke="#c8102e" strokeWidth="1.8" />
      <path d="M12 0v24M0 12h24" stroke="#fff" strokeWidth="7" />
      <path d="M12 0v24M0 12h24" stroke="#c8102e" strokeWidth="4" />
    </>
  ),
  de: (
    <>
      <rect width="24" height="8" fill="#111" />
      <rect y="8" width="24" height="8" fill="#dd0000" />
      <rect y="16" width="24" height="8" fill="#ffce00" />
    </>
  ),
};
export const FlagIcon = ({ l, ...p }: { l: keyof typeof flags } & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden className="shrink-0 rounded-full" {...p}>
    {flags[l]}
  </svg>
);
