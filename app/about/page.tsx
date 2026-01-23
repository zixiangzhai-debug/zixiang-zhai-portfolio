import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function AboutPage() {
  const cvPath = "/cv/Zixiang_Zhai_CV.pdf";

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-2xl font-semibold text-zinc-950">About + CV</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          A short bio and a downloadable CV for professional applications.
        </p>
      </div>

      <Section title="Bio">
        <div className="max-w-3xl text-sm leading-6 text-zinc-700">
          <p>
            Replace this paragraph with a concise, role-oriented bio (architecture, structure, material systems,
            detailing, visualization, etc.). Keep it clear and factual.
          </p>
        </div>
      </Section>

      <Section title="CV">
        <div className="rounded-2xl border border-zinc-200/70 bg-white p-6">
          <div className="text-sm font-semibold text-zinc-950">Curriculum Vitae</div>

          <p className="mt-2 text-sm text-zinc-600">
            Put your CV PDF in{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5">/public/cv/</code> and name it{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5">Zixiang_Zhai_CV.pdf</code>.
            <br />
            Then it will be accessible at{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5">{cvPath}</code>.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white no-underline hover:bg-zinc-800"
            >
              Download CV (PDF)
            </a>

            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-700 hover:text-zinc-950"
            >
              View CV →
            </a>
          </div>
        </div>
      </Section>
    </Container>
  );
}

