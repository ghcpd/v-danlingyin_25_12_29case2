# UI Case Testing - Quick Reference Card

## 📦 Package Contents

| File | Purpose | Size |
|------|---------|------|
| **UI_CASE_PROMPT.md** | Complete prompt for AI agent | Main deliverable |
| **data.json** | Da Vinci artwork data (12 works) | Input data |
| **UI_CASE_EVALUATION_GUIDE.md** | 100-point scoring rubric | Evaluation framework |
| **UI_CASE_TESTING_PACKAGE_README.md** | Complete package guide | This document |

---

## 🎯 Expected Agent Output Structure

```
da-vinci-art-app/
├── src/
│   ├── components/          # 8-10 feature components
│   ├── pages/              # 5 page components
│   ├── types/              # TypeScript interfaces
│   ├── data/               # data.json
│   ├── styles/             # CSS modules
│   ├── hooks/              # Custom hooks (optional)
│   ├── utils/              # Helper functions
│   ├── App.tsx             # Main app with routing
│   └── index.tsx           # Entry point
├── public/
│   └── index.html          # HTML entry point
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript config
├── test_*.js              # 7 test files
├── test_runner.js         # Test orchestrator
├── auto_test.js           # Automated testing
├── README.md              # Documentation
├── logs/                  # Test results
└── .gitignore
```

---

## ✅ 11 Required Components

### Layout (3)
- Header (navigation)
- Footer (copyright)
- Layout (wrapper)

### Feature (5)
- ArtworkCard (artwork display)
- ArtworkGallery (grid)
- ArtworkDetail (full view)
- SearchBar (search)
- FilterPanel (filtering)

### Additional (3)
- ArtistBio (biography)
- Timeline (optional)
- NotFound (404)

### Pages (5+)
- HomePage
- GalleryPage
- ArtworkDetailPage
- BioPage
- ContactPage (optional)

---

## 🧪 7 Required Tests

| Test | Validates |
|------|-----------|
| test_structure.js | Folder structure, files exist |
| test_typescript.js | TypeScript compilation |
| test_components.js | Components typed correctly |
| test_rendering.js | Components render OK |
| test_data_loading.js | data.json loads & parses |
| test_routing.js | React Router configured |
| test_responsive.js | CSS media queries present |
| test_runner.js | Runs all tests, reports results |
| auto_test.js | Automated test execution |

---

## 📊 Scoring Breakdown (100 points)

| Category | Points | Weight |
|----------|--------|--------|
| Project Structure | 15 | 15% |
| TypeScript | 15 | 15% |
| Components | 20 | 20% |
| Functionality | 20 | 20% |
| UI/UX Design | 10 | 10% |
| Testing | 10 | 10% |
| Documentation | 10 | 10% |
| Bonuses | +6 | - |
| **Total** | **100** | **100%** |

**Passing Grade: ≥75 points**

---

## ✨ Key Features to Validate

- [ ] React Router (multi-page navigation)
- [ ] Search by title (real-time)
- [ ] Filter by year, medium, location
- [ ] Sort by title, year (ascending/descending)
- [ ] Data loads from data.json
- [ ] Detail pages work (/artwork/:id)
- [ ] 404 handling
- [ ] Responsive design (mobile 320px, tablet 768px, desktop 1024px)
- [ ] No console errors
- [ ] All components exported and used

---

## 🚀 Quick Verification Steps

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# Expected: App loads in browser at http://localhost:3000 (or similar)

# 3. Run tests
npm run auto-test
# Expected: 9/9 tests passing, logs saved

# 4. Check TypeScript
npm run type-check
# Expected: No compilation errors

# 5. Manual checks
# - Homepage loads
# - Gallery displays artworks
# - Search works (try "Mona")
# - Filters work (try year 1500-1520)
# - Sorting works
# - Artwork detail page loads
# - Bio page loads
# - 404 page appears for invalid routes
# - Mobile layout works (open DevTools, set to mobile view)
# - No console errors (check DevTools console)
```

---

## 🎓 Test Difficulty & Expected Time

| Aspect | Difficulty | Est. Time |
|--------|------------|-----------|
| Planning | Medium | 15-20 min |
| Components | High | 45-60 min |
| Routing | Medium | 15-20 min |
| Features (search/filter) | High | 30-45 min |
| Styling | Medium | 30-45 min |
| Tests | High | 45-60 min |
| Documentation | Low | 15-20 min |
| **Total Estimated** | **High** | **4-6 hours** |

---

## ⚠️ Common Pitfalls

| Mistake | Impact | Prevention |
|---------|--------|-----------|
| Using `any` types | -2 pts per instance | Strict TypeScript mode |
| Missing components | -3 pts per missing | Check full list |
| Tests don't run | -5 pts | Implement test files correctly |
| App doesn't start | -10 pts | Check dependencies, entry point |
| No responsive design | -4 pts | Add CSS media queries |
| Hardcoded data | Rejected | Use data.json only |
| No README | -10 pts | Document everything |
| Routing broken | -5 pts | Test all routes |

---

## 📈 Performance Indicators

**Excellent (95+):** All tests pass, responsive, clean code, comprehensive docs  
**Good (85-94):** Most tests pass, mostly responsive, good code, adequate docs  
**Adequate (75-84):** Core features work, basic responsive, decent code, basic docs  
**Poor (<75):** Features missing or broken, not responsive, messy code, no docs

---

## 🔗 Data Sample (data.json)

```json
{
  "artist": {
    "name": "Leonardo da Vinci",
    "birthYear": 1452,
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
    // ... 11 more artworks
  ]
}
```

---

## 💡 Tips for Maximum Score

1. **TypeScript** - Enable strict mode, no `any` types
2. **Components** - Make them reusable with proper props
3. **Tests** - Write tests that actually validate functionality
4. **Documentation** - Be thorough and clear
5. **Responsive** - Test on actual mobile devices or DevTools
6. **Error Handling** - Handle edge cases gracefully
7. **Code Style** - Keep it clean and consistent
8. **Performance** - Optimize where possible (memoization, lazy loading)

---

## 📞 Quick Answers

**Q: Can I use a UI library?**  
A: Not required, but Tailwind CSS is acceptable. Build from scratch with CSS if possible.

**Q: Do I need a backend?**  
A: No, frontend-only. All data in data.json.

**Q: How many hours should this take?**  
A: 4-6 hours for an experienced React developer. More if learning.

**Q: What if I can't make everything work?**  
A: Focus on core features first (routing, components, data loading), then add search/filter.

**Q: Is this production-ready?**  
A: It should be close. Good code quality, no console errors, proper error handling.

---

## 📋 Pre-Submission Checklist

Before submitting the final code:

- [ ] `npm install` works
- [ ] `npm run dev` starts without errors
- [ ] All routes accessible
- [ ] Search/filter/sort work
- [ ] TypeScript compiles (`npm run type-check`)
- [ ] All 9 tests passing (`npm run auto-test`)
- [ ] No console errors
- [ ] Responsive on mobile/tablet/desktop
- [ ] README complete and accurate
- [ ] All 11+ components present
- [ ] data.json properly loaded
- [ ] No hardcoded data
- [ ] Code is clean and typed
- [ ] Test logs saved to logs/
- [ ] Total score ≥ 75 points

---

## 🏆 Success Definition

**Mission Accomplished if:**
1. ✅ App runs and is usable
2. ✅ All features work
3. ✅ Tests pass
4. ✅ Code is high quality
5. ✅ Documentation is clear
6. ✅ Score ≥ 75/100

---

**Last Updated:** December 29, 2025  
**Framework Version:** 1.0  
**Ready to Use:** Yes ✅
