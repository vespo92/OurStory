import {
  HistoricalEvent,
  Source,
  SourceType,
  SourceReliability,
  Timeline,
} from '@ourstory/timeline-engine';

/**
 * Ancient Civilizations Data Package
 * Covers: Egypt, Atlantis, Sumeria, and other ancient ruins and civilizations
 */

export const ancientSources: Source[] = [
  {
    id: 'plato-timaeus',
    name: "Plato's Timaeus and Critias",
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.PRIMARY,
    author: 'Plato',
    publicationDate: new Date(-360, 0, 1),
    notes: 'Original source for Atlantis story',
  },
  {
    id: 'egyptian-hieroglyphs',
    name: 'Egyptian Hieroglyphic Records',
    type: SourceType.ARCHAEOLOGICAL,
    reliability: SourceReliability.PRIMARY,
    notes: 'Primary archaeological evidence from ancient Egypt',
  },
  {
    id: 'sumerian-king-list',
    name: 'Sumerian King List',
    type: SourceType.ARCHAEOLOGICAL,
    reliability: SourceReliability.PRIMARY,
    notes: 'Ancient stone tablet listing Sumerian kings',
  },
  {
    id: 'emerald-tablets',
    name: 'Emerald Tablets of Thoth',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.CONTESTED,
    notes: 'Controversial text attributed to Thoth/Hermes',
  },
];

export const ancientEvents: HistoricalEvent[] = [
  {
    id: 'atlantis-sinking',
    title: 'Sinking of Atlantis',
    description: "Catastrophic destruction of Atlantis as described by Plato",
    dateRange: {
      start: '9600 BCE',
      approximate: true,
      confidence: 20,
    },
    sources: [ancientSources[0]],
    location: {
      name: 'Atlantic Ocean (disputed)',
    },
    tags: ['atlantis', 'plato', 'catastrophe', 'civilization'],
  },
  {
    id: 'great-pyramid-construction',
    title: 'Great Pyramid of Giza Construction',
    description: 'Construction of the Great Pyramid - mainstream dating',
    dateRange: {
      start: '2580 BCE',
      end: '2560 BCE',
      approximate: true,
      confidence: 85,
    },
    sources: [ancientSources[1]],
    location: {
      name: 'Giza, Egypt',
      coordinates: {
        latitude: 29.9792,
        longitude: 31.1342,
      },
    },
    tags: ['egypt', 'pyramid', 'khufu', 'architecture'],
  },
  {
    id: 'great-pyramid-alternative',
    title: 'Great Pyramid Pre-Dynastic Origins',
    description: 'Alternative theory: Pyramid built much earlier, possibly 10,000+ BCE',
    dateRange: {
      start: '10500 BCE',
      approximate: true,
      confidence: 15,
    },
    sources: [ancientSources[3]],
    location: {
      name: 'Giza, Egypt',
      coordinates: {
        latitude: 29.9792,
        longitude: 31.1342,
      },
    },
    tags: ['egypt', 'pyramid', 'alternative-history', 'pre-dynastic'],
    relatedEvents: ['great-pyramid-construction'],
  },
  {
    id: 'sumerian-civilization',
    title: 'Rise of Sumerian Civilization',
    description: 'Emergence of Sumerian city-states in Mesopotamia',
    dateRange: {
      start: '4500 BCE',
      end: '4000 BCE',
      approximate: true,
      confidence: 75,
    },
    sources: [ancientSources[2]],
    location: {
      name: 'Mesopotamia (modern Iraq)',
    },
    tags: ['sumeria', 'mesopotamia', 'civilization', 'cuneiform'],
  },
  {
    id: 'sphinx-construction',
    title: 'Sphinx Construction (Mainstream)',
    description: 'Traditional dating of Sphinx construction to Khafre',
    dateRange: {
      start: '2558 BCE',
      end: '2532 BCE',
      approximate: true,
      confidence: 70,
    },
    sources: [ancientSources[1]],
    location: {
      name: 'Giza, Egypt',
      coordinates: {
        latitude: 29.9753,
        longitude: 31.1376,
      },
    },
    tags: ['egypt', 'sphinx', 'khafre', 'archaeology'],
  },
  {
    id: 'sphinx-water-erosion',
    title: 'Sphinx Water Erosion Theory',
    description: 'Alternative dating based on water erosion patterns suggesting 7000-9000 BCE',
    dateRange: {
      start: '9000 BCE',
      approximate: true,
      confidence: 25,
    },
    sources: [ancientSources[3]],
    location: {
      name: 'Giza, Egypt',
      coordinates: {
        latitude: 29.9753,
        longitude: 31.1376,
      },
    },
    tags: ['egypt', 'sphinx', 'alternative-history', 'water-erosion'],
    relatedEvents: ['sphinx-construction'],
  },
];

export const ancientCivilizationsTimeline: Timeline = {
  id: 'ancient-civilizations-timeline',
  name: 'Ancient Civilizations Timeline',
  description: 'Historical events from ancient civilizations including academic and alternative perspectives',
  events: ancientEvents,
  sources: ancientSources,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default ancientCivilizationsTimeline;
