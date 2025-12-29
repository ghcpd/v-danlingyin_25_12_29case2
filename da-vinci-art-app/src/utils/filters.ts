import { Artwork, Significance } from '../types';

export type SortField = 'title' | 'year';
export type SortOrder = 'asc' | 'desc';

export interface FilterOptions {
  searchTerm?: string;
  medium?: string;
  location?: string;
  period?: string;
  significance?: Significance | '';
  yearRange?: { min?: number; max?: number };
  sortField?: SortField;
  sortOrder?: SortOrder;
}

const normalize = (value: string) => value.toLowerCase();

export const filterArtworks = (artworks: Artwork[], options: FilterOptions): Artwork[] => {
  const {
    searchTerm = '',
    medium = '',
    location = '',
    period = '',
    significance = '',
    yearRange,
  } = options;

  return artworks.filter((artwork) => {
    const matchesSearch = searchTerm
      ? normalize(artwork.title).includes(normalize(searchTerm)) ||
        normalize(artwork.description).includes(normalize(searchTerm))
      : true;
    const matchesMedium = medium ? normalize(artwork.medium) === normalize(medium) : true;
    const matchesLocation = location ? normalize(artwork.location) === normalize(location) : true;
    const matchesPeriod = period ? normalize(artwork.period) === normalize(period) : true;
    const matchesSignificance = significance
      ? normalize(artwork.significance) === normalize(significance)
      : true;
    const matchesYear = yearRange
      ? (typeof yearRange.min === 'number' ? artwork.year >= yearRange.min : true) &&
        (typeof yearRange.max === 'number' ? artwork.year <= yearRange.max : true)
      : true;

    return matchesSearch && matchesMedium && matchesLocation && matchesPeriod && matchesSignificance && matchesYear;
  });
};

export const sortArtworks = (
  artworks: Artwork[],
  sortField: SortField = 'title',
  sortOrder: SortOrder = 'asc'
): Artwork[] => {
  const sorted = [...artworks].sort((a, b) => {
    const direction = sortOrder === 'asc' ? 1 : -1;
    if (sortField === 'title') {
      return a.title.localeCompare(b.title) * direction;
    }
    return (a.year - b.year) * direction;
  });

  return sorted;
};
