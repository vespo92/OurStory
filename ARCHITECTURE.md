# OurStory Architecture

## Overview

OurStory is a Turborepo monorepo that houses a comprehensive historical timeline comparing academic and alternative sources across all of human history. The architecture is designed to maximize coverage, facilitate contradiction tracking, and provide a centralized view of history from multiple perspectives.

## Repository Structure

```
OurStory/
├── apps/
│   ├── timeline/          # Main timeline visualization app (Next.js)
│   └── docs/              # Documentation site
├── packages/
│   ├── timeline-engine/   # Core timeline merging logic
│   ├── contradiction-tracker/ # Contradiction detection and analysis
│   ├── religious-texts/   # Religious sources data
│   ├── ancient-civilizations/ # Archaeological and ancient sources
│   ├── alternative-history/ # Alternative researchers and sources
│   ├── declassified-docs/ # Government declassified documents
│   ├── ui/                # Shared UI components
│   ├── typescript-config/ # Shared TypeScript configurations
│   └── eslint-config/     # Shared ESLint configurations
```

## Design Principles

### 1. Source Diversity
- **Academic Sources**: Peer-reviewed research, archaeological evidence
- **Religious Texts**: Bible, Torah, Quran, Bhagavad Gita, ancient texts
- **Alternative Sources**: Independent researchers, podcasts, ancient wisdom
- **Declassified Documents**: Government files, CIA documents

### 2. Contradiction Tracking
- All contradictions are tracked, not hidden
- Multiple perspectives are presented side-by-side
- Confidence levels and reliability ratings for each source
- Clear documentation of conflicts between sources

### 3. Scalability
- Turborepo for efficient builds and caching
- Modular package structure for easy expansion
- TypeScript for type safety across packages
- Shared configuration for consistency

## Core Packages

### Timeline Engine (`@ourstory/timeline-engine`)
- Core data types for events, sources, timelines
- Timeline merging algorithms
- Date parsing (handles BCE/CE notation)
- Event filtering and querying
- Contradiction detection

### Contradiction Tracker (`@ourstory/contradiction-tracker`)
- Analyzes timelines for contradictions
- Groups similar events
- Detects date, location, and fact conflicts
- Provides contradiction summaries

### Data Packages
Each historical domain has its own package:
- `@ourstory/religious-texts`
- `@ourstory/ancient-civilizations`
- `@ourstory/alternative-history`
- `@ourstory/declassified-docs`

## Data Model

### HistoricalEvent
```typescript
{
  id: string
  title: string
  description: string
  dateRange: {
    start: Date | string  // Can handle "3000 BCE" format
    end?: Date | string
    approximate: boolean
    confidence: number    // 0-100
  }
  sources: Source[]
  location?: Location
  tags: string[]
  relatedEvents?: string[]
  contradictions?: Contradiction[]
}
```

### Source
```typescript
{
  id: string
  name: string
  type: SourceType  // ACADEMIC, RELIGIOUS, ALTERNATIVE, etc.
  reliability: SourceReliability  // PRIMARY, SECONDARY, CONTESTED, etc.
  author?: string
  publicationDate?: Date
  url?: string
  notes?: string
}
```

## Adding New Historical Events

1. Identify the appropriate package (religious-texts, ancient-civilizations, etc.)
2. Add source information to the `sources` array
3. Create the event with proper dating, confidence levels, and tags
4. Link related events if applicable
5. The timeline engine will automatically detect contradictions

## Running the Project

```bash
# Install dependencies
bun install

# Run all apps in development
bun run dev

# Build all packages
bun run build

# Run linting
bun run lint
```

## Deployment

The project is configured for deployment on Vercel with Bun:
- `vercel.json` configures build and deployment settings
- Turborepo build caching is utilized
- Timeline app is the main deployment target

## Future Enhancements

- Interactive timeline visualization
- Source credibility scoring
- Advanced contradiction resolution UI
- User-submitted events and sources
- API for accessing timeline data
- Mobile application
- Export to various formats
