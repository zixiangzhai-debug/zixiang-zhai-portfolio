import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function ContactPage() {
  const email = "zackzhai0413@gmail.com";
  const linkedin =
    "https://www.linkedin.com/in/%E5%AD%90%E7%BF%94-%E7%BF%9F-49453a392/";
  const pdfPortfolio = "/portfolio/Zixiang_Zhai_Portfolio.pdf";

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-2xl font-semibold text-zinc-950">Contact</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          For professional inquiries, collaborations, or further information,
          please feel free to get in touch using the details below.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Email */}
        <Section title="Email">
          <div className="rounded-2xl border border-zinc-200/70 bg-white p-6">
            <a
              href={`mailto:${email}`}
              className="text-sm text-zinc-900 no-underline hover:underline"
            >
              {email}
            </a>
          </div>
        </Section>

        {/* Links */}
        <Section title="Links">
          <div className="rounded-2xl border border-zinc-200/70 bg-white p-6">
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 no-underline hover:underline"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href={pdfPortfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 no-underline hover:underline"
                >
                  Portfolio PDF
                </a>
              </li>
            </ul>
          </div>
        </Section>
      </div>

      {/* Footer style contact repeat (optional but good practice) */}
      <div className="mt-20 text-sm text-zinc-500">
        © {new Date().getFullYear()} Zixiang Zhai
      </div>
    </Container>
  );
}

