# AI Learning Path — Mission Control

An interactive AI learning journey for Business Analysts. The main site is **English**, with French, Mandarin Chinese (simplified script), Hindi and Spanish versions. Midnight-blue visuals, a circuit display, mission cards and small feedback animations support a quiet learning workspace.

## Run locally

```sh
npm run dev
```

Open http://localhost:3000. Python 3 is required; there are no runtime npm dependencies or paid APIs. Use HTTP rather than opening `index.html` directly, because JavaScript modules and JSON files are fetched.

## Language pages

| Language | URL relative to the site root |
|---|---|
| English, the default | `./` or `./?lang=en` |
| Français | `./?lang=fr` |
| 中文（普通话） | `./?lang=zh` |
| हिन्दी | `./?lang=hi` |
| Español | `./?lang=es` |

The selector opens the matching page and keeps the active mission and sequence. Learning progress and exercise notes are shared across languages on the same browser and origin. The original reference collection and external learning resources retain their source languages, predominantly English; the interface explains this distinction.

Mandarin, Hindi and Spanish were selected using total speakers (first and additional languages), excluding English and French. Counts depend on definitions, so the selection does not present exact population claims. See the 2026 overview in [Reuters](https://www.reuters.com/science/study-documents-precipitous-decline-number-languages-2026-07-27/) and the [Instituto Cervantes 2025 report](https://observatoriodelespanol.cervantes.org/wp-content/uploads/2025/10/Spanish_a_language_to_the_world_2025.pdf).

## Learn by doing

- Six missions: Understand, Use, Identify, Design, Control and Scale.
- Thirty-six sequences: explanation, BA example, optional reasoning and a scenario with feedback for every answer.
- Six deterministic labs: RAG permissions and freshness; prompt construction; solution selection; testable requirements; security boundaries; realistic value calculations.
- Short feedback quizzes, applied exercises, glossary, recall cards and global search.
- Local progress and saved exercise notes, with JSON export/import from Resources.

Completing a decision is a progress checkpoint, not proof of durable mastery. The research summary recommends spaced reviews and new transfer cases as the next improvements; an adaptive spaced-review scheduler is **not** implemented. The reasoning field in a scenario is kept only during the current module session and is not automatically graded.

The reference archive contains text from all 121 non-empty slides, 67 tables and source links. Original illustrations and slide layout are not reproduced. The main learning journey is an adaptation for the web, rather than a slide viewer.

## Visuals and motion

The circuit signal, mission icons, interactive borders and completion feedback use lightweight SVG and CSS. There is no audio, timer or penalty for mistakes. The header motion control respects the operating system's reduced-motion setting initially; users can explicitly override it. The preference is saved locally. Narrow layouts retain the language selector and motion control.

Google Fonts provides optional typography, including Chinese and Devanagari support. System fonts are fallbacks. Fonts and external references require connectivity; there is no AI inference request or automatic translation-service request.

## Publish with GitHub Pages

The intended repository is https://github.com/mativ117/ia_learning.

1. Place this project's files at the repository root on `main`.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. Push to `main` or run the **Deploy GitHub Pages** workflow manually.

The workflow uploads only runtime HTML, CSS, JavaScript, `data/` and `locales/`. Relative paths work under a repository subpath. Publication of this version and its training content to the public repository was authorised by the owner.

## Maintain content and translations

- `data/curriculum.js`: original French core, quiz data and glossary.
- `data/experience.js`: French extensions, 36 decision scenarios and concept maps.
- `locales/en.json`, `es.json`, `zh.json`, `hi.json`: translated lessons, scenarios, exercises and worked guidance. Lesson and decision order must match the source; stable stage IDs preserve progress.
- `locales/interface.json`: interface and lab translations. Each value is ordered `[English, Spanish, Mandarin, Hindi]`. Named placeholders must be preserved.
- `locales/terms.json` and `maps.json`: translated glossary and concept maps.
- `i18n.js`: language bootstrap, data localisation, interface text lookup, language links and motion preferences. No translation API is used. French uses the original source text.
- `data/source.json`: original training text, tables and links, excluding the removed business branding.
- `app.js`, `learning.js`, `labs.js`: application, guided learning and simulations.
- `style.css`, `theme.css`: structure, midnight theme, responsive layouts and motion.

When changing a concept, update each language and its feedback together. The translations are authored educational adaptations; native-speaker and domain review is recommended before organisational rollout. Product capabilities, certifications, pricing and legal timelines in the source reflect its October 2026 edition and need official verification before decisions.

## Checks

```sh
npm test
```

Nine automated checks cover source integrity, scenario structure, value calculations, language completeness, placeholder consistency and deployment assets. Browser verification covered all 36 decision flows in each language (180 total), lab behaviour, shared progress, language changes, operating-system and user motion settings, and mobile layouts at 390 px. A local Playwright browser was used for those checks; it is not required to use the website.

## Learning design

[Research and design decisions, in French](docs/RECHERCHE-APPRENTISSAGE.md) distinguish learner preferences from learning outcomes and document the limits of the evidence. [French implementation notes](docs/README.fr.md) retain the development context of earlier versions.

## Optional future AI tutor

There is currently no chatbot or paid inference service. A future tutor can retrieve course excerpts for cited answers, with an explicit extension mode for outside knowledge. A model API does not automatically include live web access. Its usage charges are generally separate from a ChatGPT subscription. Use a server-side function for the key, limits and abuse protection; never put a provider secret in GitHub Pages JavaScript.
