# OurStory

> **A comprehensive historical timeline comparing academic and alternative sources**

The history books are written by people with agendas. Much of Western history was cultivated not only by victors, but by a select few within church positions. Our goal is to document all of history in this monorepo, presenting multiple perspectives side-by-side with contradictions clearly identified.

## Vision

Create the most comprehensive historical timeline that:
- Compares and contrasts religious texts (Bhagavad Gita, Bible, Torah, Quran)
- Includes alternative history researchers and podcasts
- Integrates CIA documentation files and declassified documents
- Explores ancient ruins like Atlantis and Egyptian studies
- Incorporates ancient texts like "Emerald Tablets of Thoth"
- Documents ancient religions including Gilgamesh and Sumerian mythology
- Includes ancient wisdom traditions like Yoga

## Project Structure

This is a **Turborepo** monorepo with the following structure:

### Apps
- **timeline** - Main Next.js application for visualizing the comprehensive timeline
- **docs** - Documentation site

### Packages
- **timeline-engine** - Core timeline merging and event processing
- **contradiction-tracker** - Detects and analyzes contradictions between sources
- **religious-texts** - Data from religious sources
- **ancient-civilizations** - Archaeological and ancient civilization data
- **alternative-history** - Alternative researchers and ancient wisdom
- **declassified-docs** - Government declassified documents
- **ui** - Shared UI components
- **typescript-config** - Shared TypeScript configuration
- **eslint-config** - Shared ESLint configuration

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build all packages
npm run build

# Run linting
npm run lint
```

The timeline app will be available at http://localhost:3000

## Key Features

### Source Diversity
We include sources from multiple categories:
- **Academic**: Peer-reviewed research, archaeological evidence
- **Religious**: Sacred texts from major world religions
- **Alternative**: Independent researchers, podcasts, ancient wisdom
- **Declassified**: Government documents (CIA, FBI, etc.)

### Contradiction Tracking
- All contradictions between sources are tracked and displayed
- Each event has a confidence level (0-100%)
- Sources are rated by reliability (primary, secondary, contested, unverified)
- Multiple perspectives are presented side-by-side

### Timeline Coverage
- Ancient history (10,000+ BCE)
- Religious and mythological events
- Archaeological discoveries
- Modern declassified events
- Alternative theories with proper context

## Contributing

We welcome contributions! To add new historical events:

1. Choose the appropriate package based on source type
2. Add source information with proper citations
3. Create events with accurate dating and confidence levels
4. Tag events appropriately for cross-referencing
5. Link related events to show connections

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed technical documentation.

## Philosophy

This project is built on the principle that:
- History should be transparent
- Multiple perspectives have value
- Contradictions should be highlighted, not hidden
- Academic and alternative sources can coexist
- Users should decide what to believe based on evidence and confidence levels

## License

MIT 
