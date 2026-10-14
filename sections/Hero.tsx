import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[680px] items-end overflow-hidden bg-[#381719] md:min-h-[860px]"
    >
      <img
        src="/images/fachada.jpeg"
        alt="Fachada do Hotel do Gabriel ao entardecer"
        className="absolute inset-0 h-full w-full object-cover object-[58%_20%]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1d0b0d]/95 via-[#3c1718]/55 to-[#3c1718]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#241011]/90 via-transparent to-[#241011]/10" />
      <div className="absolute right-0 top-0 hidden h-full w-[36%] bg-gradient-to-l from-[#241011]/35 to-transparent lg:block" />

      <div className="relative mx-auto w-full max-w-[1320px] px-6 pb-12 pt-32 lg:px-10 lg:pb-14">
        <div className="w-full" data-reveal>
          <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#f2d3a9]">
            <span className="h-px w-10 bg-[#f2d3a9]" />
            H O T E L &nbsp; D O &nbsp; G A B R I E L
          </p>

          <h1 className="w-full font-display text-5xl font-medium leading-[0.9] text-white sm:text-7xl lg:text-[8rem]">
            Sua parada de{' '}
            <em className="font-normal text-[#e8c193]">
              conforto em
            </em>{' '}
            Mauá da Serra.
          </h1>

          <p className="mt-8 max-w-md text-base leading-7 text-white/75">
            Um hotel novo, acolhedor e prático para quem viaja pela região. Chegue, desacelere e sinta-se em casa.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            {/* Botão principal: WhatsApp */}
            <a
              href="https://wa.me/5543996677263?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva%20no%20Hotel%20do%20Gabriel."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[72px] w-full items-center justify-between gap-8 bg-[#25D366] px-8 py-6 text-sm font-bold uppercase tracking-[0.13em] text-[#15351f] shadow-[0_10px_35px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#45e27e] hover:shadow-[0_14px_40px_rgba(0,0,0,0.4)] sm:w-auto"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={22} strokeWidth={2} />
                Falar pelo WhatsApp
              </span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* Botão secundário: suítes */}
            <a
              href="#acomodacoes"
              className="group inline-flex items-center gap-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:text-[#e8c193]"
            >
              <span className="flex h-10 w-10 items-center justify-center border border-white/40 transition-all duration-300 group-hover:border-[#e8c193] group-hover:bg-[#e8c193]/80">
                <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-1" />
              </span>
              Conheça as suítes
            </a>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col justify-between gap-5 border-t border-white/25 pt-5 text-[10px] uppercase tracking-[0.22em] text-white/70 sm:flex-row"
          data-reveal
        >
          <span>Conforto na estrada desde 2026</span>
          <span>Av. Ponta Grossa, 845 · Centro</span>
        </div>
      </div>
    </section>
  );
}

{/* <div className="hidden border border-white/25 bg-[#241011]/55 p-6 backdrop-blur-sm lg:block" data-reveal><p className="text-[10px] uppercase tracking-[0.24em] text-[#e9c79b]">Uma nova estadia</p><div className="my-5 h-px bg-white/20" /><p className="font-display text-3xl leading-none text-white">Conforto para seguir viagem.</p><p className="mt-4 text-xs leading-5 text-white/60">26 unidades · Café da manhã · Estacionamento coberto</p><a href="https://wa.me/5543996677263?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva%20no%20Hotel%20do%20Gabriel." target="_blank" rel="noreferrer" className="mt-6 block border border-[#e8c193] px-4 py-3 text-center text-[10px] uppercase tracking-[0.15em] text-[#f3d4aa] transition-colors hover:bg-[#e8c193] hover:text-[#351718]">Falar com reservas</a></div> */}