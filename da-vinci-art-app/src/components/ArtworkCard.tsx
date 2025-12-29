import React from 'react';
import { Link } from 'react-router-dom';
import { Artwork } from '../types';
import styles from '../styles/components/ArtworkCard.module.css';

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  return (
    <article className={`card-surface ${styles.card}`}>
      <div className={styles.title}>{artwork.title}</div>
      <div className={styles.meta}>
        <span>{artwork.year}</span>
        <span>•</span>
        <span>{artwork.medium}</span>
        <span>•</span>
        <span>{artwork.location}</span>
      </div>
      <p>{artwork.description.slice(0, 160)}...</p>
      <div className={styles.tags}>
        {artwork.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <Link className={styles.link} to={`/artwork/${artwork.id}`}>
        View details →
      </Link>
    </article>
  );
};

export default ArtworkCard;
