"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="max-w-md w-full border border-white/20 p-8 font-mono text-center">
        <h2 className="text-2xl font-bold mb-4 tracking-tight">SYSTEM_ERROR</h2>
        <p className="text-sm text-white/60 mb-6 leading-relaxed">
          Something went wrong. The system encountered an unexpected error.
        </p>
        <button onClick={reset} className="cyber-btn-primary w-full">
          REINITIALIZE
        </button>
      </div>
    </div>
  );
}
