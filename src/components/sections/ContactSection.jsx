import React from "react";

export default function ContactSection() {
  return (
    <section className="py-60 bg-surface px-12 text-center" id="contact">
      <div className="max-w-4xl mx-auto">
        <span className="font-label text-xs uppercase tracking-[0.5em] text-outline mb-12 block">
          Available for New Projects
        </span>
        <h2 className="text-7xl md:text-9xl font-headline font-black tracking-tighter mb-20 leading-none">
          Let's Build{" "}
          <span className="italic font-light text-primary-dim opacity-60">
            Something
          </span>{" "}
          Iconic.
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <a
            className="group relative px-12 py-6 bg-on-surface text-surface rounded-full text-lg font-headline font-bold overflow-hidden"
            href="mailto:jsanjai2004@gmail.com"
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-primary-dim translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
          <a
            className="group font-label text-sm uppercase tracking-widest border-b border-on-surface pb-2 hover:text-primary transition-all"
            href="/Sanjai-Kumar-Resume.pdf"
            download="Sanjai-Kumar-Resume.pdf"
          >
            Get Resume
          </a>
        </div>
      </div>
    </section>
  );
}
