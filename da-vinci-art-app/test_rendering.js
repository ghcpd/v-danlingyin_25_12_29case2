require('ts-node/register');
require('jsdom-global')();
const React = require('react');
const { render } = require('@testing-library/react');
const data = require('./src/data/data.json');
const Header = require('./src/components/Header').default;
const Footer = require('./src/components/Footer').default;
const ArtworkCard = require('./src/components/ArtworkCard').default;
const ArtworkGallery = require('./src/components/ArtworkGallery').default;
const ArtistBio = require('./src/components/ArtistBio').default;

try {
  render(React.createElement(Header));
  render(React.createElement(Footer));
  render(React.createElement(ArtworkCard, { artwork: data.artworks[0] }));
  render(
    React.createElement(ArtworkGallery, {
      artworks: data.artworks,
      onFilterChange: () => {},
      onSortChange: () => {},
      filters: {},
    })
  );
  render(React.createElement(ArtistBio, { artist: data.artist }));
  console.log('test_rendering.js — PASS');
} catch (err) {
  console.error('test_rendering.js — FAIL');
  console.error(err);
  process.exit(1);
}
