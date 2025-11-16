import {
  HistoricalEvent,
  Source,
  SourceType,
  SourceReliability,
  Timeline,
} from '@ourstory/timeline-engine';

/**
 * Alternative History Data Package
 * Covers: Podcasts, alternative researchers, ancient texts, non-mainstream perspectives
 */

export const alternativeSources: Source[] = [
  {
    id: 'graham-hancock',
    name: 'Graham Hancock - Fingerprints of the Gods',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.CONTESTED,
    author: 'Graham Hancock',
    publicationDate: new Date(1995, 0, 1),
    notes: 'Alternative archaeology and ancient civilizations',
  },
  {
    id: 'zacharia-sitchin',
    name: 'Zacharia Sitchin - The 12th Planet',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.UNVERIFIED,
    author: 'Zacharia Sitchin',
    publicationDate: new Date(1976, 0, 1),
    notes: 'Ancient astronaut theory, Anunnaki',
  },
  {
    id: 'robert-schoch',
    name: 'Robert Schoch - Geological Analysis',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.SECONDARY,
    author: 'Dr. Robert Schoch',
    notes: 'Geologist - Sphinx water erosion theory',
  },
  {
    id: 'ancient-yoga-texts',
    name: 'Ancient Yoga Sutras',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.PRIMARY,
    notes: 'Ancient Hindu philosophical texts on yoga',
  },
];

export const alternativeEvents: HistoricalEvent[] = [
  {
    id: 'younger-dryas-impact',
    title: 'Younger Dryas Impact Event',
    description: 'Catastrophic comet/asteroid impact causing sudden climate change and extinctions',
    dateRange: {
      start: '10900 BCE',
      end: '10700 BCE',
      approximate: true,
      confidence: 60,
    },
    sources: [alternativeSources[0]],
    tags: ['catastrophe', 'younger-dryas', 'impact', 'climate-change'],
  },
  {
    id: 'anunnaki-arrival',
    title: 'Anunnaki Arrival on Earth',
    description: 'According to Sitchin: Extraterrestrial beings arrive on Earth',
    dateRange: {
      start: '450000 BCE',
      approximate: true,
      confidence: 5,
    },
    sources: [alternativeSources[1]],
    tags: ['anunnaki', 'ancient-astronauts', 'sitchin', 'alternative'],
  },
  {
    id: 'gobekli-tepe',
    title: 'Göbekli Tepe Construction',
    description: 'Advanced megalithic temple complex predating known civilizations',
    dateRange: {
      start: '9600 BCE',
      end: '8200 BCE',
      approximate: true,
      confidence: 90,
    },
    sources: [alternativeSources[0], alternativeSources[2]],
    location: {
      name: 'Southeastern Turkey',
      coordinates: {
        latitude: 37.2231,
        longitude: 38.9225,
      },
    },
    tags: ['gobekli-tepe', 'megalithic', 'turkey', 'archaeology', 'pre-civilization'],
  },
  {
    id: 'vedic-golden-age',
    title: 'Vedic Golden Age',
    description: 'Ancient period described in Vedic texts with advanced spiritual knowledge',
    dateRange: {
      start: '8000 BCE',
      approximate: true,
      confidence: 20,
    },
    sources: [alternativeSources[3]],
    location: {
      name: 'Indian Subcontinent',
    },
    tags: ['vedic', 'india', 'yoga', 'ancient-wisdom'],
  },
];

export const alternativeHistoryTimeline: Timeline = {
  id: 'alternative-history-timeline',
  name: 'Alternative History Timeline',
  description: 'Historical events from alternative researchers and ancient wisdom traditions',
  events: alternativeEvents,
  sources: alternativeSources,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default alternativeHistoryTimeline;
