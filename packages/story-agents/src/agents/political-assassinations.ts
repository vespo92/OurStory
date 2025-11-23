/**
 * Agent GRASSY KNOLL - Political Assassinations Research Specialist
 * Investigates JFK, RFK, MLK, and other suspicious deaths of political figures
 */

import { SourceType, SourceReliability } from '@ourstory/timeline-engine';
import {
  StoryAgent,
  AgentSpecialization,
  ResearchMethodology,
  InvestigationStatus,
} from '../types';

export const politicalAssassinationsAgent: StoryAgent = {
  id: 'agent-grassyknoll-008',
  name: 'Political Assassinations Research Agent',
  codename: 'GRASSY KNOLL',
  description:
    'Specialized agent investigating political assassinations, suspicious deaths of public figures, and the cover-ups surrounding them. Focuses on the Kennedy assassinations, MLK, and patterns of eliminating voices that threaten established power structures.',
  specialization: AgentSpecialization.POLITICAL_ASSASSINATIONS,
  methodologies: [
    ResearchMethodology.FORENSIC_ANALYSIS,
    ResearchMethodology.WITNESS_TESTIMONY,
    ResearchMethodology.DOCUMENT_ANALYSIS,
    ResearchMethodology.TIMELINE_RECONSTRUCTION,
    ResearchMethodology.PATTERN_RECOGNITION,
  ],
  primarySources: [SourceType.DECLASSIFIED, SourceType.ACADEMIC, SourceType.ALTERNATIVE],
  preferredReliability: [
    SourceReliability.PRIMARY,
    SourceReliability.SECONDARY,
    SourceReliability.CONTESTED,
  ],
  expertise: [
    'JFK assassination',
    'RFK assassination',
    'MLK assassination',
    'Warren Commission',
    'HSCA investigation',
    'CIA involvement allegations',
    'Mafia connections',
    'Witness deaths',
    'Ballistic evidence',
    'Zapruder film analysis',
  ],
  researchTopics: [
    {
      id: 'topic-jfk-001',
      name: 'JFK Assassination',
      description:
        'Investigation into the assassination of President John F. Kennedy in Dallas on November 22, 1963.',
      dateRange: {
        start: '1963-11-22',
        end: '1963-11-22',
      },
      status: InvestigationStatus.COVERED_UP,
      officialNarrative:
        'Lee Harvey Oswald acted alone, firing three shots from the Texas School Book Depository, killing President Kennedy.',
      alternativeTheories: [
        'Multiple shooters were involved',
        'CIA orchestrated the assassination',
        'Mafia involvement with CIA cooperation',
        'Military-industrial complex motive',
        'Anti-Castro Cubans participated',
        'Oswald was a patsy as he claimed',
        'LBJ involvement',
      ],
      keyEvidence: [
        'Magic bullet theory contradicts physics',
        'Zapruder film shows backward head movement',
        'Witnesses reported shots from grassy knoll',
        'Acoustic evidence suggested multiple shooters',
        'Oswald killed before trial',
        'Jack Ruby had mob connections',
        'JFK threatened to splinter CIA',
        'Signed EO 11110 challenging Federal Reserve',
        'Wanted to withdraw from Vietnam',
      ],
      documents: [
        {
          id: 'doc-jfk-001',
          title: 'Warren Commission Report',
          type: 'official',
          releaseDate: '1964',
          source: 'Warren Commission',
          keyFindings: [
            'Oswald acted alone',
            'Single bullet theory',
            'No conspiracy found',
          ],
        },
        {
          id: 'doc-jfk-002',
          title: 'HSCA Final Report',
          type: 'official',
          releaseDate: '1979',
          source: 'House Select Committee on Assassinations',
          keyFindings: [
            'Probable conspiracy',
            'Acoustic evidence of second shooter',
            'Criticized Warren Commission',
          ],
        },
        {
          id: 'doc-jfk-003',
          title: 'JFK Records Collection',
          type: 'declassified',
          source: 'National Archives',
          keyFindings: [
            'Many documents still withheld',
            'CIA operational interest in Oswald',
            'FBI prior knowledge concealed',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-jfk-001',
          name: 'Lee Harvey Oswald',
          role: 'Alleged assassin',
          nationality: 'American',
          notes: 'Killed by Jack Ruby before trial; claimed he was a patsy',
        },
        {
          id: 'figure-jfk-002',
          name: 'Jack Ruby',
          role: 'Nightclub owner / Oswald\'s killer',
          nationality: 'American',
          notes: 'Had mob connections; died of cancer before retrial',
        },
        {
          id: 'figure-jfk-003',
          name: 'Allen Dulles',
          role: 'Former CIA Director',
          organization: 'CIA / Warren Commission',
          nationality: 'American',
          notes: 'Fired by JFK; appointed to Warren Commission',
        },
      ],
      relatedTopics: ['topic-rfk-001', 'topic-mlk-001'],
      contradictions: [
        'Lone gunman vs. multiple shooter evidence',
        'Magic bullet vs. physics',
        'Case closed vs. documents still classified',
        'No conspiracy vs. HSCA finding probable conspiracy',
      ],
      unansweredQuestions: [
        'Why are documents still classified 60 years later?',
        'What was Oswald\'s relationship with intelligence agencies?',
        'Who benefited from JFK\'s death?',
        'Why was Oswald killed before he could talk?',
        'What did witnesses see on the grassy knoll?',
      ],
    },
    {
      id: 'topic-rfk-001',
      name: 'RFK Assassination',
      description:
        'Investigation into the assassination of Robert F. Kennedy on June 5, 1968, in Los Angeles.',
      dateRange: {
        start: '1968-06-05',
        end: '1968-06-05',
      },
      status: InvestigationStatus.COVERED_UP,
      officialNarrative:
        'Sirhan Sirhan acted alone, shooting RFK in the Ambassador Hotel kitchen.',
      alternativeTheories: [
        'Second shooter was present',
        'Sirhan was a Manchurian candidate',
        'CIA involvement through MK-Ultra',
        'Security guard Thane Eugene Cesar was shooter',
        'Sirhan cannot remember the shooting',
      ],
      keyEvidence: [
        'More bullet holes than Sirhan\'s gun capacity',
        'Fatal shot from behind; Sirhan was in front',
        'Powder burns indicate point-blank range',
        'Sirhan has no memory of shooting',
        'Hypnotic programming evidence',
        'Security guard drew weapon, was behind RFK',
        'LAPD destroyed evidence',
      ],
      documents: [
        {
          id: 'doc-rfk-001',
          title: 'LAPD Investigation Files',
          type: 'official',
          source: 'Los Angeles Police Department',
          keyFindings: [
            'Evidence destroyed',
            'Extra bullets not explained',
            'Witness testimony conflicts',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-rfk-001',
          name: 'Sirhan Sirhan',
          role: 'Convicted assassin',
          nationality: 'Palestinian-Jordanian',
          notes: 'Claims no memory of shooting; denied parole repeatedly',
        },
        {
          id: 'figure-rfk-002',
          name: 'Thane Eugene Cesar',
          role: 'Security guard',
          organization: 'Ace Guard Service',
          nationality: 'American',
          notes: 'Was directly behind RFK; drew weapon; later sold gun',
        },
      ],
      relatedTopics: ['topic-jfk-001', 'topic-mkultra-001'],
      contradictions: [
        'Sirhan in front vs. fatal shot from behind',
        '8 bullets fired vs. more holes found',
        'Case closed vs. evidence destroyed',
        'Voluntary act vs. no memory of event',
      ],
      unansweredQuestions: [
        'How was Sirhan programmed?',
        'Who fired the fatal shot from behind?',
        'Why was evidence destroyed?',
        'What is the connection to MK-Ultra?',
      ],
    },
  ],
  keyQuestions: [
    'Why are Kennedy assassination documents still classified?',
    'What is the pattern of eliminating reform candidates?',
    'How many assassinations involved intelligence agencies?',
    'What happened to key witnesses?',
    'How does mind control factor into assassinations?',
  ],
  motto: 'The bullets tell a different story than the official record.',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

export default politicalAssassinationsAgent;
