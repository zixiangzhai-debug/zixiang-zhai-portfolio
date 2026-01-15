import type { Project } from "@/data/projects";

export function ProjectMeta({ p }: { p: Project }) {
  const items: Array<[string, string | undefined]> = [
    ["Year", p.year],
    ["Location", p.location],
    ["Type", p.type],
    ["Materials", p.materials],
    ["Role", p.role]
  ];

  return (
    <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-zinc-200/70 bg-white p-5 sm:grid-cols-3">
      {items
        .filter(([, v]) => v && v !== "—")
        .map(([k, v]) => (
          <div key={k}>
            <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">{k}</dt>
            <dd className="mt-1 text-sm text-zinc-900">{v}</dd>
          </div>
        ))}
    </dl>
  );
}
