import type { ReactNode } from "react";

export function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-950 shadow-sm dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-50">
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

