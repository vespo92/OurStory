import {
  HistoricalEvent,
  Source,
  SourceType,
  SourceReliability,
  Timeline,
} from '@ourstory/timeline-engine';

/**
 * ATLANTIS MYSTERIES Data Package
 * Agent Codename: ATLANTIS
 *
 * Covers: Lost civilizations, forbidden archaeology, suppressed discoveries,
 * megalithic mysteries, out-of-place artifacts (OOPArts), and ancient mysteries
 */

// ============================================================================
// SOURCES - Key researchers, texts, and archaeological findings
// ============================================================================

export const atlantisSources: Source[] = [
  // Classical Sources
  {
    id: 'plato-dialogues',
    name: "Plato's Timaeus and Critias",
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.PRIMARY,
    author: 'Plato',
    publicationDate: new Date(-360, 0, 1),
    notes: 'Original account of Atlantis from Egyptian priests via Solon',
  },
  {
    id: 'book-of-enoch',
    name: 'Book of Enoch',
    type: SourceType.RELIGIOUS,
    reliability: SourceReliability.PRIMARY,
    notes: 'Ancient text describing Watchers, Nephilim, and antediluvian civilization',
  },
  {
    id: 'emerald-tablets-thoth',
    name: 'Emerald Tablets of Thoth',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.CONTESTED,
    notes: 'Hermetic text attributed to Thoth/Hermes describing Atlantean knowledge',
  },
  {
    id: 'sumerian-tablets',
    name: 'Sumerian Clay Tablets',
    type: SourceType.ARCHAEOLOGICAL,
    reliability: SourceReliability.PRIMARY,
    notes: 'Ancient Mesopotamian records including King List with pre-flood rulers',
  },

  // Modern Researchers
  {
    id: 'graham-hancock',
    name: 'Graham Hancock - Fingerprints of the Gods / Magicians of the Gods',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.CONTESTED,
    author: 'Graham Hancock',
    publicationDate: new Date(1995, 0, 1),
    notes: 'Comprehensive research on lost civilizations and Younger Dryas impact',
  },
  {
    id: 'randall-carlson',
    name: 'Randall Carlson - Catastrophism Research',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.SECONDARY,
    author: 'Randall Carlson',
    notes: 'Geological evidence of ancient cataclysms and flood events',
  },
  {
    id: 'robert-schoch',
    name: 'Dr. Robert Schoch - Geological Analysis',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.SECONDARY,
    author: 'Dr. Robert Schoch',
    notes: 'Boston University geologist - Sphinx water erosion theory',
  },
  {
    id: 'john-anthony-west',
    name: 'John Anthony West - Serpent in the Sky',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.CONTESTED,
    author: 'John Anthony West',
    publicationDate: new Date(1979, 0, 1),
    notes: 'Egyptologist proposing older Sphinx dating',
  },
  {
    id: 'michael-cremo',
    name: 'Michael Cremo - Forbidden Archeology',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.CONTESTED,
    author: 'Michael Cremo',
    publicationDate: new Date(1993, 0, 1),
    notes: 'Documentation of suppressed archaeological findings',
  },
  {
    id: 'james-churchward',
    name: 'James Churchward - The Lost Continent of Mu',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.UNVERIFIED,
    author: 'James Churchward',
    publicationDate: new Date(1926, 0, 1),
    notes: 'Claims based on alleged Naacal tablets about Pacific lost continent',
  },
  {
    id: 'ignatius-donnelly',
    name: 'Ignatius Donnelly - Atlantis: The Antediluvian World',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.CONTESTED,
    author: 'Ignatius Donnelly',
    publicationDate: new Date(1882, 0, 1),
    notes: 'Seminal work arguing for historical Atlantis',
  },
  {
    id: 'edgar-cayce',
    name: 'Edgar Cayce Readings',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.UNVERIFIED,
    author: 'Edgar Cayce',
    notes: 'Psychic readings describing Atlantean history and technology',
  },

  // Archaeological Evidence
  {
    id: 'gobekli-tepe-excavation',
    name: 'Göbekli Tepe Archaeological Reports',
    type: SourceType.ARCHAEOLOGICAL,
    reliability: SourceReliability.PRIMARY,
    author: 'German Archaeological Institute',
    notes: 'Official excavation reports from Klaus Schmidt and team',
  },
  {
    id: 'gunung-padang-research',
    name: 'Gunung Padang Research Papers',
    type: SourceType.ARCHAEOLOGICAL,
    reliability: SourceReliability.CONTESTED,
    notes: 'Indonesian megalithic site research suggesting 20,000+ year age',
  },
  {
    id: 'yonaguni-research',
    name: 'Yonaguni Monument Research',
    type: SourceType.ARCHAEOLOGICAL,
    reliability: SourceReliability.CONTESTED,
    author: 'Dr. Masaaki Kimura',
    notes: 'Research on submerged structures off Japan',
  },
  {
    id: 'bimini-road-research',
    name: 'Bimini Road Studies',
    type: SourceType.ARCHAEOLOGICAL,
    reliability: SourceReliability.CONTESTED,
    notes: 'Studies of submerged stone formations near Bahamas',
  },
  {
    id: 'smithsonian-reports',
    name: 'Smithsonian Institution Historical Reports',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.PRIMARY,
    notes: '19th century reports documenting giant skeleton discoveries',
  },
  {
    id: 'younger-dryas-papers',
    name: 'Younger Dryas Impact Hypothesis Research',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.PRIMARY,
    notes: 'Peer-reviewed research on impact event 12,800 years ago',
  },

  // Ancient Traditions
  {
    id: 'hopi-oral-tradition',
    name: 'Hopi Oral Traditions',
    type: SourceType.ORAL_TRADITION,
    reliability: SourceReliability.PRIMARY,
    notes: 'Native American accounts of previous worlds and destructions',
  },
  {
    id: 'mayan-texts',
    name: 'Mayan Codices and Inscriptions',
    type: SourceType.ARCHAEOLOGICAL,
    reliability: SourceReliability.PRIMARY,
    notes: 'Including Popol Vuh creation accounts',
  },
  {
    id: 'egyptian-king-lists',
    name: 'Egyptian King Lists and Turin Papyrus',
    type: SourceType.ARCHAEOLOGICAL,
    reliability: SourceReliability.PRIMARY,
    notes: 'Lists gods and demigods ruling for thousands of years before pharaohs',
  },
  {
    id: 'vedic-texts',
    name: 'Vedic and Puranic Texts',
    type: SourceType.RELIGIOUS,
    reliability: SourceReliability.PRIMARY,
    notes: 'Ancient Hindu texts describing yugas, vimanas, and ancient wars',
  },
];

// ============================================================================
// EVENTS - Lost Civilizations & Forbidden Archaeology
// ============================================================================

export const atlantisEvents: HistoricalEvent[] = [
  // =========================================
  // LOST CIVILIZATIONS
  // =========================================

  // Atlantis
  {
    id: 'atlantis-golden-age',
    title: 'Atlantean Golden Age',
    description: 'Period of advanced Atlantean civilization according to Plato - a powerful maritime empire with advanced architecture, metallurgy, and spirituality. Located beyond the Pillars of Hercules.',
    dateRange: {
      start: '12000 BCE',
      end: '9600 BCE',
      approximate: true,
      confidence: 15,
    },
    sources: [atlantisSources[0], atlantisSources[10]],
    location: {
      name: 'Atlantic Ocean (disputed - theories include Richat Structure, Caribbean, Antarctica)',
    },
    tags: ['atlantis', 'lost-civilization', 'plato', 'maritime-empire', 'advanced-technology'],
    relatedEvents: ['atlantis-destruction', 'younger-dryas-cataclysm'],
  },
  {
    id: 'atlantis-destruction',
    title: 'Destruction of Atlantis',
    description: "Cataclysmic destruction of Atlantis described by Plato as sinking beneath the waves 'in a single day and night of misfortune'. Egyptian priests told Solon this occurred 9,000 years before his time.",
    dateRange: {
      start: '9600 BCE',
      approximate: true,
      confidence: 20,
    },
    sources: [atlantisSources[0], atlantisSources[10]],
    location: {
      name: 'Atlantic Ocean',
    },
    tags: ['atlantis', 'cataclysm', 'plato', 'sinking', 'flood'],
    relatedEvents: ['atlantis-golden-age', 'younger-dryas-cataclysm'],
  },

  // Lemuria / Mu
  {
    id: 'lemuria-civilization',
    title: 'Lemurian Civilization',
    description: 'Hypothesized ancient civilization in the Indian or Pacific Ocean. Originally proposed to explain lemur distribution, later adopted by esoteric traditions as a spiritual motherland.',
    dateRange: {
      start: '50000 BCE',
      end: '12000 BCE',
      approximate: true,
      confidence: 5,
    },
    sources: [atlantisSources[9], atlantisSources[11]],
    location: {
      name: 'Indian Ocean / Pacific Ocean (disputed)',
    },
    tags: ['lemuria', 'lost-civilization', 'pacific', 'mu', 'esoteric'],
  },
  {
    id: 'mu-destruction',
    title: 'Destruction of Mu',
    description: "According to Churchward's translations of alleged Naacal tablets, the continent of Mu sank approximately 12,000 years ago due to volcanic and seismic activity.",
    dateRange: {
      start: '12000 BCE',
      approximate: true,
      confidence: 5,
    },
    sources: [atlantisSources[9]],
    location: {
      name: 'Pacific Ocean',
    },
    tags: ['mu', 'lemuria', 'cataclysm', 'pacific', 'lost-continent'],
    relatedEvents: ['lemuria-civilization'],
  },

  // Hyperborea
  {
    id: 'hyperborea-civilization',
    title: 'Hyperborean Civilization',
    description: 'Greek mythological land "beyond the North Wind" described as a paradise. Some researchers connect it to pre-glacial civilizations or memories of warmer Arctic conditions.',
    dateRange: {
      start: '20000 BCE',
      approximate: true,
      confidence: 5,
    },
    sources: [atlantisSources[0]],
    location: {
      name: 'Arctic/Northern Regions',
    },
    tags: ['hyperborea', 'lost-civilization', 'arctic', 'greek-mythology', 'paradise'],
  },

  // =========================================
  // THE YOUNGER DRYAS CATACLYSM
  // =========================================

  {
    id: 'younger-dryas-cataclysm',
    title: 'Younger Dryas Impact Event',
    description: 'Proposed cosmic impact event approximately 12,800 years ago. Evidence includes widespread fires, megafauna extinction, meltwater pulses, and impact proxies found on three continents.',
    dateRange: {
      start: '10800 BCE',
      end: '10700 BCE',
      approximate: true,
      confidence: 65,
    },
    sources: [atlantisSources[17], atlantisSources[4], atlantisSources[5]],
    tags: ['younger-dryas', 'impact', 'cataclysm', 'extinction', 'cosmic-event'],
    relatedEvents: ['atlantis-destruction', 'megafauna-extinction', 'global-flood-event'],
  },
  {
    id: 'megafauna-extinction',
    title: 'Megafauna Mass Extinction',
    description: 'Sudden extinction of 35 genera of megafauna in North America, coinciding with Younger Dryas boundary. Includes mammoths, mastodons, saber-tooth cats, and giant ground sloths.',
    dateRange: {
      start: '10800 BCE',
      approximate: true,
      confidence: 80,
    },
    sources: [atlantisSources[17], atlantisSources[5]],
    location: {
      name: 'North America (primarily)',
    },
    tags: ['extinction', 'megafauna', 'younger-dryas', 'mammoth', 'catastrophe'],
    relatedEvents: ['younger-dryas-cataclysm'],
  },
  {
    id: 'global-flood-event',
    title: 'Global Flood Event',
    description: 'Universal flood myths across cultures may reference catastrophic meltwater pulses at the end of the Ice Age. Sea levels rose 400+ feet from glacial melt, submerging coastal lands.',
    dateRange: {
      start: '12000 BCE',
      end: '8000 BCE',
      approximate: true,
      confidence: 70,
    },
    sources: [atlantisSources[1], atlantisSources[18], atlantisSources[19]],
    tags: ['flood', 'cataclysm', 'sea-level', 'meltwater', 'global-myth'],
    relatedEvents: ['younger-dryas-cataclysm', 'atlantis-destruction'],
  },

  // =========================================
  // MEGALITHIC MYSTERIES
  // =========================================

  {
    id: 'gobekli-tepe-construction',
    title: 'Göbekli Tepe Construction',
    description: 'Advanced megalithic temple complex in Turkey, predating pottery and agriculture by millennia. Features precisely carved T-pillars up to 20 tons with sophisticated animal reliefs.',
    dateRange: {
      start: '9600 BCE',
      end: '8000 BCE',
      approximate: true,
      confidence: 90,
    },
    sources: [atlantisSources[12], atlantisSources[4]],
    location: {
      name: 'Southeastern Turkey',
      coordinates: {
        latitude: 37.2231,
        longitude: 38.9225,
      },
    },
    tags: ['gobekli-tepe', 'megalithic', 'turkey', 'pre-agriculture', 'temple-complex'],
    relatedEvents: ['gobekli-tepe-burial', 'younger-dryas-cataclysm'],
  },
  {
    id: 'gobekli-tepe-burial',
    title: 'Deliberate Burial of Göbekli Tepe',
    description: 'Göbekli Tepe was deliberately and carefully buried around 8000 BCE. The purpose remains unknown - possibly to preserve it for future generations or hide it from invaders.',
    dateRange: {
      start: '8000 BCE',
      approximate: true,
      confidence: 85,
    },
    sources: [atlantisSources[12]],
    location: {
      name: 'Göbekli Tepe, Turkey',
      coordinates: {
        latitude: 37.2231,
        longitude: 38.9225,
      },
    },
    tags: ['gobekli-tepe', 'burial', 'mystery', 'preservation', 'archaeology'],
    relatedEvents: ['gobekli-tepe-construction'],
  },
  {
    id: 'sphinx-original-construction',
    title: 'Great Sphinx Original Construction',
    description: 'Alternative dating based on water erosion patterns (Robert Schoch) suggests the Sphinx enclosure shows rainfall erosion requiring a much earlier date when Egypt had a wet climate.',
    dateRange: {
      start: '9000 BCE',
      end: '5000 BCE',
      approximate: true,
      confidence: 30,
    },
    sources: [atlantisSources[6], atlantisSources[7]],
    location: {
      name: 'Giza, Egypt',
      coordinates: {
        latitude: 29.9753,
        longitude: 31.1376,
      },
    },
    tags: ['sphinx', 'egypt', 'water-erosion', 'alternative-dating', 'schoch'],
    relatedEvents: ['giza-complex-alternative'],
  },
  {
    id: 'giza-complex-alternative',
    title: 'Giza Complex Pre-Dynastic Origins',
    description: 'Theory that core structures at Giza predate dynastic Egypt, later repurposed by pharaohs. Based on geological analysis, astronomical alignments, and construction anomalies.',
    dateRange: {
      start: '10500 BCE',
      approximate: true,
      confidence: 20,
    },
    sources: [atlantisSources[7], atlantisSources[2]],
    location: {
      name: 'Giza Plateau, Egypt',
      coordinates: {
        latitude: 29.9792,
        longitude: 31.1342,
      },
    },
    tags: ['giza', 'pyramid', 'pre-dynastic', 'alternative-history', 'orion-correlation'],
    relatedEvents: ['sphinx-original-construction'],
  },
  {
    id: 'gunung-padang-dating',
    title: 'Gunung Padang Ancient Layers',
    description: 'Indonesian megalithic site with controversial dating. Ground-penetrating radar revealed buried chambers and radiocarbon dates suggesting construction phases extending to 20,000+ BCE.',
    dateRange: {
      start: '20000 BCE',
      end: '5000 BCE',
      approximate: true,
      confidence: 25,
    },
    sources: [atlantisSources[13]],
    location: {
      name: 'West Java, Indonesia',
      coordinates: {
        latitude: -6.9942,
        longitude: 107.0567,
      },
    },
    tags: ['gunung-padang', 'indonesia', 'megalithic', 'pyramid', 'controversial-dating'],
  },
  {
    id: 'baalbek-construction',
    title: 'Baalbek Trilithon Stones',
    description: 'The foundation of the Temple of Jupiter at Baalbek features the largest cut stones in the ancient world - the Trilithon stones weigh 800+ tons each. Construction method unknown.',
    dateRange: {
      start: '7000 BCE',
      end: '1000 BCE',
      approximate: true,
      confidence: 15,
    },
    sources: [atlantisSources[4], atlantisSources[8]],
    location: {
      name: 'Baalbek, Lebanon',
      coordinates: {
        latitude: 34.0047,
        longitude: 36.2039,
      },
    },
    tags: ['baalbek', 'megalithic', 'lebanon', 'trilithon', 'ancient-engineering'],
  },
  {
    id: 'puma-punku-construction',
    title: 'Puma Punku Precision Construction',
    description: 'Megalithic site near Tiahuanaco featuring H-blocks with incredible precision - flat surfaces, complex interlocking designs, and uniform holes suggesting machine tooling.',
    dateRange: {
      start: '15000 BCE',
      end: '500 CE',
      approximate: true,
      confidence: 20,
    },
    sources: [atlantisSources[4], atlantisSources[8]],
    location: {
      name: 'Puma Punku, Bolivia',
      coordinates: {
        latitude: -16.5617,
        longitude: -68.6800,
      },
    },
    tags: ['puma-punku', 'tiahuanaco', 'bolivia', 'precision-engineering', 'megalithic'],
    relatedEvents: ['tiahuanaco-dating'],
  },
  {
    id: 'tiahuanaco-dating',
    title: 'Tiahuanaco Alternative Dating',
    description: 'Arthur Posnansky calculated astronomical alignments at Tiahuanaco to suggest 15,000 BCE construction. Academic dating places it at 200-1000 CE - a massive discrepancy.',
    dateRange: {
      start: '15000 BCE',
      approximate: true,
      confidence: 15,
    },
    sources: [atlantisSources[8]],
    location: {
      name: 'Tiahuanaco, Bolivia',
      coordinates: {
        latitude: -16.5550,
        longitude: -68.6725,
      },
    },
    tags: ['tiahuanaco', 'bolivia', 'astronomical-alignment', 'alternative-dating', 'posnansky'],
    relatedEvents: ['puma-punku-construction'],
  },

  // =========================================
  // UNDERWATER STRUCTURES
  // =========================================

  {
    id: 'yonaguni-monument',
    title: 'Yonaguni Monument Discovery',
    description: 'Submerged stone structures off Yonaguni, Japan discovered in 1986. Features include stepped terraces, right angles, and carved channels. Debated as natural or man-made.',
    dateRange: {
      start: '10000 BCE',
      end: '8000 BCE',
      approximate: true,
      confidence: 30,
    },
    sources: [atlantisSources[14]],
    location: {
      name: 'Yonaguni Island, Japan',
      coordinates: {
        latitude: 24.4350,
        longitude: 122.9419,
      },
    },
    tags: ['yonaguni', 'underwater', 'japan', 'submerged-structure', 'sea-level'],
  },
  {
    id: 'bimini-road-discovery',
    title: 'Bimini Road Discovery',
    description: 'Linear stone formation discovered in 1968 off Bimini, Bahamas. Proponents cite Edgar Cayce\'s 1938 prediction that Atlantean ruins would be found near Bimini in 1968-69.',
    dateRange: {
      start: '10000 BCE',
      approximate: true,
      confidence: 20,
    },
    sources: [atlantisSources[15], atlantisSources[11]],
    location: {
      name: 'North Bimini, Bahamas',
      coordinates: {
        latitude: 25.7617,
        longitude: -79.2856,
      },
    },
    tags: ['bimini', 'underwater', 'bahamas', 'atlantis', 'cayce-prediction'],
  },
  {
    id: 'dwarka-underwater-city',
    title: 'Underwater City of Dwarka',
    description: 'Submerged structures discovered off the coast of Gujarat, India, identified as the legendary city of Dwarka from Hindu texts - said to be Krishna\'s kingdom that sank into the sea.',
    dateRange: {
      start: '9000 BCE',
      end: '3000 BCE',
      approximate: true,
      confidence: 35,
    },
    sources: [atlantisSources[20]],
    location: {
      name: 'Gulf of Khambhat, India',
      coordinates: {
        latitude: 22.2376,
        longitude: 68.9674,
      },
    },
    tags: ['dwarka', 'underwater', 'india', 'krishna', 'vedic', 'submerged-city'],
  },

  // =========================================
  // FORBIDDEN ARCHAEOLOGY - GIANTS & SUPPRESSION
  // =========================================

  {
    id: 'smithsonian-giant-cover-up',
    title: 'Smithsonian Giant Skeleton Controversy',
    description: 'Numerous 19th century newspaper accounts report giant skeleton discoveries (7-12 feet) sent to the Smithsonian. These specimens allegedly disappeared from the record. NAGPRA repatriation cited.',
    dateRange: {
      start: '1850 CE',
      end: '1920 CE',
      approximate: true,
      confidence: 40,
    },
    sources: [atlantisSources[16], atlantisSources[8]],
    location: {
      name: 'Various locations, United States',
    },
    tags: ['giants', 'smithsonian', 'cover-up', 'suppression', 'nephilim'],
  },
  {
    id: 'nephilim-era',
    title: 'Age of the Nephilim',
    description: 'Biblical and Enochian accounts of the Nephilim - offspring of "sons of God" and human women who became "mighty men of old." Described as giants with advanced knowledge.',
    dateRange: {
      start: '10000 BCE',
      end: '3000 BCE',
      approximate: true,
      confidence: 10,
    },
    sources: [atlantisSources[1]],
    tags: ['nephilim', 'giants', 'biblical', 'enoch', 'watchers', 'antediluvian'],
  },
  {
    id: 'paracas-skulls',
    title: 'Paracas Elongated Skulls',
    description: 'Elongated skulls discovered in Paracas, Peru with unusual features - some are 25% larger and 60% heavier than normal skulls with different cranial structure. DNA testing shows unknown haplogroups.',
    dateRange: {
      start: '3000 BCE',
      end: '100 BCE',
      approximate: true,
      confidence: 70,
    },
    sources: [atlantisSources[8]],
    location: {
      name: 'Paracas, Peru',
      coordinates: {
        latitude: -13.8516,
        longitude: -76.2505,
      },
    },
    tags: ['paracas', 'elongated-skulls', 'peru', 'dna-anomaly', 'forbidden-archaeology'],
  },

  // =========================================
  // OUT OF PLACE ARTIFACTS (OOPArts)
  // =========================================

  {
    id: 'antikythera-mechanism',
    title: 'Antikythera Mechanism',
    description: 'Ancient Greek analog computer dated to 150-100 BCE. Contains at least 30 bronze gears with technology not seen again for 1,400 years. Purpose: astronomical prediction.',
    dateRange: {
      start: '150 BCE',
      end: '100 BCE',
      approximate: true,
      confidence: 95,
    },
    sources: [atlantisSources[8]],
    location: {
      name: 'Antikythera Shipwreck, Greece',
      coordinates: {
        latitude: 35.8728,
        longitude: 23.3097,
      },
    },
    tags: ['antikythera', 'oopart', 'technology', 'greece', 'astronomical-computer'],
  },
  {
    id: 'baghdad-battery',
    title: 'Baghdad Battery',
    description: 'Terra cotta jars with copper cylinders and iron rods from Parthian era that could generate electric current. Purpose debated - electroplating, medicine, or unknown technology.',
    dateRange: {
      start: '250 BCE',
      end: '224 CE',
      approximate: true,
      confidence: 80,
    },
    sources: [atlantisSources[8]],
    location: {
      name: 'Khujut Rabu, Iraq',
    },
    tags: ['baghdad-battery', 'oopart', 'electricity', 'ancient-technology', 'mesopotamia'],
  },
  {
    id: 'dendera-light',
    title: 'Dendera Light Reliefs',
    description: 'Controversial reliefs in the Hathor Temple at Dendera showing what appears to be large light bulb-like objects with snake filaments inside, supported by djed pillars resembling insulators.',
    dateRange: {
      start: '50 BCE',
      approximate: true,
      confidence: 75,
    },
    sources: [atlantisSources[2], atlantisSources[8]],
    location: {
      name: 'Dendera Temple, Egypt',
      coordinates: {
        latitude: 26.1422,
        longitude: 32.6700,
      },
    },
    tags: ['dendera', 'egypt', 'oopart', 'ancient-electricity', 'light-bulb'],
  },
  {
    id: 'saqqara-bird',
    title: 'Saqqara Bird',
    description: 'Wooden artifact from 200 BCE resembling a modern aircraft. Has vertical tail fin unlike any known Egyptian bird depiction. Aerodynamic analysis suggests it could glide.',
    dateRange: {
      start: '200 BCE',
      approximate: true,
      confidence: 80,
    },
    sources: [atlantisSources[8]],
    location: {
      name: 'Saqqara, Egypt',
    },
    tags: ['saqqara-bird', 'egypt', 'oopart', 'aircraft', 'aerodynamics'],
  },
  {
    id: 'vimana-texts',
    title: 'Vimana Descriptions in Vedic Texts',
    description: 'Sanskrit texts including Vaimanika Shastra describe flying vehicles (vimanas) with detailed specifications of propulsion, metals, and weaponry. Ramayana describes aerial battles.',
    dateRange: {
      start: '8000 BCE',
      end: '500 BCE',
      approximate: true,
      confidence: 10,
    },
    sources: [atlantisSources[20]],
    location: {
      name: 'Indian Subcontinent',
    },
    tags: ['vimana', 'india', 'vedic', 'ancient-aircraft', 'technology'],
    relatedEvents: ['ancient-nuclear-war'],
  },
  {
    id: 'ancient-nuclear-war',
    title: 'Ancient Nuclear War Theory',
    description: 'Vitrified forts, trinitite-like glass in deserts, and Mahabharata descriptions of weapons producing mushroom clouds suggest possible ancient nuclear or advanced weapons.',
    dateRange: {
      start: '8000 BCE',
      end: '3000 BCE',
      approximate: true,
      confidence: 5,
    },
    sources: [atlantisSources[20], atlantisSources[8]],
    location: {
      name: 'Various - Mohenjo-daro, Libya, Scotland',
    },
    tags: ['nuclear', 'ancient-war', 'mahabharata', 'vitrification', 'mohenjo-daro'],
    relatedEvents: ['vimana-texts'],
  },

  // =========================================
  // PRE-DYNASTIC EGYPT & ANCIENT KNOWLEDGE
  // =========================================

  {
    id: 'zep-tepi',
    title: 'Zep Tepi - The First Time',
    description: 'Egyptian texts describe Zep Tepi, "The First Time," when gods ruled Egypt directly. The Turin Papyrus lists god-kings ruling for 36,620 years before the first human pharaoh.',
    dateRange: {
      start: '40000 BCE',
      end: '10000 BCE',
      approximate: true,
      confidence: 10,
    },
    sources: [atlantisSources[19], atlantisSources[2]],
    location: {
      name: 'Egypt',
    },
    tags: ['zep-tepi', 'egypt', 'gods', 'pre-dynastic', 'turin-papyrus'],
  },
  {
    id: 'thoth-atlantean',
    title: 'Thoth as Atlantean Priest',
    description: 'The Emerald Tablets describe Thoth as an Atlantean priest-king who escaped the cataclysm and brought knowledge to Egypt. He is credited with establishing Egyptian civilization.',
    dateRange: {
      start: '10000 BCE',
      approximate: true,
      confidence: 5,
    },
    sources: [atlantisSources[2]],
    location: {
      name: 'Egypt',
    },
    tags: ['thoth', 'atlantis', 'egypt', 'emerald-tablets', 'knowledge-transfer'],
    relatedEvents: ['atlantis-destruction', 'zep-tepi'],
  },

  // =========================================
  // SUMERIAN MYSTERIES
  // =========================================

  {
    id: 'sumerian-king-list-antediluvian',
    title: 'Sumerian Antediluvian Kings',
    description: 'The Sumerian King List describes 8 kings ruling before the flood for a total of 241,200 years. "After the flood had swept over, kingship descended from heaven."',
    dateRange: {
      start: '241200 BCE',
      end: '28800 BCE',
      approximate: true,
      confidence: 5,
    },
    sources: [atlantisSources[3]],
    location: {
      name: 'Mesopotamia',
    },
    tags: ['sumeria', 'king-list', 'antediluvian', 'flood', 'long-reign'],
  },
  {
    id: 'apkallu-seven-sages',
    title: 'The Seven Apkallu (Sages)',
    description: 'Sumerian/Babylonian tradition of seven sages (Apkallu) sent by the gods to teach humanity the arts of civilization after the flood. Depicted as fish-men or bird-men.',
    dateRange: {
      start: '10000 BCE',
      end: '5000 BCE',
      approximate: true,
      confidence: 15,
    },
    sources: [atlantisSources[3]],
    location: {
      name: 'Mesopotamia',
    },
    tags: ['apkallu', 'sages', 'sumeria', 'knowledge-bringers', 'oannes'],
    relatedEvents: ['global-flood-event'],
  },

  // =========================================
  // MYSTERY TRADITIONS
  // =========================================

  {
    id: 'hall-of-records',
    title: 'Hall of Records (Predicted)',
    description: 'Edgar Cayce predicted a Hall of Records containing Atlantean history exists beneath the Sphinx, in the Yucatan, and near Bimini. Seismic surveys have detected anomalies beneath the Sphinx.',
    dateRange: {
      start: '10000 BCE',
      approximate: true,
      confidence: 10,
    },
    sources: [atlantisSources[11], atlantisSources[7]],
    location: {
      name: 'Beneath the Great Sphinx, Giza',
      coordinates: {
        latitude: 29.9753,
        longitude: 31.1376,
      },
    },
    tags: ['hall-of-records', 'cayce', 'sphinx', 'atlantis', 'hidden-chamber'],
    relatedEvents: ['sphinx-original-construction'],
  },
  {
    id: 'hopi-fourth-world',
    title: 'Hopi Fourth World Emergence',
    description: 'Hopi oral tradition describes humanity living in four worlds, each destroyed before emergence into the next. We currently live in the Fourth World. Previous destructions by fire, ice, and flood.',
    dateRange: {
      start: '50000 BCE',
      end: '10000 BCE',
      approximate: true,
      confidence: 10,
    },
    sources: [atlantisSources[18]],
    location: {
      name: 'American Southwest',
    },
    tags: ['hopi', 'oral-tradition', 'worlds', 'cataclysm', 'emergence'],
  },
];

// ============================================================================
// TIMELINE EXPORT
// ============================================================================

export const atlantisMysteriesTimeline: Timeline = {
  id: 'atlantis-mysteries-timeline',
  name: 'ATLANTIS - Ancient Mysteries & Forbidden Archaeology',
  description: 'Comprehensive timeline of lost civilizations, suppressed archaeological discoveries, out-of-place artifacts, megalithic mysteries, and evidence challenging the mainstream historical narrative.',
  events: atlantisEvents,
  sources: atlantisSources,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default atlantisMysteriesTimeline;
