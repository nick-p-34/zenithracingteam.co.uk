// app/layout.tsx
import '../styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
    title: 'Zenith Racing Team',
    description: 'Official site — Zenith Racing Team'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
        {/* top-level providers or header can go here */}
        {children}
        </body>
        </html>
    );
}