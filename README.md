# Alexis Mupole - Digital Engineering Consultant

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-alexismupole.com-blue)](https://alexismupole.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-alexismupole-blue)](https://linkedin.com/in/alexis-mupole)
[![GitHub](https://img.shields.io/badge/GitHub-Alexis--Mupole-black)](https://github.com/Alexis-Mupole)

</div>

## About

Professional portfolio website for Alexis Mupole - Digital Engineering Consultant and Full-Stack Developer based in Kinshasa, DR Congo.

Specializing in:
- Web Application Development
- Cloud Architecture & Solutions
- System Administration
- Technical Consulting

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
├── components/       # React components
├── pages/           # Page components
├── data/            # JSON data (projects)
├── src/
│   ├── context/     # React context (translations)
│   └── types/       # TypeScript type definitions
├── images/          # Static images
└── translations.ts  # Language translations
```

## Adding Projects

Projects are managed in `data/projects.json`. To add a new project:

```json
{
  "id": "unique-project-id",
  "title": {
    "en": "Project Title",
    "fr": "Titre du Projet",
    "sw": "Kichwa cha Mradi"
  },
  "description": {
    "en": "Description in English",
    "fr": "Description en Français",
    "sw": "Maelezo kwa Kiswahili"
  },
  "image": "https://...",
  "tags": ["React", "Node.js"],
  "link": "https://github.com/...",
  "liveLink": "https://...",
  "featured": true
}
```

## Languages

The website supports 3 languages:
- English (en)
- French (fr)
- Swahili (sw)

Language can be switched using the toggle in the navigation bar.

## Deployment

Build the project and deploy the `dist` folder to any static hosting service:

```bash
npm run build
```


## License

MIT License - See LICENSE file for details.

---

Built by Alexis Mupole
