import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function AboutPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-2xl font-semibold text-zinc-950">About + CV</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          Replace this page with your bio, skills, software stack, and a CV download link.
        </p>
      </div>

      <Section title="Bio">
        <div className="max-w-3xl text-sm leading-6 text-zinc-700">
          <p>
            Write a concise, professional paragraph here. Keep it factual and role-oriented (architecture, structure,
            detailing, visualization, etc.).
          </p>
        </div>
      </Section>

      <Section title="CV">
        <div className="rounded-2xl border border-zinc-200/70 bg-white p-6">
          <div className="text-sm font-semibold text-zinc-950">Download CV</div>
          <p className="mt-2 text-sm text-zinc-600">
            Put your PDF in <code className="rounded bg-zinc-100 px-1 py-0.5">/public</code> (e.g.{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5">/cv.pdf</code>) and link it here.
          </p>
          <a
            href="/cv.pdf"
            className="mt-4 inline-flex rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white no-underline hover:bg-zinc-800"
          >
            Download PDF
          </a>
        </div>
      </Section>
    </Container>
  );
}
