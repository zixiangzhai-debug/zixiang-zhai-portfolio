import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function AboutPage() {
  const cvPath = "/cv/Zixiang_Zhai_CV.pdf";

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-2xl font-semibold text-zinc-950">About + CV</h1>

        {/* ✅ 改这里：max-w-2xl -> max-w-3xl，让它和下面正文对齐 */}
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">
          A concise overview of my academic background, professional experience, and design interests, accompanied by a
          downloadable CV for professional applications.
        </p>
      </div>

      <Section title="Bio">
        <div className="max-w-3xl text-sm leading-7 text-zinc-700">
          <p>
            I am an architectural designer with a strong focus on structural logic, material systems, and adaptive
            architectural strategies. My academic background spans architectural education in China, the UK, and the
            United States, and I am currently pursuing a Master of Advanced Architectural Design at the University of
            California, Berkeley.
          </p>

          <p className="mt-4">
            My design work is grounded in the integration of structure, construction sequence, and spatial clarity,
            with particular interests in steel and timber systems, adaptive reuse, and modular architectural strategies.
            Through academic studios, professional practice, and research-based projects, I have developed a design
            approach that emphasizes precision, constructability, and the dialogue between existing conditions and new
            interventions.
          </p>
        </div>
      </Section>

      <Section title="Education">
        <div className="max-w-3xl text-sm leading-7 text-zinc-700">
          <p>
            <span className="font-medium text-zinc-950">
              Master of Advanced Architectural Design (MAAD)
            </span>
            , University of California, Berkeley{" "}
            <span className="text-zinc-600">— Expected June 2026</span>
          </p>

          <p className="mt-2">
            <span className="font-medium text-zinc-950">Bachelor of Architecture (Honors)</span>, Joint Program between
            Wuhan University and the University of Dundee
          </p>
        </div>
      </Section>

      <Section title="Professional Experience">
        <div className="max-w-3xl text-sm leading-7 text-zinc-700">
          <p>
            <span className="font-medium text-zinc-950">Architectural Intern</span>, Central South Architectural Design
            Institute <span className="text-zinc-600">— Wuhan, China</span>
          </p>

          <p className="mt-3">
            Contributed to civic, commercial, and large-scale infrastructure projects across multiple design phases.
            Supported design development, 3D modeling, visualization, and construction documentation, and assisted in
            the preparation of presentation materials for client milestones.
          </p>
        </div>
      </Section>

      <Section title="CV">
        <div className="rounded-2xl border border-zinc-200/70 bg-white p-6">
          <div className="text-sm font-semibold text-zinc-950">Curriculum Vitae</div>

          <p className="mt-2 text-sm text-zinc-600">
            The full CV is available as a downloadable PDF.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white no-underline hover:bg-zinc-800"
            >
              Download Full CV (PDF)
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



