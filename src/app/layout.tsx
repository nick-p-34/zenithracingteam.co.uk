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
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
            />
            <title>Zenith Racing Team</title>
        </head>
        <body>
        {/* top-level providers or header can go here */}
        {children}
        </body>
        </html>
    );
}