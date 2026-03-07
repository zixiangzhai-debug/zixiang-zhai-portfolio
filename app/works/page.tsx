import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function WorksPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-2xl font-semibold text-zinc-950">Works</h1>
        <p className="text-lg text-neutral-600 max-w-4xl">
          Selected academic and independent projects focusing on timber construction, structural systems, and architectural form.
        </p>
      </div>

      <Section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
