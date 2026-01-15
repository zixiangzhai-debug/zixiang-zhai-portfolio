import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/works/${p.slug}`}
      className="group block rounded-2xl border border-zinc-200/70 bg-white p-4 no-underline hover:border-zinc-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-100">
        <Image
          src={p.coverImage ?? "/images/placeholders/cover-1.svg"}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          priority={false}
        />
      </div>
      <div className="mt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug text-zinc-950">{p.title}</h3>
          {p.year ? <span className="text-sm text-zinc-500">{p.year}</span> : null}
        </div>
        {p.subtitle ? <p className="mt-1 text-sm text-zinc-600">{p.subtitle}</p> : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {(p.tags ?? []).slice(0, 4).map((t) => (
            <span key={t} className="rounded-full border border-zinc-200/70 px-2 py-0.5 text-xs text-zinc-600">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
