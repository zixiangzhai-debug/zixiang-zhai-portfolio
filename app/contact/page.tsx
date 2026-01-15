import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function ContactPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-2xl font-semibold text-zinc-950">Contact</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          Replace with your email and links. Keep it simple.
        </p>
      </div>

      <Section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200/70 bg-white p-6">
            <div className="text-sm font-semibold text-zinc-950">Email</div>
            <a className="mt-2 block text-sm text-zinc-700 no-underline hover:text-zinc-950" href="mailto:your@email.com">
              your@email.com
            </a>
          </div>
          <div className="rounded-2xl border border-zinc-200/70 bg-white p-6">
            <div className="text-sm font-semibold text-zinc-950">Links</div>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <a className="text-zinc-700 no-underline hover:text-zinc-950" href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="text-zinc-700 no-underline hover:text-zinc-950" href="#" target="_blank" rel="noreferrer">
                GitHub (optional)
              </a>
              <a className="text-zinc-700 no-underline hover:text-zinc-950" href="/cv.pdf">
                Portfolio PDF
              </a>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
