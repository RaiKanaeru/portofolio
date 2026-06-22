"use client";

import { useMemo } from "react";

export default function ActivityHeatmap() {
  // Generate 52 weeks × 7 days of pseudo-random activity
  const data = useMemo(() => {
    const grid: number[][] = [];
    const pseudoRandom = (week: number, day: number) => {
      const seed = (week + 1) * 73856093 ^ (day + 1) * 19349663;
      const value = Math.sin(seed) * 10000;
      return value - Math.floor(value);
    };

    for (let week = 0; week < 52; week++) {
      const days: number[] = [];
      for (let day = 0; day < 7; day++) {
        const r = pseudoRandom(week, day);
        // More active in recent weeks
        const recency = week / 52;
        const threshold = 0.3 + recency * 0.3;
        if (r > threshold) {
          days.push(Math.ceil(r * 4));
        } else {
          days.push(0);
        }
      }
      grid.push(days);
    }
    return grid;
  }, []);

  const getColor = (level: number) => {
    switch (level) {
      case 0: return "rgba(255, 255, 255, 0.03)";
      case 1: return "rgba(255, 255, 255, 0.12)";
      case 2: return "rgba(255, 255, 255, 0.25)";
      case 3: return "rgba(255, 255, 255, 0.4)";
      case 4: return "rgba(255, 255, 255, 0.6)";
      default: return "rgba(255, 255, 255, 0.03)";
    }
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="overflow-x-auto">
      {/* Month labels */}
      <div className="flex gap-0 mb-1 ml-7">
        {months.map((m) => (
          <span key={m} className="text-[9px] font-bold text-[var(--dim)]" style={{ width: `${(52 / 12) * 13}px` }}>
            {m}
          </span>
        ))}
      </div>

      <div className="flex gap-0">
        {/* Day labels */}
        <div className="flex flex-col gap-[2px] mr-1 pt-0">
          {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
            <span key={i} className="text-[8px] font-bold text-[var(--dim)] h-[11px] flex items-center">
              {d}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="flex gap-[2px]">
          {data.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[2px]">
              {week.map((level, di) => (
                <div
                  key={di}
                  className="w-[11px] h-[11px] transition-colors hover:ring-1 hover:ring-[var(--accent-cyan)]"
                  style={{ background: getColor(level) }}
                  title={`Week ${wi + 1}, Day ${di + 1}: ${level} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 mt-3 ml-7">
        <span className="text-[9px] font-bold text-[var(--dim)]">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="w-[11px] h-[11px]"
            style={{ background: getColor(level) }}
          />
        ))}
        <span className="text-[9px] font-bold text-[var(--dim)]">More</span>
      </div>
    </div>
  );
}

