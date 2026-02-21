// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function HomePage() {
  // example of using swr; replace '/api/hello' with your API route or remove
  const { data, error } = useSWR('/api/hello', fetcher, { revalidateOnFocus: false });

  return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-4xl text-center px-6 py-12"
        >
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">Zenith Racing Team</h1>
          <p className="text-lg mb-8">
            Flashy landing hero — small, readable code. {data ? `Status: ${data.status}` : 'Connecting…'}
          </p>
          <div className="flex gap-3 justify-center">
            <a className="px-6 py-2 rounded-md bg-black text-white">Join</a>
            <a className="px-6 py-2 rounded-md border">About</a>
          </div>
        </motion.div>
      </main>
  );
}