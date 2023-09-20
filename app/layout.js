import { Analytics } from '@vercel/analytics/react';
import './global.css';

export const metadata = {
  title: 'Simple Blog App',
  description: 'Nextjs Simple Blog App',
};

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