import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (\n    <html lang="en">\n      <body>{children}</body>\n    </html>\n  );
}
