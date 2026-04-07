import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-20 bg-surface-container">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 w-full gap-8 max-w-[1920px] mx-auto">
        <div className="font-headline font-bold text-on-surface">
          SANJAI KUMAR
        </div>
        <p className="font-headline text-xs tracking-widest uppercase opacity-60 text-on-surface">
          © {new Date().getFullYear()} THE SANJAI KUMAR. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 font-headline text-xs tracking-widest uppercase text-on-surface">
          <a
            className="opacity-60 hover:opacity-100 hover:underline underline-offset-4 transition-all"
            href="https://www.linkedin.com/in/jsanjaikumar/"
          >
            LinkedIn
          </a>
          <a
            className="opacity-60 hover:opacity-100 hover:underline underline-offset-4 transition-all"
            href="https://github.com/jsanjaikumar"
          >
            GitHub
          </a>
          <a
            className="opacity-60 hover:opacity-100 hover:underline underline-offset-4 transition-all"
            href="https://drive.google.com/file/d/1JtBQvRk2ipQqK_ioA58ltOr4Qk6Km-I-/view?usp=sharing"
          >
            Read.cv
          </a>
          <a
            className="opacity-60 hover:opacity-100 hover:underline underline-offset-4 transition-all"
            href="mailto:jsanjai2004@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
