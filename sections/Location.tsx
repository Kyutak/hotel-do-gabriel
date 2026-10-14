import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section
      id="localizacao"
      className="relative overflow-hidden bg-[#ded1c3] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="absolute -right-20 -top-16 font-display text-[15rem] leading-none text-[#d2c1b0]">
        G
      </div>

      <div
        className="relative mx-auto grid max-w-[1160px] gap-14 lg:grid-cols-[1fr_0.8fr]"
        data-reveal
      >
        <div>
          <p className="section-kicker">Chegue com facilidade</p>

          <h2 className="mt-5 max-w-xl font-display text-5xl leading-[0.95] text-[#382322] sm:text-6xl">
            No centro de tudo, perto do que{' '}
            <em className="text-[#9d6c4b]">importa</em>.
          </h2>

          <p className="mt-8 max-w-lg text-base leading-8 text-[#655c56]">
            Avenida Ponta Grossa, 845 · Centro
            <br />
            Mauá da Serra – Paraná · CEP 86.828-000
          </p>

          {/* Mapa incorporado no lugar do botão */}
          <div className="mt-8 w-full max-w-lg overflow-hidden border border-[#c5b4a4]">
            <iframe
              title="Localização do Hotel do Gabriel"
              src="https://maps.google.com/maps?q=Hotel%20do%20Gabriel%2C%20Avenida%20Ponta%20Grossa%2C%20845%2C%20Mau%C3%A1%20da%20Serra%2C%20Paran%C3%A1&output=embed"
              width="100%"
              height="240"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="grid gap-0 border-t border-[#c5b4a4]" data-reveal>
          {/* Horários */}
          <div className="flex gap-4 border-b border-[#c5b4a4] py-6">
            <Clock3
              size={21}
              strokeWidth={1.3}
              className="mt-1 shrink-0 text-[#8f5f44]"
            />

            <div>
              <h3 className="font-display text-2xl text-[#432b25]">
                Horários
              </h3>

              <p className="mt-1 text-sm leading-6 text-[#74675d]">
                Check-in a partir das 14h
                <br />
                Check-out até às 11h
              </p>
            </div>
          </div>

          {/* Contato */}
          <div className="flex gap-4 border-b border-[#c5b4a4] py-6">
            <Phone
              size={21}
              strokeWidth={1.3}
              className="mt-1 shrink-0 text-[#8f5f44]"
            />

            <div>
              <h3 className="font-display text-2xl text-[#432b25]">
                Fale com a gente
              </h3>

              <a
                href="tel:+5543996677263"
                className="mt-1 block text-sm text-[#74675d] hover:text-[#432b25]"
              >
                (43) 99667-7263
              </a>

              <a
                href="mailto:restaurante.gabriel.maua@gmail.com"
                className="block break-all text-sm text-[#74675d] hover:text-[#432b25]"
              >
                restaurante.gabriel.maua@gmail.com
              </a>
            </div>
          </div>

          {/* Acesso */}
          <div className="flex gap-4 py-6">
            <MapPin
              size={21}
              strokeWidth={1.3}
              className="mt-1 shrink-0 text-[#8f5f44]"
            />

            <div>
              <h3 className="font-display text-2xl text-[#432b25]">
                Acesso prático
              </h3>

              <p className="mt-1 text-sm leading-6 text-[#74675d]">
                Ao lado de um posto de gasolina
                <br />
                Estacionamento privativo e coberto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}