import '@/app/_styles/globals.css';
import { Neuton } from 'next/font/google';
import Navbar from "./_components/Navbar";
import Footer from './_components/Footer';
import { CartProvider } from '@/app/_components/CartContext';

export const metadata = {
  title: "Seballus Website",
};

const neuton = Neuton({
  weight: ['200', '300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={neuton.className}>
      <body>
          <Navbar />
          <main className="max-w-[100%] mx-auto">
            {children} {/* Content passed from other pages */}
          </main>
          <Footer />
      </body>
    </html>
  );
}
