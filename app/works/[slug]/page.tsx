import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectMeta } from "@/components/ProjectMeta";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <Container>
      <div className="py-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">{p.title}</h1>
          {p.subtitle ? <p className="text-sm text-zinc-600">{p.subtitle}</p> : null}
        </div>

        <div className="mt-8 relative aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-100">
          <Image
            src={p.coverImage ?? "/images/placeholders/cover-1.svg"}
            alt={p.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-6">
          <ProjectMeta p={p} />
        </div>
      </div>

      <Section title="Overview">
        <div className="max-w-3xl text-sm leading-6 text-zinc-700">
          <p>
            {p.summary ?? "Replace this section with your project narrative. You can add drawings, diagrams, and images below."}
          </p>
        </div>
      </Section>

      <Section title="Content blocks">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200/70 bg-white p-5">
              <div className="text-sm font-semibold text-zinc-950">Block {i + 1}</div>
              <div className="mt-2 text-sm text-zinc-600">
                Replace these blocks with your drawings, diagrams, captions, and details.
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-200/70 bg-white p-5">
          <div className="text-sm font-semibold text-zinc-950">Add images</div>
          <div className="mt-2 text-sm text-zinc-600">
            Put images in <code className="rounded bg-zinc-100 px-1 py-0.5">/public/images/…</code> and reference them in{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5">data/projects.ts</code>.
          </div>
        </div>
      </Section>

      <div className="pb-14 flex items-center justify-between gap-3">
        {prev ? (
          <Link className="text-sm text-zinc-700 hover:text-zinc-950 no-underline" href={`/works/${prev.slug}`}>
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link className="text-sm text-zinc-700 hover:text-zinc-950 no-underline" href={`/works/${next.slug}`}>
            {next.title} →
          </Link>
        ) : <span />}
      </div>
    </Container>
  );
}
