import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArtworkData } from '../types';
import { getArtworkById } from '../utils/dataLoader';
import ArtworkDetail from '../components/ArtworkDetail';
import NotFound from '../components/NotFound';

interface ArtworkDetailPageProps {
  data: ArtworkData;
}

const ArtworkDetailPage: React.FC<ArtworkDetailPageProps> = ({ data }) => {
  const params = useParams();
  const id = Number(params.id);
  const artwork = getArtworkById(data.artworks, id);

  if (!artwork) {
    return <NotFound />;
  }

  return (
    <div className="grid" style={{ gap: 12 }}>
      <Link to="/gallery">← Back to gallery</Link>
      <ArtworkDetail artwork={artwork} />
    </div>
  );
};

export default ArtworkDetailPage;
