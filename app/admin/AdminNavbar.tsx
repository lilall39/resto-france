'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const TABS = [
  { id: 'textes' as const, label: 'Textes' },
  { id: 'images' as const, label: 'Images' },
  { id: 'realisations' as const, label: 'Réalisations' },
] as const;

export default function AdminNavbar() {
  const [hash, setHash] = useState('');

  useEffect(() => {
    const read = () => setHash(typeof window !== 'undefined' ? window.location.hash.slice(1) : '');
    read();
    window.addEventListener('hashchange', read);
    return () => window.removeEventListener('hashchange', read);
  }, []);

  return (
    <header className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <span className="font-display font-semibold">Administration</span>
        <nav className="flex items-center gap-4" aria-label="Navigation admin">
          {TABS.map((tab) => {
            const isActive = hash === tab.id || (hash === '' && tab.id === 'textes');
            return (
              <Link
                key={tab.id}
                href={`/admin#${tab.id}`}
                className={`text-sm font-body transition-colors ${
                  isActive ? 'text-white font-medium' : 'text-white/80 hover:text-white'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-body text-white/90 hover:text-white ml-2"
          >
            Voir le site public
          </a>
        </nav>
      </div>
    </header>
  );
}
