import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { contactHero, contactMeta } from '@/data/contact';

export const metadata: Metadata = {
  title: contactMeta.title,
  description: contactMeta.description,
  openGraph: { title: contactMeta.title, description: contactMeta.description },
  twitter: { card: 'summary_large_image', title: contactMeta.title, description: contactMeta.description },
};

export default function ContactPage() {
  return (
    <>
      <Hero data={contactHero} compact />
      <section className="section-padding bg-background" aria-labelledby="contact-title">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
