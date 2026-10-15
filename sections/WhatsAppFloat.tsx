import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5543996677263?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva%20no%20Hotel%20do%20Gabriel."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#15351f] shadow-[0_8px_28px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#45e27e] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-7 sm:right-7 sm:h-[66px] sm:w-[66px]"
    >
      <MessageCircle size={30} strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}