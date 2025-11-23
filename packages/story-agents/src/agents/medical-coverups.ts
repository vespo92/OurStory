/**
 * Agent REMEDY - Medical Cover-ups & Pharmaceutical Industry Specialist
 * Investigates suppressed cures, pharmaceutical corruption, and medical establishment deception
 */

import { SourceType, SourceReliability } from '@ourstory/timeline-engine';
import {
  StoryAgent,
  AgentSpecialization,
  ResearchMethodology,
  InvestigationStatus,
} from '../types';

export const medicalCoverupsAgent: StoryAgent = {
  id: 'agent-remedy-010',
  name: 'Medical Cover-ups Research Agent',
  codename: 'REMEDY',
  description:
    'Specialized agent investigating pharmaceutical industry corruption, suppressed medical treatments, regulatory capture, and the profit-driven healthcare system. Analyzes patterns of silencing researchers, burying studies, and prioritizing profit over patient health.',
  specialization: AgentSpecialization.MEDICAL_COVERUPS,
  methodologies: [
    ResearchMethodology.DOCUMENT_ANALYSIS,
    ResearchMethodology.PATTERN_RECOGNITION,
    ResearchMethodology.SOURCE_TRIANGULATION,
    ResearchMethodology.WITNESS_TESTIMONY,
    ResearchMethodology.NETWORK_MAPPING,
  ],
  primarySources: [SourceType.ACADEMIC, SourceType.ALTERNATIVE, SourceType.DECLASSIFIED],
  preferredReliability: [
    SourceReliability.PRIMARY,
    SourceReliability.SECONDARY,
    SourceReliability.CONTESTED,
  ],
  expertise: [
    'Pharmaceutical industry practices',
    'FDA regulatory capture',
    'Suppressed cancer treatments',
    'Vaccine injury data',
    'Opioid epidemic origins',
    'Medical research fraud',
    'Natural remedy suppression',
    'Tuskegee experiment',
    'Industry whistleblowers',
    'Healthcare profit motives',
  ],
  researchTopics: [
    {
      id: 'topic-pharma-001',
      name: 'Pharmaceutical Industry Corruption',
      description:
        'Investigation into patterns of fraud, data manipulation, and regulatory capture in the pharmaceutical industry.',
      status: InvestigationStatus.ONGOING,
      officialNarrative:
        'The pharmaceutical industry is heavily regulated and provides safe, effective medications that improve public health.',
      alternativeTheories: [
        'Industry routinely buries negative study results',
        'Regulatory agencies captured by industry',
        'Profit motive overrides patient safety',
        'Revolving door between FDA and pharma',
        'Treatments are designed for profit, not cures',
        'Whistleblowers are systematically silenced',
      ],
      keyEvidence: [
        'Billions in fraud settlements paid',
        'Ghost-written studies common',
        'Negative studies buried',
        'FDA officials join pharma after approval decisions',
        'Opioid crisis manufactured by industry',
        'Vioxx killed estimated 60,000 before withdrawal',
        'Clinical trial data often not published',
      ],
      documents: [
        {
          id: 'doc-pharma-001',
          title: 'Department of Justice Pharma Settlements',
          type: 'official',
          source: 'US Department of Justice',
          keyFindings: [
            'Billions in criminal and civil penalties',
            'Repeated violations by same companies',
            'Fraud includes marketing and safety data',
          ],
        },
        {
          id: 'doc-pharma-002',
          title: 'Vioxx Internal Documents',
          type: 'leaked',
          source: 'Court discovery',
          keyFindings: [
            'Merck knew of heart attack risk',
            'Data was manipulated in publications',
            'Marketing continued despite known dangers',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-pharma-001',
          name: 'Peter Rost',
          role: 'Pfizer VP / Whistleblower',
          organization: 'Pfizer',
          nationality: 'Swedish-American',
          notes: 'Exposed illegal marketing practices; career destroyed',
        },
      ],
      relatedTopics: ['topic-opioid-001', 'topic-suppressed-001'],
      contradictions: [
        'Patient safety vs. profit maximization',
        'Heavy regulation vs. routine fraud',
        'Evidence-based medicine vs. buried studies',
        'Penalties paid vs. continued violations',
      ],
      unansweredQuestions: [
        'How many deaths result from suppressed safety data?',
        'How deep is regulatory capture?',
        'What treatments have been suppressed for profit?',
        'How can the system be reformed?',
      ],
    },
    {
      id: 'topic-opioid-001',
      name: 'Opioid Epidemic',
      description:
        'Investigation into how the pharmaceutical industry manufactured the opioid crisis through deceptive marketing.',
      dateRange: {
        start: '1996',
        end: 'ongoing',
      },
      status: InvestigationStatus.PARTIALLY_RESOLVED,
      officialNarrative:
        'The opioid crisis resulted from overprescription and some misleading marketing that has since been addressed.',
      alternativeTheories: [
        'Crisis was deliberately manufactured for profit',
        'Companies knew addiction risks and lied',
        'Regulators were complicit',
        'Sackler family escaped criminal accountability',
        'Distributors ignored obvious red flags',
        'System designed to create addicts',
      ],
      keyEvidence: [
        'Internal documents show companies knew addiction risk',
        'OxyContin marketed as less addictive (false)',
        'Sales reps incentivized high-dose prescriptions',
        'Pill mills operated openly for years',
        'Distributors shipped millions of pills to small towns',
        '500,000+ Americans dead from overdoses',
        'Purdue Pharma bankruptcy to shield Sacklers',
      ],
      documents: [
        {
          id: 'doc-opioid-001',
          title: 'Purdue Pharma Internal Documents',
          type: 'leaked',
          source: 'Court proceedings',
          keyFindings: [
            'Addiction risk was known and concealed',
            'Marketing specifically targeted high prescribers',
            'Company tracked and encouraged escalating doses',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-opioid-001',
          name: 'Sackler Family',
          role: 'Owners of Purdue Pharma',
          organization: 'Purdue Pharma',
          nationality: 'American',
          notes: 'Extracted billions while company faced lawsuits; no criminal charges',
        },
      ],
      relatedTopics: ['topic-pharma-001'],
      contradictions: [
        'Non-addictive claims vs. mass addiction',
        'Medical purpose vs. profit motive',
        'Oversight vs. distributors shipping millions of pills',
        'Justice vs. bankruptcy protection for billionaires',
      ],
      unansweredQuestions: [
        'Why has no executive gone to prison?',
        'How was this allowed to continue for decades?',
        'What is the true death toll?',
        'How can victims receive justice?',
      ],
    },
    {
      id: 'topic-tuskegee-001',
      name: 'Tuskegee Syphilis Study',
      description:
        'Investigation into the US government study that deliberately left Black men untreated for syphilis for 40 years.',
      dateRange: {
        start: '1932',
        end: '1972',
      },
      status: InvestigationStatus.DECLASSIFIED,
      officialNarrative:
        'The Tuskegee study was an unethical medical experiment that has been acknowledged and apologized for. It led to reforms in research ethics.',
      alternativeTheories: [
        'Represents pattern of medical experimentation on minorities',
        'Similar experiments may have continued in different forms',
        'Distrust of medical establishment justified',
        'Part of broader eugenics movement',
      ],
      keyEvidence: [
        '600 Black men enrolled without informed consent',
        'Treatment withheld even after penicillin available',
        'Study continued for 40 years',
        'Men told they were receiving treatment',
        'Exposed by whistleblower, not self-correction',
        'Led to 1974 National Research Act',
      ],
      documents: [
        {
          id: 'doc-tusk-001',
          title: 'CDC Tuskegee Study Documentation',
          type: 'official',
          source: 'Centers for Disease Control',
          keyFindings: [
            '40 years of deceptive experimentation',
            'Subjects denied available treatment',
            'Deaths resulted from deliberate medical neglect',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-tusk-001',
          name: 'Peter Buxtun',
          role: 'PHS Investigator / Whistleblower',
          organization: 'Public Health Service',
          nationality: 'American',
          notes: 'Exposed the study after internal complaints were ignored',
        },
      ],
      relatedTopics: ['topic-pharma-001'],
      contradictions: [
        'Do no harm vs. deliberate harm',
        'Informed consent vs. deception',
        'Public health vs. exploitation',
        'Isolated incident vs. pattern of abuse',
      ],
      unansweredQuestions: [
        'What other unethical experiments remain undisclosed?',
        'How can medical trust be rebuilt?',
        'What accountability existed for perpetrators?',
      ],
    },
  ],
  keyQuestions: [
    'How corrupt is the pharmaceutical industry?',
    'What treatments have been suppressed for profit?',
    'How captured are regulatory agencies?',
    'What is the true cost of profit-driven medicine?',
    'How can healthcare be reformed to prioritize patients?',
  ],
  motto: 'Health should never be hostage to profit.',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

export default medicalCoverupsAgent;
