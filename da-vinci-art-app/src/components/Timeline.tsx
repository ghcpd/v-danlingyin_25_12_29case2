import React from 'react';
import { Artwork } from '../types';
import styles from '../styles/components/Timeline.module.css';

interface TimelineProps {
  artworks: Artwork[];
}

const Timeline: React.FC<TimelineProps> = ({ artworks }) => {
  const sorted = [...artworks].sort((a, b) => a.year - b.year);
  return (
    <section className={`card-surface ${styles.timeline}`}>
      <h2 className="section-title">Timeline of Works</h2>
      {sorted.map((art) => (
        <div key={art.id} className={styles.item}>
          <strong>{art.year}</strong> — {art.title} ({art.period})
        </div>
      ))}
    </section>
  );
};

export default Timeline;
