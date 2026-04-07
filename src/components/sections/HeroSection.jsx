import React, { useEffect, useState } from "react";
import sanjai from "../../asset/sanjai suit full edited.png";

export default function HeroSection() {
  const heroText = "Hello.";
  const colorClasses = [
    "text-on-surface",
    "text-outline",
    "text-on-surface-variant",
  ];
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [colorStep, setColorStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const visibleText = heroText.slice(0, typedLength);
  const visibleWord = visibleText.replace(".", "");
  const showDot = visibleText.endsWith(".");

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 420);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const animationTimer = setTimeout(
      () => {
        if (!isDeleting && typedLength < heroText.length) {
          setTypedLength((prev) => prev + 1);
          return;
        }

        if (!isDeleting && typedLength === heroText.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && typedLength > 0) {
          setTypedLength((prev) => prev - 1);
          return;
        }

        if (isDeleting && typedLength === 0) {
          setIsDeleting(false);
          setColorStep((prev) => (prev + 1) % colorClasses.length);
        }
      },
      !isDeleting && typedLength === heroText.length
        ? 900
        : isDeleting
          ? 95
          : 160,
    );

    return () => clearTimeout(animationTimer);
  }, [typedLength, isDeleting, heroText.length, colorClasses.length]);

  return (
    <>
      <section className="md:hidden min-h-[100svh] flex flex-col justify-between bg-surface px-4 pt-4 pb-3 overflow-hidden">
        <div className="flex-[0.12] min-h-[8vh]" aria-hidden="true" />

        <div className="flex-[0.46] flex flex-col justify-center gap-5 w-full max-w-[21rem] mx-auto min-w-0">
          <div className="space-y-3">
            <div className="font-label text-[10px] tracking-[0.34em] uppercase text-outline">
              FREELANCER & AGENCY FOUNDER
            </div>
            <h1
              className={`hero-animated-text font-headline text-[4.1rem] leading-none tracking-tighter font-extrabold opacity-15 select-none pointer-events-none transition-colors duration-500 ${colorClasses[colorStep]}`}
            >
              {visibleWord}
              {showDot ? "." : null}
              <span
                className={`hero-gradient-caret inline-block align-middle ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}
              >
                |
              </span>
            </h1>
            <h2 className="font-headline text-[2.25rem] leading-[0.95] font-bold tracking-tight text-on-surface max-w-[10ch]">
              Curating Digital Excellence.
            </h2>
          </div>

          <div className="flex flex-col gap-4 pt-1 max-w-[20rem]">
            <p className="text-sm leading-[1.65] text-on-surface-variant max-w-[17rem]">
              Freelancer and agency founder building structured digital systems,
              products, and AI-driven workflows.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="min-w-0">
                <div className="font-headline text-[2.05rem] font-extrabold leading-none">
                  +5
                </div>
                <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant leading-tight">
                  Projects Completed
                </div>
              </div>
              <div className="min-w-0">
                <div className="font-headline text-[2.05rem] font-extrabold leading-none">
                  +1
                </div>
                <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant leading-tight">
                  Agency Scaled in 2026
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-[0.42] flex items-end justify-center min-h-[34vh] pb-1">
          <div className="relative w-full max-w-[24rem] h-[340px] overflow-hidden rounded-sm">
            <img
              alt="Developer Portrait"
              className="w-full h-full object-cover object-center grayscale contrast-125 opacity-90"
              src={sanjai}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-surface"></div>
            <div className="pointer-events-none absolute left-3 right-3 -bottom-6 h-14 rounded-full bg-surface blur-3xl opacity-80"></div>
          </div>
        </div>
      </section>

      <section className="hidden md:flex min-h-screen flex-col md:flex-row items-end pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 md:px-8 lg:px-24 pb-16 md:pb-20 gap-10 md:gap-12 bg-surface overflow-hidden">
        <div className="w-full md:w-[48%] flex flex-col gap-8 md:gap-12 z-10 min-w-0">
          <h1
            className={`hero-animated-text font-headline text-[5rem] sm:text-[7rem] md:text-[12rem] lg:text-[18rem] leading-[0.8] tracking-tighter font-extrabold opacity-20 select-none absolute top-20 left-4 sm:left-8 md:left-12 transition-colors duration-500 ${colorClasses[colorStep]}`}
          >
            {visibleWord}
            {showDot ? "." : null}
            <span
              className={`hero-gradient-caret inline-block align-middle ml-2 ${showCursor ? "opacity-100" : "opacity-0"}`}
            >
              |
            </span>
          </h1>
          <div className="flex flex-col gap-4 md:gap-6 relative">
            <div className="font-label text-xs tracking-[0.4em] uppercase text-outline">
              FREELANCER & AGENCY FOUNDER
            </div>
            <h2 className="font-headline text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight max-w-xl leading-[0.95]">
              Curating Digital Excellence.
            </h2>
            <div className="flex gap-8 sm:gap-12 mt-4 sm:mt-8 flex-wrap">
              <div>
                <div className="font-headline text-2xl sm:text-3xl font-extrabold">
                  +5
                </div>
                <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="font-headline text-2xl sm:text-3xl font-extrabold">
                  +1
                </div>
                <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                  Agency Scaled in 2026
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[100%] relative h-[420px] sm:h-[520px] md:h-[716px] min-w-0">
          <div className="absolute inset-0  rounded-sm overflow-hidden">
            <img
              alt="Developer Portrait"
              className="w-full h-full object-cover grayscale contrast-125 opacity-90"
              src={sanjai}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-b from-transparent to-surface"></div>
            <div className="pointer-events-none absolute left-4 right-4 sm:left-8 sm:right-8 -bottom-8 sm:-bottom-10 h-16 sm:h-20 rounded-full bg-surface blur-3xl opacity-80"></div>
          </div>
          <div className="absolute right-3 md:-right-8 top-auto md:top-1/2 bottom-4 md:bottom-auto md:-translate-y-1/2 flex items-center gap-3 md:gap-4">
            <span className="font-label text-[10px] uppercase tracking-[0.5em] vertical-text text-on-surface-variant">
              FULL-STACK DEVELOPER
            </span>
            <div className="h-40 w-[1px] bg-outline-variant"></div>
          </div>
        </div>
      </section>
    </>
  );
}
