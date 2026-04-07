import React from "react";
import { Link } from "react-router-dom";
import movieProject from "../../asset/b-cine3.webp";
import devdudes from "../../asset/b-devdudes.webp";
import buitii from "../../asset/builtii.webp";

export default function PortfolioSection() {
  return (
    <section className="bg-surface" id="portfolio">
      <div className="px-4 sm:px-6 md:px-20 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.3em] text-outline mb-4 md:mb-6 block">
              Curated Volume 04
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-9xl font-headline font-extrabold tracking-tighter text-on-surface leading-[0.92] md:leading-[0.85] mb-4 md:mb-8">
              Selected
              <br />
              <span className="text-outline-variant">Projects</span>
            </h2>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed max-w-sm">
              {/* An intentional selection of digital interfaces where high-end editorial aesthetics meet robust engineering. */}
              A selection of systems built for real-world use — where
              performance, structure, and usability meet.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="hidden xl:block absolute right-0 top-0 w-1/3 h-[1843px] z-0 pointer-events-none overflow-hidden pr-8">
          <div className="sticky top-32 w-full aspect-[3/4] rounded-lg overflow-hidden grayscale contrast-125 opacity-10">
            <img
              alt="Aesthetic Background"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_fy6qGDVmP1AK-VLSz7RfqPbBlCFb8mQt-vDiExfz_u_m-71HiivvzPK5Z7Jsh4dR3HW3z2Lu2A05X_6OUXUDfWlzgbJwA4uSdXxH_x6ruVIXsxNMaChuS1DcQv5WHmajtUZ_iAVLRG-Dv81zycD3KgoEgNGRo7TecfojReupBy7PdtMFPwzUwnMUfOFWqHNXV30rRniOmygAhKu1LgU_MH2Vf3tCi6YstP0hRE_9ECUzU8fWZxIV9TGqImvDcwYDlRA86PrJ0_c"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 relative z-10 pb-24 md:pb-40">
          <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start py-16 md:py-24 border-t border-outline-variant/10 first:border-t-0">
            <div className="md:col-span-1 hidden md:block">
              <span className="font-label text-sm text-outline">01</span>
            </div>
            <div className="md:col-span-5 relative overflow-hidden bg-surface-container aspect-square md:aspect-[4/5] rounded-lg group-hover:scale-[1.02] transition-transform duration-700">
              <img
                alt="Project 1"
                className="w-full h-full object-cover"
                src={buitii}
              />
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 bg-gradient-to-t from-on-surface/40 to-transparent flex justify-between items-end backdrop-blur-[2px]">
                <span className="font-label text-[10px] text-white tracking-widest uppercase">
                  SAAS / FREELANCE
                </span>
              </div>
            </div>
            <div className="md:col-span-6 flex flex-col h-full justify-center md:pl-12 min-w-0">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-headline font-bold mb-4 md:mb-6 tracking-tight group-hover:italic transition-all duration-500 break-words">
                BuiltiiAI
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 md:mb-8">
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  React
                </span>
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  Node
                </span>
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  Stripe
                </span>
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  Saas
                </span>
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  AI
                </span>
              </div>
              <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant mb-8 md:mb-10 max-w-md leading-relaxed">
                AI-powered platform designed to analyze engineering documents
                and generate structured construction outputs. Built with a focus
                on automation, data extraction, and scalable workflows.
              </p>
              <Link
                className="group/link flex items-center gap-4 font-label text-xs uppercase tracking-[0.2em] font-semibold"
                to="/case-study#builtii"
              >
                View Case Study
                <span className="w-12 h-px bg-on-surface transition-all duration-300 group-hover/link:w-20"></span>
              </Link>
            </div>
          </div>

          <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start py-16 md:py-24 border-t border-outline-variant/10">
            <div className="md:col-span-1 hidden md:block">
              <span className="font-label text-sm text-outline">02</span>
            </div>
            <div className="md:col-span-5 md:order-last relative overflow-hidden bg-surface-container-high aspect-square md:aspect-[4/5] rounded-lg group-hover:scale-[1.02] transition-transform duration-700">
              <img
                alt="Project 2"
                className="w-full h-full object-cover grayscale"
                // src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaOPH9n5IbfyUsyjusr7L0RZZQPQE18NyH7Ohf3rHhR_B6La37VFTFvbknHN8GgyGWl1tuWp8k0ujxjHrfkIZZXs5aMLmFprZMiwYYcurfuqP3FSZ18ac6iEw6gjA_eUvOBe3Q2lXjIgjYejHuQRqTqw26V6j_eptnS2RQeAofqapglefsQBxGETOilVlwXwytbB9KA44KDZZH480jLmCCnsPl5m0fB2HWwaGpowYYd0r10JOofpqSLezHrg0iD_0kI5B6Xo0JRuQ"
                src={devdudes}
              />
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 bg-gradient-to-t from-on-surface/40 to-transparent flex justify-between items-end backdrop-blur-[2px]">
                <span className="font-label text-[10px] text-white tracking-widest uppercase">
                  PROFESSIONAL NETWORK / SELF INITIATIVE
                </span>
              </div>
            </div>
            <div className="md:col-span-6 flex flex-col h-full justify-center md:pr-12 md:text-right md:items-end min-w-0">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-headline font-bold mb-4 md:mb-6 tracking-tight group-hover:italic transition-all duration-500 break-words">
                DevDudes
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 md:mb-8 md:justify-end">
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  React.js
                </span>
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  Node.js
                </span>
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  Sockets
                </span>
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  AWS
                </span>
              </div>
              <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant mb-8 md:mb-10 max-w-md leading-relaxed">
                Developer networking platform enabling real-time communication
                and structured user interactions. Designed with scalable backend
                systems and optimized data handling
              </p>
              <Link
                className="group/link flex flex-row-reverse items-center gap-4 font-label text-xs uppercase tracking-[0.2em] font-semibold"
                to="/case-study#devdudes"
              >
                View Case Study
                <span className="w-12 h-px bg-on-surface transition-all duration-300 group-hover/link:w-20"></span>
              </Link>
            </div>
          </div>

          <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start py-16 md:py-24 border-t border-outline-variant/10">
            <div className="md:col-span-1 hidden md:block">
              <span className="font-label text-sm text-outline">03</span>
            </div>
            <div className="md:col-span-5 relative overflow-hidden bg-surface-dim aspect-square md:aspect-[4/5] rounded-lg group-hover:scale-[1.02] transition-transform duration-700">
              <img
                alt="Project 3"
                className="w-full h-full object-cover"
                // src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Cj-TtRge2EklNC6JvX9Lmuwv6hTJhmG0G9H6L7XmF8_cMs5bC1xMEF2v1sMNhjmwFAiLFk7LHRqzlTKTKrEHeX750zQ7QHHz5yF2HmPw-6v4onnuos_GndhrjUa_fgzeuZzP09QeCUIsfkMdFq_pCdN8sbQXuomi7_Md_7q2vfH3bSC1Hy6y_UYNv89m1phcO0TdJFpx9EHqkyIPmMiYZehTMDlQqIQYjpJsUvcINvlgwG0Ywxs4g5joiT_hA8sIuuP9QTwEPv8"
                src={movieProject}
              />
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 bg-gradient-to-t from-on-surface/40 to-transparent flex justify-between items-end backdrop-blur-[2px]">
                <span className="font-label text-[10px] text-white tracking-widest uppercase">
                  MOVIE DISCOVERY / UI
                </span>
              </div>
            </div>
            <div className="md:col-span-6 flex flex-col h-full justify-center md:pl-12 min-w-0">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-headline font-bold mb-4 md:mb-6 tracking-tight group-hover:italic transition-all duration-500 break-words">
                CineScout
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 md:mb-6">
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  React.js
                </span>
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  API
                </span>
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  Query
                </span>
                <span className="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label text-[10px] uppercase tracking-widest">
                  UI
                </span>
              </div>
              <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant mb-8 md:mb-10 max-w-md leading-relaxed">
                Movie discovery platform built for fast search and seamless
                browsing. Focused on efficient data fetching, caching, and
                responsive UI experience.
              </p>
              <Link
                className="group/link flex items-center gap-4 font-label text-xs uppercase tracking-[0.2em] font-semibold"
                to="/case-study#cinescout"
              >
                View Case Study
                <span className="w-12 h-px bg-on-surface transition-all duration-300 group-hover/link:w-20"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-dim py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-5xl font-headline font-light text-on-surface italic leading-snug">
            "I design and build software like a curated experience— where every
            detail, every interaction, and every line of code has intent"
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-6">
            <span className="w-12 h-[1px] bg-outline"></span>
            <p className="font-label text-xs uppercase tracking-widest">
              Engineer
            </p>
            <span className="w-12 h-[1px] bg-outline"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
