import {
  Timeline,
  HistoricalEvent,
  Source,
  Contradiction,
  ContradictionType,
} from './types';

/**
 * Core timeline engine for merging and managing historical events
 */
export class TimelineEngine {
  private timeline: Timeline;

  constructor(timeline: Timeline) {
    this.timeline = timeline;
  }

  /**
   * Add a new event to the timeline
   */
  addEvent(event: HistoricalEvent): void {
    this.timeline.events.push(event);
    this.timeline.updatedAt = new Date();
    this.sortEvents();
  }

  /**
   * Merge multiple timelines into one
   */
  static mergeTimelines(timelines: Timeline[]): Timeline {
    const merged: Timeline = {
      id: `merged-${Date.now()}`,
      name: 'Merged Timeline',
      description: 'Combined timeline from multiple sources',
      events: [],
      sources: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const sourceMap = new Map<string, Source>();
    const eventMap = new Map<string, HistoricalEvent>();

    // Collect all unique sources and events
    timelines.forEach((timeline) => {
      timeline.sources.forEach((source) => {
        if (!sourceMap.has(source.id)) {
          sourceMap.set(source.id, source);
        }
      });

      timeline.events.forEach((event) => {
        if (!eventMap.has(event.id)) {
          eventMap.set(event.id, event);
        } else {
          // Merge duplicate events
          const existing = eventMap.get(event.id)!;
          existing.sources = [...existing.sources, ...event.sources];
        }
      });
    });

    merged.sources = Array.from(sourceMap.values());
    merged.events = Array.from(eventMap.values());

    return merged;
  }

  /**
   * Sort events by date
   */
  private sortEvents(): void {
    this.timeline.events.sort((a, b) => {
      const dateA = this.parseDate(a.dateRange.start);
      const dateB = this.parseDate(b.dateRange.start);
      return dateA.getTime() - dateB.getTime();
    });
  }

  /**
   * Parse date string (handles BCE/CE notation)
   */
  private parseDate(date: Date | string): Date {
    if (date instanceof Date) {
      return date;
    }

    // Handle BCE dates
    if (date.includes('BCE')) {
      const year = parseInt(date.replace(/[^0-9-]/g, ''));
      return new Date(-year, 0, 1);
    }

    // Handle CE dates or standard formats
    if (date.includes('CE')) {
      const year = parseInt(date.replace(/[^0-9]/g, ''));
      return new Date(year, 0, 1);
    }

    return new Date(date);
  }

  /**
   * Find contradictions between events
   */
  findContradictions(): Contradiction[] {
    const contradictions: Contradiction[] = [];
    const events = this.timeline.events;

    for (let i = 0; i < events.length; i++) {
      for (let j = i + 1; j < events.length; j++) {
        const eventA = events[i];
        const eventB = events[j];

        // Check for overlapping or conflicting events
        if (this.eventsOverlap(eventA, eventB)) {
          const contradiction = this.detectContradiction(eventA, eventB);
          if (contradiction) {
            contradictions.push(contradiction);
          }
        }
      }
    }

    return contradictions;
  }

  /**
   * Check if two events overlap in time and space
   */
  private eventsOverlap(eventA: HistoricalEvent, eventB: HistoricalEvent): boolean {
    // Simple overlap check - can be enhanced
    const startA = this.parseDate(eventA.dateRange.start);
    const startB = this.parseDate(eventB.dateRange.start);
    const endA = eventA.dateRange.end ? this.parseDate(eventA.dateRange.end) : startA;
    const endB = eventB.dateRange.end ? this.parseDate(eventB.dateRange.end) : startB;

    return startA <= endB && startB <= endA;
  }

  /**
   * Detect contradiction type between two events
   */
  private detectContradiction(
    eventA: HistoricalEvent,
    eventB: HistoricalEvent
  ): Contradiction | null {
    // Check if events describe the same thing differently
    const titleSimilarity = this.calculateSimilarity(eventA.title, eventB.title);

    if (titleSimilarity > 0.7) {
      // Similar events with different descriptions might be contradictory
      if (eventA.description !== eventB.description) {
        return {
          id: `contradiction-${eventA.id}-${eventB.id}`,
          eventId: eventA.id,
          conflictingEventId: eventB.id,
          description: `Events "${eventA.title}" and "${eventB.title}" have conflicting descriptions`,
          sources: [...eventA.sources, ...eventB.sources],
          type: ContradictionType.INTERPRETATION_CONFLICT,
          severity: 'moderate',
        };
      }
    }

    return null;
  }

  /**
   * Calculate string similarity (simple implementation)
   */
  private calculateSimilarity(str1: string, str2: string): number {
    const words1 = str1.toLowerCase().split(' ');
    const words2 = str2.toLowerCase().split(' ');
    const commonWords = words1.filter((word) => words2.includes(word));
    return commonWords.length / Math.max(words1.length, words2.length);
  }

  /**
   * Get timeline
   */
  getTimeline(): Timeline {
    return this.timeline;
  }

  /**
   * Filter events by date range
   */
  filterByDateRange(start: Date | string, end: Date | string): HistoricalEvent[] {
    const startDate = this.parseDate(start);
    const endDate = this.parseDate(end);

    return this.timeline.events.filter((event) => {
      const eventStart = this.parseDate(event.dateRange.start);
      return eventStart >= startDate && eventStart <= endDate;
    });
  }

  /**
   * Filter events by source type
   */
  filterBySourceType(sourceType: string): HistoricalEvent[] {
    return this.timeline.events.filter((event) =>
      event.sources.some((source) => source.type === sourceType)
    );
  }

  /**
   * Get events by tags
   */
  getEventsByTags(tags: string[]): HistoricalEvent[] {
    return this.timeline.events.filter((event) =>
      tags.some((tag) => event.tags.includes(tag))
    );
  }
}
