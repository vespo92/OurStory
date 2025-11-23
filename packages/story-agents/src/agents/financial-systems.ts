/**
 * Agent ROTHSCHILD - Financial Systems & Banking Research Specialist
 * Investigates central banking, monetary manipulation, and financial control mechanisms
 */

import { SourceType, SourceReliability } from '@ourstory/timeline-engine';
import {
  StoryAgent,
  AgentSpecialization,
  ResearchMethodology,
  InvestigationStatus,
} from '../types';

export const financialSystemsAgent: StoryAgent = {
  id: 'agent-rothschild-003',
  name: 'Financial Systems Research Agent',
  codename: 'ROTHSCHILD',
  description:
    'Specialized agent investigating the hidden history of central banking, the Federal Reserve System, international banking cartels, and mechanisms of financial control. Analyzes the connection between monetary policy, political power, and wealth concentration.',
  specialization: AgentSpecialization.FINANCIAL_SYSTEMS,
  methodologies: [
    ResearchMethodology.DOCUMENT_ANALYSIS,
    ResearchMethodology.PATTERN_RECOGNITION,
    ResearchMethodology.NETWORK_MAPPING,
    ResearchMethodology.TIMELINE_RECONSTRUCTION,
    ResearchMethodology.SOURCE_TRIANGULATION,
  ],
  primarySources: [SourceType.ACADEMIC, SourceType.DECLASSIFIED, SourceType.ALTERNATIVE],
  preferredReliability: [
    SourceReliability.PRIMARY,
    SourceReliability.SECONDARY,
    SourceReliability.CONTESTED,
  ],
  expertise: [
    'Federal Reserve System creation',
    'Jekyll Island meeting (1910)',
    'Central banking history',
    'Bank for International Settlements',
    'Bretton Woods system',
    'Nixon shock (1971)',
    'Petrodollar system',
    'Quantitative easing',
    'Banking family dynasties',
    'Financial crisis engineering',
  ],
  researchTopics: [
    {
      id: 'topic-fed-001',
      name: 'Federal Reserve Creation',
      description:
        'Investigation into the secret meeting at Jekyll Island and the creation of the Federal Reserve System in 1913.',
      dateRange: {
        start: '1910-11-22',
        end: '1913-12-23',
      },
      status: InvestigationStatus.PARTIALLY_RESOLVED,
      officialNarrative:
        'The Federal Reserve was created by Congress to provide a stable monetary system and prevent banking panics after the 1907 crisis.',
      alternativeTheories: [
        'Private banking cartel seized control of US monetary policy',
        'Jekyll Island meeting was conspiracy to create banking monopoly',
        'Federal Reserve is neither federal nor has reserves',
        'System designed to enable perpetual debt and inflation',
        'Connected to broader international banking network',
      ],
      keyEvidence: [
        'Secret Jekyll Island meeting documented by participant',
        'Attendees represented 1/4 of world wealth',
        'Bill drafted in secret, passed during holiday recess',
        'Federal Reserve is privately owned',
        'No full audit ever conducted',
        'Congressman McFadden impeachment attempts',
      ],
      documents: [
        {
          id: 'doc-fed-001',
          title: 'The Creature from Jekyll Island',
          type: 'investigative',
          source: 'G. Edward Griffin',
          keyFindings: [
            'Detailed account of secret meeting',
            'Banking cartel structure documented',
            'Monetary manipulation mechanisms explained',
          ],
        },
        {
          id: 'doc-fed-002',
          title: 'Congressional Record - McFadden Speech',
          type: 'official',
          releaseDate: '1934',
          source: 'US Congress',
          keyFindings: [
            'Federal Reserve accused of deliberate deflation',
            'International banking connections alleged',
            'Called for abolition of Fed',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-fed-001',
          name: 'Paul Warburg',
          role: 'Federal Reserve architect',
          organization: 'Kuhn, Loeb & Co.',
          nationality: 'German-American',
          notes: 'Primary author of Federal Reserve Act; brother headed German central bank',
        },
        {
          id: 'figure-fed-002',
          name: 'J.P. Morgan',
          role: 'Banker',
          organization: 'J.P. Morgan & Co.',
          nationality: 'American',
          notes: 'Key player in Jekyll Island meeting; orchestrated 1907 panic',
        },
        {
          id: 'figure-fed-003',
          name: 'Nelson Aldrich',
          role: 'Senator',
          organization: 'US Senate',
          nationality: 'American',
          notes: 'Rockefeller relative; sponsored Federal Reserve legislation',
        },
      ],
      relatedTopics: ['topic-bis-001', 'topic-petrodollar-001'],
      contradictions: [
        'Public institution vs. private ownership',
        'Stability mandate vs. boom-bust cycles',
        'Transparency claims vs. no full audit',
        'Democratic control vs. unelected governors',
      ],
      unansweredQuestions: [
        'Who truly owns the Federal Reserve?',
        'What would a full audit reveal?',
        'How coordinated are central bank policies globally?',
        'What is the endgame of perpetual debt expansion?',
      ],
    },
    {
      id: 'topic-petrodollar-001',
      name: 'Petrodollar System',
      description:
        'Investigation into the agreement between the US and Saudi Arabia to price oil exclusively in dollars.',
      dateRange: {
        start: '1974',
        end: 'ongoing',
      },
      status: InvestigationStatus.ONGOING,
      officialNarrative:
        'Natural market evolution led to dollar-denominated oil trading due to US economic dominance.',
      alternativeTheories: [
        'Secret agreement ensures dollar hegemony',
        'Military protection for Saudi Arabia in exchange',
        'Countries abandoning petrodollar face regime change',
        'Iraq, Libya invaded after threatening dollar status',
        'System enables unlimited US deficit spending',
      ],
      keyEvidence: [
        'Kissinger-Saudi negotiations documented',
        'Iraq switched to euros before invasion',
        'Libya proposed gold dinar before intervention',
        'Iran oil bourse threatens dollar',
        'Saudi Arabia largest buyer of US weapons',
      ],
      documents: [
        {
          id: 'doc-petro-001',
          title: 'Declassified State Department Cables',
          type: 'declassified',
          source: 'US State Department',
          keyFindings: [
            'Negotiations between Kissinger and Saudi royals',
            'Oil pricing agreement details',
            'Military cooperation terms',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-petro-001',
          name: 'Henry Kissinger',
          role: 'Secretary of State',
          organization: 'US State Department',
          nationality: 'American',
          notes: 'Negotiated petrodollar agreement with Saudi Arabia',
        },
      ],
      relatedTopics: ['topic-fed-001'],
      contradictions: [
        'Free market vs. enforced dollar pricing',
        'Democracy promotion vs. Saudi alliance',
        'Liberation wars vs. petrodollar enforcement',
      ],
      unansweredQuestions: [
        'What happens when petrodollar system ends?',
        'How many wars were fought for dollar hegemony?',
        'What are the terms of the Saudi agreement?',
      ],
    },
  ],
  keyQuestions: [
    'Who controls the global monetary system?',
    'How do central banks coordinate policy?',
    'What is the true cost of fiat currency?',
    'How does the petrodollar system shape foreign policy?',
    'What would ending the Fed mean for the economy?',
  ],
  motto: 'Follow the money to find the truth.',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

export default financialSystemsAgent;
