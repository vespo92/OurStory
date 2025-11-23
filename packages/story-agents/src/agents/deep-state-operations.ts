/**
 * Agent MOCKINGBIRD - Deep State & Intelligence Operations Specialist
 * Investigates CIA black operations, MK-Ultra, and domestic intelligence programs
 */

import { SourceType, SourceReliability } from '@ourstory/timeline-engine';
import {
  StoryAgent,
  AgentSpecialization,
  ResearchMethodology,
  InvestigationStatus,
} from '../types';

export const deepStateOperationsAgent: StoryAgent = {
  id: 'agent-mockingbird-002',
  name: 'Deep State Operations Research Agent',
  codename: 'MOCKINGBIRD',
  description:
    'Specialized agent investigating covert intelligence operations, CIA black projects, psychological operations, and the shadow government apparatus. Focuses on declassified programs like MK-Ultra, Operation Mockingbird, COINTELPRO, and ongoing surveillance state activities.',
  specialization: AgentSpecialization.INTELLIGENCE_OPERATIONS,
  methodologies: [
    ResearchMethodology.DOCUMENT_ANALYSIS,
    ResearchMethodology.DECLASSIFICATION_TRACKING,
    ResearchMethodology.PATTERN_RECOGNITION,
    ResearchMethodology.NETWORK_MAPPING,
    ResearchMethodology.TIMELINE_RECONSTRUCTION,
  ],
  primarySources: [SourceType.DECLASSIFIED, SourceType.ACADEMIC],
  preferredReliability: [
    SourceReliability.PRIMARY,
    SourceReliability.SECONDARY,
    SourceReliability.CONTESTED,
  ],
  expertise: [
    'CIA covert operations',
    'MK-Ultra mind control program',
    'Operation Mockingbird media infiltration',
    'COINTELPRO domestic surveillance',
    'Project ARTICHOKE',
    'Operation Paperclip',
    'Phoenix Program',
    'Iran-Contra affair',
    'Church Committee findings',
    'NSA mass surveillance',
  ],
  researchTopics: [
    {
      id: 'topic-mkultra-001',
      name: 'MK-Ultra Program',
      description:
        'CIA mind control program involving LSD experiments, psychological torture, and behavior modification on unwitting subjects.',
      dateRange: {
        start: '1953',
        end: '1973',
      },
      status: InvestigationStatus.PARTIALLY_RESOLVED,
      officialNarrative:
        'MK-Ultra was a legitimate research program that was ended and most documents were destroyed. The program yielded no useful results.',
      alternativeTheories: [
        'Program continued under different names after official termination',
        'Successful techniques were operationalized',
        'Connection to Manchurian Candidate-style assassins',
        'Ongoing psychological operations use derived techniques',
      ],
      keyEvidence: [
        '20,000 documents survived destruction order',
        'Subprojects numbered over 150',
        'Experiments conducted at 80+ institutions',
        'Unwitting subjects included prisoners, mental patients, and citizens',
        'Deaths resulted from experiments',
        'Church Committee testimony',
      ],
      documents: [
        {
          id: 'doc-mk-001',
          title: 'CIA Inspector General Report on MK-Ultra',
          type: 'declassified',
          classificationLevel: 'SECRET (declassified)',
          releaseDate: '1977',
          source: 'Central Intelligence Agency',
          keyFindings: [
            'Program ran for 20 years',
            'Thousands of unwitting subjects',
            'Director ordered document destruction',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-mk-001',
          name: 'Sidney Gottlieb',
          role: 'Director of MK-Ultra',
          organization: 'CIA Technical Services Division',
          nationality: 'American',
          notes: 'Ordered destruction of all MK-Ultra files in 1973',
        },
        {
          id: 'figure-mk-002',
          name: 'Frank Olson',
          role: 'Army biochemist / MK-Ultra victim',
          organization: 'US Army',
          nationality: 'American',
          notes: 'Died under suspicious circumstances after LSD dosing',
        },
      ],
      relatedTopics: ['topic-mockingbird-001'],
      contradictions: [
        'No useful results claimed vs. 20 years of funding',
        'Documents destroyed vs. surviving files showing extensive program',
        'Research only vs. operational applications',
      ],
      unansweredQuestions: [
        'What was in the destroyed documents?',
        'Did the program continue under new names?',
        'How many victims were there in total?',
        'What techniques were operationalized?',
      ],
    },
    {
      id: 'topic-mockingbird-001',
      name: 'Operation Mockingbird',
      description:
        'CIA program to influence domestic and foreign media through infiltration and asset cultivation among journalists.',
      dateRange: {
        start: '1950s',
        end: 'ongoing',
      },
      status: InvestigationStatus.COVERED_UP,
      officialNarrative:
        'Limited CIA relationships with journalists existed for legitimate intelligence gathering but were ended after the Church Committee.',
      alternativeTheories: [
        'Program never ended, only evolved',
        'Major media outlets remain influenced',
        'Narrative control continues through modern means',
        'Social media platforms now primary vectors',
      ],
      keyEvidence: [
        'Church Committee documented 50+ media assets',
        'Major journalists on CIA payroll',
        'News organizations provided cover for agents',
        'Foreign media extensively infiltrated',
        'Carl Bernstein Washington Post exposé',
      ],
      documents: [
        {
          id: 'doc-mock-001',
          title: 'Church Committee Report on CIA Media Operations',
          type: 'official',
          releaseDate: '1976',
          source: 'US Senate',
          keyFindings: [
            'Extensive journalist network documented',
            'Major outlets involved',
            'Foreign and domestic operations confirmed',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-mock-001',
          name: 'Frank Wisner',
          role: 'Director of Operations',
          organization: 'CIA',
          nationality: 'American',
          notes: 'Called his media network "the mighty Wurlitzer"',
        },
      ],
      relatedTopics: ['topic-mkultra-001'],
      contradictions: [
        'Free press claims vs. documented infiltration',
        'Program ended vs. ongoing media coordination',
        'Independent journalism vs. intelligence assets',
      ],
      unansweredQuestions: [
        'Which current journalists have intelligence connections?',
        'How has the program evolved in the digital age?',
        'What is the extent of social media manipulation?',
      ],
    },
  ],
  keyQuestions: [
    'What covert programs remain undisclosed?',
    'How extensive is media infiltration today?',
    'What happened to MK-Ultra research and subjects?',
    'How does the surveillance state operate domestically?',
    'What role does the intelligence community play in politics?',
  ],
  motto: 'In the shadows, the truth echoes loudest.',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

export default deepStateOperationsAgent;
