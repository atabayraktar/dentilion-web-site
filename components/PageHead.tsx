import Image from "next/image";
import type { ReactNode } from "react";

export default function PageHead({ label, title, children, image }: { label: string; title: string; children?: ReactNode; image?: { src: string; alt: string } }) {
  return (
    <div className="stage relative isolate overflow-hidden">
      {image && (
        <>
          <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stage via-stage/75 to-stage/50" />
        </>
      )}
      <div className="wrap pb-16 pt-20 md:pb-24 md:pt-32">
        <p className="label text-aqua">{label}</p>
        <h1 className="mt-4 max-w-4xl text-[clamp(2.25rem,8vw,5.5rem)]">{title}</h1>
        {children && <p className="mt-6 max-w-2xl text-stage-muted md:text-lg">{children}</p>}
      </div>
    </div>
  );
}
