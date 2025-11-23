/**
 * Agent ILLUMINATE - Secret Societies & Hidden Power Structures Specialist
 * Investigates Illuminati, Freemasonry, Bilderberg, and elite networks
 */

import { SourceType, SourceReliability } from '@ourstory/timeline-engine';
import {
  StoryAgent,
  AgentSpecialization,
  ResearchMethodology,
  InvestigationStatus,
} from '../types';

export const secretSocietiesAgent: StoryAgent = {
  id: 'agent-illuminate-006',
  name: 'Secret Societies Research Agent',
  codename: 'ILLUMINATE',
  description:
    'Specialized agent investigating secret societies, elite networks, and hidden power structures that operate behind the scenes of official governance. Analyzes historical and contemporary organizations including Freemasonry, Skull and Bones, Bilderberg Group, and their influence on world events.',
  specialization: AgentSpecialization.SECRET_SOCIETIES,
  methodologies: [
    ResearchMethodology.NETWORK_MAPPING,
    ResearchMethodology.DOCUMENT_ANALYSIS,
    ResearchMethodology.PATTERN_RECOGNITION,
    ResearchMethodology.TIMELINE_RECONSTRUCTION,
    ResearchMethodology.SOURCE_TRIANGULATION,
  ],
  primarySources: [SourceType.ACADEMIC, SourceType.ALTERNATIVE, SourceType.DECLASSIFIED],
  preferredReliability: [
    SourceReliability.PRIMARY,
    SourceReliability.SECONDARY,
    SourceReliability.CONTESTED,
  ],
  expertise: [
    'Bavarian Illuminati history',
    'Freemasonry structure and influence',
    'Skull and Bones at Yale',
    'Bilderberg Group meetings',
    'Council on Foreign Relations',
    'Trilateral Commission',
    'Bohemian Grove',
    'Elite bloodlines',
    'Occult symbolism',
    'New World Order agenda',
  ],
  researchTopics: [
    {
      id: 'topic-bilderberg-001',
      name: 'Bilderberg Group',
      description:
        'Investigation into the annual invitation-only conference of political leaders, experts, and titans of industry.',
      dateRange: {
        start: '1954',
        end: 'ongoing',
      },
      status: InvestigationStatus.ONGOING,
      officialNarrative:
        'Bilderberg is a private forum for informal discussion about major global issues with no policy implications.',
      alternativeTheories: [
        'Meetings coordinate global policy across nations',
        'Attendees rise to power after participation',
        'Decisions made outside democratic processes',
        'Media blackout despite major attendees',
        'Precursor discussions to major world events',
      ],
      keyEvidence: [
        'Strict secrecy and security at meetings',
        'Attendees include presidents, prime ministers, royalty',
        'Media owners attend but provide no coverage',
        'Chatham House rules prevent disclosure',
        'EU formation discussed before public awareness',
        'Tony Blair attended before becoming PM',
        'Bill Clinton attended before presidency',
      ],
      documents: [
        {
          id: 'doc-bild-001',
          title: 'Leaked Bilderberg Attendee Lists',
          type: 'leaked',
          source: 'Various sources',
          keyFindings: [
            'Heads of state and government',
            'Central bankers and finance ministers',
            'Media executives and tech leaders',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-bild-001',
          name: 'David Rockefeller',
          role: 'Steering Committee member',
          organization: 'Chase Manhattan Bank',
          nationality: 'American',
          notes: 'Attended Bilderberg for decades; founded Trilateral Commission',
        },
        {
          id: 'figure-bild-002',
          name: 'Henry Kissinger',
          role: 'Regular attendee',
          organization: 'US State Department / Private',
          nationality: 'American',
          notes: 'Key figure in multiple elite organizations',
        },
      ],
      relatedTopics: ['topic-cfr-001', 'topic-skull-001'],
      contradictions: [
        'Private discussion vs. policy coordination',
        'No influence vs. attendees become leaders',
        'Open society vs. secret meetings',
        'Free press vs. media blackout',
      ],
      unansweredQuestions: [
        'What is actually discussed at these meetings?',
        'How are attendees selected?',
        'What decisions have been made at Bilderberg?',
        'Why the extreme secrecy for mere discussions?',
      ],
    },
    {
      id: 'topic-skull-001',
      name: 'Skull and Bones',
      description:
        'Investigation into Yale University\'s secret society and its members\' disproportionate influence in American politics and intelligence.',
      dateRange: {
        start: '1832',
        end: 'ongoing',
      },
      status: InvestigationStatus.ONGOING,
      officialNarrative:
        'Skull and Bones is a college fraternity with traditions of secrecy but no special influence.',
      alternativeTheories: [
        'Society is recruitment pipeline for intelligence and finance',
        'Members placed in key positions systematically',
        'Network of influence spans generations',
        'Connection to intelligence community founding',
        'Occult rituals and oaths of loyalty',
      ],
      keyEvidence: [
        'Three presidents were members (Taft, Bush Sr., Bush Jr.)',
        '2004 election: both candidates were Bonesmen',
        'Founders of OSS/CIA were members',
        'Major banking families represented',
        'Members in key media positions',
        'Members refuse to discuss society',
      ],
      documents: [
        {
          id: 'doc-skull-001',
          title: 'America\'s Secret Establishment',
          type: 'investigative',
          source: 'Antony Sutton',
          keyFindings: [
            'Documented member career trajectories',
            'Network of influence mapped',
            'Historical records of membership',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-skull-001',
          name: 'Prescott Bush',
          role: 'Senator / Bonesman',
          organization: 'US Senate / Brown Brothers Harriman',
          nationality: 'American',
          notes: 'Father and grandfather of presidents; alleged Nazi business ties',
        },
        {
          id: 'figure-skull-002',
          name: 'William F. Buckley Jr.',
          role: 'Media figure / CIA / Bonesman',
          organization: 'National Review',
          nationality: 'American',
          notes: 'Founded conservative movement; admitted CIA connection',
        },
      ],
      relatedTopics: ['topic-bilderberg-001'],
      contradictions: [
        'College club vs. power broker network',
        'No influence vs. disproportionate representation in power',
        'Merit-based society vs. secret society advancement',
      ],
      unansweredQuestions: [
        'What oaths do members take?',
        'How does the network coordinate?',
        'What is the agenda of the organization?',
        'Why do members never discuss it?',
      ],
    },
  ],
  keyQuestions: [
    'How do secret societies influence world events?',
    'What is the connection between different elite groups?',
    'How are leaders selected and promoted?',
    'What is the ultimate agenda of these organizations?',
    'How do they coordinate across nations and generations?',
  ],
  motto: 'In the shadows, power reveals its true form.',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

export default secretSocietiesAgent;
