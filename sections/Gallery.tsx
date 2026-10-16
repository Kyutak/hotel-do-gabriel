
import { useState } from 'react';
import { X } from 'lucide-react';

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  className: string;
};

type SelectedImage = {
  src: string;
  alt: string;
  label: string;
} | null;

const galleryImages: GalleryImage[] = [
  {
    src: '/images/cafemanha2.webp',
    alt: 'Restaurante do Hotel do Gabriel',
    label: 'Café da manhã',
    className: 'md:col-span-2 md:row-span-2 aspect-square',
  },
  {
    src: '/images/recep.webp',
    alt: 'Recepção do Hotel do Gabriel',
    label: 'Recepção',
    className: 'aspect-square',
  },
  {
    src: '/images/recep1.webp',
    alt: 'Hall e escadaria do hotel',
    label: 'Ambientes',
    className: 'aspect-square',
  },
  {
    src: '/images/quarto2-grid.png',
    alt: 'Detalhes de uma suíte',
    label: 'Detalhes da suíte',
    className: 'aspect-square md:col-span-2 md:aspect-[2/1]',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] =
    useState<SelectedImage>(null);

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="bg-[#f7f5f1] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1160px]">
          {/* Cabeçalho */}
          <div
            className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
            data-reveal
          >
            <div>
              <p className="section-kicker">
                Por dentro do Gabriel
              </p>

              <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[0.95] text-[#382322] sm:text-6xl">
                Espaços feitos para{' '}
                <em className="text-[#9d6c4b]">
                  acolher
                </em>
                .
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#746b63]">
              Cada ambiente foi pensado para que sua estadia seja agradável,
              prática e confortável do começo ao fim.
            </p>
          </div>

          {/* Galeria de imagens */}
          <div
            className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
            data-reveal
          >
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className={`group relative cursor-zoom-in overflow-hidden bg-[#e9e3dc] ${image.className}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setSelectedImage({
                      src: image.src,
                      alt: image.alt,
                      label: image.label,
                    })
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === 'Enter' ||
                      event.key === ' '
                    ) {
                      event.preventDefault();

                      setSelectedImage({
                        src: image.src,
                        alt: image.alt,
                        label: image.label,
                      });
                    }
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Legenda da imagem */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#241313]/75 to-transparent px-5 pb-5 pt-12">
                  <figcaption className="text-[10px] uppercase tracking-[0.22em] text-white">
                    {image.label}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Modal da imagem ampliada */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada da galeria"
        >
          {/* Botão de fechar */}
          <button
            type="button"
            aria-label="Fechar imagem ampliada"
            onClick={closeImage}
            className="absolute right-4 top-4 z-[101] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/25 sm:right-8 sm:top-8"
          >
            <X size={28} />
          </button>

          {/* Foto ampliada e legenda */}
          <div
            className="flex max-h-full max-w-full flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-full cursor-zoom-out object-contain shadow-2xl"
            />

            <p className="mt-4 text-center text-sm uppercase tracking-[0.18em] text-white/80">
              {selectedImage.label}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
