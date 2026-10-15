const galleryImages = [
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
    className: 'md:col-span-2 aspect-[2/1]',
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#f7f5f1] px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1160px]">

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
              <em className="text-[#9d6c4b]">acolher</em>.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#746b63]">
            Cada ambiente foi pensado para que sua estadia seja agradável,
            prática e confortável do começo ao fim.
          </p>
        </div>

        <div
          className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
          data-reveal
        >
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden bg-[#e9e3dc] ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#241313]/75 to-transparent px-5 pb-5 pt-12">
                <figcaption className="text-[10px] uppercase tracking-[0.22em] text-white">
                  {image.label}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
