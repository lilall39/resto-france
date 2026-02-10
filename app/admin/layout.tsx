import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin – Resto France',
  description: 'Espace d’administration du site.',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-secondary text-white py-3 px-4 flex items-center justify-between">
        <span className="font-display font-semibold">Admin Resto France</span>
        <Link
          href="/"
          className="text-white/90 hover:text-white text-sm font-body"
        >
          ← Retour au site
        </Link>
      </header>
      {children}
    </div>
  );
}
