import React from 'react';
import { Artist } from '../types';
import styles from '../styles/components/ArtistBio.module.css';

interface ArtistBioProps {
  artist: Artist;
}

const ArtistBio: React.FC<ArtistBioProps> = ({ artist }) => {
  return (
    <section className={`card-surface ${styles.bio}`}>
      <h2 className="section-title">About Leonardo da Vinci</h2>
      <p>{artist.biography}</p>
      <div className={styles.timeline}>
        {artist.notablePeriods.map((period) => (
          <div key={period.period} className={styles.period}>
            <strong>{period.period}</strong> — {period.location}
            <div>{period.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistBio;
