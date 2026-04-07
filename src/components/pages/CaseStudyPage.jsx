import React from "react";
import { Link } from "react-router-dom";
import SmoothScrollWrapper from "../layout/SmoothScrollWrapper";
import TopNavBar from "../layout/TopNavBar";
import Footer from "../layout/Footer";
import metalBg from "../../asset/metal-bgg.webp";
import builtii from "../../asset/builtii.webp";
import devdudes from "../../asset/b-devdudes.webp";
import cinemaScout from "../../asset/b-cine3.webp";

const caseStudies = [
  {
    id: "builtii",
    number: "01",
    header: "CASE STUDY 01 — BUILTIIAI",
    title: "BuiltiiAI — Construction Intelligence Platform",
    overview:
      "BuiltiiAI is an AI-powered SaaS platform designed to process engineering documents and generate structured construction outputs.",
    problem:
      "Construction workflows rely on manual interpretation of CAD drawings and PDFs, leading to delays, errors, and inconsistent outputs.",
    approach:
      "Focused on automating document understanding and converting unstructured inputs into structured, usable data.",
    system: [
      "Built backend APIs for document processing pipelines",
      "Integrated AI services for structured data extraction",
      "Developed dashboards for uploads, outputs, and usage tracking",
      "Implemented admin controls for subscriptions and limits",
    ],
    outcome: [
      "Reduced manual effort in document analysis",
      "Improved consistency in BOQ generation",
      "Accelerated workflow efficiency",
    ],
    takeaway:
      "Automation is not about replacing work — it’s about making complex workflows predictable and scalable.",
    image: builtii,
    imageAlt: "BuiltiiAI project preview",
    accent: "from-amber-300/30 via-white/10 to-transparent",
  },
  {
    id: "devdudes",
    number: "02",
    header: "CASE STUDY 02 — DEVDUDES",
    title: "DevDudes — Developer Networking Platform",
    overview:
      "A real-time networking platform enabling developers to connect, interact, and communicate seamlessly.",
    problem:
      "Existing platforms lacked real-time interaction and meaningful engagement between developers.",
    approach:
      "Designed a system focused on real-time communication with scalable backend architecture.",
    system: [
      "Implemented real-time messaging using Socket.IO",
      "Built scalable backend with Node.js and MongoDB",
      "Added JWT-based authentication",
      "Optimized database queries for faster performance",
    ],
    outcome: [
      "Improved data retrieval speed (~35%)",
      "Enabled seamless real-time communication",
      "Supported scalable user interactions",
    ],
    takeaway:
      "Real-time systems aren’t just about speed — they’re about enabling meaningful interaction without friction.",
    image: devdudes,
    imageAlt: "DevDudes project preview",
    reverse: true,
    accent: "from-sky-300/30 via-white/10 to-transparent",
  },
  {
    id: "cinescout",
    number: "03",
    header: "CASE STUDY 03 — CINESCOUT",
    title: "CineScout — Movie Discovery Platform",
    overview:
      "A responsive web application built for fast, intuitive movie discovery using external APIs.",
    problem:
      "Many movie apps suffer from slow performance, redundant API calls, and poor user feedback.",
    approach:
      "Focused on optimizing data flow and improving user experience through efficient state management.",
    system: [
      "Integrated external APIs for movie data",
      "Used TanStack Query for caching and server-state management",
      "Implemented loading and error handling states",
      "Optimized API requests to reduce redundancy",
    ],
    outcome: [
      "Reduced redundant API calls (~35%)",
      "Improved responsiveness and reliability",
      "Delivered smoother browsing experience",
    ],
    takeaway:
      "Performance isn’t just technical — it directly shapes how users experience a product.",
    image: cinemaScout,
    imageAlt: "CineScout project preview",
    accent: "from-emerald-300/25 via-white/10 to-transparent",
  },
];

function ContentBlock({ title, text }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-black/25 p-6 md:p-7 backdrop-blur-md shadow-lg shadow-black/20">
      <p className="font-label text-[10px] uppercase tracking-[0.35em] text-white/45 mb-4">
        {title}
      </p>
      <p className="text-sm md:text-base leading-relaxed text-white/78">
        {text}
      </p>
    </article>
  );
}

function BulletList({ items }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li
          className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/78"
          key={item}
        >
          <span className="mt-1 h-2 w-2 rounded-full bg-white/70 shrink-0" />
          <span className="text-sm md:text-base leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyPage() {
  return (
    <SmoothScrollWrapper>
      <TopNavBar />
      <main className="relative isolate overflow-hidden text-on-surface">
        <div className="fixed inset-0 -z-30">
          <img
            alt="Metal background texture"
            className="h-full w-full object-cover"
            src={metalBg}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.75))]" />
        </div>

        <div className="fixed inset-0 -z-20 pointer-events-none opacity-45 mix-blend-screen">
          <img
            alt="Case study background art"
            className="h-full w-full object-cover"
            src={metalBg}
          />
        </div>

        <section className="px-6 md:px-12 pt-32 md:pt-36 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur-xl shadow-2xl shadow-black/25">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] items-end">
              <div>
                <span className="font-label text-[10px] md:text-xs uppercase tracking-[0.45em] text-white/60 block mb-5">
                  Case Study Archive
                </span>
                <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-8xl font-headline font-black tracking-tighter text-white leading-[0.88]">
                  Three projects, each broken into its own focused story.
                </h1>
              </div>

              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-white/72 max-w-xl">
                  From idea to implementation, each case study showcases
                  structured thinking, scalable systems, and performance-driven
                  development.
                </p>
                <div className="flex flex-wrap items-center gap-2 font-label text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/75">
                  {caseStudies.map((study, index) => (
                    <React.Fragment key={study.id}>
                      <a
                        className="inline-flex items-center rounded-full border border-white/15 bg-black/20 px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white"
                        href={`#${study.id}`}
                      >
                        {study.number}
                      </a>
                      {index < caseStudies.length - 1 ? (
                        <span className="text-white/35">/</span>
                      ) : null}
                    </React.Fragment>
                  ))}
                  <span className="mx-1 text-white/35">/</span>
                  <Link
                    className="inline-flex items-center rounded-full border border-white/15 bg-black/20 px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white"
                    to="/selected-works"
                  >
                    Back to Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {caseStudies.map((study) => (
          <section
            className="px-6 md:px-12 py-10 md:py-16"
            id={study.id}
            key={study.id}
          >
            <article className="max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 p-5 md:p-8 backdrop-blur-xl shadow-2xl shadow-black/25 overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div
                  className={`${study.reverse ? "lg:order-2" : ""} lg:col-span-5`}
                >
                  <div className="space-y-5">
                    <div className="rounded-[1.75rem] overflow-hidden border border-white/10 bg-black/20">
                      <div className="relative">
                        <img
                          alt={study.imageAlt}
                          className="aspect-[4/5] w-full object-cover"
                          src={study.image}
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${study.accent} to-transparent`}
                        />
                        <div className="absolute left-0 right-0 bottom-0 p-5 md:p-6">
                          <p className="font-label text-[10px] uppercase tracking-[0.35em] text-white/65 mb-2">
                            {study.header}
                          </p>
                          {/* <h2 className="text-2xl md:text-4xl font-headline font-black tracking-tight text-white leading-tight max-w-sm">
                            {study.title}
                          </h2> */}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                        <p className="font-label text-[10px] uppercase tracking-[0.35em] text-white/45 mb-2">
                          Number
                        </p>
                        <p className="text-2xl font-headline font-bold text-white">
                          {study.number}
                        </p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                        <p className="font-label text-[10px] uppercase tracking-[0.35em] text-white/45 mb-2">
                          Focus
                        </p>
                        <p className="text-sm md:text-base font-semibold text-white/85 leading-snug">
                          {study.title.split("—")[1].trim()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${study.reverse ? "lg:order-1" : ""} lg:col-span-7`}
                >
                  <div className="space-y-8">
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-[0.45em] text-white/55 mb-3">
                        {study.header}
                      </p>
                      <h3 className="text-3xl md:text-5xl font-headline font-black tracking-tight text-white max-w-4xl leading-[1.05]">
                        {study.title}
                      </h3>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <ContentBlock title="Overview" text={study.overview} />
                      <ContentBlock title="The Problem" text={study.problem} />
                      <ContentBlock
                        title="The Approach"
                        text={study.approach}
                      />
                      <ContentBlock
                        title="Key Takeaway"
                        text={study.takeaway}
                      />
                    </div>

                    <div className="grid gap-6 xl:grid-cols-2">
                      <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 md:p-7">
                        <p className="font-label text-[10px] uppercase tracking-[0.35em] text-white/45 mb-4">
                          The System
                        </p>
                        <BulletList items={study.system} />
                      </div>
                      <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 md:p-7">
                        <p className="font-label text-[10px] uppercase tracking-[0.35em] text-white/45 mb-4">
                          The Outcome
                        </p>
                        <BulletList items={study.outcome} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        ))}

        <section className="px-6 md:px-12 pt-8 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl text-center shadow-2xl shadow-black/25">
            <p className="font-label text-[10px] uppercase tracking-[0.45em] text-white/50 mb-6 block">
              Closing Note
            </p>
            <blockquote className="mx-auto max-w-5xl text-3xl md:text-5xl font-headline font-light italic text-white leading-snug">
              I design and build software as curated experiences, where every
              detail, interaction, and line of code serves a purpose.
            </blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScrollWrapper>
  );
}
