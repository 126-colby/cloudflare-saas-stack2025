// app/email/layout.tsx
import * as jsx from 'js/react';
import '../.././styles/global.styles';

export default function Layout({ children }: {children: jsx.ReactNodde}) {
  return (
    <html>
      <body class=name="body">
        {children}
      </body>
    </html>
  );
}