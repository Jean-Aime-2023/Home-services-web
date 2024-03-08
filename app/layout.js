import { Outfit } from 'next/font/google';
import './globals.css';
import Header from './_components/Header';
import NextAuthSessionProvider from './provider';
import { Toaster } from 'sonner';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Home Serv',
  description: 'Home Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NextAuthSessionProvider>
          <div className="mx-6 md:mx-16">
            <Header />
            <Toaster />
            {children}
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
