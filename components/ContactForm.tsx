'use client';

import { useState } from 'react';
import { contactFormLabels, contactSubjects } from '@/data/contact';
import { contactInfo } from '@/data/common';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('success');
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <div>
        <h2 id="contact-title" className="font-display text-2xl md:text-3xl text-text">
          Envoyez-nous un message
        </h2>
        <p className="mt-3 text-text/80 font-body">
          Remplissez le formulaire ou utilisez directement les coordonnées ci-dessous.
        </p>
        <address className="mt-6 not-italic text-text/90 font-body space-y-2">
          <p>{contactInfo.address}</p>
          <p>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-primary hover:underline">
              {contactInfo.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
              {contactInfo.email}
            </a>
          </p>
          {contactInfo.hours && <p>{contactInfo.hours}</p>}
        </address>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-body text-sm font-medium text-text mb-1">
            {contactFormLabels.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-muted bg-white text-text font-body focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[44px]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-body text-sm font-medium text-text mb-1">
            {contactFormLabels.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-muted bg-white text-text font-body focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[44px]"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-body text-sm font-medium text-text mb-1">
            {contactFormLabels.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-3 rounded-lg border border-muted bg-white text-text font-body focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[44px]"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block font-body text-sm font-medium text-text mb-1">
            {contactFormLabels.subject}
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full px-4 py-3 rounded-lg border border-muted bg-white text-text font-body focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[44px]"
          >
            {contactSubjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block font-body text-sm font-medium text-text mb-1">
            {contactFormLabels.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 rounded-lg border border-muted bg-white text-text font-body focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-y"
          />
        </div>
        {status === 'success' && (
          <p className="text-green-700 font-body text-sm" role="status">
            {contactFormLabels.success}
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-700 font-body text-sm" role="alert">
            {contactFormLabels.error}
          </p>
        )}
        <button
          type="submit"
          className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-body font-medium px-6 py-3 rounded-lg transition-colors min-h-[44px] min-w-[120px]"
        >
          {contactFormLabels.submit}
        </button>
      </form>
    </div>
  );
}
