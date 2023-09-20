import { Analytics } from '@vercel/analytics/react';
import './global.css';

export default function RootLayout({
    children,
  }) {
    return (
      <html lang="en">
        <Analytics />
        <body  suppressHydrationWarning={true}>{children}</body>
      </html>
    )
  }