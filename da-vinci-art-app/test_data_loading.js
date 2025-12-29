const data = require('./src/data/data.json');

const hasArtworks = Array.isArray(data.artworks) && data.artworks.length >= 1;
const hasArtist = data.artist && typeof data.artist.name === 'string';

const invalidArtwork = data.artworks.find(
  (a) => !(a.id && a.title && a.year && a.medium && a.description && a.location && a.imageUrl)
);

if (!hasArtworks || !hasArtist || invalidArtwork) {
  console.error('test_data_loading.js — FAIL');
  process.exit(1);
}

console.log('test_data_loading.js — PASS');
