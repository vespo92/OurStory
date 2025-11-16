import {
  HistoricalEvent,
  Source,
  SourceType,
  SourceReliability,
  Timeline,
} from '@ourstory/timeline-engine';

/**
 * Declassified Documents Data Package
 * Covers: CIA, FBI, and other government declassified documents
 */

export const declassifiedSources: Source[] = [
  {
    id: 'cia-reading-room',
    name: 'CIA Freedom of Information Act Reading Room',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.PRIMARY,
    url: 'https://www.cia.gov/readingroom/',
    notes: 'Official CIA declassified documents',
  },
  {
    id: 'project-stargate',
    name: 'Project STAR GATE Documents',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.PRIMARY,
    notes: 'CIA remote viewing program (1978-1995)',
  },
  {
    id: 'jfk-assassination-files',
    name: 'JFK Assassination Records',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.PRIMARY,
    notes: 'Declassified documents related to JFK assassination',
  },
];

export const declassifiedEvents: HistoricalEvent[] = [
  {
    id: 'project-stargate-start',
    title: 'Project STAR GATE Initiated',
    description: 'CIA begins remote viewing research program',
    dateRange: {
      start: new Date(1978, 0, 1),
      end: new Date(1978, 11, 31),
      approximate: true,
      confidence: 100,
    },
    sources: [declassifiedSources[1]],
    location: {
      name: 'Fort Meade, Maryland',
    },
    tags: ['cia', 'remote-viewing', 'psychic', 'stargate'],
  },
  {
    id: 'jfk-assassination',
    title: 'JFK Assassination',
    description: 'Assassination of President John F. Kennedy',
    dateRange: {
      start: new Date(1963, 10, 22),
      approximate: false,
      confidence: 100,
    },
    sources: [declassifiedSources[2]],
    location: {
      name: 'Dallas, Texas',
      coordinates: {
        latitude: 32.7767,
        longitude: -96.797,
      },
    },
    tags: ['jfk', 'assassination', 'kennedy', 'dallas', '1960s'],
  },
  {
    id: 'ufo-sightings-1947',
    title: 'Roswell UFO Incident',
    description: 'Alleged UFO crash near Roswell, New Mexico',
    dateRange: {
      start: new Date(1947, 6, 1),
      approximate: true,
      confidence: 80,
    },
    sources: [declassifiedSources[0]],
    location: {
      name: 'Roswell, New Mexico',
    },
    tags: ['ufo', 'roswell', 'alien', 'extraterrestrial', '1940s'],
  },
];

export const declassifiedTimeline: Timeline = {
  id: 'declassified-docs-timeline',
  name: 'Declassified Documents Timeline',
  description: 'Historical events documented in declassified government files',
  events: declassifiedEvents,
  sources: declassifiedSources,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default declassifiedTimeline;
