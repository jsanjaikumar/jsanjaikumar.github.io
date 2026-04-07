import React from "react";

export default function ExperienceSection() {
  const experiences = [
    {
      id: "01",
      role: "Founder & Lead Engineer",
      company: "EdgeBase",
      metaLabel: "Status — Active",
      metaValue: "Focus — Product Systems",
    },
    {
      id: "02",
      role: "Independent",
      company: "FREELANCE",
      metaLabel: "Type — Independent",
      metaValue: "Focus — Web Systems, Saas & AI",
    },
    {
      id: "03",
      role: "Full-Stack Developer Intern",
      company: "Neuronest AI",
      metaLabel: "Nov 2025 - Jan 2026 — Internship(Onsite)",
      metaValue: "Focus — APIs & Business Logic, ERP, LMS, SaaS",
    },
  ];

  return (
    <section
      className="py-24 sm:py-28 md:py-40 bg-surface px-4 sm:px-6 md:px-12"
      id="archive"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12 md:mb-24 flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-end border-b border-outline-variant/20 pb-8 md:pb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black tracking-tighter">
            Experience
          </h2>
          <span className="font-label text-xs sm:text-sm uppercase tracking-widest text-outline">
            2025 - Present
          </span>
        </div>

        <div className="space-y-0">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group flex flex-col md:flex-row justify-between py-10 md:py-16 items-start md:items-center hover:bg-surface-container-low px-4 sm:px-6 md:px-8 transition-all rounded-lg gap-6 md:gap-0"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 items-start sm:items-center min-w-0">
                <span className="text-2xl font-label text-outline-variant group-hover:text-primary transition-colors">
                  {exp.id}
                </span>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-headline font-bold uppercase tracking-tight break-words">
                    {exp.company}
                  </h4>
                  <p className="text-sm sm:text-base text-on-surface-variant">
                    {exp.role}
                  </p>
                </div>
              </div>
              <div className="mt-2 md:mt-0 text-left md:text-right">
                <span className="font-label text-xs uppercase tracking-[0.2em] text-outline block mb-1">
                  {exp.metaLabel}
                </span>
                <p className="font-medium text-sm sm:text-base">
                  {exp.metaValue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
