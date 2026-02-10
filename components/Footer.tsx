import Link from 'next/link';
import { siteName, contactInfo, footerLinks } from '@/data/common';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Marque */}
          <div>
            <p className="font-display text-xl font-semibold mb-4">{siteName}</p>
            <p className="text-white/80 text-sm font-body">
              Mobilier, vaisselle et aménagement pour professionnels de la restauration.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-white/90">
              Solutions
            </h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-white/90">
              Entreprise
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <address className="text-white/80 text-sm font-body not-italic space-y-1">
              <p>{contactInfo.address}</p>
              <p>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </p>
              {contactInfo.hours && <p>{contactInfo.hours}</p>}
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} {siteName}. Tous droits réservés.
          </p>
          <ul className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
