import { Inter } from 'next/font/google';
import './globals.css';
import Utilityprovider from './providers/utilityprovider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'WiseChoice',
  description: 'Get the Best Choice',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Utilityprovider>{children}</Utilityprovider>
      </body>
    </html>
  );
}
