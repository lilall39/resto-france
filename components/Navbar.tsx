'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteName, navLinks } from '@/data/common';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-muted">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16 md:h-18" aria-label="Navigation principale">
        <Link href="/" className="font-display text-xl font-semibold text-text hover:text-primary transition-colors">
          {siteName}
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-text/90 hover:text-primary font-body text-sm transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-text hover:bg-muted aria-expanded={open}"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? 'Fermer' : 'Menu'}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`md:hidden border-t border-muted bg-background ${open ? 'block' : 'hidden'}`}
        role="dialog"
        aria-label="Menu mobile"
      >
        <ul className="container mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 px-4 rounded-lg text-text hover:bg-muted hover:text-primary font-body transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
