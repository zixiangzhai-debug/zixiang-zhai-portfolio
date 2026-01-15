import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, selectedSlugs } from "@/data/projects";

export default function HomePage() {
  const selected = projects.filter((p) => selectedSlugs.includes(p.slug));
  return (
    <>
      <div className="border-b border-zinc-200/70">
        <Container>
          <div className="py-14 sm:py-18">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Your Name
            </h1>
            <p className="mt-3 max-w-2xl text-base text-zinc-700">
              Architectural Designer. Replace this intro with your own positioning statement.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/works"
                className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white no-underline hover:bg-zinc-800"
              >
                View all projects
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-900 no-underline hover:border-zinc-400"
              >
                About + CV
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <Section title="Selected Works">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {selected.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </Section>

        <div className="pb-14">
          <div className="rounded-2xl border border-zinc-200/70 bg-white p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-zinc-950">Full portfolio</div>
                <div className="text-sm text-zinc-600">Browse all projects and additional works.</div>
              </div>
              <Link
                href="/works"
                className="mt-2 inline-flex w-fit rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-900 no-underline hover:border-zinc-400 sm:mt-0"
              >
                Go to Works
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
