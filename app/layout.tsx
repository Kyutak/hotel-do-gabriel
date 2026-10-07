import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Hotel do Gabriel | Mauá da Serra - PR',
  description: 'Conforto, praticidade e acolhimento às margens da BR-376.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
