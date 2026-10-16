
import { useState } from 'react';
import { ArrowUpRight, BedDouble, X } from 'lucide-react';

type SelectedImage = {
  src: string;
  title: string;
} | null;

type Room = {
  title: string;
  capacity: string;
  images: string[];
  beds: string;
  description: string;
};

const rooms: Room[] = [
  {
    title: 'Suíte Dupla',
    capacity: 'Até 2 hóspedes',
    images: [
      '/images/accommodations/quarto1.webp',
      '/images/accommodations/quarto1-2.webp',
      '/images/accommodations/banheiro.webp',
    ],
    beds: '1 cama de casal',
    description:
      'Acomodação moderna e aconchegante, ideal para uma ou duas pessoas. Equipada com 1 cama de casal, banheiro privativo, ar-condicionado, frigobar, Smart TV e Wi-Fi, Café da manhã incluso, proporcionando conforto e praticidade durante sua estadia.',
  },
  {
    title: 'Suíte Tripla',
    capacity: 'Até 3 hóspedes',
    images: [
      '/images/accommodations/quarto22.webp',
      '/images/accommodations/quarto2-2.webp',
      '/images/accommodations/banheiro.webp',
    ],
    beds: '1 casal + 1 solteiro',
    description:
      'Acomodação confortável e espaçosa, ideal para casais, famílias pequenas ou hóspedes a trabalho. Equipada com 1 cama de casal e 1 cama de solteiro, banheiro privativo, ar-condicionado, frigobar, Smart TV e Wi-Fi, Café da manhã incluso, garantindo uma estadia agradável e tranquila.',
  },
  {
    title: 'Suíte Quádrupla',
    capacity: 'Até 4 hóspedes',
    images: [
      '/images/accommodations/quarto3.webp',
      '/images/accommodations/quarto3-2.webp',
      '/images/accommodations/banheiro.webp',
    ],
    beds: '1 casal + 2 solteiros',
    description:
      'Acomodação ampla e aconchegante, ideal para famílias ou pequenos grupos. Equipada com 1 cama de casal e 2 camas de solteiro, banheiro privativo, ar-condicionado, frigobar, Smart TV e Wi-Fi, Café da manhã incluso, oferecendo conforto e comodidade para todos os hóspedes.',
  },
];

export default function Accommodations() {
  const [selectedImage, setSelectedImage] =
    useState<SelectedImage>(null);

  const openImage = (src: string, title: string) => {
    setSelectedImage({ src, title });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section
        id="acomodacoes"
        className="bg-[#e9e3dc] px-6 py-24 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-[1160px]">
          {/* Cabeçalho */}
          <div data-reveal>
            <p className="section-kicker">
              Escolha o que mais combina com você
            </p>

            <h2 className="mt-5 max-w-full font-display text-5xl leading-[1.05] text-[#382322] sm:text-6xl">
              Encontre a suíte ideal{' '}
              <em className="font-normal text-[#9d6c4b]">
                para sua estadia
              </em>
              .
            </h2>
          </div>

          {/* Grid de acomodações */}
          <div className="mt-14 grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => {
              const reserveUrl = `https://wa.me/5543996677263?text=${encodeURIComponent(
                `Olá, gostaria de falar sobre a ${room.title} do Hotel do Gabriel.`
              )}`;

              return (
                <article
                  key={room.title}
                  className="group flex min-w-0 flex-col overflow-hidden bg-[#f7f5f1] shadow-[0_16px_40px_rgba(69,42,31,0.06)] transition-transform duration-500 hover:-translate-y-1"
                  data-reveal
                >
                  {/* Galeria de imagens */}
                  <div className="relative">
                    <div className="grid h-[250px] grid-cols-2 grid-rows-2 gap-1 overflow-hidden bg-[#382322] sm:h-[280px]">
                      {/* Imagem principal */}
                      <div className="row-span-2 overflow-hidden">
                        <img
                          src={room.images[0]}
                          alt={`${room.title} - foto principal`}
                          loading="lazy"
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            openImage(
                              room.images[0],
                              `${room.title} - camas principais`
                            )
                          }
                          onKeyDown={(event) => {
                            if (
                              event.key === 'Enter' ||
                              event.key === ' '
                            ) {
                              event.preventDefault();
                              openImage(
                                room.images[0],
                                `${room.title} - camas principais`
                              );
                            }
                          }}
                          className={`h-full w-full cursor-zoom-in object-cover transition-transform duration-700 `}
                        />
                      </div>

                      {/* Segunda imagem */}
                      <div className="overflow-hidden">
                        <img
                          src={room.images[1]}
                          alt={`${room.title} - áreas de acomodação`}
                          loading="lazy"
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            openImage(
                              room.images[1],
                              `${room.title} - áreas de acomodação`
                            )
                          }
                          onKeyDown={(event) => {
                            if (
                              event.key === 'Enter' ||
                              event.key === ' '
                            ) {
                              event.preventDefault();
                              openImage(
                                room.images[1],
                                `${room.title} - segunda foto`
                              );
                            }
                          }}
                          className="h-full w-full cursor-zoom-in object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>

                      {/* Terceira imagem */}
                      <div className="overflow-hidden">
                        <img
                          src={room.images[2]}
                          alt={`${room.title} - banheiro privativo`}
                          loading="lazy"
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            openImage(
                              room.images[2],
                              `${room.title} - banheiro privativo`
                            )
                          }
                          onKeyDown={(event) => {
                            if (
                              event.key === 'Enter' ||
                              event.key === ' '
                            ) {
                              event.preventDefault();
                              openImage(
                                room.images[2],
                                `${room.title} - terceira foto`
                              );
                            }
                          }}
                          className="h-full w-full cursor-zoom-in object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Gradiente sobre as imagens */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#241313]/85 via-transparent to-black/5" />

                    {/* Identificação da suíte */}
                    <div className="pointer-events-none absolute bottom-5 left-5">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#eacaa0]">
                        {room.capacity}
                      </span>

                      <h3 className="mt-1 font-display text-3xl text-white">
                        {room.title}
                      </h3>
                    </div>
                  </div>

                  {/* Informações */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ddd3ca] pb-5">
                      <span className="flex items-center gap-2 text-xs text-[#746b63]">
                        <BedDouble
                          size={17}
                          className="shrink-0 text-[#a8754d]"
                        />
                        {room.beds}
                      </span>

                      <span className="font-display text-xl text-[#9d6c4b]">
                        Consulte nossas tarifas
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[#655c56]">
                      {room.description}
                    </p>

                    {/* Instalações */}
                    <div className="mt-6 border-t border-[#ddd3ca] pt-5">
                      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9d6c4b]">
                        Instalações
                      </p>
                    </div>

                    {/* Reserva */}
                    <a
                      href={reserveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 flex min-h-12 items-center justify-between gap-3 border border-[#ad805d] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#55332b] transition-colors duration-300 hover:bg-[#55332b] hover:text-white"
                    >
                      <span>Consultar disponibilidade</span>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal de imagem ampliada */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada da acomodação"
        >
          {/* Botão fechar */}
          <button
            type="button"
            aria-label="Fechar imagem ampliada"
            onClick={closeImage}
            className="absolute right-4 top-4 z-[101] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/25 sm:right-8 sm:top-8"
          >
            <X size={28} />
          </button>

          {/* Imagem em tamanho ampliado */}
          <div
            className="flex max-h-full max-w-full flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[85vh] max-w-full cursor-zoom-out object-contain shadow-2xl"
            />

            <p className="mt-4 text-center text-sm tracking-wide text-white/80">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
