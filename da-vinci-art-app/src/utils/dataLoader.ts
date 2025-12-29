import data from '../data/data.json';
import { Artwork, ArtworkData } from '../types';

export const loadData = (): ArtworkData => data as ArtworkData;

export const getArtworkById = (artworks: Artwork[], id: number): Artwork | undefined =>
  artworks.find((artwork) => artwork.id === id);
