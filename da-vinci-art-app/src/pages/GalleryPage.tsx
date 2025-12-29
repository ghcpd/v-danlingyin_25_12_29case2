import React from 'react';
import { ArtworkData } from '../types';
import { useArtworks } from '../hooks/useArtworks';
import ArtworkGallery from '../components/ArtworkGallery';

interface GalleryPageProps {
  data: ArtworkData;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ data }) => {
  const { filteredArtworks, updateFilters, filters } = useArtworks(data);

  return (
    <div className="grid" style={{ gap: 16 }}>
      <h1 className="section-title">Gallery</h1>
      <ArtworkGallery
        artworks={filteredArtworks}
        onFilterChange={updateFilters}
        onSortChange={(field, order) => updateFilters({ sortField: field, sortOrder: order })}
        filters={filters}
      />
    </div>
  );
};

export default GalleryPage;
