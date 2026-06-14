import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1296px] px-5 py-16 md:px-10 xl:px-0">
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        {/* Glitch 404 */}
        <div className="relative mb-8">
          <h1
            className="heading-font text-[120px] md:text-[200px] font-bold leading-none text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(34, 211, 238, 0.3)",
            }}
          >
            404
          </h1>
          <h1
            className="heading-font text-[120px] md:text-[200px] font-bold leading-none absolute inset-0 cyber-glitch"
            data-text="404"
            style={{ color: "rgba(34, 211, 238, 0.15)" }}
          >
            404
          </h1>
        </div>

        {/* Terminal error message */}
        <div className="terminal-card p-6 md:p-8 max-w-lg w-full mb-10">
          <div className="font-mono text-[12px] text-left space-y-2">
            <p><span className="text-[var(--accent-cyan)]">$</span> navigate --to /unknown</p>
            <p className="text-red-400">ERROR: Route not found in filesystem</p>
            <p className="text-[var(--muted)]">The requested page does not exist or has been relocated.</p>
            <p className="text-[var(--muted)]">Check the URL or return to a known route.</p>
            <p className="mt-4"><span className="text-[var(--accent-cyan)]">$</span> <span className="cursor-blink">_</span></p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="cyber-btn-primary">
            RETURN_HOME
          </Link>
          <Link href="/projects" className="cyber-btn-secondary">
            VIEW_PROJECTS
          </Link>
        </div>

        {/* Hint */}
        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--dim)]">
          TIP: PRESS CTRL+K TO OPEN COMMAND PALETTE
        </p>
      </div>
    </div>
  );
}
