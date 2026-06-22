"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
          <div className="max-w-md w-full border border-white/20 p-8 font-mono text-center">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">CRITICAL_FAILURE</h2>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              A critical system error has occurred. Please try again.
            </p>
            <button onClick={reset} className="cyber-btn-primary w-full">
              RESTART_SYSTEM
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
