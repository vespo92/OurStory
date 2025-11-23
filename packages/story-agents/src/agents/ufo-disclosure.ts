/**
 * Agent MAJESTIC - UFO Disclosure & Government Cover-ups Specialist
 * Investigates UAP phenomena, Project Blue Book, and disclosure efforts
 */

import { SourceType, SourceReliability } from '@ourstory/timeline-engine';
import {
  StoryAgent,
  AgentSpecialization,
  ResearchMethodology,
  InvestigationStatus,
} from '../types';

export const ufoDisclosureAgent: StoryAgent = {
  id: 'agent-majestic-007',
  name: 'UFO Disclosure Research Agent',
  codename: 'MAJESTIC',
  description:
    'Specialized agent investigating unidentified aerial phenomena (UAP), government cover-ups, crash retrieval programs, and the push for disclosure. Analyzes Project Blue Book, witness testimonies, declassified documents, and recent congressional hearings.',
  specialization: AgentSpecialization.UFO_DISCLOSURE,
  methodologies: [
    ResearchMethodology.DOCUMENT_ANALYSIS,
    ResearchMethodology.WITNESS_TESTIMONY,
    ResearchMethodology.DECLASSIFICATION_TRACKING,
    ResearchMethodology.PATTERN_RECOGNITION,
    ResearchMethodology.TIMELINE_RECONSTRUCTION,
  ],
  primarySources: [SourceType.DECLASSIFIED, SourceType.ACADEMIC, SourceType.ALTERNATIVE],
  preferredReliability: [
    SourceReliability.PRIMARY,
    SourceReliability.SECONDARY,
    SourceReliability.CONTESTED,
    SourceReliability.UNVERIFIED,
  ],
  expertise: [
    'Project Blue Book',
    'Roswell incident',
    'MJ-12 documents',
    'AATIP program',
    'Tic Tac encounter',
    'Congressional UAP hearings',
    'Crash retrieval programs',
    'Whistleblower testimonies',
    'Military encounters',
    'Reverse engineering allegations',
  ],
  researchTopics: [
    {
      id: 'topic-uap-001',
      name: 'Pentagon UAP Programs',
      description:
        'Investigation into official government programs studying unidentified aerial phenomena and recent disclosure efforts.',
      dateRange: {
        start: '2007',
        end: 'ongoing',
      },
      status: InvestigationStatus.ONGOING,
      officialNarrative:
        'The government has investigated UAPs for national security purposes and has found no evidence of extraterrestrial origin.',
      alternativeTheories: [
        'Government possesses recovered craft and biologics',
        'Reverse engineering programs have been ongoing for decades',
        'Controlled disclosure is underway',
        'Multiple crash retrievals have occurred',
        'Non-human intelligence has been confirmed internally',
      ],
      keyEvidence: [
        'AATIP program confirmed by Pentagon',
        'Navy Tic Tac videos released officially',
        'Pilots testify to advanced capabilities',
        'David Grusch whistleblower testimony to Congress',
        'Inspector General found claims credible and urgent',
        'Bipartisan congressional push for disclosure',
        'AARO established but limited in scope',
      ],
      documents: [
        {
          id: 'doc-uap-001',
          title: 'DNI Preliminary Assessment on UAPs',
          type: 'official',
          releaseDate: '2021',
          source: 'Office of the Director of National Intelligence',
          keyFindings: [
            '144 reports examined',
            'Advanced technology demonstrated',
            'Insufficient data for explanation',
          ],
        },
        {
          id: 'doc-uap-002',
          title: 'David Grusch Congressional Testimony',
          type: 'testimony',
          releaseDate: '2023',
          source: 'US House of Representatives',
          keyFindings: [
            'Crash retrieval programs alleged',
            'Non-human biologics claimed',
            'Illegal concealment from Congress',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-uap-001',
          name: 'David Grusch',
          role: 'Intelligence Officer / Whistleblower',
          organization: 'National Geospatial-Intelligence Agency',
          nationality: 'American',
          notes: 'Testified to Congress about crash retrieval programs',
        },
        {
          id: 'figure-uap-002',
          name: 'Luis Elizondo',
          role: 'Former Director of AATIP',
          organization: 'Pentagon',
          nationality: 'American',
          notes: 'Resigned and went public about UAP programs',
        },
        {
          id: 'figure-uap-003',
          name: 'Commander David Fravor',
          role: 'Navy Pilot',
          organization: 'US Navy',
          nationality: 'American',
          notes: 'Witnessed Tic Tac UAP during 2004 Nimitz encounter',
        },
      ],
      relatedTopics: ['topic-roswell-001', 'topic-bluebook-001'],
      contradictions: [
        'No evidence vs. official videos released',
        'Unknown origin vs. retrieval programs alleged',
        'Transparency vs. illegal concealment claims',
        'Investigation vs. stigmatization of witnesses',
      ],
      unansweredQuestions: [
        'What does the government actually know?',
        'Are there recovered craft and materials?',
        'What programs remain classified?',
        'Why the decades of denial and ridicule?',
      ],
    },
    {
      id: 'topic-roswell-001',
      name: 'Roswell Incident',
      description:
        'Investigation into the 1947 crash near Roswell, New Mexico and the subsequent government cover-up.',
      dateRange: {
        start: '1947-07-07',
        end: '1947-07-08',
      },
      status: InvestigationStatus.OFFICIALLY_DENIED,
      officialNarrative:
        'A weather balloon (later: Project Mogul balloon) crashed at Roswell. No extraterrestrial craft or bodies were recovered.',
      alternativeTheories: [
        'Extraterrestrial craft was recovered',
        'Bodies were recovered and studied',
        'Material sent to Wright-Patterson AFB',
        'Witnesses threatened into silence',
        'Beginning of modern cover-up',
      ],
      keyEvidence: [
        'Initial press release mentioned "flying disc"',
        'Story changed within 24 hours',
        'Multiple witness testimonies',
        'Deathbed confessions',
        'Marcel Sr. and Jr. testimonies',
        'Anomalous debris descriptions',
        'Government explanations have changed multiple times',
      ],
      documents: [
        {
          id: 'doc-ros-001',
          title: 'Roswell Daily Record - July 8, 1947',
          type: 'official',
          releaseDate: '1947',
          source: 'Roswell Daily Record',
          keyFindings: [
            'RAAF captures flying saucer',
            'Official military announcement',
            'Later retracted',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-ros-001',
          name: 'Major Jesse Marcel',
          role: 'Intelligence Officer',
          organization: 'US Army Air Force',
          nationality: 'American',
          notes: 'First officer on scene; later recanted official story',
        },
      ],
      relatedTopics: ['topic-uap-001'],
      contradictions: [
        'Flying disc announcement vs. weather balloon',
        'Exotic debris vs. mundane materials',
        'Case closed vs. multiple official explanations',
        'Nothing unusual vs. extreme security measures',
      ],
      unansweredQuestions: [
        'What was actually recovered?',
        'Where is the material now?',
        'Why the immediate cover-up?',
        'What do deathbed confessions reveal?',
      ],
    },
  ],
  keyQuestions: [
    'What does the government know about UAPs?',
    'Are there recovered non-human craft?',
    'Why the decades of denial and ridicule?',
    'What programs remain hidden from Congress?',
    'Is disclosure actually happening?',
  ],
  motto: 'The truth is not out there; it is classified.',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

export default ufoDisclosureAgent;
