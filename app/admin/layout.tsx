import type { Metadata } from 'next';
import AdminNavbar from './AdminNavbar';

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
      <AdminNavbar />
      {children}
    </div>
  );
}
