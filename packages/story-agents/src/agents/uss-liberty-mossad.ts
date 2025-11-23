/**
 * Agent NAUTILUS - USS Liberty & Mossad Operations Specialist
 * Dedicated to investigating the USS Liberty incident and Israeli intelligence operations
 */

import { SourceType, SourceReliability } from '@ourstory/timeline-engine';
import {
  StoryAgent,
  AgentSpecialization,
  ResearchMethodology,
  InvestigationStatus,
} from '../types';

export const ussLibertyMossadAgent: StoryAgent = {
  id: 'agent-nautilus-001',
  name: 'USS Liberty & Mossad Research Agent',
  codename: 'NAUTILUS',
  description:
    'Specialized agent dedicated to investigating the USS Liberty incident of June 8, 1967, Israeli intelligence operations, and the complex relationship between US and Israeli intelligence agencies. This agent analyzes declassified NSA documents, survivor testimonies, and congressional records to uncover the truth behind one of the most controversial attacks on a US naval vessel.',
  specialization: AgentSpecialization.MILITARY_INCIDENTS,
  methodologies: [
    ResearchMethodology.DOCUMENT_ANALYSIS,
    ResearchMethodology.WITNESS_TESTIMONY,
    ResearchMethodology.TIMELINE_RECONSTRUCTION,
    ResearchMethodology.DECLASSIFICATION_TRACKING,
    ResearchMethodology.SOURCE_TRIANGULATION,
  ],
  primarySources: [SourceType.DECLASSIFIED, SourceType.ACADEMIC],
  preferredReliability: [
    SourceReliability.PRIMARY,
    SourceReliability.SECONDARY,
    SourceReliability.CONTESTED,
  ],
  expertise: [
    'USS Liberty incident (June 8, 1967)',
    'Israeli Defense Forces operations',
    'Mossad intelligence operations',
    'US-Israel intelligence sharing',
    'NSA SIGINT operations',
    'Naval reconnaissance missions',
    'Six-Day War context',
    'Congressional investigations',
    'Military cover-ups',
    'Survivor testimonies',
  ],
  researchTopics: [
    {
      id: 'topic-liberty-001',
      name: 'USS Liberty Attack',
      description:
        'Investigation into the Israeli air and naval attack on the USS Liberty during the Six-Day War that killed 34 American sailors and wounded 171.',
      dateRange: {
        start: '1967-06-08',
        end: '1967-06-08',
      },
      status: InvestigationStatus.OFFICIALLY_DENIED,
      officialNarrative:
        'Israeli forces mistakenly identified the USS Liberty as an Egyptian vessel and attacked it in the fog of war. Israel apologized and paid compensation. The incident was thoroughly investigated and closed.',
      alternativeTheories: [
        'Deliberate attack to prevent US from learning about Israeli plans to attack Syria',
        'Attack intended to be blamed on Egypt to draw US into the war',
        'Cover-up of Israeli war crimes in El Arish',
        'Coordinated operation with knowledge of certain US officials',
        'Attack to protect Operation Cyanide secrets',
      ],
      keyEvidence: [
        'Ship was flying a large American flag visible from distance',
        'Israeli reconnaissance aircraft circled the ship for hours before attack',
        'Attack lasted over 2 hours with multiple waves',
        'Life rafts were deliberately targeted',
        'NSA intercepts of Israeli communications',
        'Survivor testimonies contradict official narrative',
        'Navy Court of Inquiry conducted in only 8 days',
        'Crew ordered not to speak about incident',
      ],
      documents: [
        {
          id: 'doc-liberty-001',
          title: 'NSA Declassified Liberty Documents',
          type: 'declassified',
          classificationLevel: 'TOP SECRET/UMBRA (declassified)',
          releaseDate: '2007',
          source: 'National Security Agency',
          keyFindings: [
            'Intercepts show Israeli pilots identified ship as American',
            'Communications indicate deliberate nature of attack',
          ],
        },
        {
          id: 'doc-liberty-002',
          title: 'Navy Court of Inquiry Report',
          type: 'official',
          releaseDate: '1967-06-18',
          source: 'US Navy',
          keyFindings: [
            'Investigation completed in record time',
            'Key witnesses not interviewed',
            'Scope limited by orders from above',
          ],
        },
        {
          id: 'doc-liberty-003',
          title: 'USS Liberty Veterans Association Testimony',
          type: 'testimony',
          source: 'Survivor testimonies',
          keyFindings: [
            'Crew members saw reconnaissance aircraft before attack',
            'American flag was clearly visible',
            'Deliberate targeting of life rafts observed',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-liberty-001',
          name: 'Captain William McGonagle',
          role: 'Commanding Officer, USS Liberty',
          organization: 'US Navy',
          nationality: 'American',
          notes: 'Awarded Medal of Honor in secret ceremony at Navy Yard, not White House',
        },
        {
          id: 'figure-liberty-002',
          name: 'Admiral John McCain Sr.',
          role: 'Commander-in-Chief, US Naval Forces Europe',
          organization: 'US Navy',
          nationality: 'American',
          notes: 'Ordered minimal investigation; father of Senator John McCain',
        },
        {
          id: 'figure-liberty-003',
          name: 'Moshe Dayan',
          role: 'Defense Minister of Israel',
          organization: 'Israeli Defense Forces',
          nationality: 'Israeli',
          timeActive: '1967',
        },
      ],
      relatedTopics: ['topic-mossad-001', 'topic-sixday-001'],
      contradictions: [
        'Israeli claim of misidentification vs. hours of prior reconnaissance',
        'Fog of war claim vs. clear weather conditions',
        'Accidental attack vs. 2+ hour sustained assault',
        'Standard investigation vs. 8-day rushed inquiry',
        'Medal of Honor ceremony at White House (standard) vs. Navy Yard (Liberty)',
      ],
      unansweredQuestions: [
        'Why were rescue aircraft recalled twice?',
        'What was in the NSA intercepts still classified?',
        'Why was Captain McGonagle\'s Medal of Honor awarded secretly?',
        'What did Israeli reconnaissance pilots report?',
        'Why were crew members ordered to remain silent?',
        'What was Operation Cyanide and was Liberty involved?',
      ],
    },
    {
      id: 'topic-mossad-001',
      name: 'Mossad Operations & US Relations',
      description:
        'Investigation into Israeli intelligence operations affecting US interests and the complex intelligence-sharing relationship between the two nations.',
      status: InvestigationStatus.ONGOING,
      officialNarrative:
        'Israel and the US are close allies with robust intelligence cooperation for mutual security benefits.',
      alternativeTheories: [
        'Mossad has conducted extensive espionage against US interests',
        'Israeli intelligence has penetrated US government at multiple levels',
        'Joint operations have been conducted without full US government knowledge',
        'Technology and intelligence theft has been systematic',
      ],
      keyEvidence: [
        'Jonathan Pollard espionage case',
        'AIPAC espionage scandal',
        'Lawrence Franklin case',
        'Arnon Milchan revelations',
        'Israeli art students surveillance reports',
        'DEA reports on Israeli surveillance',
      ],
      documents: [
        {
          id: 'doc-mossad-001',
          title: 'DEA Report on Israeli Surveillance Activities',
          type: 'leaked',
          source: 'Drug Enforcement Administration',
          keyFindings: [
            'Documented presence of Israeli nationals near federal facilities',
            'Pattern of surveillance activities identified',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-mossad-001',
          name: 'Jonathan Pollard',
          role: 'Naval Intelligence Analyst / Israeli Spy',
          organization: 'US Navy / Mossad',
          nationality: 'American',
          notes: 'Convicted of espionage for Israel; sentenced to life; released 2015',
        },
        {
          id: 'figure-mossad-002',
          name: 'Rafi Eitan',
          role: 'Mossad Operations Chief',
          organization: 'Mossad',
          nationality: 'Israeli',
          notes: 'Ran Pollard as handler; previously captured Adolf Eichmann',
        },
      ],
      relatedTopics: ['topic-liberty-001'],
      contradictions: [
        'Close ally status vs. extensive espionage operations',
        'Intelligence sharing vs. theft of classified materials',
        'Public statements of trust vs. documented surveillance',
      ],
      unansweredQuestions: [
        'What intelligence did Pollard provide that remains classified?',
        'How extensive is Israeli penetration of US intelligence?',
        'What joint operations remain undisclosed?',
        'How has technology transfer affected US security?',
      ],
    },
  ],
  keyQuestions: [
    'Was the USS Liberty attack deliberate or accidental?',
    'What information was the Liberty intercepting before the attack?',
    'Why has the US government never conducted a full investigation?',
    'What role did Mossad play in the Six-Day War intelligence operations?',
    'How deep does Israeli espionage in the US extend?',
    'What secrets remain classified about US-Israel intelligence cooperation?',
  ],
  motto: 'The truth lies at the bottom of the sea, but it will surface.',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

export default ussLibertyMossadAgent;
