import {
  HistoricalEvent,
  Source,
  SourceType,
  SourceReliability,
  Timeline,
} from '@ourstory/timeline-engine';

/**
 * MAJESTIC - UFO Disclosure Data Package
 * Comprehensive coverage of UAP/UFO phenomena, government programs,
 * Roswell, congressional hearings, and disclosure efforts
 */

// =============================================================================
// SOURCES
// =============================================================================

export const ufoSources: Source[] = [
  // Official Government Sources
  {
    id: 'pentagon-uap',
    name: 'Pentagon UAP Task Force / AARO',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.PRIMARY,
    url: 'https://www.aaro.mil/',
    notes: 'All-domain Anomaly Resolution Office - official government UAP investigation',
  },
  {
    id: 'dni-reports',
    name: 'Director of National Intelligence UAP Reports',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.PRIMARY,
    notes: 'Official intelligence assessments on UAP to Congress',
  },
  {
    id: 'project-bluebook',
    name: 'Project Blue Book Archives',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.PRIMARY,
    notes: 'US Air Force UFO investigation program (1952-1969)',
  },
  {
    id: 'congressional-records',
    name: 'Congressional UAP Hearing Records',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.PRIMARY,
    url: 'https://www.congress.gov/',
    notes: 'Official testimony and transcripts from UAP hearings',
  },
  {
    id: 'navy-releases',
    name: 'US Navy Official Releases',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.PRIMARY,
    notes: 'Navy confirmed UAP videos and statements',
  },
  // Academic & Research Sources
  {
    id: 'scientific-coalition-uap',
    name: 'Scientific Coalition for UAP Studies (SCU)',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.SECONDARY,
    url: 'https://www.explorescu.org/',
    notes: 'Scientific analysis of UAP cases',
  },
  {
    id: 'nasa-uap-study',
    name: 'NASA UAP Independent Study',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.PRIMARY,
    notes: 'NASA scientific assessment of UAP data',
  },
  // Journalistic Sources
  {
    id: 'nyt-uap-reporting',
    name: 'New York Times UAP Reporting',
    type: SourceType.ACADEMIC,
    reliability: SourceReliability.SECONDARY,
    author: 'Leslie Kean, Ralph Blumenthal, Helene Cooper',
    notes: 'Investigative journalism that broke AATIP story',
  },
  // Alternative/Researcher Sources
  {
    id: 'mufon-database',
    name: 'MUFON Case Database',
    type: SourceType.ALTERNATIVE,
    reliability: SourceReliability.CONTESTED,
    url: 'https://www.mufon.com/',
    notes: 'Mutual UFO Network civilian investigation database',
  },
  {
    id: 'foia-releases',
    name: 'FOIA Released Documents',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.PRIMARY,
    notes: 'Documents obtained through Freedom of Information Act',
  },
  // Witness Testimony
  {
    id: 'pilot-testimony',
    name: 'Military Pilot Testimonies',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.PRIMARY,
    notes: 'Sworn testimony from Navy and Air Force pilots',
  },
  {
    id: 'whistleblower-testimony',
    name: 'Whistleblower Testimonies',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.CONTESTED,
    notes: 'Claims from intelligence community insiders',
  },
  // Historical Archives
  {
    id: 'roswell-archives',
    name: 'Roswell Incident Archives',
    type: SourceType.DECLASSIFIED,
    reliability: SourceReliability.CONTESTED,
    notes: 'Documents and testimonies related to 1947 Roswell crash',
  },
];

// =============================================================================
// EVENTS - Early UFO Era (1940s-1950s)
// =============================================================================

export const earlyEraEvents: HistoricalEvent[] = [
  {
    id: 'foo-fighters-wwii',
    title: 'Foo Fighter Sightings During WWII',
    description:
      'Allied pilots report mysterious glowing orbs and aerial objects following their aircraft during combat missions over Europe and the Pacific. Both Axis and Allied forces reported these phenomena, ruling out enemy technology.',
    dateRange: {
      start: new Date(1944, 0, 1),
      end: new Date(1945, 8, 2),
      approximate: true,
      confidence: 90,
    },
    sources: [ufoSources[2], ufoSources[8]],
    location: {
      name: 'European & Pacific Theaters',
    },
    tags: ['ufo', 'wwii', 'military', 'foo-fighters', 'pilot-sighting', '1940s'],
  },
  {
    id: 'kenneth-arnold-sighting',
    title: 'Kenneth Arnold Sighting - Birth of "Flying Saucers"',
    description:
      'Private pilot Kenneth Arnold reports nine unusual objects flying in formation near Mount Rainier, Washington, moving at speeds he estimated at 1,700 mph. His description of their movement "like a saucer skipping across water" leads to the term "flying saucer."',
    dateRange: {
      start: new Date(1947, 5, 24),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[2], ufoSources[8]],
    location: {
      name: 'Mount Rainier, Washington',
      coordinates: {
        latitude: 46.8523,
        longitude: -121.7603,
      },
    },
    tags: ['ufo', 'flying-saucer', 'civilian-sighting', 'kenneth-arnold', '1947', 'origin'],
  },
  {
    id: 'roswell-incident',
    title: 'Roswell Incident',
    description:
      'Military recovers debris from crash site on Mac Brazel ranch. Initial press release from Roswell Army Air Field announces capture of "flying disc." Story retracted within 24 hours, changed to "weather balloon." Later government explanations include Project Mogul balloon. Multiple witnesses describe unusual metallic debris with strange properties. Controversy continues over whether craft and bodies were recovered.',
    dateRange: {
      start: new Date(1947, 6, 7),
      end: new Date(1947, 6, 8),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[12], ufoSources[9], ufoSources[2]],
    location: {
      name: 'Roswell, New Mexico',
      coordinates: {
        latitude: 33.3943,
        longitude: -104.5230,
      },
    },
    tags: ['ufo', 'roswell', 'crash-retrieval', 'cover-up', 'majestic', '1947', 'debris'],
    contradictions: [
      {
        id: 'roswell-narrative-change',
        eventId: 'roswell-incident',
        description: 'Official explanation changed from "flying disc" to "weather balloon" to "Project Mogul" over decades',
        sources: [ufoSources[12]],
        type: 'fact_conflict' as any,
        severity: 'major',
      },
    ],
  },
  {
    id: 'maury-island-incident',
    title: 'Maury Island Incident',
    description:
      'Harold Dahl claims to have witnessed six donut-shaped objects over Puget Sound, with one dropping hot slag that killed his dog and burned his son. Later investigated by early MIB-like figures. Case remains controversial.',
    dateRange: {
      start: new Date(1947, 5, 21),
      approximate: false,
      confidence: 60,
    },
    sources: [ufoSources[8], ufoSources[2]],
    location: {
      name: 'Maury Island, Puget Sound, Washington',
      coordinates: {
        latitude: 47.3828,
        longitude: -122.4364,
      },
    },
    tags: ['ufo', 'puget-sound', 'debris', 'men-in-black', '1947'],
  },
  {
    id: 'mantell-ufo-incident',
    title: 'Mantell UFO Incident',
    description:
      'Captain Thomas Mantell, an experienced Air National Guard pilot, dies while pursuing a UFO over Kentucky. His aircraft broke apart at high altitude. Official explanation: chasing a Skyhook balloon. First known death of a pilot while chasing a UFO.',
    dateRange: {
      start: new Date(1948, 0, 7),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[2]],
    location: {
      name: 'Franklin, Kentucky',
      coordinates: {
        latitude: 36.7223,
        longitude: -86.5772,
      },
    },
    tags: ['ufo', 'pilot-death', 'air-force', 'mantell', '1948', 'tragedy'],
  },
  {
    id: 'project-sign',
    title: 'Project Sign Established',
    description:
      'US Air Force establishes first official UFO investigation program. Top Secret "Estimate of the Situation" reportedly concluded UFOs were extraterrestrial in origin. Document allegedly destroyed by Air Force Chief of Staff Hoyt Vandenberg.',
    dateRange: {
      start: new Date(1948, 0, 22),
      end: new Date(1949, 1, 11),
      approximate: false,
      confidence: 95,
    },
    sources: [ufoSources[2], ufoSources[9]],
    location: {
      name: 'Wright-Patterson AFB, Ohio',
    },
    tags: ['ufo', 'project-sign', 'air-force', 'investigation', 'classified', '1948'],
  },
  {
    id: 'project-grudge',
    title: 'Project Grudge Replaces Project Sign',
    description:
      'Air Force replaces Project Sign with Project Grudge, taking a more dismissive approach to UFO reports. Program focused on debunking rather than investigating. Criticized for predetermined conclusions.',
    dateRange: {
      start: new Date(1949, 1, 11),
      end: new Date(1951, 11, 31),
      approximate: true,
      confidence: 90,
    },
    sources: [ufoSources[2]],
    location: {
      name: 'Wright-Patterson AFB, Ohio',
    },
    tags: ['ufo', 'project-grudge', 'air-force', 'debunking', '1949'],
  },
];

// =============================================================================
// EVENTS - Project Blue Book Era (1952-1969)
// =============================================================================

export const blueBookEraEvents: HistoricalEvent[] = [
  {
    id: 'project-blue-book-begins',
    title: 'Project Blue Book Established',
    description:
      'Air Force establishes Project Blue Book as the official UFO investigation program. Over its 17-year existence, it would investigate 12,618 UFO reports, with 701 remaining "unidentified." Program led by Captain Edward Ruppelt, who coined the term "unidentified flying object."',
    dateRange: {
      start: new Date(1952, 2, 1),
      approximate: true,
      confidence: 95,
    },
    sources: [ufoSources[2]],
    location: {
      name: 'Wright-Patterson AFB, Ohio',
    },
    tags: ['ufo', 'project-blue-book', 'air-force', 'investigation', '1952', 'official'],
  },
  {
    id: 'washington-dc-ufo-flap',
    title: 'Washington DC UFO Flap',
    description:
      'Multiple UFOs tracked on radar and witnessed visually over Washington DC on consecutive weekends. Objects tracked at speeds up to 7,000 mph. Jets scrambled but unable to intercept. Events made national headlines and prompted largest Pentagon press conference since WWII.',
    dateRange: {
      start: new Date(1952, 6, 19),
      end: new Date(1952, 6, 27),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[2], ufoSources[9]],
    location: {
      name: 'Washington, DC',
      coordinates: {
        latitude: 38.9072,
        longitude: -77.0369,
      },
    },
    tags: ['ufo', 'washington-dc', 'radar', 'military', 'mass-sighting', '1952', 'jets-scrambled'],
  },
  {
    id: 'robertson-panel',
    title: 'CIA Robertson Panel Convenes',
    description:
      'CIA convenes secret panel of scientists led by Dr. H.P. Robertson to review UFO evidence. Panel recommends debunking campaign to reduce public interest in UFOs, viewing them as a national security concern due to potential to clog intelligence channels. Recommended using mass media for public "education."',
    dateRange: {
      start: new Date(1953, 0, 14),
      end: new Date(1953, 0, 17),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[9], ufoSources[2]],
    location: {
      name: 'CIA Headquarters',
    },
    tags: ['ufo', 'cia', 'robertson-panel', 'debunking', 'cover-up', 'policy', '1953'],
  },
  {
    id: 'levelland-ufo-case',
    title: 'Levelland UFO Case',
    description:
      'Multiple independent witnesses report egg-shaped UFO causing vehicle engines and lights to fail near Levelland, Texas. At least 15 witnesses in different locations report similar experiences. Blue Book attributed it to "ball lightning" despite meteorological conditions making this implausible.',
    dateRange: {
      start: new Date(1957, 10, 2),
      end: new Date(1957, 10, 3),
      approximate: false,
      confidence: 95,
    },
    sources: [ufoSources[2], ufoSources[8]],
    location: {
      name: 'Levelland, Texas',
      coordinates: {
        latitude: 33.5873,
        longitude: -102.3779,
      },
    },
    tags: ['ufo', 'levelland', 'em-effects', 'vehicle-interference', 'multiple-witnesses', '1957'],
  },
  {
    id: 'betty-barney-hill-abduction',
    title: 'Betty and Barney Hill Abduction',
    description:
      'Betty and Barney Hill report being abducted by non-human entities while driving through New Hampshire. Case becomes first widely publicized alien abduction claim. Includes details recovered through hypnosis, star map allegedly shown to Betty, and physical effects on their car.',
    dateRange: {
      start: new Date(1961, 8, 19),
      end: new Date(1961, 8, 20),
      approximate: false,
      confidence: 70,
    },
    sources: [ufoSources[8]],
    location: {
      name: 'White Mountains, New Hampshire',
      coordinates: {
        latitude: 44.2706,
        longitude: -71.3033,
      },
    },
    tags: ['ufo', 'abduction', 'hill-case', 'close-encounter', 'hypnosis', '1961'],
  },
  {
    id: 'condon-report',
    title: 'Condon Committee Report Released',
    description:
      'University of Colorado study led by Dr. Edward Condon concludes UFOs do not warrant scientific study. Report criticized for bias and methodology. Internal memo revealed predetermined negative conclusion. Despite finding ~30% of cases unexplained, report used to justify closing Blue Book.',
    dateRange: {
      start: new Date(1969, 0, 9),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[5], ufoSources[2]],
    location: {
      name: 'University of Colorado',
    },
    tags: ['ufo', 'condon-report', 'scientific-study', 'controversial', 'debunking', '1969'],
    contradictions: [
      {
        id: 'condon-bias',
        eventId: 'condon-report',
        description: 'Report concluded no further study needed despite ~30% of cases remaining unexplained',
        sources: [ufoSources[5]],
        type: 'interpretation_conflict' as any,
        severity: 'major',
      },
    ],
  },
  {
    id: 'project-blue-book-ends',
    title: 'Project Blue Book Terminated',
    description:
      'Air Force terminates Project Blue Book, citing Condon Report conclusions. 12,618 reports investigated; 701 remain officially "unidentified." Government claims no further investigation needed. Critics argue premature closure left many questions unanswered.',
    dateRange: {
      start: new Date(1969, 11, 17),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[2]],
    location: {
      name: 'Wright-Patterson AFB, Ohio',
    },
    tags: ['ufo', 'project-blue-book', 'closure', 'official', '1969'],
  },
];

// =============================================================================
// EVENTS - Gap Era (1970s-2000s)
// =============================================================================

export const gapEraEvents: HistoricalEvent[] = [
  {
    id: 'rendlesham-forest-incident',
    title: 'Rendlesham Forest Incident',
    description:
      'US military personnel at RAF Bentwaters/Woodbridge in UK report close encounters with unidentified craft over multiple nights. Deputy Base Commander Lt. Col. Charles Halt leads investigation, records observations on audio tape. Physical evidence includes indentations in ground and elevated radiation levels. Called "Britain\'s Roswell."',
    dateRange: {
      start: new Date(1980, 11, 26),
      end: new Date(1980, 11, 28),
      approximate: false,
      confidence: 95,
    },
    sources: [ufoSources[9], ufoSources[10]],
    location: {
      name: 'Rendlesham Forest, Suffolk, UK',
      coordinates: {
        latitude: 52.0833,
        longitude: 1.4167,
      },
    },
    tags: ['ufo', 'rendlesham', 'military', 'uk', 'close-encounter', 'physical-evidence', '1980'],
  },
  {
    id: 'belgium-ufo-wave',
    title: 'Belgium UFO Wave',
    description:
      'Massive wave of triangular UFO sightings over Belgium lasting months. Belgian Air Force scrambles F-16s that lock onto objects with radar. Objects demonstrate extreme maneuvers including dropping from 10,000 to 500 feet in seconds. Belgian military cooperates with civilian investigators. Remains officially unexplained.',
    dateRange: {
      start: new Date(1989, 10, 29),
      end: new Date(1990, 3, 31),
      approximate: true,
      confidence: 95,
    },
    sources: [ufoSources[5], ufoSources[9]],
    location: {
      name: 'Belgium',
      coordinates: {
        latitude: 50.8503,
        longitude: 4.3517,
      },
    },
    tags: ['ufo', 'belgium', 'triangular-craft', 'f-16', 'radar', 'mass-sighting', '1989', '1990'],
  },
  {
    id: 'phoenix-lights',
    title: 'Phoenix Lights Mass Sighting',
    description:
      'Thousands of witnesses observe massive V-shaped craft passing silently over Phoenix, Arizona. Object estimated at over a mile wide. Governor Fife Symington initially mocks incident but later admits he witnessed craft and believes it was otherworldly. Air Force explanation of flares dismissed by many witnesses.',
    dateRange: {
      start: new Date(1997, 2, 13),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[8], ufoSources[7]],
    location: {
      name: 'Phoenix, Arizona',
      coordinates: {
        latitude: 33.4484,
        longitude: -112.0740,
      },
    },
    tags: ['ufo', 'phoenix-lights', 'mass-sighting', 'v-shaped', 'governor', '1997'],
  },
  {
    id: 'disclosure-project-press-conference',
    title: 'Disclosure Project National Press Club Event',
    description:
      'Dr. Steven Greer organizes National Press Club conference featuring over 20 military, intelligence, and government witnesses testifying about UFO encounters and cover-ups. Witnesses include FAA officials, military officers, and intelligence personnel. Calls for congressional hearings.',
    dateRange: {
      start: new Date(2001, 4, 9),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[11], ufoSources[7]],
    location: {
      name: 'National Press Club, Washington DC',
      coordinates: {
        latitude: 38.8994,
        longitude: -77.0390,
      },
    },
    tags: ['ufo', 'disclosure-project', 'press-conference', 'witnesses', 'greer', '2001'],
  },
];

// =============================================================================
// EVENTS - Modern Pentagon Era (2004-Present)
// =============================================================================

export const modernEraEvents: HistoricalEvent[] = [
  {
    id: 'nimitz-tic-tac-encounter',
    title: 'USS Nimitz "Tic Tac" Encounter',
    description:
      'Navy fighter pilots from USS Nimitz encounter unidentified aerial object exhibiting extraordinary capabilities off coast of San Diego. Object tracked for two weeks by USS Princeton radar. Commander David Fravor and Lt. Commander Alex Dietrich attempt intercept. Object demonstrates instantaneous acceleration, transmedium capabilities. FLIR footage captured by Lt. Chad Underwood. Case later confirmed as authentic by Pentagon.',
    dateRange: {
      start: new Date(2004, 10, 14),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[4], ufoSources[10], ufoSources[0]],
    location: {
      name: 'Pacific Ocean, off San Diego, California',
      coordinates: {
        latitude: 31.0,
        longitude: -117.5,
      },
    },
    tags: ['ufo', 'tic-tac', 'nimitz', 'navy', 'pilot', 'radar', 'video', 'fravor', '2004'],
  },
  {
    id: 'aawsap-program-begins',
    title: 'AAWSAP Program Initiated',
    description:
      'Pentagon establishes Advanced Aerospace Weapon System Applications Program (AAWSAP) with $22 million in funding secured by Senator Harry Reid. Contract awarded to Bigelow Aerospace Advanced Space Studies (BAASS). Program investigates UFOs, paranormal phenomena, and potential threats. Precursor to AATIP.',
    dateRange: {
      start: new Date(2007, 11, 1),
      approximate: true,
      confidence: 90,
    },
    sources: [ufoSources[9], ufoSources[0]],
    location: {
      name: 'Pentagon, Washington DC',
    },
    tags: ['ufo', 'aawsap', 'pentagon', 'harry-reid', 'bigelow', 'classified', '2007'],
  },
  {
    id: 'aatip-program',
    title: 'AATIP Program Runs Within Pentagon',
    description:
      'Advanced Aerospace Threat Identification Program (AATIP) operates within Pentagon under direction of Luis Elizondo. Program investigates military UAP encounters, analyzes materials, and produces intelligence assessments. Existence hidden from Congress. Elizondo later resigns in protest of excessive secrecy.',
    dateRange: {
      start: new Date(2008, 0, 1),
      end: new Date(2012, 11, 31),
      approximate: true,
      confidence: 85,
    },
    sources: [ufoSources[0], ufoSources[9], ufoSources[7]],
    location: {
      name: 'Pentagon, Washington DC',
    },
    tags: ['ufo', 'aatip', 'pentagon', 'elizondo', 'classified', 'investigation'],
  },
  {
    id: 'uss-roosevelt-encounters',
    title: 'USS Roosevelt UAP Encounters',
    description:
      'Navy pilots from USS Theodore Roosevelt encounter UAP daily during training exercises off East Coast. Objects demonstrate advanced capabilities including no visible propulsion. Multiple videos captured including "Gimbal" and "GoFast." Pilots report near-miss incidents. Events span years.',
    dateRange: {
      start: new Date(2014, 0, 1),
      end: new Date(2015, 2, 31),
      approximate: true,
      confidence: 95,
    },
    sources: [ufoSources[4], ufoSources[10]],
    location: {
      name: 'Atlantic Ocean, East Coast USA',
    },
    tags: ['ufo', 'roosevelt', 'navy', 'gimbal', 'gofast', 'daily-encounters', '2014', '2015'],
  },
  {
    id: 'nyt-aatip-story',
    title: 'New York Times Breaks AATIP Story',
    description:
      'New York Times publishes groundbreaking story revealing existence of secret Pentagon UFO program AATIP. Article by Leslie Kean, Ralph Blumenthal, and Helene Cooper includes interviews with Luis Elizondo and releases of Navy UAP videos. Story marks turning point in mainstream UFO coverage.',
    dateRange: {
      start: new Date(2017, 11, 16),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[7]],
    location: {
      name: 'New York Times',
    },
    tags: ['ufo', 'aatip', 'media', 'disclosure', 'elizondo', 'pentagon', '2017', 'breakthrough'],
  },
  {
    id: 'navy-confirms-videos',
    title: 'Navy Officially Confirms UAP Videos Authentic',
    description:
      'US Navy officially confirms that three widely circulated UAP videos (FLIR1/Nimitz, Gimbal, GoFast) are authentic and show "unidentified aerial phenomena." First official government confirmation of UAP video authenticity. Navy states objects remain unidentified.',
    dateRange: {
      start: new Date(2019, 8, 1),
      approximate: true,
      confidence: 100,
    },
    sources: [ufoSources[4], ufoSources[0]],
    location: {
      name: 'Pentagon, Washington DC',
    },
    tags: ['ufo', 'navy', 'video-confirmation', 'official', 'tic-tac', 'gimbal', '2019'],
  },
  {
    id: 'pentagon-video-release',
    title: 'Pentagon Officially Releases UAP Videos',
    description:
      'Pentagon formally releases three Navy UAP videos "to clear up any misconceptions by the public." Videos show encounters from 2004 (Nimitz) and 2014-2015 (Roosevelt). First official Pentagon release of UFO footage.',
    dateRange: {
      start: new Date(2020, 3, 27),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[0], ufoSources[4]],
    location: {
      name: 'Pentagon, Washington DC',
    },
    tags: ['ufo', 'pentagon', 'video-release', 'official', 'disclosure', '2020'],
  },
  {
    id: 'uap-task-force-established',
    title: 'UAP Task Force Established',
    description:
      'Department of Defense establishes Unidentified Aerial Phenomena Task Force (UAPTF) under Navy leadership to investigate UAP encounters. Task force directed to standardize collection and reporting of UAP incidents.',
    dateRange: {
      start: new Date(2020, 7, 14),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[0]],
    location: {
      name: 'Pentagon, Washington DC',
    },
    tags: ['ufo', 'uaptf', 'task-force', 'navy', 'pentagon', 'official', '2020'],
  },
  {
    id: 'dni-preliminary-assessment',
    title: 'DNI Preliminary Assessment on UAP Released',
    description:
      'Director of National Intelligence releases preliminary assessment on UAP to Congress. Report examines 144 incidents, explains only 1 (balloon). Confirms UAP demonstrate advanced technology. Acknowledges potential national security threat. First official intelligence community report on UFOs in decades.',
    dateRange: {
      start: new Date(2021, 5, 25),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[1], ufoSources[0]],
    location: {
      name: 'Office of the Director of National Intelligence',
    },
    tags: ['ufo', 'dni', 'intelligence-report', 'congress', 'official', '2021', 'assessment'],
  },
  {
    id: 'first-congressional-hearing-2022',
    title: 'First Public Congressional UAP Hearing in 50+ Years',
    description:
      'House Intelligence Subcommittee holds first public congressional hearing on UFOs since 1970. Deputy Director of Naval Intelligence Scott Bray and Under Secretary of Defense Ronald Moultrie testify. New UAP video shown. Officials acknowledge hundreds of reports and ongoing investigation.',
    dateRange: {
      start: new Date(2022, 4, 17),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[3], ufoSources[0]],
    location: {
      name: 'US Capitol, Washington DC',
      coordinates: {
        latitude: 38.8899,
        longitude: -77.0091,
      },
    },
    tags: ['ufo', 'congress', 'hearing', 'testimony', 'official', 'pentagon', '2022'],
  },
  {
    id: 'aaro-established',
    title: 'All-domain Anomaly Resolution Office (AARO) Established',
    description:
      'Pentagon establishes AARO to replace UAPTF with expanded mandate covering all domains (air, sea, space, transmedium). Dr. Sean Kirkpatrick appointed first director. Office tasked with coordinating UAP detection, reporting, and analysis across government.',
    dateRange: {
      start: new Date(2022, 6, 15),
      approximate: true,
      confidence: 100,
    },
    sources: [ufoSources[0]],
    location: {
      name: 'Pentagon, Washington DC',
    },
    tags: ['ufo', 'aaro', 'pentagon', 'official', 'kirkpatrick', '2022'],
  },
  {
    id: 'nasa-uap-study-announced',
    title: 'NASA Announces UAP Study',
    description:
      'NASA announces independent scientific study of UAP, marking first formal NASA engagement with the topic. Study to focus on identifying available data, how to collect more data, and how NASA can contribute to understanding UAP.',
    dateRange: {
      start: new Date(2022, 5, 9),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[6]],
    location: {
      name: 'NASA Headquarters, Washington DC',
    },
    tags: ['ufo', 'nasa', 'scientific-study', 'official', '2022'],
  },
  {
    id: 'david-grusch-whistleblower',
    title: 'David Grusch Whistleblower Allegations',
    description:
      'Former intelligence officer David Grusch goes public alleging US government possesses crashed non-human craft and has recovered "non-human biologics." Claims programs hidden from congressional oversight. Inspector General found claims "credible and urgent." Allegations spark renewed congressional interest.',
    dateRange: {
      start: new Date(2023, 5, 5),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[11], ufoSources[7]],
    location: {
      name: 'United States',
    },
    tags: ['ufo', 'whistleblower', 'grusch', 'crash-retrieval', 'biologics', 'disclosure', '2023'],
  },
  {
    id: 'congressional-hearing-july-2023',
    title: 'Historic Congressional UAP Hearing with Whistleblowers',
    description:
      'House Oversight Committee holds hearing featuring testimony from David Grusch, Commander David Fravor, and Ryan Graves. Grusch testifies under oath about crash retrieval programs and non-human biologics. Fravor recounts Tic Tac encounter. Graves describes pilot safety concerns. Bipartisan outrage at alleged cover-ups.',
    dateRange: {
      start: new Date(2023, 6, 26),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[3], ufoSources[11]],
    location: {
      name: 'US Capitol, Washington DC',
      coordinates: {
        latitude: 38.8899,
        longitude: -77.0091,
      },
    },
    tags: ['ufo', 'congress', 'hearing', 'grusch', 'fravor', 'graves', 'testimony', '2023'],
  },
  {
    id: 'nasa-uap-report-released',
    title: 'NASA UAP Study Report Released',
    description:
      'NASA releases findings of independent UAP study. Report acknowledges UAP are real and require scientific investigation. NASA appoints first Director of UAP Research (Mark McInerney). Commits to using NASA assets and scientific expertise for UAP study. Panel chair notes stigma around topic.',
    dateRange: {
      start: new Date(2023, 8, 14),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[6]],
    location: {
      name: 'NASA Headquarters, Washington DC',
    },
    tags: ['ufo', 'nasa', 'report', 'scientific-study', 'official', '2023'],
  },
  {
    id: 'schumer-uap-disclosure-act',
    title: 'UAP Disclosure Act Introduced',
    description:
      'Senate Majority Leader Chuck Schumer introduces UAP Disclosure Act as amendment to NDAA. Legislation modeled on JFK Records Act would require government to release UAP records. Includes provisions for controlled disclosure of recovered craft and eminent domain for any non-human technology.',
    dateRange: {
      start: new Date(2023, 6, 13),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[3]],
    location: {
      name: 'US Senate, Washington DC',
    },
    tags: ['ufo', 'legislation', 'disclosure-act', 'schumer', 'senate', 'ndaa', '2023'],
  },
  {
    id: 'aaro-historical-report',
    title: 'AARO Historical Record Report Vol. 1',
    description:
      'AARO releases Volume 1 of historical review finding no evidence of US government UAP reverse engineering programs or extraterrestrial technology. Report contradicts whistleblower claims. Critics note limited scope and self-investigation issues. Volume 2 pending.',
    dateRange: {
      start: new Date(2024, 2, 8),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[0]],
    location: {
      name: 'Pentagon, Washington DC',
    },
    tags: ['ufo', 'aaro', 'report', 'historical-review', 'pentagon', '2024'],
    contradictions: [
      {
        id: 'aaro-vs-whistleblowers',
        eventId: 'aaro-historical-report',
        description: 'AARO findings directly contradict sworn whistleblower testimony to Congress',
        sources: [ufoSources[0], ufoSources[11]],
        type: 'fact_conflict' as any,
        severity: 'major',
      },
    ],
  },
  {
    id: 'sol-foundation-conference',
    title: 'Sol Foundation Academic Conference',
    description:
      'Stanford University hosts Sol Foundation conference bringing together academics, former officials, and researchers to discuss UAP from scientific and policy perspectives. Features presentations on UAP physics, government programs, and implications for society.',
    dateRange: {
      start: new Date(2023, 10, 17),
      end: new Date(2023, 10, 18),
      approximate: false,
      confidence: 100,
    },
    sources: [ufoSources[5]],
    location: {
      name: 'Stanford University, California',
      coordinates: {
        latitude: 37.4275,
        longitude: -122.1697,
      },
    },
    tags: ['ufo', 'academic', 'conference', 'stanford', 'sol-foundation', '2023'],
  },
  {
    id: 'immaculate-constellation-leak',
    title: 'Immaculate Constellation Program Allegations',
    description:
      'Journalist Michael Shellenberger publishes allegations of highly classified UAP program called "Immaculate Constellation" supposedly containing photographic and video evidence of UAP. Claims program exists above normal classification systems. Pentagon declines to confirm or deny.',
    dateRange: {
      start: new Date(2024, 10, 6),
      approximate: false,
      confidence: 60,
    },
    sources: [ufoSources[11], ufoSources[7]],
    location: {
      name: 'United States',
    },
    tags: ['ufo', 'classified', 'immaculate-constellation', 'leak', 'program', '2024'],
  },
  {
    id: 'uap-disclosure-act-2024',
    title: 'UAP Disclosure Act 2024 Progress',
    description:
      'Updated UAP Disclosure Act provisions included in FY2025 NDAA negotiations. Legislation faces opposition from intelligence community and certain House members. Debate continues over scope of disclosure requirements and handling of classified programs.',
    dateRange: {
      start: new Date(2024, 5, 1),
      approximate: true,
      confidence: 85,
    },
    sources: [ufoSources[3]],
    location: {
      name: 'US Congress, Washington DC',
    },
    tags: ['ufo', 'legislation', 'disclosure-act', 'congress', 'ndaa', '2024'],
  },
];

// =============================================================================
// COMBINED EVENTS
// =============================================================================

export const ufoEvents: HistoricalEvent[] = [
  ...earlyEraEvents,
  ...blueBookEraEvents,
  ...gapEraEvents,
  ...modernEraEvents,
];

// =============================================================================
// TIMELINE EXPORT
// =============================================================================

export const ufoDisclosureTimeline: Timeline = {
  id: 'ufo-disclosure-timeline',
  name: 'MAJESTIC - UFO Disclosure Timeline',
  description:
    'Comprehensive timeline of UFO/UAP phenomena, government investigation programs, congressional hearings, and disclosure efforts from WWII to present',
  events: ufoEvents,
  sources: ufoSources,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default ufoDisclosureTimeline;
