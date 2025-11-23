/**
 * Agent NORTHWOODS - False Flag Operations & Manufactured Events Specialist
 * Investigates staged events, pretexts for war, and manufactured crises
 */

import { SourceType, SourceReliability } from '@ourstory/timeline-engine';
import {
  StoryAgent,
  AgentSpecialization,
  ResearchMethodology,
  InvestigationStatus,
} from '../types';

export const falseFlagOperationsAgent: StoryAgent = {
  id: 'agent-northwoods-009',
  name: 'False Flag Operations Research Agent',
  codename: 'NORTHWOODS',
  description:
    'Specialized agent investigating false flag operations, manufactured pretexts for war, and staged events throughout history. Analyzes declassified operations like Northwoods, Gulf of Tonkin, and patterns of deception used to manipulate public opinion and justify military action.',
  specialization: AgentSpecialization.FALSE_FLAG_OPERATIONS,
  methodologies: [
    ResearchMethodology.DOCUMENT_ANALYSIS,
    ResearchMethodology.DECLASSIFICATION_TRACKING,
    ResearchMethodology.TIMELINE_RECONSTRUCTION,
    ResearchMethodology.PATTERN_RECOGNITION,
    ResearchMethodology.SOURCE_TRIANGULATION,
  ],
  primarySources: [SourceType.DECLASSIFIED, SourceType.ACADEMIC, SourceType.ALTERNATIVE],
  preferredReliability: [
    SourceReliability.PRIMARY,
    SourceReliability.SECONDARY,
    SourceReliability.CONTESTED,
  ],
  expertise: [
    'Operation Northwoods',
    'Gulf of Tonkin incident',
    'USS Maine explosion',
    'Reichstag fire',
    'Operation Gladio',
    'Lavon Affair',
    'WMD claims and Iraq War',
    'Lusitania sinking',
    'Pearl Harbor foreknowledge',
    'Strategy of tension',
  ],
  researchTopics: [
    {
      id: 'topic-northwoods-001',
      name: 'Operation Northwoods',
      description:
        'Declassified 1962 DoD proposal to stage false flag attacks on American targets to justify invasion of Cuba.',
      dateRange: {
        start: '1962-03-13',
        end: '1962-03-13',
      },
      status: InvestigationStatus.DECLASSIFIED,
      officialNarrative:
        'Operation Northwoods was proposed but rejected by President Kennedy. It was never implemented.',
      alternativeTheories: [
        'Demonstrates willingness to kill Americans for political goals',
        'Similar operations may have been implemented elsewhere',
        'Template for future false flag operations',
        'JFK\'s rejection contributed to his assassination',
      ],
      keyEvidence: [
        'Fully declassified documents available',
        'Proposed hijacking planes and blaming Cuba',
        'Proposed sinking ships and blaming Cuba',
        'Proposed terrorist attacks in Miami',
        'Proposed shooting down drone aircraft disguised as civilian',
        'Signed by Joint Chiefs of Staff',
        'Rejected by Kennedy',
      ],
      documents: [
        {
          id: 'doc-north-001',
          title: 'Operation Northwoods Memorandum',
          type: 'declassified',
          classificationLevel: 'TOP SECRET (declassified)',
          releaseDate: '1997',
          source: 'Joint Chiefs of Staff / National Archives',
          keyFindings: [
            'Detailed plans for false flag attacks',
            'Innocent American casualties acceptable',
            'Elaborate deception operations planned',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-north-001',
          name: 'General Lyman Lemnitzer',
          role: 'Chairman, Joint Chiefs of Staff',
          organization: 'US Military',
          nationality: 'American',
          notes: 'Presented Northwoods to McNamara; later became NATO commander',
        },
      ],
      relatedTopics: ['topic-tonkin-001', 'topic-gladio-001'],
      contradictions: [
        'Protect Americans vs. plan to kill Americans',
        'Democratic values vs. manufactured pretexts',
        'Never implemented vs. template for operations',
      ],
      unansweredQuestions: [
        'Were similar operations ever implemented?',
        'How common are false flag proposals?',
        'What other declassified operations remain unknown?',
      ],
    },
    {
      id: 'topic-tonkin-001',
      name: 'Gulf of Tonkin Incident',
      description:
        'Investigation into the 1964 incidents used to justify escalation of the Vietnam War.',
      dateRange: {
        start: '1964-08-02',
        end: '1964-08-04',
      },
      status: InvestigationStatus.DECLASSIFIED,
      officialNarrative:
        'North Vietnamese torpedo boats attacked USS Maddox twice in international waters, justifying military response.',
      alternativeTheories: [
        'Second attack never occurred',
        'First attack was provoked by US operations',
        'Administration knew truth but lied to Congress',
        'Deliberately manufactured pretext for war',
      ],
      keyEvidence: [
        'NSA declassified documents confirm second attack did not occur',
        'Secretary McNamara later admitted doubts',
        'Johnson privately expressed skepticism',
        'Maddox was supporting covert operations against North Vietnam',
        'Tonkin Gulf Resolution passed on false pretenses',
        '58,000 Americans died in resulting war',
      ],
      documents: [
        {
          id: 'doc-tonkin-001',
          title: 'NSA Declassified Gulf of Tonkin Documents',
          type: 'declassified',
          releaseDate: '2005',
          source: 'National Security Agency',
          keyFindings: [
            'Second attack did not happen',
            'Intelligence was manipulated',
            'Administration knew at the time',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-tonkin-001',
          name: 'Robert McNamara',
          role: 'Secretary of Defense',
          organization: 'US Department of Defense',
          nationality: 'American',
          notes: 'Later admitted he had doubts about second attack',
        },
        {
          id: 'figure-tonkin-002',
          name: 'President Lyndon B. Johnson',
          role: 'President',
          organization: 'US Government',
          nationality: 'American',
          notes: 'Privately skeptical but used incident for escalation',
        },
      ],
      relatedTopics: ['topic-northwoods-001', 'topic-iraq-001'],
      contradictions: [
        'Unprovoked attack vs. covert operations',
        'Second attack vs. NSA confirms did not occur',
        'Defensive response vs. manufactured pretext',
      ],
      unansweredQuestions: [
        'How many wars have been started on false pretenses?',
        'Who was held accountable?',
        'What pattern does this establish?',
      ],
    },
    {
      id: 'topic-iraq-001',
      name: 'Iraq WMD and War Pretext',
      description:
        'Investigation into the false claims of weapons of mass destruction used to justify the 2003 Iraq invasion.',
      dateRange: {
        start: '2002',
        end: '2003',
      },
      status: InvestigationStatus.PARTIALLY_RESOLVED,
      officialNarrative:
        'Intelligence agencies genuinely believed Iraq had WMD programs. The invasion was justified based on available intelligence.',
      alternativeTheories: [
        'Intelligence was deliberately manipulated',
        'Administration knew claims were false',
        'War was planned before 9/11',
        'Oil and geopolitical control were true motives',
        'Israeli influence pushed for war',
      ],
      keyEvidence: [
        'No WMDs found after invasion',
        'Curveball source was known to be unreliable',
        'Yellowcake uranium claims were forged',
        'Powell UN presentation contained falsehoods',
        'Downing Street Memo: "intelligence fixed around policy"',
        'PNAC called for Iraq invasion before 9/11',
        'Millions of casualties resulted',
      ],
      documents: [
        {
          id: 'doc-iraq-001',
          title: 'Downing Street Memo',
          type: 'leaked',
          releaseDate: '2005',
          source: 'UK Government',
          keyFindings: [
            'Intelligence was being fixed around policy',
            'Decision for war already made',
            'Legal justification was being sought after the fact',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-iraq-001',
          name: 'Colin Powell',
          role: 'Secretary of State',
          organization: 'US State Department',
          nationality: 'American',
          notes: 'Gave UN presentation with false WMD claims; later expressed regret',
        },
      ],
      relatedTopics: ['topic-tonkin-001'],
      contradictions: [
        'WMD threat vs. none found',
        'Intelligence failure vs. deliberate manipulation',
        'Liberation vs. destruction of country',
      ],
      unansweredQuestions: [
        'Who will be held accountable?',
        'How was the intelligence fixed?',
        'What were the true motives for war?',
      ],
    },
  ],
  keyQuestions: [
    'How many wars have been started on false pretenses?',
    'What patterns exist in false flag operations?',
    'How can citizens detect manufactured events?',
    'Who benefits from these operations?',
    'What is the human cost of wars based on lies?',
  ],
  motto: 'The first casualty of war is truth.',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

export default falseFlagOperationsAgent;
