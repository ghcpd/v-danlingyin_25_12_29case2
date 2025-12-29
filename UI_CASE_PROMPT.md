# UI Case: Creating a React + TypeScript Da Vinci Art History Web App from Scratch

## Prompt

You are a senior full-stack React developer and UI/UX specialist.
Your task is to create a complete, production-ready web application about Da Vinci's Art History from scratch.

The application is purely **frontend-focused** (React + TypeScript). All data will be provided in a `data.json` file.

---

## Your Responsibilities

### 1. Project Structure & Setup
- Create a complete React + TypeScript project structure (without using create-react-app or Vite scaffolding; build it manually OR using a minimal setup)
- Organize files into logical directories:
  - `src/components/` - Reusable React components
  - `src/pages/` - Page-level components
  - `src/types/` - TypeScript interfaces & types
  - `src/data/` - Data files (data.json provided)
  - `src/styles/` - CSS/styling files
  - `src/hooks/` - Custom React hooks (if needed)
  - `src/utils/` - Utility functions
- Provide `package.json` with all required dependencies
- Provide `tsconfig.json` with proper TypeScript configuration
- Provide `index.html` (entry point for the app)

### 2. Read & Parse Input Data
- Read the provided `data.json` file containing Da Vinci artwork information:
  - Artwork title, year, dimensions, medium, description
  - Artist bio and historical context
  - Artwork locations and museums
- Ensure all data is properly typed in TypeScript

### 3. UI Design & Components
Build the following components:
  
**Layout Components:**
- `Header` - Navigation bar with app title and menu
- `Footer` - Footer with copyright and links
- `Layout` - Main layout wrapper

**Feature Components:**
- `ArtworkCard` - Displays individual artwork with image placeholder, title, year, medium
- `ArtworkGallery` - Grid layout displaying multiple artworks with filtering/sorting
- `ArtworkDetail` - Detailed page for single artwork (image, full description, metadata)
- `ArtistBio` - Artist biography section with timeline or key achievements
- `SearchBar` - Search functionality to filter artworks by title, year, medium
- `FilterPanel` - Filter by year range, medium type, location/museum
- `Timeline` - Visual timeline of Da Vinci's major works (optional but valued)
- `NotFound` - 404 page for invalid routes

**Pages:**
- `HomePage` - Landing page with introduction, featured artworks, artist highlights
- `GalleryPage` - Full gallery with filtering, sorting, search
- `ArtworkDetailPage` - Individual artwork detail view
- `BioPage` - Dedicated artist biography and timeline page
- `ContactPage` (optional) - Contact/about section

### 4. Core Features
- **Navigation:** React Router for client-side navigation between pages
- **Search:** Filter artworks by title (real-time search)
- **Filtering:** Filter by year range, medium, location
- **Sorting:** Sort by title, year (ascending/descending)
- **Responsive Design:** Mobile, tablet, desktop layouts (use CSS media queries or a minimal CSS framework)
- **TypeScript Strict Mode:** All components fully typed with no `any` types
- **State Management:** Use React hooks (useState, useContext) for state (no external libraries required)
- **Data Loading:** Properly parse and load `data.json`

### 5. Styling & UX
- **Visual Design:** Clean, professional theme appropriate for art history (use a cohesive color palette)
- **Responsive Layout:** Flexbox/Grid for layouts; responsive design patterns
- **Component Styling:** CSS modules OR inline styles (prefer CSS modules for maintainability)
- **Visual Polish:** Hover effects, transitions, smooth interactions
- **Accessibility:** Semantic HTML, alt text for images, proper heading hierarchy
- **No External UI Libraries Required:** Build components from scratch (BUT using a minimal CSS framework like Tailwind is acceptable if you prefer)

### 6. Testing & Validation
**Create the following test files:**

**test_structure.js**
- Validates project folder structure (components, pages, types, data directories exist)
- Checks for required files: package.json, tsconfig.json, index.html, App.tsx
- Returns PASS/FAIL with missing files listed

**test_typescript.js**
- Runs TypeScript compiler (`tsc --noEmit`) to check for type errors
- Reports any compilation errors with line numbers
- Returns PASS if no errors, FAIL with error count if issues exist

**test_components.js**
- Validates all required components are exported correctly
- Checks component prop types are properly defined
- Verifies no `any` types in component signatures
- Returns PASS if all components properly typed, FAIL with list of issues

**test_rendering.js**
- Tests that components render without crashing
- Uses a minimal React testing setup (React Test Library or Node-based import)
- Validates key components: Header, Footer, ArtworkCard, ArtworkGallery, ArtistBio
- Returns PASS/FAIL for each component

**test_data_loading.js**
- Verifies data.json is properly loaded and parsed
- Checks data structure matches TypeScript interfaces
- Validates all required fields present
- Returns PASS if data loads correctly, FAIL with missing/invalid fields

**test_routing.js**
- Validates React Router is properly configured
- Checks all expected routes exist: /, /gallery, /artwork/:id, /bio, /contact (if included)
- Returns PASS/FAIL for each route

**test_responsive.js**
- Validates CSS media queries are present and correct breakpoints defined
- Checks layout adapts to mobile (320px), tablet (768px), desktop (1024px)
- Returns PASS if responsive patterns found, FAIL otherwise

### 7. Test Runner — test_runner.js
- Runs all 7 test files sequentially
- Logs results to `logs/test_results.log` with timestamp
- Outputs a summary:
  ```
  Test Results Summary
  =====================================
  ✅ test_structure.js — PASS
  ✅ test_typescript.js — PASS
  ✅ test_components.js — PASS
  ✅ test_rendering.js — PASS
  ✅ test_data_loading.js — PASS
  ✅ test_routing.js — PASS
  ✅ test_responsive.js — PASS
  
  Overall: 7/7 PASS (100%)
  ```
- Returns exit code 0 for all PASS, 1 if any test FAILS

### 8. Auto Test Script — auto_test.js
- Detects OS (Windows vs. Linux/macOS)
- Installs dependencies if needed: `npm install`
- Runs TypeScript compilation: `npx tsc --noEmit`
- Runs test_runner.js
- Saves full output to `logs/auto_test_run.log`
- Includes timestamp and final status (PASS/FAIL)
- Returns appropriate exit code

### 9. Build & Run Scripts
Provide in `package.json`:
```json
"scripts": {
  "dev": "react-scripts start",              // OR webpack dev server
  "build": "react-scripts build",            // OR webpack build
  "test": "node test_runner.js",
  "auto-test": "node auto_test.js",
  "type-check": "tsc --noEmit"
}
```

### 10. README.md
Content must include:
- **Project Overview:** What this app does (Da Vinci Art History web app)
- **Tech Stack:** React, TypeScript, React Router, CSS/styling approach
- **Project Structure:** Folder layout and file organization
- **Setup Instructions:** How to install and run
  ```
  npm install
  npm run dev
  ```
- **Data Format:** Explanation of data.json structure
- **Components Overview:** List of all components and their purpose
- **Testing:** How to run tests
  ```
  npm test
  npm run auto-test
  ```
- **How to Read Logs:** Location of test logs and what they contain
- **How to Verify:** Steps to manually verify app works (routes, filtering, search, responsive design)
- **Known Limitations:** Any trade-offs or limitations
- **Screenshots/Demo:** ASCII art representation of expected UI layout (if no screenshots available)

---

## Input: data.json

**Provided separately.** This file contains:
- Array of artwork objects with: `id, title, year, medium, dimensions, description, location, imageUrl (placeholder)`
- Artist biography
- Historical periods/eras

**Example structure:**
```json
{
  "artist": {
    "name": "Leonardo da Vinci",
    "birthYear": 1452,
    "deathYear": 1519,
    "birthPlace": "Vinci, Italy",
    "biography": "..."
  },
  "artworks": [
    {
      "id": 1,
      "title": "Mona Lisa",
      "year": 1503,
      "medium": "Oil on poplar panel",
      "dimensions": "77 cm × 53 cm",
      "description": "...",
      "location": "Louvre Museum, Paris",
      "imageUrl": "/images/mona-lisa.jpg"
    },
    ...
  ]
}
```

---

## Expected Deliverables

### Folder Structure:
```
da-vinci-art-app/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── ArtworkCard.tsx
│   │   ├── ArtworkGallery.tsx
│   │   ├── ArtworkDetail.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterPanel.tsx
│   │   ├── ArtistBio.tsx
│   │   ├── Timeline.tsx
│   │   └── NotFound.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── ArtworkDetailPage.tsx
│   │   ├── BioPage.tsx
│   │   └── ContactPage.tsx (optional)
│   ├── types/
│   │   ├── index.ts
│   │   └── artwork.ts
│   ├── data/
│   │   └── data.json
│   ├── styles/
│   │   ├── index.css
│   │   ├── components/
│   │   │   ├── Header.module.css
│   │   │   ├── ArtworkCard.module.css
│   │   │   └── ...
│   │   └── pages/
│   │       ├── HomePage.module.css
│   │       └── ...
│   ├── hooks/
│   │   ├── useArtworks.ts (optional)
│   │   └── useSearch.ts (optional)
│   ├── utils/
│   │   ├── dataLoader.ts
│   │   └── filters.ts
│   ├── App.tsx
│   └── index.tsx
├── public/
│   ├── index.html
│   └── images/ (placeholder images)
├── package.json
├── tsconfig.json
├── test_structure.js
├── test_typescript.js
├── test_components.js
├── test_rendering.js
├── test_data_loading.js
├── test_routing.js
├── test_responsive.js
├── test_runner.js
├── auto_test.js
├── README.md
├── logs/
│   ├── test_results.log
│   └── auto_test_run.log
└── .gitignore
```

### Files to Generate:
1. ✅ All React components (TypeScript)
2. ✅ All page components
3. ✅ Type definitions (interfaces)
4. ✅ CSS files (or CSS Modules)
5. ✅ data.json (provided as input)
6. ✅ package.json
7. ✅ tsconfig.json
8. ✅ index.html
9. ✅ App.tsx (with React Router)
10. ✅ index.tsx (entry point)
11. ✅ All 7 test files
12. ✅ test_runner.js
13. ✅ auto_test.js
14. ✅ README.md
15. ✅ logs/ directory with sample test run outputs

---

## Evaluation Criteria (Weight)

| Criterion | Weight | What We Measure |
|-----------|--------|-----------------|
| **Project Structure & Organization** | 15% | Proper folder structure, file naming, separation of concerns |
| **TypeScript Implementation** | 15% | Strict types, no `any`, proper interfaces, type safety |
| **Component Quality** | 20% | All required components built, reusable, well-props typed, clean code |
| **Functionality** | 20% | Search works, filtering works, routing works, data loads correctly |
| **UI/UX Design** | 10% | Responsive design, visual polish, accessibility, user experience |
| **Testing & Validation** | 10% | All tests present and passing, proper logging |
| **Documentation** | 10% | Clear README, comments in code, test explanations |
| **Total** | 100% | Overall completeness and quality |

---

## Strict Rules for the Model

### MUST DO:
- ✅ Create ALL required components (no shortcuts)
- ✅ Use TypeScript strictly (no `any` types)
- ✅ Provide complete package.json with ALL dependencies
- ✅ Implement React Router for multi-page navigation
- ✅ Load and parse data.json correctly
- ✅ Make responsive design work (mobile, tablet, desktop)
- ✅ Generate all 7 test files with actual validation logic
- ✅ Provide comprehensive README with setup & testing instructions
- ✅ Include proper error handling (404 pages, data loading errors)
- ✅ Output must be ready to run: `npm install && npm run dev`

### MUST NOT:
- ❌ Use `any` types in TypeScript
- ❌ Skip required components
- ❌ Leave incomplete implementations
- ❌ Hardcode data (use data.json)
- ❌ Create non-functional tests
- ❌ Ignore responsive design
- ❌ Make assumptions about missing requirements
- ❌ Use outdated or problematic patterns
- ❌ Skip documentation or code comments

---

## Success Criteria

The application is **PASS** if:
1. ✅ Project runs without errors: `npm install && npm run dev`
2. ✅ All routes are accessible and render correctly
3. ✅ Search and filtering work as expected
4. ✅ TypeScript compiles with zero errors
5. ✅ All 7 tests PASS
6. ✅ App is responsive on mobile/tablet/desktop
7. ✅ README clearly explains how to use the app
8. ✅ Code is clean, typed, and well-organized
9. ✅ No console errors when running the app

The application is **FAIL** if:
- ❌ App doesn't run (`npm install` or `npm run dev` fails)
- ❌ Any test fails
- ❌ TypeScript compilation errors exist
- ❌ Missing required components or pages
- ❌ Routes don't work or pages are blank
- ❌ Data doesn't load
- ❌ Not responsive
- ❌ Missing or incomplete README

---

## Next Steps After Completion

After you complete the application:
1. Run `npm run auto-test` to validate everything
2. Review logs in `logs/` directory
3. Fix any failing tests
4. Test app manually: `npm run dev` → visit all routes, test search/filter
5. Verify responsive design (open DevTools, test different viewport sizes)
