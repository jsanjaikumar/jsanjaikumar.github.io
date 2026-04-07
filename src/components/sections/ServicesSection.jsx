import React from "react";
import office_setup from "../../asset/office_setup.webp";

export default function ServicesSection() {
  return (
    <section className="py-40 bg-surface-container px-12" id="services">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-center font-headline text-5xl font-black mb-24 tracking-tighter">
          The Craft &amp; Capability
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface p-16 rounded-lg flex flex-col justify-between min-h-[400px]">
            <div>
              <span
                className="material-symbols-outlined text-4xl text-primary mb-8 block"
                data-icon="web"
              >
                web
              </span>
              <h3 className="text-4xl font-headline font-bold mb-6">
                Web & AI Systems Development
              </h3>
              <p className="text-on-surface-variant text-xl leading-relaxed max-w-xl">
                Engineering web platforms that streamline operations and improve
                business workflows. Combining structured systems with
                intelligent automation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-12">
              <span className="px-4 py-2 bg-surface-container-high rounded-full font-label text-[10px] uppercase tracking-widest">
                Web Systems
              </span>
              <span className="px-4 py-2 bg-surface-container-high rounded-full font-label text-[10px] uppercase tracking-widest">
                SaaS Platforms
              </span>
              <span className="px-4 py-2 bg-surface-container-high rounded-full font-label text-[10px] uppercase tracking-widest">
                Business Automation
              </span>
              <span className="px-4 py-2 bg-surface-container-high rounded-full font-label text-[10px] uppercase tracking-widest">
                AI
              </span>
            </div>
          </div>

          <div className="bg-primary text-on-primary p-12 rounded-lg flex flex-col justify-center">
            <h4 className="font-label text-xs uppercase tracking-[0.3em] opacity-60 mb-8">
              Technical Stack
            </h4>
            <ul className="space-y-4 font-headline text-2xl font-light">
              <li className="flex justify-between border-b border-on-primary/10 pb-2">
                <span>Python, Javascript</span>{" "}
                <span
                  className="material-symbols-outlined"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
              </li>
              <li className="flex justify-between border-b border-on-primary/10 pb-2">
                <span>React / Next.js</span>{" "}
                <span
                  className="material-symbols-outlined"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
              </li>
              <li className="flex justify-between border-b border-on-primary/10 pb-2">
                <span>Node.js / Fast API</span>{" "}
                <span
                  className="material-symbols-outlined"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
              </li>
              <li className="flex justify-between border-b border-on-primary/10 pb-2">
                <span>MongoDB / Mysql</span>{" "}
                <span
                  className="material-symbols-outlined"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
              </li>
              <li className="flex justify-between border-b border-on-primary/10 pb-2">
                <span>AWS / Vercel / GitHub</span>{" "}
                <span
                  className="material-symbols-outlined"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-surface-container-highest p-12 rounded-lg">
            <h3 className="text-4xl font-headline font-bold mb-6">
              Brand & Media Execution{" "}
            </h3>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-xl">
              {/* Extending beyond code — building business visibility through
              content, campaigns, and digital presence. Delivered through
              BaseEdge.. */}
              Beyond development — supporting business growth through content,
              campaigns,ads and digital presence. Powered by BaseEdge.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-surface px-4 py-3 rounded-lg border border-outline-variant/10">
                <span class="material-symbols-outlined">digital_wellbeing</span>
                <span className="font-label text-sm">Media Handling</span>
              </div>
              <div className="flex items-center gap-2 bg-surface px-4 py-3 rounded-lg border border-outline-variant/10">
                <span class="material-symbols-outlined">web_stories</span>
                <span className="font-label text-sm">Content Creation</span>
              </div>
              <div className="flex items-center gap-2 bg-surface px-4 py-3 rounded-lg border border-outline-variant/10">
                <span class="material-symbols-outlined">ads_click</span>
                <span className="font-label text-sm">Ad Shoots</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 relative overflow-hidden rounded-lg min-h-[400px]">
            <img
              alt="Coding Setup"
              className="absolute inset-0 w-full h-full object-cover"
              // src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgYQd8j2XaH3wnHt67OHcB6kDkoK5MsgGcTBgMgRPS7GlsZdmVGXsdXDTiMB7NkCufU-pR4VAq9LwzvKSnFn6rKlQLZp9qxAaGxYOu0WROmuS0kAHJLRR1zgU9-mGIwo0JVi7pE49H8zhKqGeBtBnToOPbaPdAsbtTJa1WArbgOvnGosKJOLwwCd2DSfsRIHIrrwoSn6NIv2TG9nx4YQwcCdRpYO1gkgzofixLwTa4eawgdWH1I-uIb9dTw9KRBZmd4mErtMHiypQ"
              src={office_setup}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex items-end p-12">
              <div className="text-on-primary">
                <p className="font-label text-xs uppercase tracking-[0.4em] mb-4">
                  The Vision
                </p>
                <h3 className="text-3xl font-headline font-bold">
                  Turning binary into brand equity.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
