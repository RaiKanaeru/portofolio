"use client";

import dynamic from "next/dynamic";

const GlitchAvatar = dynamic(() => import("@/components/GlitchAvatar"), {
  ssr: false,
  loading: () => <div style={{ width: 280, height: 320 }} aria-hidden="true" />,
});

export default GlitchAvatar;