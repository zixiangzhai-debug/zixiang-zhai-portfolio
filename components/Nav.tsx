import Link from "next/link";
import { Container } from "@/components/Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About + CV" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="no-underline">
            <span className="text-sm font-semibold tracking-wide">Zixiang Zhai</span>
          </Link>
          <nav className="flex items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-700 hover:text-zinc-950 no-underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
