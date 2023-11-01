import './globals.css';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} bg-[#CDC6E9] tracking-wider mx-auto max-w-screen-2xl`}
      >
        {children}
      </body>
    </html>
  );
}
