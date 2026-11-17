import { site } from "@/content/site";

/** Embedded map recoloured to the site palette; the whole map links to Google Maps in a new tab. */
export default function MapFacade({ title, className = "" }: { title: string; className?: string }) {
  return (
    <div className={`group relative isolate min-h-72 overflow-hidden rounded-3xl border border-white/15 transition-colors duration-300 hover:border-aqua ${className}`}>
      <iframe
        title={title}
        src={site.mapEmbed}
        tabIndex={-1}
        className="pointer-events-none absolute inset-0 h-full w-full [filter:invert(0.9)_hue-rotate(205deg)_saturate(1.1)_brightness(0.85)_contrast(1.05)]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-accent/45 mix-blend-color" />
      <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" aria-label={title} className="absolute inset-0 z-10 transition-colors duration-300 group-hover:bg-aqua/5" />
    </div>
  );
}
