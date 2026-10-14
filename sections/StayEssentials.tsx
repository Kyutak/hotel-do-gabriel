import { CarFront, Coffee } from 'lucide-react';

const essentials = [
  {
    icon: Coffee,
    title: 'Café da manhã',
    description:
      'Já está incluso na diária para você começar o dia com sabor e tranquilidade.',
    image: '/images/restaurante.png',
    alt: 'Ambiente do restaurante do Hotel do Gabriel',
  },
  {
    icon: CarFront,
    title: 'Estacionamento para hóspedes',
    description:
      'Oferecemos estacionamento para os hóspedes, com mais praticidade para quem está viajando.',
    image: '/images/estacionamento.png',
    alt: 'Estacionamento do Hotel do Gabriel',
  },
];

export default function StayEssentials() {
  return (
    <section className="bg-[#f7f5f1] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1160px]">
        <div className="max-w-full" data-reveal>
          <p className="section-kicker">Mais conforto na sua viagem</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#382322] sm:text-5xl lg:text-6xl">
            Comece o dia com um bom café da manhã!
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14">
          {essentials.map(({ icon: Icon, title, description, image, alt }) => (
            <article
              key={title}
              className="group grid overflow-hidden bg-white shadow-[0_16px_40px_rgba(69,42,31,0.08)] sm:grid-cols-[0.9fr_1.1fr]"
              data-reveal
            >
              <div className="relative min-h-[230px] overflow-hidden bg-[#e9e3dc] sm:min-h-[280px]">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-7 lg:p-8">
                <Icon size={25} strokeWidth={1.5} className="text-[#a8754d]" />
                <h3 className="mt-5 font-display text-3xl leading-tight text-[#382322]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#746b63]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
