# Da Vinci Art History Web App

A React + TypeScript single-page experience to explore Leonardo da Vinci's biography and artworks. Features search, filter, sort, routing, and responsive layout using a custom webpack build.

## Tech Stack
- React 18, TypeScript, React Router 6
- Webpack + ts-loader, CSS modules
- Testing via custom Node scripts and @testing-library/react for render smoke tests

## Project Structure
```
da-vinci-art-app/
  public/index.html
  src/
    components/ (Header, Footer, Layout, ArtworkCard, ArtworkGallery, ArtworkDetail, SearchBar, FilterPanel, ArtistBio, Timeline, NotFound)
    pages/ (HomePage, GalleryPage, ArtworkDetailPage, BioPage, ContactPage)
    data/data.json
    types/ (artwork.ts)
    hooks/ (useArtworks.ts, useSearch.ts)
    utils/ (dataLoader.ts, filters.ts)
    styles/ (global + module CSS)
  test_*.js (7 tests)
  test_runner.js
  auto_test.js
  package.json
  tsconfig.json
  webpack.config.js
```

## Setup
```bash
npm install
npm run dev
```
App served at http://localhost:3000.

## Scripts
- `npm run dev` – webpack dev server with history API fallback
- `npm run build` – production bundle
- `npm run type-check` – TypeScript `--noEmit`
- `npm run test` – run `test_runner.js`
- `npm run auto-test` – install (if needed), type-check, run all tests, log to logs/auto_test_run.log

## Data Format
`src/data/data.json` contains `artist`, `artworks[]`, and supporting lists. Types in `src/types/artwork.ts`.

## Components Overview
- Layout: Header, Footer, Layout
- Feature: ArtworkCard, ArtworkGallery, ArtworkDetail, SearchBar, FilterPanel
- Additional: ArtistBio, Timeline, NotFound
- Pages: HomePage, GalleryPage, ArtworkDetailPage, BioPage, ContactPage

## Testing
```bash
npm run test     # sequential custom tests
npm run auto-test
```
Logs written to `logs/test_results.log` and `logs/auto_test_run.log`.

## Verification Checklist
- Routing: /, /gallery, /artwork/:id, /bio, /contact
- Search/filter/sort in Gallery
- Data loads from data.json (no hardcoding)
- Responsive styles with 320/480/768/1024 breakpoints
- TypeScript strict, no `any`
- Tests pass and no console errors

## Known Limitations
- Minimal visual assets (uses placeholders from data paths)
- Basic form validation in filters
- Timeline uses artwork years only

## ASCII UI Sketch
```
+--------------------------------------------------+
| Header: Da Vinci Art History | Home | Gallery ...|
+--------------------------------------------------+
| Hero card: intro text                            |
| Featured grid: [Mona Lisa][Last Supper][Virgin]  |
| Biography card                                   |
| Timeline list                                    |
+--------------------------------------------------+
| Footer links                                     |
+--------------------------------------------------+
```
