/**
 * Agent APOSTLE - Vatican Secrets & Religious Cover-ups Specialist
 * Investigates hidden religious texts, Vatican archives, and suppressed spiritual knowledge
 */

import { SourceType, SourceReliability } from '@ourstory/timeline-engine';
import {
  StoryAgent,
  AgentSpecialization,
  ResearchMethodology,
  InvestigationStatus,
} from '../types';

export const vaticanSecretsAgent: StoryAgent = {
  id: 'agent-apostle-005',
  name: 'Vatican Secrets Research Agent',
  codename: 'APOSTLE',
  description:
    'Specialized agent investigating Vatican archives, suppressed gospels, religious cover-ups, and the hidden history of organized religion. Analyzes the Dead Sea Scrolls, Nag Hammadi texts, and the political manipulation of spiritual teachings throughout history.',
  specialization: AgentSpecialization.RELIGIOUS_SECRETS,
  methodologies: [
    ResearchMethodology.DOCUMENT_ANALYSIS,
    ResearchMethodology.TIMELINE_RECONSTRUCTION,
    ResearchMethodology.SOURCE_TRIANGULATION,
    ResearchMethodology.PATTERN_RECOGNITION,
  ],
  primarySources: [SourceType.RELIGIOUS, SourceType.ACADEMIC, SourceType.ARCHAEOLOGICAL],
  preferredReliability: [
    SourceReliability.PRIMARY,
    SourceReliability.SECONDARY,
    SourceReliability.CONTESTED,
  ],
  expertise: [
    'Vatican Secret Archives',
    'Dead Sea Scrolls',
    'Nag Hammadi library',
    'Gnostic Christianity',
    'Council of Nicaea',
    'Lost gospels',
    'Knights Templar',
    'Papal conspiracies',
    'Religious text manipulation',
    'Early Christianity',
  ],
  researchTopics: [
    {
      id: 'topic-vatican-001',
      name: 'Vatican Secret Archives',
      description:
        'Investigation into the contents and access restrictions of the Vatican Apostolic Archive and what secrets may be hidden within.',
      status: InvestigationStatus.COVERED_UP,
      officialNarrative:
        'The Vatican Archives contain administrative records and historical documents that are being gradually made available to researchers.',
      alternativeTheories: [
        'Archive contains evidence contradicting official church history',
        'Suppressed gospels and texts held within',
        'Documents proving church manipulation of Christianity',
        'Evidence of crimes throughout church history concealed',
        'Knowledge of advanced ancient civilizations hidden',
      ],
      keyEvidence: [
        '53 miles of shelving, limited access',
        'Renamed from "Secret" to "Apostolic" Archive',
        'Centuries of restricted documents',
        'Selective release of materials',
        'Missing periods in historical records',
        'Templar trial documents released showed manipulated confessions',
      ],
      documents: [
        {
          id: 'doc-vat-001',
          title: 'Chinon Parchment',
          type: 'declassified',
          releaseDate: '2007',
          source: 'Vatican Archives',
          keyFindings: [
            'Pope Clement V absolved Templar leaders',
            'Confessions obtained under torture',
            'Document hidden for 700 years',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-vat-001',
          name: 'Pope Clement V',
          role: 'Pope',
          organization: 'Catholic Church',
          timeActive: '1305-1314',
          notes: 'Secretly absolved Templars while publicly condemning them',
        },
      ],
      relatedTopics: ['topic-nicaea-001', 'topic-nag-001'],
      contradictions: [
        'Transparency claims vs. centuries of restricted access',
        'Historical record vs. missing documents',
        'Official teachings vs. suppressed texts',
      ],
      unansweredQuestions: [
        'What documents remain permanently restricted?',
        'What does the church know about early Christianity?',
        'What evidence of historical crimes is concealed?',
        'Why are certain texts still suppressed?',
      ],
    },
    {
      id: 'topic-nag-001',
      name: 'Nag Hammadi & Gnostic Texts',
      description:
        'Investigation into the Gnostic gospels and their implications for understanding early Christianity and suppressed spiritual knowledge.',
      dateRange: {
        start: '100 CE',
        end: '400 CE',
      },
      status: InvestigationStatus.PARTIALLY_RESOLVED,
      officialNarrative:
        'Gnostic texts represent heretical offshoots of Christianity that were rightfully rejected by the early church.',
      alternativeTheories: [
        'Gnostic Christianity may be closer to original teachings',
        'Orthodox Christianity is political construct',
        'Suppressed texts contain authentic Jesus teachings',
        'Reincarnation and other concepts removed from Christianity',
        'Church created to control rather than liberate',
      ],
      keyEvidence: [
        'Gospel of Thomas contains unique sayings',
        'Gospel of Mary shows female leadership',
        'Texts buried to preserve them from destruction',
        'Constantine politicized Christianity',
        'Council of Nicaea excluded many texts',
        'Gnostics persecuted and destroyed',
      ],
      documents: [
        {
          id: 'doc-nag-001',
          title: 'Nag Hammadi Library',
          type: 'academic',
          releaseDate: '1945',
          source: 'Archaeological discovery',
          keyFindings: [
            '52 texts discovered in Egypt',
            'Alternative gospels and teachings',
            'Hidden for 1600 years',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-nag-001',
          name: 'Constantine I',
          role: 'Roman Emperor',
          nationality: 'Roman',
          timeActive: '306-337 CE',
          notes: 'Convened Council of Nicaea; politicized Christianity',
        },
      ],
      relatedTopics: ['topic-vatican-001', 'topic-nicaea-001'],
      contradictions: [
        'Heresy label vs. early dates of texts',
        'Jesus teachings vs. church doctrines',
        'Spiritual liberation vs. institutional control',
      ],
      unansweredQuestions: [
        'What did Jesus actually teach?',
        'Why were certain gospels excluded?',
        'What knowledge was deliberately suppressed?',
        'How much of Christianity is political invention?',
      ],
    },
  ],
  keyQuestions: [
    'What does the Vatican archive truly contain?',
    'How has Christianity been manipulated over time?',
    'What authentic teachings have been suppressed?',
    'Why were the Gnostics persecuted?',
    'What is the true history of organized religion?',
  ],
  motto: 'Faith should not fear truth.',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

export default vaticanSecretsAgent;
