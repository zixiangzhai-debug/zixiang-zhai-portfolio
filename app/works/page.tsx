import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function WorksPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-2xl font-semibold text-zinc-950">Works</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          Replace this text with a short note about your portfolio, role, and interests.
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
