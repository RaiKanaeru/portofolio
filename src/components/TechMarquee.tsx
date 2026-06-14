"use client";

const techs1 = [
  "NEXT.JS", "LARAVEL", "TYPESCRIPT", "GO", "FLUTTER", "FIREBASE", "POSTGRESQL",
  "MYSQL", "REST_API", "WEBSOCKET", "MQTT", "ESP32",
];

const techs2 = [
  "REACT", "NESTJS", "TAILWIND", "DOCKER", "GIT", "VERCEL", "DART", "IOT",
  "QR_CODE", "FIRESTORE", "LINUX", "NGINX"
];

function MarqueeItem({ tech }: { tech: string }) {
  return (
    <span className="mx-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--dim)] hover:text-[var(--accent-cyan)] transition-colors duration-300 cursor-default group">
      <span
        className="h-1 w-1 rounded-full bg-[var(--dim)] group-hover:bg-[var(--accent-cyan)] group-hover:shadow-[0_0_6px_var(--accent-cyan)] transition-all duration-300"
        style={{ display: "inline-block" }}
      />
      {tech}
    </span>
  );
}

export default function TechMarquee() {
  const items1 = [...techs1, ...techs1, ...techs1];
  const items2 = [...techs2, ...techs2, ...techs2];

  return (
    <div className="relative overflow-hidden border-y border-[var(--line-subtle)] py-6 flex flex-col gap-6">
      {/* Gradient masks on edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--canvas), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, var(--canvas), transparent)" }}
      />

      {/* Moving Left */}
      <div className="flex animate-marquee whitespace-nowrap">
        {items1.map((tech, i) => (
          <MarqueeItem key={`row1-${tech}-${i}`} tech={tech} />
        ))}
      </div>
      
      {/* Moving Right */}
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {items2.map((tech, i) => (
          <MarqueeItem key={`row2-${tech}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

