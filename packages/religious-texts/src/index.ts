import {
  HistoricalEvent,
  Source,
  SourceType,
  SourceReliability,
  Timeline,
} from '@ourstory/timeline-engine';

/**
 * Religious Texts Data Package
 * Covers: Bible, Torah, Quran, Bhagavad Gita, and other religious sources
 */

// Define sources
export const religiousSources: Source[] = [
  {
    id: 'bible-kjv',
    name: 'King James Bible',
    type: SourceType.RELIGIOUS,
    reliability: SourceReliability.PRIMARY,
    publicationDate: new Date(1611, 0, 1),
    notes: 'Authorized Version of the Christian Bible',
  },
  {
    id: 'torah-hebrew',
    name: 'Hebrew Torah',
    type: SourceType.RELIGIOUS,
    reliability: SourceReliability.PRIMARY,
    notes: 'The first five books of the Hebrew Bible',
  },
  {
    id: 'quran-arabic',
    name: 'Quran (Arabic)',
    type: SourceType.RELIGIOUS,
    reliability: SourceReliability.PRIMARY,
    notes: 'Islamic holy book',
  },
  {
    id: 'bhagavad-gita',
    name: 'Bhagavad Gita',
    type: SourceType.RELIGIOUS,
    reliability: SourceReliability.PRIMARY,
    notes: 'Hindu scripture, part of the Mahabharata',
  },
  {
    id: 'epic-of-gilgamesh',
    name: 'Epic of Gilgamesh',
    type: SourceType.RELIGIOUS,
    reliability: SourceReliability.PRIMARY,
    notes: 'Ancient Mesopotamian epic poem',
  },
];

// Example events from religious texts
export const religiousEvents: HistoricalEvent[] = [
  {
    id: 'creation-genesis',
    title: 'Creation Account (Genesis)',
    description: 'Biblical account of creation in 6 days',
    dateRange: {
      start: '4004 BCE',
      approximate: true,
      confidence: 30,
    },
    sources: [religiousSources[0], religiousSources[1]],
    tags: ['creation', 'bible', 'torah', 'genesis'],
  },
  {
    id: 'flood-noah',
    title: "Noah's Flood",
    description: 'Great flood covering the earth, Noah and the ark',
    dateRange: {
      start: '2348 BCE',
      approximate: true,
      confidence: 25,
    },
    sources: [religiousSources[0], religiousSources[1]],
    tags: ['flood', 'noah', 'bible', 'torah', 'catastrophe'],
    relatedEvents: ['flood-gilgamesh'],
  },
  {
    id: 'flood-gilgamesh',
    title: 'Great Flood (Gilgamesh)',
    description: 'Flood story from Epic of Gilgamesh - Utnapishtim survives flood',
    dateRange: {
      start: '2900 BCE',
      approximate: true,
      confidence: 40,
    },
    sources: [religiousSources[4]],
    tags: ['flood', 'gilgamesh', 'sumerian', 'catastrophe'],
    relatedEvents: ['flood-noah'],
  },
  {
    id: 'exodus',
    title: 'Exodus from Egypt',
    description: 'Moses leads Israelites out of Egypt',
    dateRange: {
      start: '1446 BCE',
      end: '1406 BCE',
      approximate: true,
      confidence: 35,
    },
    sources: [religiousSources[0], religiousSources[1]],
    location: {
      name: 'Egypt to Canaan',
    },
    tags: ['exodus', 'moses', 'israel', 'egypt', 'bible', 'torah'],
  },
  {
    id: 'mahabharata-war',
    title: 'Kurukshetra War (Mahabharata)',
    description: 'Great war described in the Mahabharata epic',
    dateRange: {
      start: '3102 BCE',
      approximate: true,
      confidence: 30,
    },
    sources: [religiousSources[3]],
    location: {
      name: 'Kurukshetra, India',
    },
    tags: ['mahabharata', 'war', 'india', 'hinduism', 'bhagavad-gita'],
  },
];

export const religiousTimeline: Timeline = {
  id: 'religious-texts-timeline',
  name: 'Religious Texts Timeline',
  description: 'Historical events from major religious texts',
  events: religiousEvents,
  sources: religiousSources,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default religiousTimeline;
