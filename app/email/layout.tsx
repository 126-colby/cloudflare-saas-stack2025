import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div class=\"email-layout\">
      {children}
    </div>
  );
}