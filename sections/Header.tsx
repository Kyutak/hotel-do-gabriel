'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'O hotel', href: '#hotel' },
  { label: 'Acomodações', href: '#acomodacoes' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Localização', href: '#localizacao' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20 text-white">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="group flex items-center gap-3" aria-label="Hotel do Gabriel - início">
          <span className="flex h-10 w-10 items-center justify-center border border-white/45 font-display text-xl italic transition-colors group-hover:bg-white group-hover:text-[#541f1c]">G</span>
          <span className="leading-none"><strong className="block font-display text-xl font-medium tracking-[0.16em]">HOTEL</strong><small className="block text-[9px] tracking-[0.39em] text-white/80">DO GABRIEL</small></span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="text-[11px] uppercase tracking-[0.2em] text-white/85 transition-colors hover:text-[#e9c79b]">{link.label}</a>)}
          <a href="https://wa.me/5543996677263?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva%20no%20Hotel%20do%20Gabriel." target="_blank" rel="noreferrer" className="border border-[#e9c79b] px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-[#f3d4aa] transition-colors hover:bg-[#e9c79b] hover:text-[#321a18]">Reservar agora</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X size={25} /> : <Menu size={25} />}</button>
      </div>
      {open && <nav className="border-t border-white/20 bg-[#3f1918]/95 px-6 py-5 md:hidden">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-xs uppercase tracking-[0.18em] text-white/90">{link.label}</a>)}<a href="https://wa.me/5543996677263" target="_blank" rel="noreferrer" className="mt-4 block bg-[#e9c79b] px-4 py-4 text-center text-xs uppercase tracking-[0.15em] text-[#321a18]">Falar sobre uma reserva</a></nav>}
    </header>
  );
}
