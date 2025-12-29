import React from 'react';
import { Artwork } from '../types';
import styles from '../styles/components/ArtworkDetail.module.css';

interface ArtworkDetailProps {
  artwork: Artwork;
}

const ArtworkDetail: React.FC<ArtworkDetailProps> = ({ artwork }) => {
  return (
    <article className={`card-surface ${styles.detail}`}>
      <h1 className="section-title">{artwork.title}</h1>
      <div className={styles.meta}>
        <span>{artwork.year}{artwork.yearEnd && artwork.yearEnd !== artwork.year ? `–${artwork.yearEnd}` : ''}</span>
        <span>•</span>
        <span>{artwork.medium}</span>
        <span>•</span>
        <span>{artwork.dimensions}</span>
        <span>•</span>
        <span>{artwork.location}</span>
      </div>
      <p>{artwork.description}</p>
      <div className={styles.section}>
        <strong>Period:</strong> {artwork.period}
      </div>
      <div className={styles.section}>
        <strong>Significance:</strong> {artwork.significance}
      </div>
      <div className={styles.section}>
        <strong>Tags:</strong> {artwork.tags.join(', ')}
      </div>
    </article>
  );
};

export default ArtworkDetail;
