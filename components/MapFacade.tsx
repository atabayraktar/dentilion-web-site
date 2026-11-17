import { site } from "@/content/site";

export default function MapFacade({ title, directions }: { title: string; directions: string }) {
  return (
    <div>
      <iframe
        title={title}
        src={site.mapEmbed}
        className="h-80 w-full border border-white/20 bg-white/5 sm:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={site.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center rounded-full bg-aqua px-6 font-semibold text-stage"
      >
        {directions}
      </a>
    </div>
  );
}
