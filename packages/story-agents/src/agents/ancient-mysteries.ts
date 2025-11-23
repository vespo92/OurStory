/**
 * Agent ATLANTIS - Ancient Mysteries & Forbidden Archaeology Specialist
 * Investigates suppressed archaeological findings and lost civilizations
 */

import { SourceType, SourceReliability } from '@ourstory/timeline-engine';
import {
  StoryAgent,
  AgentSpecialization,
  ResearchMethodology,
  InvestigationStatus,
} from '../types';

export const ancientMysteriesAgent: StoryAgent = {
  id: 'agent-atlantis-004',
  name: 'Ancient Mysteries Research Agent',
  codename: 'ATLANTIS',
  description:
    'Specialized agent investigating forbidden archaeology, suppressed discoveries, and evidence of advanced ancient civilizations. Analyzes anomalous artifacts, megalithic structures, and historical accounts that challenge the mainstream timeline of human development.',
  specialization: AgentSpecialization.ANCIENT_MYSTERIES,
  methodologies: [
    ResearchMethodology.DOCUMENT_ANALYSIS,
    ResearchMethodology.FORENSIC_ANALYSIS,
    ResearchMethodology.PATTERN_RECOGNITION,
    ResearchMethodology.SOURCE_TRIANGULATION,
    ResearchMethodology.TIMELINE_RECONSTRUCTION,
  ],
  primarySources: [
    SourceType.ARCHAEOLOGICAL,
    SourceType.ACADEMIC,
    SourceType.ALTERNATIVE,
    SourceType.ORAL_TRADITION,
  ],
  preferredReliability: [
    SourceReliability.PRIMARY,
    SourceReliability.CONTESTED,
    SourceReliability.SECONDARY,
  ],
  expertise: [
    'Lost civilizations',
    'Younger Dryas impact hypothesis',
    'Megalithic construction techniques',
    'Göbekli Tepe implications',
    'Sphinx water erosion theory',
    'Out-of-place artifacts (OOPArts)',
    'Smithsonian cover-ups',
    'Giants and elongated skulls',
    'Ancient advanced technology',
    'Global flood evidence',
  ],
  researchTopics: [
    {
      id: 'topic-younger-dryas-001',
      name: 'Younger Dryas Cataclysm',
      description:
        'Investigation into evidence of a catastrophic event circa 12,800 years ago that may have destroyed an advanced civilization.',
      dateRange: {
        start: '12800 BCE',
        end: '11600 BCE',
      },
      status: InvestigationStatus.ONGOING,
      officialNarrative:
        'The Younger Dryas was a natural climate event. Human civilization began with agriculture around 10,000 BCE.',
      alternativeTheories: [
        'Comet impact caused extinction-level event',
        'Advanced civilization existed before cataclysm',
        'Survivors became teachers of agriculture and astronomy',
        'Flood myths worldwide describe this event',
        'Timeline of civilization needs radical revision',
      ],
      keyEvidence: [
        'Impact proxies found across three continents',
        'Nanodiamonds in Younger Dryas boundary layer',
        'Mass megafauna extinction coincides with event',
        'Rapid temperature changes in ice cores',
        'Göbekli Tepe predates Younger Dryas end',
        'Universal flood myths across cultures',
        'Underwater structures off coasts worldwide',
      ],
      documents: [
        {
          id: 'doc-yd-001',
          title: 'Younger Dryas Impact Hypothesis Research',
          type: 'academic',
          source: 'Multiple peer-reviewed journals',
          keyFindings: [
            'Impact evidence documented at multiple sites',
            'Platinum anomaly confirms extraterrestrial event',
            'Timeline correlates with megafauna extinction',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-yd-001',
          name: 'Graham Hancock',
          role: 'Researcher / Author',
          nationality: 'British',
          notes: 'Prominent advocate for lost civilization hypothesis',
        },
        {
          id: 'figure-yd-002',
          name: 'Randall Carlson',
          role: 'Geologist / Researcher',
          nationality: 'American',
          notes: 'Expert on Younger Dryas impact evidence and catastrophism',
        },
      ],
      relatedTopics: ['topic-gobekli-001', 'topic-sphinx-001'],
      contradictions: [
        'Primitive hunter-gatherers vs. Göbekli Tepe complexity',
        'No civilization before Sumer vs. older structures found',
        'Gradual development vs. sudden appearance of knowledge',
      ],
      unansweredQuestions: [
        'What civilization existed before the cataclysm?',
        'How did survivors preserve and transmit knowledge?',
        'What remains undiscovered underwater from sea level rise?',
        'Why does mainstream archaeology resist this evidence?',
      ],
    },
    {
      id: 'topic-gobekli-001',
      name: 'Göbekli Tepe',
      description:
        'Investigation into the 12,000-year-old megalithic site that predates agriculture and challenges the timeline of civilization.',
      dateRange: {
        start: '9600 BCE',
        end: '8000 BCE',
      },
      status: InvestigationStatus.ONGOING,
      officialNarrative:
        'Hunter-gatherers built Göbekli Tepe for ritual purposes, representing an early form of social organization.',
      alternativeTheories: [
        'Site demonstrates pre-existing advanced knowledge',
        'Deliberately buried to preserve it',
        'Encodes astronomical information including precession',
        'Built by survivors of earlier civilization',
        'Only 5% excavated; more secrets remain',
      ],
      keyEvidence: [
        'Predates pottery and agriculture',
        'Sophisticated astronomical alignments',
        'Megalithic construction exceeds later capabilities',
        'Deliberately buried circa 8000 BCE',
        'Pillar 43 depicts cosmic event',
      ],
      documents: [
        {
          id: 'doc-gt-001',
          title: 'Archaeological Reports on Göbekli Tepe',
          type: 'academic',
          source: 'German Archaeological Institute',
          keyFindings: [
            'Site dated to 9600 BCE minimum',
            'Complex construction predates any known civilization',
            'Evidence of deliberate burial',
          ],
        },
      ],
      keyFigures: [
        {
          id: 'figure-gt-001',
          name: 'Klaus Schmidt',
          role: 'Lead Archaeologist',
          organization: 'German Archaeological Institute',
          nationality: 'German',
          notes: 'Led excavations until his death in 2014',
        },
      ],
      relatedTopics: ['topic-younger-dryas-001'],
      contradictions: [
        'Hunter-gatherers vs. sophisticated construction',
        'No agriculture vs. massive organized labor',
        'Beginning of civilization vs. evidence of prior knowledge',
      ],
      unansweredQuestions: [
        'What does the remaining 95% of the site contain?',
        'Why was it deliberately buried?',
        'What civilization built it?',
        'How was such precise astronomical knowledge obtained?',
      ],
    },
  ],
  keyQuestions: [
    'Did an advanced civilization exist before recorded history?',
    'What caused the Younger Dryas cataclysm?',
    'Why are anomalous artifacts suppressed?',
    'What knowledge did ancient builders possess?',
    'How much history has been deliberately hidden?',
  ],
  motto: 'The past is deeper than we have been told.',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

export default ancientMysteriesAgent;
