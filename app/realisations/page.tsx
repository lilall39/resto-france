import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
import CTA from '@/components/CTA';
import { realisationsHero, realisationsList, realisationsCta, realisationsMeta } from '@/data/realisations';
import type { ProjectData } from '@/data/types';

export const metadata: Metadata = {
  title: realisationsMeta.title,
  description: realisationsMeta.description,
  openGraph: { title: realisationsMeta.title, description: realisationsMeta.description },
  twitter: { card: 'summary_large_image', title: realisationsMeta.title, description: realisationsMeta.description },
};

function ProjectCard({ project }: { project: ProjectData }) {
  const cardData = {
    title: project.title,
    text: `${project.category}${project.location ? ` · ${project.location}` : ''}${project.year ? ` · ${project.year}` : ''}. ${project.description}`,
    image: project.image,
    imageAlt: project.imageAlt,
  };
  return <Card data={cardData} />;
}

export default function RealisationsPage() {
  return (
    <>
      <Hero data={realisationsHero} compact />
      <section className="section-padding bg-background" aria-labelledby="realisations-title">
        <div className="container mx-auto px-4">
          <h2 id="realisations-title" className="font-display text-2xl md:text-3xl text-text text-center mb-10">
            Nos références
          </h2>
          <Grid cols={3}>
            {realisationsList.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>
        </div>
      </section>
      <CTA data={realisationsCta} variant="secondary" />
    </>
  );
}
