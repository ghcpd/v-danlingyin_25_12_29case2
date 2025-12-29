import React from 'react';
import { ArtworkData } from '../types';
import ArtworkCard from '../components/ArtworkCard';
import ArtistBio from '../components/ArtistBio';
import Timeline from '../components/Timeline';

interface HomePageProps {
  data: ArtworkData;
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const featured = data.artworks.slice(0, 3);
  return (
    <div className="grid" style={{ gap: 16 }}>
      <section className="card-surface" style={{ padding: 18 }}>
        <h1 className="section-title">Da Vinci Art History</h1>
        <p>
          Explore the life and works of Leonardo da Vinci. Discover masterpieces, trace his timeline, and learn how art and
          science fused in the Renaissance.
        </p>
      </section>
      <section className="grid" style={{ gap: 12 }}>
        <h2 className="section-title">Featured Works</h2>
        <div className="grid grid-3">
          {featured.map((art) => (
            <ArtworkCard key={art.id} artwork={art} />
          ))}
        </div>
      </section>
      <ArtistBio artist={data.artist} />
      <Timeline artworks={data.artworks} />
    </div>
  );
};

export default HomePage;
