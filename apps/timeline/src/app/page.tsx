'use client';

import { TimelineEngine } from '@ourstory/timeline-engine';
import { ContradictionTracker } from '@ourstory/contradiction-tracker';
import religiousTimeline from '@ourstory/religious-texts';
import ancientCivilizationsTimeline from '@ourstory/ancient-civilizations';
import alternativeHistoryTimeline from '@ourstory/alternative-history';
import declassifiedTimeline from '@ourstory/declassified-docs';
import ufoDisclosureTimeline from '@ourstory/ufo-disclosure';

export default function Home() {
  // Merge all timelines
  const mergedTimeline = TimelineEngine.mergeTimelines([
    religiousTimeline,
    ancientCivilizationsTimeline,
    alternativeHistoryTimeline,
    declassifiedTimeline,
    ufoDisclosureTimeline,
  ]);

  const engine = new TimelineEngine(mergedTimeline);
  const tracker = new ContradictionTracker();

  // Find contradictions
  const contradictions = tracker.analyzeTimeline(mergedTimeline);
  const summary = tracker.getSummary(contradictions);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">OurStory</h1>
          <p className="text-xl text-gray-600">
            A comprehensive historical timeline comparing academic and alternative sources
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Events</h3>
            <p className="text-3xl font-bold text-blue-600">{mergedTimeline.events.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Sources</h3>
            <p className="text-3xl font-bold text-green-600">{mergedTimeline.sources.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Contradictions</h3>
            <p className="text-3xl font-bold text-red-600">{summary.total}</p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Timeline Events</h2>
          <div className="space-y-4">
            {mergedTimeline.events
              .sort((a, b) => {
                const dateA = new Date(a.dateRange.start);
                const dateB = new Date(b.dateRange.start);
                return dateA.getTime() - dateB.getTime();
              })
              .map((event) => (
                <div key={event.id} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <span className="text-sm text-gray-500">
                      {typeof event.dateRange.start === 'string'
                        ? event.dateRange.start
                        : event.dateRange.start.toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{event.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Sources:</strong>{' '}
                    {event.sources.map((s) => s.name).join(', ')}
                    <br />
                    <strong>Confidence:</strong> {event.dateRange.confidence}%
                    {event.location && (
                      <>
                        <br />
                        <strong>Location:</strong> {event.location.name}
                      </>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contradictions Detected</h2>
          {contradictions.length === 0 ? (
            <p className="text-gray-600">No contradictions detected yet.</p>
          ) : (
            <div className="space-y-4">
              {contradictions.map((contradiction) => (
                <div
                  key={contradiction.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    contradiction.severity === 'major'
                      ? 'border-red-500 bg-red-50'
                      : contradiction.severity === 'moderate'
                        ? 'border-yellow-500 bg-yellow-50'
                        : 'border-blue-500 bg-blue-50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{contradiction.type.replace('_', ' ')}</h4>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        contradiction.severity === 'major'
                          ? 'bg-red-200 text-red-800'
                          : contradiction.severity === 'moderate'
                            ? 'bg-yellow-200 text-yellow-800'
                            : 'bg-blue-200 text-blue-800'
                      }`}
                    >
                      {contradiction.severity}
                    </span>
                  </div>
                  <p className="text-gray-700">{contradiction.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
