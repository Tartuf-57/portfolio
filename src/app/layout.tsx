import './reset.css';
import './globals.css';
import type {ReactNode} from 'react';

export const metadata = {
  title: 'Portfolio',
  description: 'My portfolio site',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
