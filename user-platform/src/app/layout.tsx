// src/app/layout.tsx
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css'; // ¡Esta línea es crucial!

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}