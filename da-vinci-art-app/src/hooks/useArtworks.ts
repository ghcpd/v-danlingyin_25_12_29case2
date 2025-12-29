import { useMemo, useState } from 'react';
import { ArtworkData } from '../types';
import { filterArtworks, FilterOptions, sortArtworks, SortField, SortOrder } from '../utils/filters';

export interface GalleryFilters extends FilterOptions {}

export const useArtworks = (data: ArtworkData) => {
  const [filters, setFilters] = useState<GalleryFilters>({
    searchTerm: '',
    medium: '',
    location: '',
    period: '',
    significance: '',
    yearRange: { min: undefined, max: undefined },
    sortField: 'title',
    sortOrder: 'asc',
  });

  const updateFilters = (next: Partial<GalleryFilters>) => {
    setFilters((current) => ({ ...current, ...next }));
  };

  const resetFilters = () => {
    setFilters({
      searchTerm: '',
      medium: '',
      location: '',
      period: '',
      significance: '',
      yearRange: { min: undefined, max: undefined },
      sortField: 'title',
      sortOrder: 'asc',
    });
  };

  const filteredArtworks = useMemo(() => {
    const filtered = filterArtworks(data.artworks, filters);
    return sortArtworks(filtered, (filters.sortField as SortField) || 'title', (filters.sortOrder as SortOrder) || 'asc');
  }, [data.artworks, filters]);

  return {
    filters,
    updateFilters,
    resetFilters,
    filteredArtworks,
    data,
  };
};
