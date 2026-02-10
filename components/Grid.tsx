import { type ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  /** Nombre de colonnes : 1, 2 ou 3 (desktop). Par défaut 3. */
  cols?: 1 | 2 | 3;
  className?: string;
}

export default function Grid({ children, cols = 3, className = '' }: GridProps) {
  const gridCols =
    cols === 1
      ? 'grid-cols-1'
      : cols === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid ${gridCols} gap-6 lg:gap-8 ${className}`}>
      {children}
    </div>
  );
}
