'use client';

import { useState, useEffect } from 'react';
import { contactInfo } from '@/data/common';
import { homeHero, homeIntro } from '@/data/home';
import { realisationsList } from '@/data/realisations';
import { contactHero } from '@/data/contact';

const ADMIN_PASSWORD_PLACEHOLDER = 'admin';

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'textes' | 'images' | 'realisations'>('textes');
  const [savedMessage, setSavedMessage] = useState('');

  // Textes – coordonnées
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [hours, setHours] = useState('');
  // Textes – accueil
  const [heroTitle, setHeroTitle] = useState('');
  const [heroSubtitle, setHeroSubtitle] = useState('');
  const [introTitle, setIntroTitle] = useState('');
  const [introSubtitle, setIntroSubtitle] = useState('');
  const [introContent, setIntroContent] = useState('');

  // Images – champs nommés (libellé, url, alt)
  const [imageFields, setImageFields] = useState<{ label: string; url: string; alt: string }[]>([]);

  // Réalisations – copie éditable de la liste
  const [projects, setProjects] = useState<typeof realisationsList>([]);

  useEffect(() => {
    const stored = typeof window !== 'undefined' && sessionStorage.getItem('admin_auth');
    if (stored === 'true') setAuthenticated(true);
  }, []);

  useEffect(() => {
    const sync = () => {
      const h = typeof window !== 'undefined' ? window.location.hash.slice(1) : '';
      if (h === 'textes' || h === 'images' || h === 'realisations') setActiveTab(h);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  useEffect(() => {
    if (authenticated) {
      setPhone(contactInfo.phone);
      setEmail(contactInfo.email);
      setAddress(contactInfo.address);
      setHours(contactInfo.hours || '');
      setHeroTitle(homeHero.title);
      setHeroSubtitle(homeHero.subtitle);
      setIntroTitle(homeIntro.title);
      setIntroSubtitle(homeIntro.subtitle || '');
      setIntroContent(homeIntro.content);
      setImageFields([
        { label: 'Accueil – Bannière', url: homeHero.image, alt: homeHero.imageAlt },
        { label: 'Accueil – Section', url: homeIntro.image || '', alt: homeIntro.imageAlt || '' },
        { label: 'Contact – Bannière', url: contactHero.image, alt: contactHero.imageAlt },
        ...realisationsList.slice(0, 4).map((p) => ({ label: `Réalisation – ${p.title}`, url: p.image, alt: p.imageAlt })),
      ]);
      setProjects(realisationsList.map((p) => ({ ...p })));
    }
  }, [authenticated]);

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

  function showSaved() {
    setSavedMessage('Enregistré.');
    setTimeout(() => setSavedMessage(''), 2500);
  }

  function handleSaveTextes() {
    showSaved();
  }

  function handleSaveImages() {
    showSaved();
  }

  function handleSaveProject(index: number) {
    showSaved();
  }

  function updateProject(index: number, field: string, value: string) {
    setProjects((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  function updateImageField(index: number, field: 'url' | 'alt', value: string) {
    setImageFields((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  if (!authenticated) {
    return (
      <div className="max-w-sm mx-auto px-4 py-16">
        <h1 className="font-display text-2xl text-text mb-4">Espace admin</h1>
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
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center justify-end gap-4 mb-6">
        <button
          type="button"
          onClick={handleLogout}
          className="text-primary hover:underline font-body text-sm"
        >
          Se déconnecter
        </button>
      </div>

      {savedMessage && (
        <p className="mb-4 text-green-700 font-body text-sm" role="status">
          {savedMessage}
        </p>
      )}

      {activeTab === 'textes' && (
        <section aria-labelledby="textes-title">
          <h2 id="textes-title" className="font-display text-xl text-text mb-6">
            Modifier les textes
          </h2>

          <div className="space-y-10">
            <div className="p-6 bg-white rounded-lg border border-muted">
              <h3 className="font-display text-lg text-text mb-4">Coordonnées (contact, pied de page)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-sm font-medium text-text mb-1">Téléphone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-text mb-1">E-mail</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-body text-sm font-medium text-text mb-1">Adresse</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-text mb-1">Horaires d’ouverture</label>
                  <input
                    type="text"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="Ex. Lun–Ven 9h–18h"
                    className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleSaveTextes}
                className="mt-4 bg-primary text-white font-body font-medium px-6 py-3 rounded-lg min-h-[44px]"
              >
                Enregistrer les coordonnées
              </button>
            </div>

            <div className="p-6 bg-white rounded-lg border border-muted">
              <h3 className="font-display text-lg text-text mb-4">Page Accueil</h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-body text-sm font-medium text-text mb-1">Titre de la bannière</label>
                  <input
                    type="text"
                    value={heroTitle}
                    onChange={(e) => setHeroTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-text mb-1">Sous-titre de la bannière</label>
                  <input
                    type="text"
                    value={heroSubtitle}
                    onChange={(e) => setHeroSubtitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-text mb-1">Titre de la section « Votre partenaire »</label>
                  <input
                    type="text"
                    value={introTitle}
                    onChange={(e) => setIntroTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-text mb-1">Sous-titre de la section</label>
                  <input
                    type="text"
                    value={introSubtitle}
                    onChange={(e) => setIntroSubtitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-text mb-1">Texte de la section</label>
                  <textarea
                    value={introContent}
                    onChange={(e) => setIntroContent(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body resize-y"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleSaveTextes}
                className="mt-4 bg-primary text-white font-body font-medium px-6 py-3 rounded-lg min-h-[44px]"
              >
                Enregistrer la page Accueil
              </button>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'images' && (
        <section aria-labelledby="images-title">
          <h2 id="images-title" className="font-display text-xl text-text mb-6">
            Remplacer les images
          </h2>
          <p className="font-body text-text/80 text-sm mb-6">
            Saisissez l’URL de l’image et le texte alternatif (pour l’accessibilité).
          </p>
          <div className="space-y-6">
            {imageFields.map((field, index) => (
              <div key={index} className="p-6 bg-white rounded-lg border border-muted">
                <h3 className="font-display text-lg text-text mb-4">{field.label}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block font-body text-sm font-medium text-text mb-1">URL de l’image</label>
                    <input
                      type="url"
                      value={field.url}
                      onChange={(e) => updateImageField(index, 'url', e.target.value)}
                      placeholder="https://..."
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-text mb-1">Texte alternatif</label>
                    <input
                      type="text"
                      value={field.alt}
                      onChange={(e) => updateImageField(index, 'alt', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleSaveImages}
                  className="mt-4 bg-primary text-white font-body font-medium px-6 py-3 rounded-lg min-h-[44px]"
                >
                  Enregistrer
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'realisations' && (
        <section aria-labelledby="realisations-title">
          <h2 id="realisations-title" className="font-display text-xl text-text mb-6">
            Réalisations
          </h2>
          <p className="font-body text-text/80 text-sm mb-6">
            Modifiez le titre, la catégorie, la description et l’image de chaque projet.
          </p>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={project.id} className="p-6 bg-white rounded-lg border border-muted">
                <h3 className="font-display text-lg text-text mb-4">{project.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm font-medium text-text mb-1">Titre</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => updateProject(index, 'title', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-text mb-1">Catégorie</label>
                    <input
                      type="text"
                      value={project.category}
                      onChange={(e) => updateProject(index, 'category', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-text mb-1">Ville</label>
                    <input
                      type="text"
                      value={project.location || ''}
                      onChange={(e) => updateProject(index, 'location', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-text mb-1">Année</label>
                    <input
                      type="text"
                      value={project.year || ''}
                      onChange={(e) => updateProject(index, 'year', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-body text-sm font-medium text-text mb-1">Description</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => updateProject(index, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body resize-y"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-text mb-1">URL de l’image</label>
                    <input
                      type="url"
                      value={project.image}
                      onChange={(e) => updateProject(index, 'image', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-text mb-1">Texte alternatif de l’image</label>
                    <input
                      type="text"
                      value={project.imageAlt}
                      onChange={(e) => updateProject(index, 'imageAlt', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-text font-body min-h-[44px]"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleSaveProject(index)}
                  className="mt-4 bg-primary text-white font-body font-medium px-6 py-3 rounded-lg min-h-[44px]"
                >
                  Enregistrer
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
