export type Significance = 'Low' | 'Medium' | 'High' | 'Critical';

export interface NotablePeriod {
  period: string;
  location: string;
  description: string;
}

export interface Artist {
  name: string;
  birthYear: number;
  deathYear: number;
  birthPlace: string;
  nativePlace: string;
  biography: string;
  notablePeriods: NotablePeriod[];
}

export interface Artwork {
  id: number;
  title: string;
  year: number;
  yearEnd: number;
  medium: string;
  dimensions: string;
  description: string;
  location: string;
  imageUrl: string;
  period: string;
  significance: Significance;
  tags: string[];
}

export interface ArtworkData {
  artist: Artist;
  artworks: Artwork[];
  mediums: string[];
  locations: string[];
  periods: string[];
  significanceLevel: Significance[];
}
