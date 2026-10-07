import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[760px] items-end overflow-hidden bg-[#381719] md:min-h-[900px]">
      <img src="/images/ccfc066b-c6d6-4346-abc2-0c943f727326.jpg" alt="Fachada do Hotel do Gabriel ao entardecer" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1d0b0d]/95 via-[#3c1718]/55 to-[#3c1718]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#241011]/90 via-transparent to-[#241011]/10" />
      <div className="absolute right-0 top-0 hidden h-full w-[36%] bg-gradient-to-l from-[#241011]/35 to-transparent lg:block" />
      <div className="relative mx-auto w-full max-w-[1320px] px-6 pb-16 pt-40 lg:px-10 lg:pb-20">
        <div className="grid items-end gap-14 lg:grid-cols-[1fr_310px]">
          <div className="max-w-3xl" data-reveal>
            <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#f2d3a9]"><span className="h-px w-10 bg-[#f2d3a9]" /> M A U Á &nbsp; D A &nbsp; S E R R A · P R</p>
            <h1 className="max-w-4xl font-display text-6xl font-medium leading-[0.88] text-white sm:text-8xl lg:text-[8.5rem]">Seu conforto <em className="font-normal text-[#e8c193]">começa</em> aqui.</h1>
            <p className="mt-8 max-w-md text-base leading-7 text-white/75">Um hotel novo, acolhedor e prático para quem viaja pela região. Chegue, desacelere e sinta-se em casa.</p>
            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center"><a href="#acomodacoes" className="inline-flex w-fit items-center gap-8 bg-[#e8c193] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#351718] transition-all hover:bg-white">Conheça as suítes <ArrowUpRight size={16} /></a><a href="#hotel" className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/80 hover:text-white"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40"><ArrowDown size={15} /></span> Explore o hotel</a></div>
          </div>
          <div className="hidden border border-white/25 bg-[#241011]/55 p-6 backdrop-blur-sm lg:block" data-reveal><p className="text-[10px] uppercase tracking-[0.24em] text-[#e9c79b]">Uma nova estadia</p><div className="my-5 h-px bg-white/20" /><p className="font-display text-3xl leading-none text-white">Conforto para seguir viagem.</p><p className="mt-4 text-xs leading-5 text-white/60">26 unidades · Café da manhã · Estacionamento coberto</p><a href="https://wa.me/5543996677263?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva%20no%20Hotel%20do%20Gabriel." target="_blank" rel="noreferrer" className="mt-6 block border border-[#e8c193] px-4 py-3 text-center text-[10px] uppercase tracking-[0.15em] text-[#f3d4aa] transition-colors hover:bg-[#e8c193] hover:text-[#351718]">Falar com reservas</a></div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-5 border-t border-white/25 pt-5 text-[10px] uppercase tracking-[0.22em] text-white/70 sm:flex-row" data-reveal><span>Conforto na estrada desde 2026</span><span>Av. Ponta Grossa, 845 · Centro</span></div>
      </div>
    </section>
  );
}
