# Victorroti
Demo Website for Victorroti

Vite + React. Same structure as the Yolad demo, in Victorroti's crest colours. Home page only for now.

```bash
npm install
npm run dev      # local preview
npm run build    # production build in dist/ (deploy this on Vercel)
```

## Where to edit

- `src/data.js`: school name, motto, address, phone, email, hours, ticker words and the four "Victorroti way" cards. The address is `null` until the school confirms it.
- `src/Sections.jsx`: the page sections.
- `src/styles.css`: colours and type are the tokens at the top of the file.
- `src/assets/`: crest and photos taken from the school's social media posts. Replace them with the school's original files when you get them.

`npm run build:single` makes one self-contained HTML file in `dist-single/` (used for the quick preview link).
