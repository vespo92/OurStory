/**
 * Core types for the OurStory timeline system
 */

export enum SourceType {
  ACADEMIC = 'academic',
  RELIGIOUS = 'religious',
  ALTERNATIVE = 'alternative',
  DECLASSIFIED = 'declassified',
  ARCHAEOLOGICAL = 'archaeological',
  ORAL_TRADITION = 'oral_tradition',
}

export enum SourceReliability {
  PRIMARY = 'primary', // Direct source (e.g., original text)
  SECONDARY = 'secondary', // Analysis or interpretation
  TERTIARY = 'tertiary', // Summary or compilation
  CONTESTED = 'contested', // Disputed or controversial
  UNVERIFIED = 'unverified', // Lacking corroboration
}

export interface Source {
  id: string;
  name: string;
  type: SourceType;
  reliability: SourceReliability;
  author?: string;
  publicationDate?: Date;
  url?: string;
  notes?: string;
}

export interface DateRange {
  start: Date | string; // Can be approximate (e.g., "3000 BCE")
  end?: Date | string;
  approximate: boolean;
  confidence: number; // 0-100 confidence level
}

export interface HistoricalEvent {
  id: string;
  title: string;
  description: string;
  dateRange: DateRange;
  sources: Source[];
  location?: {
    name: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  tags: string[];
  relatedEvents?: string[]; // IDs of related events
  contradictions?: Contradiction[];
}

export interface Contradiction {
  id: string;
  eventId: string;
  conflictingEventId?: string;
  description: string;
  sources: Source[];
  type: ContradictionType;
  severity: 'minor' | 'moderate' | 'major';
}

export enum ContradictionType {
  DATE_CONFLICT = 'date_conflict',
  FACT_CONFLICT = 'fact_conflict',
  INTERPRETATION_CONFLICT = 'interpretation_conflict',
  EXISTENCE_CONFLICT = 'existence_conflict',
}

export interface Timeline {
  id: string;
  name: string;
  description: string;
  events: HistoricalEvent[];
  sources: Source[];
  createdAt: Date;
  updatedAt: Date;
}
