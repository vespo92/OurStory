/**
 * OurStory UI Components
 * Shared components for timeline visualization
 */

export const UI_VERSION = '0.1.0';

// Placeholder for future UI components
export interface TimelineEventCardProps {
  title: string;
  description: string;
  date: string;
  confidence: number;
  sources: string[];
  tags: string[];
}

export interface ContradictionBadgeProps {
  severity: 'minor' | 'moderate' | 'major';
  description: string;
}

// Future component exports will go here
