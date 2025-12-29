import React from 'react';
import { Artwork } from '../types';
import ArtworkCard from './ArtworkCard';
import SearchBar from './SearchBar';
import FilterPanel, { FilterChange } from './FilterPanel';
import styles from '../styles/components/ArtworkGallery.module.css';

interface ArtworkGalleryProps {
  artworks: Artwork[];
  onFilterChange: (change: FilterChange) => void;
  onSortChange: (field: 'title' | 'year', order: 'asc' | 'desc') => void;
  filters: { searchTerm?: string; sortField?: 'title' | 'year'; sortOrder?: 'asc' | 'desc' };
}

const ArtworkGallery: React.FC<ArtworkGalleryProps> = ({ artworks, onFilterChange, onSortChange, filters }) => {
  return (
    <section className={styles.gallery}>
      <div className={styles.controls}>
        <SearchBar
          value={filters.searchTerm || ''}
          onChange={(value) => onFilterChange({ searchTerm: value })}
          placeholder="Search by title or description"
        />
        <FilterPanel onChange={onFilterChange} onSortChange={onSortChange} />
      </div>
      <div className="grid grid-3">
        {artworks.map((art) => (
          <ArtworkCard key={art.id} artwork={art} />
        ))}
        {artworks.length === 0 && <p>No artworks match the current filters.</p>}
      </div>
    </section>
  );
};

export default ArtworkGallery;
