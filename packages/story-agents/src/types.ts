/**
 * Types for OurStory research agents
 * These agents specialize in uncovering historical truths and investigating cover-ups
 */

import { SourceType, SourceReliability } from '@ourstory/timeline-engine';

/**
 * Specialization areas for story agents
 */
export enum AgentSpecialization {
  INTELLIGENCE_OPERATIONS = 'intelligence_operations',
  FINANCIAL_SYSTEMS = 'financial_systems',
  ANCIENT_MYSTERIES = 'ancient_mysteries',
  RELIGIOUS_SECRETS = 'religious_secrets',
  SECRET_SOCIETIES = 'secret_societies',
  UFO_DISCLOSURE = 'ufo_disclosure',
  POLITICAL_ASSASSINATIONS = 'political_assassinations',
  FALSE_FLAG_OPERATIONS = 'false_flag_operations',
  MEDICAL_COVERUPS = 'medical_coverups',
  MILITARY_INCIDENTS = 'military_incidents',
}

/**
 * Research methodology types
 */
export enum ResearchMethodology {
  DOCUMENT_ANALYSIS = 'document_analysis',
  WITNESS_TESTIMONY = 'witness_testimony',
  PATTERN_RECOGNITION = 'pattern_recognition',
  TIMELINE_RECONSTRUCTION = 'timeline_reconstruction',
  SOURCE_TRIANGULATION = 'source_triangulation',
  DECLASSIFICATION_TRACKING = 'declassification_tracking',
  FORENSIC_ANALYSIS = 'forensic_analysis',
  NETWORK_MAPPING = 'network_mapping',
}

/**
 * Investigation status for ongoing research
 */
export enum InvestigationStatus {
  ACTIVE = 'active',
  ONGOING = 'ongoing',
  PARTIALLY_RESOLVED = 'partially_resolved',
  COVERED_UP = 'covered_up',
  DECLASSIFIED = 'declassified',
  OFFICIALLY_DENIED = 'officially_denied',
}

/**
 * Key figure involved in events
 */
export interface KeyFigure {
  id: string;
  name: string;
  role: string;
  organization?: string;
  nationality?: string;
  timeActive?: string;
  notes?: string;
}

/**
 * Document reference for research
 */
export interface DocumentReference {
  id: string;
  title: string;
  type: 'declassified' | 'leaked' | 'official' | 'testimony' | 'academic' | 'investigative';
  classificationLevel?: string;
  releaseDate?: string;
  source: string;
  url?: string;
  keyFindings?: string[];
}

/**
 * Research topic that an agent investigates
 */
export interface ResearchTopic {
  id: string;
  name: string;
  description: string;
  dateRange?: {
    start: string;
    end?: string;
  };
  status: InvestigationStatus;
  officialNarrative: string;
  alternativeTheories: string[];
  keyEvidence: string[];
  documents: DocumentReference[];
  keyFigures: KeyFigure[];
  relatedTopics?: string[];
  contradictions: string[];
  unansweredQuestions: string[];
}

/**
 * Core story agent interface
 */
export interface StoryAgent {
  id: string;
  name: string;
  codename: string;
  description: string;
  specialization: AgentSpecialization;
  methodologies: ResearchMethodology[];
  primarySources: SourceType[];
  preferredReliability: SourceReliability[];
  expertise: string[];
  researchTopics: ResearchTopic[];
  keyQuestions: string[];
  motto: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Agent registry for managing all story agents
 */
export interface AgentRegistry {
  id: string;
  name: string;
  description: string;
  agents: StoryAgent[];
  totalTopics: number;
  createdAt: Date;
  updatedAt: Date;
}
