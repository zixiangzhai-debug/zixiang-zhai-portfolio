import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectMeta } from "@/components/ProjectMeta";
import { projects, type ProjectImage } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  // Build a single continuous image sequence: cover + gallery (01..)
  const cover: ProjectImage | null = p.coverImage
    ? { src: p.coverImage, alt: `${p.title} – cover`, caption: "Cover" }
    : null;

  const gallery = p.gallery ?? [];
  const images: ProjectImage[] = cover ? [cover, ...gallery] : gallery;

  return (
    <Container>
      <div className="py-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">{p.title}</h1>
          {p.subtitle ? <p className="text-sm text-zinc-600">{p.subtitle}</p> : null}
        </div>

        <div className="mt-6">
          <ProjectMeta p={p} />
        </div>
      </div>

      <Section title="Overview">
        {/* Make Overview and Images share the same content column */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* left gutter / align with section title rhythm on desktop */}
          <div className="hidden md:block md:col-span-2" />

          {/* content column (this width will match Images column) */}
          <div className="md:col-span-8">
            <div className="prose prose-zinc text-sm leading-7">
              <p>
                {p.summary ??
                  "Replace this section with your project narrative. You can add drawings, diagrams, and images below."}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Images">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="hidden md:block md:col-span-2" />

          <div className="md:col-span-8">
            {images.length ? (
              <div className="mt-2 space-y-8">
                {images.map((img, i) => (
                  <figure key={img.src} className="space-y-3">
                    <div className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-white">
                      <Image
                        src={img.src}
                        alt={img.alt || `${p.title} – image ${i + 1}`}
                        width={2400}
                        height={1600}
                        className="h-auto w-full"
                        priority={i === 0} // first image (cover) loads faster
                      />
                    </div>

                    {img.caption ? <figcaption className="text-sm text-zinc-600">{img.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="mt-2 rounded-2xl border border-zinc-200/70 bg-white p-5 text-sm text-zinc-600">
                No images yet. Put images in{" "}
                <code className="rounded bg-zinc-100 px-1 py-0.5">/public/projects/{p.slug}/</code> and reference them
                in <code className="rounded bg-zinc-100 px-1 py-0.5">data/projects.ts</code>.
              </div>
            )}
          </div>
        </div>
      </Section>

      <div className="pb-14 flex items-center justify-between gap-3">
        {prev ? (
          <Link className="text-sm text-zinc-700 hover:text-zinc-950 no-underline" href={`/works/${prev.slug}`}>
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link className="text-sm text-zinc-700 hover:text-zinc-950 no-underline" href={`/works/${next.slug}`}>
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </Container>
  );
}







