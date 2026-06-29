import React from 'react';

export default function FloatingButton() {
  return (
    <a
      href="https://auroraadv.co/?tab=wizard"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex h-28 w-28 items-center justify-center rounded-full bg-[#C5A059] p-4 text-center text-[10px] font-bold uppercase tracking-widest text-[#0A0A0B] shadow-2xl transition-all hover:scale-105 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#0A0A0B]"
      style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
    >
      <span className="leading-tight">
        Get this website for only <br />
        <span className="text-sm">$999</span>
      </span>
    </a>
  );
}
