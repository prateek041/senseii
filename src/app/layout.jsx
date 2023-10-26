import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '900', '800'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[url('../../public/bg.png')] bg-no-repeat bg-cover px-10 mx-10 py-5 text-slate-800`}
      >
        <div className="h-screen">{children}</div>
      </body>
    </html>
  );
}
