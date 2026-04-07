import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navRoutes } from "../../routes/routeConfig";

export default function TopNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || "").replace(
    /\D/g,
    "",
  );
  const whatsappMessage =
    import.meta.env.VITE_WHATSAPP_MESSAGE ||
    "Hi Sanjai, I would like to book a call about my project.";
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : "#contact";

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-container-low transition-colors duration-300">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 md:py-6 w-full max-w-[1920px] mx-auto gap-4">
        <div className="font-headline font-black tracking-tighter text-lg sm:text-xl text-on-surface whitespace-nowrap">
          SANJAI KUMAR{" "}
        </div>

        <div className="hidden md:flex gap-12 items-center font-headline text-sm tracking-tight uppercase">
          {navRoutes.map((route) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-on-surface border-b border-on-surface pb-1 transition-colors duration-300"
                  : "text-on-surface/60 hover:text-on-surface transition-colors duration-300"
              }
              key={route.path}
              to={route.path}
            >
              {route.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a
            className="book-call-btn group hidden sm:inline-flex items-center gap-3 rounded-lg px-5 py-2.5 font-label text-xs uppercase tracking-widest text-on-primary transition-all duration-300 active:scale-[0.98]"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open WhatsApp chat to book a call"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[16px] leading-none"
            >
              call
            </span>
            <span className="book-call-label">Book a Call</span>
          </a>

          <button
            className={`mobile-menu-btn md:hidden inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-outline-variant/25 bg-white/6 text-on-surface shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-250 active:scale-95 hover:bg-white/10 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] ${
              isMobileMenuOpen ? "is-open" : ""
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            type="button"
          >
            <span className="mobile-menu-lines relative block h-4 w-5">
              <span className="mobile-menu-line mobile-menu-line-top"></span>
              <span className="mobile-menu-line mobile-menu-line-middle"></span>
              <span className="mobile-menu-line mobile-menu-line-bottom"></span>
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden border-t border-surface-container-low bg-surface/95 backdrop-blur-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-[80vh] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-4 max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-2 font-headline text-base uppercase tracking-tight">
            {navRoutes.map((route) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 transition-colors duration-300 ${
                    isActive
                      ? "bg-surface-container-high text-on-surface"
                      : "text-on-surface/70 hover:bg-surface-container-low hover:text-on-surface"
                  }`
                }
                key={route.path}
                onClick={closeMobileMenu}
                to={route.path}
              >
                {route.label}
              </NavLink>
            ))}
          </div>

          <a
            className="book-call-btn group inline-flex w-full items-center justify-center gap-3 rounded-xl px-5 py-3 font-label text-xs uppercase tracking-widest text-on-primary transition-all duration-300 active:scale-[0.98]"
            href={whatsappUrl}
            onClick={closeMobileMenu}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open WhatsApp chat to book a call"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[16px] leading-none"
            >
              call
            </span>
            <span className="book-call-label">Book a Call</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
