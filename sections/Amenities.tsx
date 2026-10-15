import {
  Accessibility,
  Building2,
  Car,
  Coffee,
  MessageCircle,
  PawPrint,
  Snowflake,
  Tv,
  Wifi,
  Users,
  ArrowUpRight,
} from 'lucide-react';

const amenities = [
  { icon: Wifi, label: 'Wi-Fi gratuito' },
  { icon: Snowflake, label: 'Ar-condicionado' },
  { icon: Coffee, label: 'Café da manhã incluso' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Car, label: 'Estacionamento para hóspedes' },
  { icon: Building2, label: 'Elevador' },
  { icon: PawPrint, label: 'Aceita pets' },
  { icon: Accessibility, label: 'Recepção 24h' },
];

export default function Amenities() {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden bg-[#4b1d1c] px-6 py-24 text-white lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[#e9c79b]/[0.04] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1160px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        {/* Apresentação */}
        <div data-reveal>
          <p className="section-kicker text-[#e9c79b]">
            Tudo no seu tempo
          </p>

          <h2 className="mt-5 font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl">
            Conforto que se sente nos{' '}
            <em className="font-normal text-[#e9c79b]">
              detalhes
            </em>
            .
          </h2>

          <p className="mt-7 max-w-md text-sm leading-7 text-white/65">
            Do momento da sua chegada até a hora de partir, cada detalhe do Hotel do Gabriel foi pensado para proporcionar conforto, praticidade e uma estadia agradável.
          </p>

          {/* Diferenciais */}
          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e9c79b]/30 bg-[#e9c79b]/[0.07]">
                <MessageCircle
                  size={19}
                  strokeWidth={1.4}
                  className="text-[#e9c79b]"
                />
              </span>

              <div className="pt-1">
                <p className="text-sm leading-6 text-white/90">
                  Atendimento e reservas pelo WhatsApp;
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e9c79b]/30 bg-[#e9c79b]/[0.07]">
                <Users
                  size={19}
                  strokeWidth={1.4}
                  className="text-[#e9c79b]"
                />
              </span>

              <div className="pt-1">
                <p className="text-sm leading-6 text-white/90">
                  Ambiente confortável para famílias, casais e pessoas viajando a trabalho.
                </p>
              </div>
            </div>
          </div>

          {/* Avaliações no Google */}
          <div className="mt-10 border-t border-white/15 pt-6">
            <a
              href="https://www.google.com/maps/place/Hotel+do+Gabriel/@-23.9018747,-51.2242257,17z/data=!4m11!3m10!1s0x94eb8fa53fa02ab5:0xa61872ccc9b49fd!5m2!4m1!1i2!8m2!3d-23.9018747!4d-51.2242257!9m1!1b1!16s%2Fg%2F11zyxn06fm?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center justify-between gap-8 border border-[#e9c79b]/60 px-5 py-4 transition-all duration-300 hover:bg-[#e9c79b] hover:text-[#4b1d1c] sm:min-w-[280px]"
            >
              <span className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                  Ver avaliações no Google
                </span>
                <span className="text-xs text-white/60 transition-colors group-hover:text-[#4b1d1c]/70">
                  Opiniões de hóspedes
                </span>
              </span>

              <ArrowUpRight
                size={19}
                className="shrink-0 text-[#e9c79b] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#4b1d1c]"
              />
            </a>
          </div>
        </div>

        {/* Grade de comodidades */}
        <div
          className="grid grid-cols-2 gap-px border border-white/10 bg-white/15 sm:grid-cols-4"
          data-reveal
        >
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex min-h-[145px] flex-col justify-between bg-[#4b1d1c] p-5 transition-colors duration-300 hover:bg-[#612623] sm:min-h-[165px] sm:p-6"
            >
              <Icon
                size={23}
                strokeWidth={1.3}
                className="text-[#e9c79b] transition-transform duration-300 group-hover:-translate-y-1"
              />

              <span className="mt-8 block text-xs leading-5 text-white/85">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}