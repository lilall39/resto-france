'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { adminEditablePages } from '@/data/admin';
import { realisationsList } from '@/data/realisations';
import { contactInfo } from '@/data/common';

const ADMIN_PASSWORD_PLACEHOLDER = 'admin'; // À remplacer par variable d'environnement en prod

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'textes' | 'images' | 'realisations'>('textes');

  useEffect(() => {
    const stored = typeof window !== 'undefined' && sessionStorage.getItem('admin_auth');
    if (stored === 'true') setAuthenticated(true);
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (password === ADMIN_PASSWORD_PLACEHOLDER) {
      setAuthenticated(true);
      if (typeof window !== 'undefined') sessionStorage.setItem('admin_auth', 'true');
    } else {
      setError('Mot de passe incorrect.');
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    if (typeof window !== 'undefined') sessionStorage.removeItem('admin_auth');
  }

  if (!authenticated) {
    return (
      <div className="max-w-sm mx-auto px-4 py-16">
        <h1 className="font-display text-2xl text-text mb-4">Espace admin</h1>
        <p className="font-body text-text/80 text-sm mb-6">
          Connexion placeholder. En production, brancher une vraie authentification.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="password" className="block font-body text-sm font-medium text-text mb-1">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-muted bg-white text-text font-body min-h-[44px]"
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-red-600 text-sm font-body">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white font-body font-medium py-3 rounded-lg min-h-[44px]"
          >
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-text/60 text-xs font-body">
          Mot de passe de démo : admin
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h1 className="font-display text-2xl text-text">Administration</h1>
        <button
          type="button"
          onClick={handleLogout}
          className="text-primary hover:underline font-body text-sm"
        >
          Se déconnecter
        </button>
      </div>

      <nav className="flex gap-2 border-b border-muted mb-8" aria-label="Sections admin">
        {(['textes', 'images', 'realisations'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-body text-sm rounded-t-lg transition-colors ${
              activeTab === tab ? 'bg-white border border-b-0 border-muted text-primary' : 'text-text/70 hover:text-text'
            }`}
          >
            {tab === 'textes' && 'Textes'}
            {tab === 'images' && 'Images'}
            {tab === 'realisations' && 'Réalisations'}
          </button>
        ))}
      </nav>

      {activeTab === 'textes' && (
        <section aria-labelledby="textes-title">
          <h2 id="textes-title" className="font-display text-xl text-text mb-4">
            Pages modifiables
          </h2>
          <p className="font-body text-text/80 text-sm mb-6">
            Les textes sont centralisés dans le dossier <code className="bg-muted px-1 rounded">/data</code>. Modifiez les fichiers correspondants puis rechargez le site. Une API pourra remplacer cette étape plus tard.
          </p>
          <ul className="space-y-2">
            {adminEditablePages.map((page) => (
              <li key={page.id}>
                <Link href={page.href ?? `/${page.id}`} className="text-primary hover:underline font-body">
                  {page.name}
                </Link>
                <span className="text-text/60 text-sm ml-2">({page.href || `/${page.id}`})</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-white rounded-lg border border-muted">
            <h3 className="font-display text-lg text-text">Coordonnées globales</h3>
            <p className="font-body text-sm text-text/80 mt-1">Fichier : <code className="bg-muted px-1 rounded">data/common.ts</code></p>
            <dl className="mt-3 space-y-1 text-sm font-body">
              <dt className="text-text/60">Téléphone</dt>
              <dd>{contactInfo.phone}</dd>
              <dt className="text-text/60 mt-2">Email</dt>
              <dd>{contactInfo.email}</dd>
              <dt className="text-text/60 mt-2">Adresse</dt>
              <dd>{contactInfo.address}</dd>
            </dl>
          </div>
        </section>
      )}

      {activeTab === 'images' && (
        <section aria-labelledby="images-title">
          <h2 id="images-title" className="font-display text-xl text-text mb-4">
            Remplacer les images
          </h2>
          <p className="font-body text-text/80 text-sm mb-6">
            Les URLs des images sont définies dans chaque fichier du dossier <code className="bg-muted px-1 rounded">/data</code> (ex. <code className="bg-muted px-1 rounded">home.ts</code>, <code className="bg-muted px-1 rounded">realisations.ts</code>). Utilisez des URLs Unsplash, Pexels ou hébergez vos images dans <code className="bg-muted px-1 rounded">/public</code> et référencez-les par <code className="bg-muted px-1 rounded">/nom-fichier.jpg</code>. Next.js accepte les domaines configurés dans <code className="bg-muted px-1 rounded">next.config.js</code>.
          </p>
        </section>
      )}

      {activeTab === 'realisations' && (
        <section aria-labelledby="realisations-title">
          <h2 id="realisations-title" className="font-display text-xl text-text mb-4">
            Projets (Réalisations)
          </h2>
          <p className="font-body text-text/80 text-sm mb-6">
            Les réalisations sont définies dans <code className="bg-muted px-1 rounded">data/realisations.ts</code>. Structure : id, title, category, description, image, imageAlt, location, year. Pour une gestion dynamique plus tard, prévoir une API ou Firebase et remplacer l’import par un appel (hook/context) sans changer les composants.
          </p>
          <ul className="space-y-3">
            {realisationsList.map((p) => (
              <li key={p.id} className="p-4 bg-white rounded-lg border border-muted">
                <p className="font-display font-medium text-text">{p.title}</p>
                <p className="font-body text-sm text-text/70">{p.category} · {p.location} · {p.year}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
