import { ReactNode } from "react";

export function Section({
  title,
  children
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-10 sm:py-12">
      {title ? (
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-zinc-950">{title}</h2>
        </div>
      ) : null}
      {children}
    </section>
  );
}
