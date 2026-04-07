import React from "react";

export default function AboutSection() {
  return (
    <section
      className="py-24 sm:py-28 md:py-40 bg-surface-container-low px-4 sm:px-6 md:px-12"
      id="about"
    >
      <div className="max-w-[1600px] mx-auto editorial-grid">
        <div className="col-span-12 lg:col-start-2 lg:col-span-4 mb-12 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold tracking-tight mb-8 md:mb-12">
            Built With Intent
          </h2>
          <div className="space-y-5 md:space-y-6 text-on-surface-variant text-base md:text-lg leading-relaxed max-w-sm">
            <p>
              I build systems with intent — not assumptions. Components are
              designed to scale. APIs are structured for clarity. Decisions are
              made with long-term impact in mind.
            </p>
            <p>
              The result isn’t just a working product — it’s a system that holds
              under pressure.
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-start-7 lg:col-span-5 flex flex-col gap-8 md:gap-12">
          <div className="bg-surface rounded-lg border-l-4 border-primary group hover:bg-surface-container-high transition-colors duration-500 p-6 sm:p-8 md:p-12 border-t border-outline-variant/30">
            <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">
              <div className="min-w-[120px]">
                <span className="font-label text-[10px] uppercase tracking-[0.4em] text-outline opacity-60 group-hover:opacity-100 transition-opacity">
                  Current Status
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-light tracking-tight mb-4 text-primary leading-tight">
                  Full-Stack <span className="font-extrabold">Developer</span>
                </h3>
                <p className="text-on-surface-variant font-body text-sm sm:text-base leading-relaxed max-w-md">
                  Lead Freelancer at BaseEdge, focused on performance, clarity,
                  and scale.Now pushing into AI agents that operate beyond
                  predefined logic.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-12 border-t border-outline-variant/30 flex flex-col md:flex-row gap-5 md:gap-8 items-start group hover:bg-surface-container-high transition-colors duration-500">
            <div className="min-w-[120px]">
              <span className="font-label text-[10px] uppercase tracking-[0.4em] text-outline opacity-60 group-hover:opacity-100 transition-opacity">
                Education
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-light tracking-tight mb-4 text-primary leading-tight">
                B.Tech{" "}
                <span className="font-extrabold">
                  Information Technology-2025
                </span>
              </h3>
              <p className="text-on-surface-variant font-body text-sm sm:text-base leading-relaxed max-w-md">
                Strong foundation in system design, data handling, and
                application architecture. More importantly — applied through
                building real products, not just academic exercises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
