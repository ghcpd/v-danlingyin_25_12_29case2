import React from 'react';
import { ArtworkData } from '../types';
import ArtistBio from '../components/ArtistBio';
import Timeline from '../components/Timeline';

interface BioPageProps {
  data: ArtworkData;
}

const BioPage: React.FC<BioPageProps> = ({ data }) => {
  return (
    <div className="grid" style={{ gap: 16 }}>
      <h1 className="section-title">Biography</h1>
      <ArtistBio artist={data.artist} />
      <Timeline artworks={data.artworks} />
    </div>
  );
};

export default BioPage;
