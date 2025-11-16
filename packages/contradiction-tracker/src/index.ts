import { Contradiction, HistoricalEvent, Timeline } from '@ourstory/timeline-engine';

/**
 * Contradiction Tracker - Analyzes and visualizes contradictions between sources
 */
export class ContradictionTracker {
  private contradictions: Map<string, Contradiction[]> = new Map();

  /**
   * Analyze a timeline for contradictions
   */
  analyzeTimeline(timeline: Timeline): Contradiction[] {
    const contradictions: Contradiction[] = [];
    const events = timeline.events;

    // Group events by similar titles or topics
    const eventGroups = this.groupSimilarEvents(events);

    eventGroups.forEach((group) => {
      if (group.length > 1) {
        const groupContradictions = this.findGroupContradictions(group);
        contradictions.push(...groupContradictions);
      }
    });

    return contradictions;
  }

  /**
   * Group similar events together
   */
  private groupSimilarEvents(events: HistoricalEvent[]): HistoricalEvent[][] {
    const groups: HistoricalEvent[][] = [];
    const processed = new Set<string>();

    events.forEach((event) => {
      if (processed.has(event.id)) return;

      const group = [event];
      processed.add(event.id);

      // Find related events
      events.forEach((otherEvent) => {
        if (processed.has(otherEvent.id)) return;

        // Check if events are related by tags or titles
        const hasCommonTags = event.tags.some((tag) => otherEvent.tags.includes(tag));
        const isRelated = event.relatedEvents?.includes(otherEvent.id);

        if (hasCommonTags || isRelated) {
          group.push(otherEvent);
          processed.add(otherEvent.id);
        }
      });

      if (group.length > 0) {
        groups.push(group);
      }
    });

    return groups;
  }

  /**
   * Find contradictions within a group of events
   */
  private findGroupContradictions(events: HistoricalEvent[]): Contradiction[] {
    const contradictions: Contradiction[] = [];

    for (let i = 0; i < events.length; i++) {
      for (let j = i + 1; j < events.length; j++) {
        const contradiction = this.compareEvents(events[i], events[j]);
        if (contradiction) {
          contradictions.push(contradiction);
        }
      }
    }

    return contradictions;
  }

  /**
   * Compare two events and detect contradictions
   */
  private compareEvents(
    eventA: HistoricalEvent,
    eventB: HistoricalEvent
  ): Contradiction | null {
    // Check for date contradictions
    const dateConflict = this.checkDateConflict(eventA, eventB);
    if (dateConflict) return dateConflict;

    // Check for location contradictions
    const locationConflict = this.checkLocationConflict(eventA, eventB);
    if (locationConflict) return locationConflict;

    return null;
  }

  /**
   * Check for date conflicts
   */
  private checkDateConflict(
    eventA: HistoricalEvent,
    eventB: HistoricalEvent
  ): Contradiction | null {
    const dateA = new Date(eventA.dateRange.start);
    const dateB = new Date(eventB.dateRange.start);
    const dateDiff = Math.abs(dateA.getTime() - dateB.getTime());
    const yearsDiff = dateDiff / (1000 * 60 * 60 * 24 * 365);

    // If events describe similar things but dates differ significantly
    if (yearsDiff > 10 && this.eventsDescribeSameThing(eventA, eventB)) {
      return {
        id: `date-conflict-${eventA.id}-${eventB.id}`,
        eventId: eventA.id,
        conflictingEventId: eventB.id,
        description: `Date conflict: Events differ by ${Math.round(yearsDiff)} years`,
        sources: [...eventA.sources, ...eventB.sources],
        type: 'date_conflict' as any,
        severity: yearsDiff > 100 ? 'major' : 'moderate',
      };
    }

    return null;
  }

  /**
   * Check for location conflicts
   */
  private checkLocationConflict(
    eventA: HistoricalEvent,
    eventB: HistoricalEvent
  ): Contradiction | null {
    if (eventA.location && eventB.location) {
      if (eventA.location.name !== eventB.location.name) {
        return {
          id: `location-conflict-${eventA.id}-${eventB.id}`,
          eventId: eventA.id,
          conflictingEventId: eventB.id,
          description: `Location conflict: "${eventA.location.name}" vs "${eventB.location.name}"`,
          sources: [...eventA.sources, ...eventB.sources],
          type: 'fact_conflict' as any,
          severity: 'moderate',
        };
      }
    }

    return null;
  }

  /**
   * Check if two events likely describe the same thing
   */
  private eventsDescribeSameThing(eventA: HistoricalEvent, eventB: HistoricalEvent): boolean {
    // Simple check - can be enhanced with NLP
    const commonTags = eventA.tags.filter((tag) => eventB.tags.includes(tag));
    return commonTags.length >= 2;
  }

  /**
   * Get contradictions summary
   */
  getSummary(contradictions: Contradiction[]): {
    total: number;
    byType: Record<string, number>;
    bySeverity: Record<string, number>;
  } {
    const summary = {
      total: contradictions.length,
      byType: {} as Record<string, number>,
      bySeverity: {} as Record<string, number>,
    };

    contradictions.forEach((c) => {
      summary.byType[c.type] = (summary.byType[c.type] || 0) + 1;
      summary.bySeverity[c.severity] = (summary.bySeverity[c.severity] || 0) + 1;
    });

    return summary;
  }
}

export * from '@ourstory/timeline-engine';
