import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70">
      <Container>
        <div className="flex flex-col gap-2 py-10 text-sm text-zinc-600">
          <div>© {new Date().getFullYear()} Zixiang Zhai</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a className="hover:text-zinc-950 no-underline" href="mailto:your@email.com">Email</a>
            <a className="hover:text-zinc-950 no-underline" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-zinc-950 no-underline" href="#" target="_blank" rel="noreferrer">PDF Portfolio</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
