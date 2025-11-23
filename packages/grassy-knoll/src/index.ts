/**
 * Grassy Knoll Data Package
 * Political Assassinations Timeline - JFK, RFK, MLK, Malcolm X, and Suspicious Deaths
 *
 * "The bullets tell a different story than the official record."
 */

import {
  HistoricalEvent,
  Source,
  SourceType,
  SourceReliability,
  Timeline,
  ContradictionType,
} from '@ourstory/timeline-engine';

/**
 * Sources for political assassination research
 */
export const grassyKnollSources: Source[] = [
  // Official Investigation Sources
  {
    id: 'warren-commission',
    name: 'Warren Commission Report (1964)',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.CONTESTED,
    author: 'Chief Justice Earl Warren',
    publicationDate: new Date(1964, 8, 24),
    notes: 'Official government investigation; concluded Oswald acted alone; later contradicted by HSCA',
  },
  {
    id: 'hsca-report',
    name: 'House Select Committee on Assassinations (1979)',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.SECONDARY,
    publicationDate: new Date(1979, 6, 17),
    notes: 'Found "probable conspiracy" in JFK assassination; acoustic evidence suggested second shooter',
  },
  {
    id: 'jfk-records-collection',
    name: 'JFK Assassination Records Collection',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.PRIMARY,
    url: 'https://www.archives.gov/research/jfk',
    notes: 'National Archives declassified documents; many still withheld',
  },
  // FBI/COINTELPRO Sources
  {
    id: 'cointelpro-files',
    name: 'FBI COINTELPRO Files',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.PRIMARY,
    notes: 'Declassified counterintelligence program documents; targeted MLK, Malcolm X, Black Panthers',
  },
  {
    id: 'church-committee',
    name: 'Church Committee Report (1976)',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.PRIMARY,
    publicationDate: new Date(1976, 3, 26),
    notes: 'Senate investigation into intelligence agency abuses; exposed COINTELPRO',
  },
  // Civil Trial Sources
  {
    id: 'king-v-jowers',
    name: 'King vs. Jowers Civil Trial Verdict (1999)',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.PRIMARY,
    publicationDate: new Date(1999, 11, 8),
    notes: 'Memphis civil trial found government agencies liable in MLK assassination conspiracy',
  },
  {
    id: 'malcolm-x-exoneration',
    name: 'Manhattan DA Investigation (2021)',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.PRIMARY,
    publicationDate: new Date(2021, 10, 18),
    notes: 'Exonerated two men wrongfully convicted; revealed FBI/NYPD misconduct',
  },
  // Alternative/Investigative Sources
  {
    id: 'zapruder-film',
    name: 'Zapruder Film Analysis',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.PRIMARY,
    author: 'Abraham Zapruder',
    publicationDate: new Date(1963, 10, 22),
    notes: 'Amateur film of JFK assassination; shows backward head movement inconsistent with rear shot',
  },
  {
    id: 'rfk-autopsy',
    name: 'RFK Autopsy Report - Thomas Noguchi',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.PRIMARY,
    author: 'Dr. Thomas Noguchi',
    publicationDate: new Date(1968, 5, 6),
    notes: 'Los Angeles County Coroner; documented fatal shot from behind at point-blank range',
  },
  {
    id: 'hampton-settlement',
    name: 'Hampton Family Civil Settlement (1982)',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.PRIMARY,
    publicationDate: new Date(1982, 10, 1),
    notes: '$1.85 million settlement; FBI, Chicago Police, Cook County found liable',
  },
];

/**
 * Historical events related to political assassinations
 */
export const grassyKnollEvents: HistoricalEvent[] = [
  // JFK Assassination
  {
    id: 'jfk-assassination-1963',
    title: 'JFK Assassination - Dallas',
    description:
      'President John F. Kennedy assassinated in Dealey Plaza, Dallas, Texas. Official story claims Lee Harvey Oswald acted alone from the Texas School Book Depository. Evidence suggests multiple shooters, including from the grassy knoll. Oswald killed by Jack Ruby before trial, claiming he was "a patsy."',
    dateRange: {
      start: new Date(1963, 10, 22),
      approximate: false,
      confidence: 100,
    },
    sources: [
      grassyKnollSources[0], // Warren Commission
      grassyKnollSources[1], // HSCA
      grassyKnollSources[2], // JFK Records
      grassyKnollSources[7], // Zapruder
    ],
    location: {
      name: 'Dealey Plaza, Dallas, Texas',
      coordinates: {
        latitude: 32.7788,
        longitude: -96.8083,
      },
    },
    tags: ['jfk', 'assassination', 'dallas', 'grassy-knoll', 'warren-commission', '1963', 'oswald'],
    relatedEvents: ['oswald-killed-1963', 'rfk-assassination-1968'],
    contradictions: [
      {
        id: 'jfk-shooter-count',
        eventId: 'jfk-assassination-1963',
        description: 'Warren Commission claims lone gunman; HSCA found "probable conspiracy" with acoustic evidence of second shooter from grassy knoll',
        sources: [grassyKnollSources[0], grassyKnollSources[1]],
        type: ContradictionType.FACT_CONFLICT,
        severity: 'major',
      },
      {
        id: 'jfk-magic-bullet',
        eventId: 'jfk-assassination-1963',
        description: 'Single bullet theory defies physics - one pristine bullet allegedly caused 7 wounds in JFK and Connally',
        sources: [grassyKnollSources[0]],
        type: ContradictionType.INTERPRETATION_CONFLICT,
        severity: 'major',
      },
      {
        id: 'jfk-head-movement',
        eventId: 'jfk-assassination-1963',
        description: 'Zapruder film shows JFK head moving backward and to the left, inconsistent with shot from behind',
        sources: [grassyKnollSources[7]],
        type: ContradictionType.FACT_CONFLICT,
        severity: 'major',
      },
    ],
  },
  {
    id: 'oswald-killed-1963',
    title: 'Lee Harvey Oswald Killed by Jack Ruby',
    description:
      'Lee Harvey Oswald shot and killed by nightclub owner Jack Ruby in Dallas Police headquarters basement, live on national television. Ruby had known mob connections. Oswald died before he could be tried, having declared "I\'m just a patsy."',
    dateRange: {
      start: new Date(1963, 10, 24),
      approximate: false,
      confidence: 100,
    },
    sources: [grassyKnollSources[2]],
    location: {
      name: 'Dallas Police Headquarters, Texas',
      coordinates: {
        latitude: 32.7815,
        longitude: -96.7989,
      },
    },
    tags: ['oswald', 'jack-ruby', 'dallas', 'mob', '1963', 'silencing'],
    relatedEvents: ['jfk-assassination-1963'],
  },
  // Malcolm X Assassination
  {
    id: 'malcolm-x-assassination-1965',
    title: 'Malcolm X Assassination',
    description:
      'Malcolm X assassinated at the Audubon Ballroom in New York City. Three men convicted, but only Talmadge Hayer admitted guilt. In 2021, Muhammad Aziz and Khalil Islam were exonerated after evidence showed FBI and NYPD withheld exculpatory evidence and had informants in Malcolm X\'s security detail.',
    dateRange: {
      start: new Date(1965, 1, 21),
      approximate: false,
      confidence: 100,
    },
    sources: [grassyKnollSources[3], grassyKnollSources[6]],
    location: {
      name: 'Audubon Ballroom, New York City',
      coordinates: {
        latitude: 40.8398,
        longitude: -73.9385,
      },
    },
    tags: ['malcolm-x', 'assassination', 'cointelpro', 'fbi', 'new-york', '1965', 'exoneration'],
    relatedEvents: ['mlk-assassination-1968'],
    contradictions: [
      {
        id: 'malcolm-x-convictions',
        eventId: 'malcolm-x-assassination-1965',
        description: 'Three men convicted but only one admitted guilt; two exonerated in 2021 after 55 years of wrongful imprisonment',
        sources: [grassyKnollSources[6]],
        type: ContradictionType.FACT_CONFLICT,
        severity: 'major',
      },
    ],
  },
  // Dorothy Kilgallen Death
  {
    id: 'kilgallen-death-1965',
    title: 'Dorothy Kilgallen Found Dead',
    description:
      'Journalist Dorothy Kilgallen found dead in her New York townhouse. She had been investigating the JFK assassination and conducted the only private interview with Jack Ruby. Her notes and manuscript on JFK disappeared. Death ruled accidental overdose despite suspicious circumstances.',
    dateRange: {
      start: new Date(1965, 10, 8),
      approximate: false,
      confidence: 100,
    },
    sources: [grassyKnollSources[2]],
    location: {
      name: 'New York City, New York',
    },
    tags: ['kilgallen', 'journalist', 'jfk', 'suspicious-death', '1965', 'witness'],
    relatedEvents: ['jfk-assassination-1963'],
  },
  // RFK Assassination
  {
    id: 'rfk-assassination-1968',
    title: 'RFK Assassination - Ambassador Hotel',
    description:
      'Senator Robert F. Kennedy assassinated at Ambassador Hotel in Los Angeles after winning California primary. Sirhan Sirhan convicted, but autopsy by Dr. Thomas Noguchi showed fatal shot fired from behind at point-blank range - Sirhan was always in front. More bullet holes found than Sirhan\'s gun capacity. Security guard Thane Eugene Cesar was behind RFK with drawn weapon. LAPD destroyed critical evidence.',
    dateRange: {
      start: new Date(1968, 5, 5),
      approximate: false,
      confidence: 100,
    },
    sources: [grassyKnollSources[8]],
    location: {
      name: 'Ambassador Hotel, Los Angeles, California',
      coordinates: {
        latitude: 34.0596,
        longitude: -118.3014,
      },
    },
    tags: ['rfk', 'assassination', 'los-angeles', 'sirhan', 'second-shooter', '1968'],
    relatedEvents: ['jfk-assassination-1963', 'mlk-assassination-1968'],
    contradictions: [
      {
        id: 'rfk-shot-direction',
        eventId: 'rfk-assassination-1968',
        description: 'Autopsy proves fatal shot from behind at contact range; all witnesses place Sirhan in front of RFK, never closer than 3 feet',
        sources: [grassyKnollSources[8]],
        type: ContradictionType.FACT_CONFLICT,
        severity: 'major',
      },
      {
        id: 'rfk-bullet-count',
        eventId: 'rfk-assassination-1968',
        description: 'Sirhan\'s revolver held 8 bullets; at least 13 bullet holes documented in pantry',
        sources: [grassyKnollSources[8]],
        type: ContradictionType.FACT_CONFLICT,
        severity: 'major',
      },
    ],
  },
  // MLK Assassination
  {
    id: 'mlk-assassination-1968',
    title: 'MLK Assassination - Memphis',
    description:
      'Dr. Martin Luther King Jr. assassinated at Lorraine Motel in Memphis, Tennessee. James Earl Ray convicted but recanted confession, claiming he was set up by mysterious "Raoul." FBI\'s COINTELPRO had targeted MLK as "most dangerous Negro in America." In 1999, King family civil trial found government agencies liable for conspiracy. Military intelligence was in Memphis that day; police protection was withdrawn.',
    dateRange: {
      start: new Date(1968, 3, 4),
      approximate: false,
      confidence: 100,
    },
    sources: [grassyKnollSources[3], grassyKnollSources[4], grassyKnollSources[5]],
    location: {
      name: 'Lorraine Motel, Memphis, Tennessee',
      coordinates: {
        latitude: 35.1346,
        longitude: -90.0578,
      },
    },
    tags: ['mlk', 'assassination', 'memphis', 'cointelpro', 'fbi', 'civil-trial', '1968'],
    relatedEvents: ['rfk-assassination-1968', 'malcolm-x-assassination-1965', 'fred-hampton-assassination-1969'],
    contradictions: [
      {
        id: 'mlk-conspiracy',
        eventId: 'mlk-assassination-1968',
        description: 'Official narrative of lone gunman contradicted by 1999 civil trial verdict finding government conspiracy',
        sources: [grassyKnollSources[5]],
        type: ContradictionType.FACT_CONFLICT,
        severity: 'major',
      },
    ],
  },
  // Fred Hampton Assassination
  {
    id: 'fred-hampton-assassination-1969',
    title: 'Fred Hampton Killed in FBI-Coordinated Raid',
    description:
      'Black Panther Chairman Fred Hampton killed in pre-dawn raid on his Chicago apartment. FBI informant William O\'Neal provided floor plan and drugged Hampton before raid. Police fired 99 shots; Panthers fired 1 (likely reflexive). Hampton was shot in bed while unconscious. Declassified COINTELPRO documents prove FBI coordination. $1.85 million settlement in 1982 found FBI, Chicago Police, and Cook County liable.',
    dateRange: {
      start: new Date(1969, 11, 4),
      approximate: false,
      confidence: 100,
    },
    sources: [grassyKnollSources[3], grassyKnollSources[9]],
    location: {
      name: 'Chicago, Illinois',
      coordinates: {
        latitude: 41.8781,
        longitude: -87.6298,
      },
    },
    tags: ['fred-hampton', 'black-panthers', 'cointelpro', 'fbi', 'chicago', 'assassination', '1969'],
    relatedEvents: ['mlk-assassination-1968', 'malcolm-x-assassination-1965'],
    contradictions: [
      {
        id: 'hampton-shootout',
        eventId: 'fred-hampton-assassination-1969',
        description: 'Police claimed "shootout" but fired 99 shots vs 1 Panther shot; evidence proves premeditated assassination',
        sources: [grassyKnollSources[9]],
        type: ContradictionType.FACT_CONFLICT,
        severity: 'major',
      },
    ],
  },
  // Karen Silkwood
  {
    id: 'silkwood-death-1974',
    title: 'Karen Silkwood Dies in Car Crash',
    description:
      'Nuclear whistleblower Karen Silkwood killed in car crash en route to meet New York Times reporter with documents proving safety violations at Kerr-McGee plutonium plant. Documents she was carrying never found. Car showed evidence of being struck from behind. She had been gathering evidence of falsified safety reports and plutonium contamination.',
    dateRange: {
      start: new Date(1974, 10, 13),
      approximate: false,
      confidence: 100,
    },
    sources: [grassyKnollSources[2]],
    location: {
      name: 'Highway 74, Oklahoma',
    },
    tags: ['silkwood', 'whistleblower', 'nuclear', 'suspicious-death', '1974'],
    relatedEvents: ['kilgallen-death-1965'],
  },
  // Danny Casolaro
  {
    id: 'casolaro-death-1991',
    title: 'Danny Casolaro Found Dead in Hotel',
    description:
      'Investigative journalist Danny Casolaro found dead in a Martinsburg, West Virginia hotel bathtub with slashed wrists. Ruled suicide despite his explicit warnings to family: "If anything happens to me, don\'t believe it\'s suicide." Was investigating the "Octopus" - connections between Inslaw, PROMIS software, October Surprise, BCCI, and Iran-Contra. His briefcase of documents was never found.',
    dateRange: {
      start: new Date(1991, 7, 10),
      approximate: false,
      confidence: 100,
    },
    sources: [grassyKnollSources[2]],
    location: {
      name: 'Martinsburg, West Virginia',
    },
    tags: ['casolaro', 'journalist', 'inslaw', 'promis', 'suspicious-death', '1991', 'octopus'],
    relatedEvents: ['kilgallen-death-1965'],
  },
  // Gary Webb
  {
    id: 'gary-webb-death-2004',
    title: 'Gary Webb Found Dead - Two Gunshots to Head',
    description:
      'Investigative journalist Gary Webb found dead with TWO gunshot wounds to the head, ruled "suicide." Webb had exposed CIA-Contra cocaine trafficking in his "Dark Alliance" series, which was attacked by mainstream media but later largely vindicated. He had been driven from journalism and was facing foreclosure.',
    dateRange: {
      start: new Date(2004, 11, 10),
      approximate: false,
      confidence: 100,
    },
    sources: [grassyKnollSources[2]],
    location: {
      name: 'Sacramento, California',
    },
    tags: ['gary-webb', 'journalist', 'cia', 'contra', 'cocaine', 'suspicious-death', '2004'],
    relatedEvents: ['casolaro-death-1991'],
    contradictions: [
      {
        id: 'webb-suicide-ruling',
        eventId: 'gary-webb-death-2004',
        description: 'Ruled suicide despite TWO gunshot wounds to the head - extremely rare in actual suicides',
        sources: [grassyKnollSources[2]],
        type: ContradictionType.FACT_CONFLICT,
        severity: 'major',
      },
    ],
  },
  // Church Committee
  {
    id: 'church-committee-1975',
    title: 'Church Committee Exposes Intelligence Abuses',
    description:
      'Senate Select Committee to Study Governmental Operations with Respect to Intelligence Activities (Church Committee) exposes massive abuses by CIA, FBI, NSA, and IRS. Reveals COINTELPRO targeting of civil rights leaders, assassination plots against foreign leaders, and warrantless surveillance of American citizens.',
    dateRange: {
      start: new Date(1975, 0, 27),
      end: new Date(1976, 3, 26),
      approximate: false,
      confidence: 100,
    },
    sources: [grassyKnollSources[4]],
    location: {
      name: 'Washington, D.C.',
    },
    tags: ['church-committee', 'senate', 'cointelpro', 'cia', 'fbi', 'declassified', '1975', '1976'],
    relatedEvents: ['mlk-assassination-1968', 'fred-hampton-assassination-1969'],
  },
  // King Family Civil Trial
  {
    id: 'king-civil-trial-1999',
    title: 'King Family Wins Civil Trial - Government Conspiracy',
    description:
      'After three weeks of testimony, Memphis jury finds Lloyd Jowers and "government agencies" liable for the assassination of MLK. Coretta Scott King stated: "There is abundant evidence of a major high-level conspiracy in the assassination." Verdict largely ignored by mainstream media. DOJ refused to reopen criminal investigation.',
    dateRange: {
      start: new Date(1999, 11, 8),
      approximate: false,
      confidence: 100,
    },
    sources: [grassyKnollSources[5]],
    location: {
      name: 'Memphis, Tennessee',
    },
    tags: ['mlk', 'civil-trial', 'conspiracy', 'government', 'king-family', '1999'],
    relatedEvents: ['mlk-assassination-1968'],
  },
  // Malcolm X Exonerations
  {
    id: 'malcolm-x-exonerations-2021',
    title: 'Two Men Exonerated in Malcolm X Assassination',
    description:
      'Manhattan DA exonerates Muhammad Aziz and Khalil Islam after 55+ years. Investigation revealed FBI and NYPD withheld critical evidence proving their innocence. FBI informant was Malcolm X\'s own bodyguard. NYPD removed surveillance the day of assassination. Prosecution had hidden evidence that could have cleared them at original trial.',
    dateRange: {
      start: new Date(2021, 10, 18),
      approximate: false,
      confidence: 100,
    },
    sources: [grassyKnollSources[6]],
    location: {
      name: 'New York City, New York',
    },
    tags: ['malcolm-x', 'exoneration', 'fbi', 'nypd', 'wrongful-conviction', '2021'],
    relatedEvents: ['malcolm-x-assassination-1965'],
  },
];

/**
 * Grassy Knoll Timeline - Political Assassinations
 */
export const grassyKnollTimeline: Timeline = {
  id: 'grassy-knoll-timeline',
  name: 'GRASSY KNOLL - Political Assassinations',
  description:
    'Comprehensive timeline of political assassinations, suspicious deaths, and the cover-ups surrounding them. Focuses on JFK, RFK, MLK, Malcolm X, and patterns of eliminating voices threatening established power structures. The bullets tell a different story than the official record.',
  events: grassyKnollEvents,
  sources: grassyKnollSources,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default grassyKnollTimeline;
