import React from "react";

export default function SideNavBar() {
  return (
    <div className="hidden xl:flex flex-col items-start gap-16 pl-8 fixed left-0 top-1/2 -translate-y-1/2 h-auto z-40">
      <div className="flex flex-col items-center gap-4">
        <span
          className="material-symbols-outlined text-primary"
          data-icon="folder_open"
        >
          folder_open
        </span>
        <span className="font-label text-[10px] font-bold tracking-[0.2em] uppercase vertical-text text-on-surface">
          2026 PORTFOLIO
        </span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span
          className="material-symbols-outlined text-outline"
          data-icon="location_on"
        >
          location_on
        </span>
        <span className="font-label text-[10px] font-medium tracking-[0.2em] uppercase vertical-text text-on-surface/40">
          Bengaluru
        </span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span
          className="material-symbols-outlined text-outline"
          data-icon="layers"
        >
          layers
        </span>
        <span className="font-label text-[10px] font-medium tracking-[0.2em] uppercase vertical-text text-on-surface/40">
          FULL-STACK ENGINEER
        </span>
      </div>
    </div>
  );
}
