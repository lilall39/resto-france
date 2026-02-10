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
      <section className="pt-6 md:pt-8 pb-16 md:pb-24 bg-background [&_button]:!py-4 [&_button]:!text-lg [&_button]:!min-h-[48px] [&_button]:!font-semibold" aria-labelledby="contact-title">
        <div className="container mx-auto px-4 max-w-6xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
