import { BenefitItem, ChallengeTrack, ClubItem, Coordinator, FAQItem, MetricItem, RuleItem, TimelineItem } from '../types/event';

export const EVENT_CONFIG = {
  name: "AI-INNOVATHON 2026",
  type: "Inter-College AI Hackathon",
  subtitle: "An Inter-College 7-Hour Hackathon",
  tagline: "THINK. BUILD. INNOVATE.",
  heroPunchline: "7 HOURS. ONE CHALLENGE.",
  department: "Department of Artificial Intelligence & Machine Learning",
  institution: "Jerusalem College of Engineering",
  venue: {
    name: "Jerusalem College of Engineering",
    mapUrl: "https://maps.app.goo.gl/Jbj6Cb1UEZbQmmFp9",
  },
  theme: "STAR WARS (Red vs Blue Lightsaber Duel Edition)",
  
  // Key Dates & Times
  eventDateDisplay: "18 September 2026",
  eventDuration: "7 Hours",
  reportingTime: "8:00 AM",
  concludeTime: "4:00 PM",
  startTime: "9:00 AM",
  regClosingDateDisplay: "16 September 2026",
  
  // Hardware Track specific dates
  hardwarePsReleaseDateDisplay: "16 September 2026",
  hardwarePsReleaseTimeDisplay: "10:00 AM IST",
  
  // ISO Timestamps for IST (UTC+05:30)
  // Registration closes: 16 Sept 2026 at 23:59:59 IST
  regClosingIso: "2026-09-16T23:59:59+05:30",
  // Hardware PS released: 16 Sept 2026 at 10:00:00 IST (2 days prior)
  hardwarePsReleaseIso: "2026-09-16T10:00:00+05:30",
  // Event starts: 18 Sept 2026 at 09:00:00 IST
  eventStartIso: "2026-09-18T09:00:00+05:30",
  
  // Financials
  registrationFee: "₹400",
  registrationFeeNumber: 400,
  prizePool: "₹7,000",
  prizePoolNumber: 7000,
  paymentMethod: "UPI through the Google Form",

  // Problem statement highlights
  problemStatementCallout: "DUAL TRACK CHALLENGE FLOW",
  problemStatementSubtext: "Hardware Track revealed 2 days early for component prep; Software Track unlocked on the spot for spontaneous AI innovation.",

  // External Action URLs
  urls: {
    googleForm: "https://forms.gle/jrrf5ePjjaRCU7uW9",
    whatsappGroup: "https://chat.whatsapp.com/DQwMuhNTDNKDlfbTgI06cH",
    googleMaps: "https://maps.app.goo.gl/Jbj6Cb1UEZbQmmFp9",
  },

  // WhatsApp Notice
  whatsappNotice: "All registered participants are required to join the official AI-Innovathon WhatsApp group for problem statement broadcasts, instructions, and event updates.",

  // Metrics / Highlights
  metrics: [
    {
      value: "7 HOURS",
      label: "Mission Duration",
      detail: "Intense hackathon sprint of rapid AI development and prototype engineering."
    },
    {
      value: "₹7,000",
      label: "Prize Pool",
      detail: "Cash awards and prestigious certificates recognizing elite AI engineering."
    },
    {
      value: "₹400",
      label: "Registration Fee",
      detail: "Per team entry paid via UPI on Google Form submission."
    },
    {
      value: "2 DAYS EARLY",
      label: "Hardware PS Release",
      detail: "Problem statement broadcast on 16/09 for component sourcing and circuit prep."
    },
    {
      value: "ON THE SPOT",
      label: "Software PS Reveal",
      detail: "Unlocked live on 18/09 at 9:00 AM — pure agile AI coding from scratch."
    }
  ] as MetricItem[],

  // Dual Challenge Tracks with Flow Separation
  challengeTracks: {
    hardware: {
      id: "hardware",
      title: "Hardware & AIoT Track",
      codename: "RED SQUADRON // PHYSICAL PROTOTYPING",
      badge: "REVEALED 2 DAYS EARLY (16/09)",
      slogan: "Bridge physical sensors, microcontrollers, and intelligent edge models.",
      side: "red",
      psReleaseDate: "16 September 2026",
      psReleaseTime: "10:00 AM IST (T-minus 48 Hours)",
      psReleaseDescription: "Transmitted 2 days in advance to allow hardware sourcing, circuit schematics, and sensor staging before on-campus assembly.",
      whyTimingMatters: "Physical prototyping demands component procurement, pinout design, and driver testing. 48 hours gives hardware teams the runway to bring tested components ready for on-site physical casing and live demo integration.",
      prepWindow: "48 Hours prior to Hackathon Day (16/09 – 18/09)",
      eventDayFocus: "Physical circuit assembly, embedded edge AI model deployment, sensor calibration, and live physical demonstration.",
      deliverables: [
        "Physical Working Prototype (Live Demo on 18/09)",
        "Circuit Schematics & Wiring Diagrams",
        "GitHub Repository (Firmware + Edge AI Code)",
        "PPT / Slide Presentation Deck"
      ],
      allowedTools: [
        "Arduino, ESP32, Raspberry Pi, Jetson Nano, STM32",
        "Sensors (Camera, Ultrasonic, IMU, Bio-sensors, Relays)",
        "Edge AI (TinyML, TensorFlow Lite, Edge Impulse, ONNX)",
        "IoT Brokers (MQTT, WebSockets, Firebase, AWS IoT)"
      ],
      evaluationCriteria: [
        "Live Working Demonstration & Stability (35%)",
        "Edge AI / Intelligent Processing Depth (25%)",
        "Circuit Architecture & Engineering Quality (20%)",
        "Presentation & Defense of Design (20%)"
      ],
      keySteps: [
        {
          phase: "STAGE 01 // CHALLENGE BROADCAST",
          timeline: "16 Sept (10:00 AM IST)",
          description: "Hardware problem statement transmitted via official portal and WhatsApp."
        },
        {
          phase: "STAGE 02 // COMPONENT STAGING",
          timeline: "16 - 17 Sept (48h Window)",
          description: "Teams source boards, test sensor breadboards, and draft circuit schematics."
        },
        {
          phase: "STAGE 03 // ON-SITE CHECK-IN",
          timeline: "18 Sept (8:00 AM)",
          description: "Report to Jerusalem College of Engineering at 8:00 AM and set up hardware testing bench."
        },
        {
          phase: "STAGE 04 // EMBEDDED INTEGRATION",
          timeline: "18 Sept (Day Sprint)",
          description: "Assemble physical chassis, calibrate sensor feeds, and deploy edge AI models."
        },
        {
          phase: "STAGE 05 // JURY LIVE DEMO",
          timeline: "18 Sept (4:00 PM)",
          description: "Present functioning hardware prototype live before the judging panel; event concludes at 4:00 PM."
        }
      ]
    } as ChallengeTrack,

    software: {
      id: "software",
      title: "Software & AI Systems Track",
      codename: "BLUE SQUADRON // NEURAL ARCHITECTS",
      badge: "REVEALED ON THE SPOT (18/09)",
      slogan: "Architect cognitive agents, neural pipelines, and scalable web solutions.",
      side: "blue",
      psReleaseDate: "18 September 2026",
      psReleaseTime: "9:00 AM IST (Hackathon Kickoff)",
      psReleaseDescription: "Unlocked live on the auditorium screen at 9:00 AM. Zero pre-existing code or pre-built repositories allowed.",
      whyTimingMatters: "Software testing evaluates spontaneous innovation, prompt architecture, API integration, and agile development. On-the-spot unlock ensures complete fair play across all competing institutions.",
      prepWindow: "Zero prior preparation — sprint begins live at 9:00 AM",
      eventDayFocus: "End-to-end AI system design, model fine-tuning/RAG pipelines, full-stack application development, and user interface polish.",
      deliverables: [
        "GitHub Repository with Hackathon Commit History",
        "PPT / Slide Presentation Deck",
        "Optional Live Web / Mobile Prototype Demo"
      ],
      allowedTools: [
        "Modern Web/App Frameworks (React, Next.js, Node, FastAPI)",
        "AI Foundation Models & APIs (Gemini, OpenAI, Hugging Face)",
        "Vector Databases & Agent Frameworks (LangChain, Pinecone)",
        "Public Open-Source Libraries & UI Kits"
      ],
      evaluationCriteria: [
        "Innovation & Practical Problem Impact (35%)",
        "AI / Model Architecture & Depth (25%)",
        "Code Quality, Execution & Completeness (20%)",
        "Pitch Deck & Presentation Clarity (20%)"
      ],
      keySteps: [
        {
          phase: "STAGE 01 // ON-SITE REPORTING",
          timeline: "18 Sept (8:00 AM)",
          description: "Check in at the registration desk by 8:00 AM, verify team credentials, connect to high-speed Wi-Fi."
        },
        {
          phase: "STAGE 02 // SURPRISE UNLOCK",
          timeline: "18 Sept (Morning)",
          description: "Classified software problem statement is revealed on the spot. Clock starts ticking."
        },
        {
          phase: "STAGE 03 // AGILE BUILD SPRINT",
          timeline: "18 Sept (Build Sprint)",
          description: "Architect backend APIs, prompt/fine-tune AI models, build frontend UI."
        },
        {
          phase: "STAGE 04 // MENTOR ITERATION",
          timeline: "18 Sept (Mentor Check-ins)",
          description: "Refine architecture with faculty mentors, test edge cases, push clean git commits."
        },
        {
          phase: "STAGE 05 // FINAL COMMIT & CONCLUSION",
          timeline: "18 Sept (4:00 PM)",
          description: "Submit GitHub repo URL and final slide deck; event concludes at 4:00 PM."
        }
      ]
    } as ChallengeTrack
  },

  // Eligibility Rules
  eligibility: [
    "Open to all Undergraduate (UG) and Postgraduate (PG) students across all years.",
    "Team size: 2 to 4 members per team.",
    "Cross-department teams within colleges are fully permitted.",
    "Cross-college teams and inter-college collaboration are fully permitted.",
    "A participant can be part of only one team.",
    "There is no restriction on the number of teams representing an institution."
  ],

  // Hackathon Guidelines & Directives
  rules: [
    {
      id: "ai-tools",
      category: "Development Tools",
      group: "technical",
      title: "AI Tools & Foundation Models",
      status: "allowed",
      tag: "PERMITTED ACCELERATOR",
      description: "Participants are encouraged to freely utilize AI assistants, GitHub Copilot, Gemini, ChatGPT, and foundation model APIs during development."
    },
    {
      id: "pre-existing-code",
      category: "Source Integrity",
      group: "technical",
      title: "Pre-Existing Code / Repositories",
      status: "not_allowed",
      tag: "STRICTLY FORBIDDEN",
      description: "Strictly zero pre-existing software code or pre-built repositories may be used. All project code must be committed live during the sprint."
    },
    {
      id: "cloud-apis-libraries",
      category: "Resources & APIs",
      group: "technical",
      title: "Cloud APIs & Open-Source Libraries",
      status: "allowed",
      tag: "PERMITTED RESOURCES",
      description: "External cloud APIs, open-source libraries, UI component packages, and public datasets (Kaggle, Hugging Face) are fully permitted."
    },
    {
      id: "team-registration",
      category: "Registration Protocol",
      group: "venue",
      title: "Single Team Representative Registration",
      status: "mandatory",
      tag: "TEAM DIRECTIVE",
      description: "Only 1 person (the team leader) should submit the registration form on behalf of the squad. All 2 to 4 team members must be listed in the form."
    },
    {
      id: "mandatory-id-card",
      category: "Campus Security",
      group: "venue",
      title: "Mandatory College Student ID Card",
      status: "mandatory",
      tag: "SECURITY PROTOCOL",
      description: "All participants must carry their physical college-issued student ID cards for verification at the registration desk. No ID, strictly no entry."
    },
    {
      id: "hardware-laptops",
      category: "Workstation Gear",
      group: "venue",
      title: "Bring Required Laptops & Gear",
      status: "required",
      tag: "BRING YOUR OWN",
      description: "Participants are expected to bring their own laptops, chargers, and any track-specific hardware components, development boards, or sensors."
    },
    {
      id: "lunch-refreshments",
      category: "Hospitality",
      group: "venue",
      title: "Complimentary Lunch & Refreshments",
      status: "provided",
      tag: "MEALS PROVIDED",
      description: "Complimentary lunch, tea/coffee, and energizing refreshments will be provided to all registered participants throughout the hackathon."
    },
    {
      id: "campus-attire",
      category: "Code of Conduct",
      group: "venue",
      title: "Campus Dress Code & Decorum",
      status: "mandatory",
      tag: "CAMPUS DIRECTIVE",
      description: "Participants must adhere to professional or college-appropriate attire and maintain academic decorum and discipline on campus premises."
    }
  ] as RuleItem[],

  // Submission Requirements
  submissions: {
    required: [
      {
        title: "GitHub Repository",
        description: "Complete source code committed with commit history from the hackathon session."
      },
      {
        title: "PPT / Presentation Deck",
        description: "Slide deck summarizing problem analysis, technical architecture, and real-world impact."
      }
    ],
    trackDeliverables: {
      hardware: "Physical working prototype demonstration for jury + circuit diagrams.",
      software: "Working software demo (web/app/CLI) or prototype demonstration."
    },
    optional: [
      {
        title: "Live Working Demo",
        description: "Live prototype demonstration for judges during evaluation rounds."
      }
    ],
    notice: "Final submission details and submission portal links will be announced during the event."
  },

  // Participant Logistics & Benefits
  benefits: [
    {
      id: "cert",
      title: "Verified Participation Certificate",
      description: "Official certificate awarded to all verified attendees by Jerusalem College of Engineering.",
      provided: true
    },
    {
      id: "prizes",
      title: "₹7,000 Cash Prize Pool",
      description: "Grand cash awards, winning trophies, and merit certificates for top innovators.",
      provided: true
    },
    {
      id: "snacks",
      title: "Lunch & Refreshments",
      description: "Lunch and energizing snacks, tea/coffee, and beverages provided.",
      provided: true
    },
    {
      id: "wifi",
      title: "High-Speed Campus Wi-Fi",
      description: "Dedicated campus internet connectivity provided for cloud APIs and research.",
      provided: true
    },
    {
      id: "workspace",
      title: "Dedicated Team Workstation",
      description: "Collaborative laboratory setup with power outlets for every team.",
      provided: true
    },
    {
      id: "hardware-lab",
      title: "Hardware Testing Benches & Power Strips",
      description: "Dedicated hardware workbenches and extension sockets for Hardware Track participants.",
      provided: true
    },
    {
      id: "mentors",
      title: "Expert Faculty & AI Mentorship",
      description: "One-on-one technical mentorship and guidance from AIML domain experts throughout the build.",
      provided: true
    },
    {
      id: "networking",
      title: "Inter-College AI Networking",
      description: "Connect with bright AI engineers, student developers, and academic researchers.",
      provided: true
    },
    {
      id: "lunch",
      title: "Lunch (Self-Arranged)",
      description: "Lunch is not provided. Participants may purchase meals at college canteens or carry packed lunch.",
      provided: false
    },
    {
      id: "stay",
      title: "Accommodation (Single-Day Event)",
      description: "Accommodation is not available. Please plan local travel for the 7-hour day sprint.",
      provided: false
    },
    {
      id: "swags",
      title: "Event Merchandise / Swags",
      description: "Swags are not distributed for this edition.",
      provided: false
    }
  ] as BenefitItem[],

  // What to Bring Checklist
  whatToBring: [
    "College Student ID Cards (Mandatory for campus verification)",
    "Laptops, Chargers & Power Adapters",
    "Hardware Kits, Microcontrollers & Sensors (For Hardware Track teams)",
    "Personal Water Bottles & Packed Lunch (Optional)",
    "Mobile Phone with WhatsApp for live announcements"
  ],

  // Timeline
  timeline: [
    {
      id: "hw-ps-reveal",
      time: "16 Sept • 10:00 AM",
      title: "⚡ Hardware Track Problem Statement Broadcast",
      description: "The Hardware PS is released 2 days prior to allow component procurement, circuit topology modeling, and sensor breadboarding.",
      status: "confirmed"
    },
    {
      id: "reporting",
      time: "18 Sept • 8:30 AM",
      title: "Reporting & Verification Desk",
      description: "Teams arrive at Jerusalem College of Engineering, verify registrations, and collect mission badges.",
      status: "confirmed"
    },
    {
      id: "inauguration",
      time: "18 Sept • 8:30 AM",
      title: "Inauguration Ceremony",
      description: "Welcome address by Department of AI & ML and official hackathon briefing.",
      status: "confirmed"
    },
    {
      id: "start-sw-reveal",
      time: "18 Sept • 9:00 AM",
      title: "💻 Software Problem Statement Reveal & Kickoff",
      description: "Software PS unlocked live on the spot. The 7-hour build sprint timer commences for both tracks.",
      status: "confirmed"
    },
    {
      id: "building-phase",
      time: "9:00 AM – 4:00 PM",
      title: "7-Hour Development Sprint & Mentor Rounds",
      description: "Teams architect, code, and test their AI solutions with active faculty and mentor check-ins.",
      status: "confirmed"
    },
    {
      id: "snacks-break",
      time: "1:00 PM – 1:30 PM",
      title: "Snacks & Refreshment Distribution",
      description: "Energizing refreshments provided to power participants through the afternoon build.",
      status: "confirmed"
    },
    {
      id: "submission-gate",
      time: "18 Sept • 4:00 PM",
      title: "Code & Hardware Submission Gate Closes",
      description: "Final GitHub repositories committed and PPT presentations submitted.",
      status: "confirmed"
    },
    {
      id: "evaluation",
      time: "5:15 PM – 6:15 PM",
      title: "Jury Review & Live Prototype Demos",
      description: "Evaluation panels review code, slide decks, and evaluate live hardware prototypes.",
      status: "confirmed"
    },
    {
      id: "valedictory",
      time: "18 Sept • 6:30 PM",
      title: "Valedictory & ₹7,000 Prize Distribution",
      description: "Announcement of top winners, awarding of cash prizes and certificates of excellence.",
      status: "confirmed"
    }
  ] as TimelineItem[],

  // 8 Steps Roadmap
  howItWorksSteps: [
    {
      step: "01",
      title: "REGISTER",
      description: "Register your 2–4 member squad via the official Google Form with ₹400 UPI payment."
    },
    {
      step: "02",
      title: "CHOOSE TRACK",
      description: "Compete in the Hardware Track (PS 2 days early) or Software Track (PS on the spot)."
    },
    {
      step: "03",
      title: "REPORT",
      description: "Arrive at Jerusalem College of Engineering campus by 8:00 AM on 18 September 2026."
    },
    {
      step: "04",
      title: "COMMENCE",
      description: "Attend morning briefing; Software PS unlocked live for building sprint."
    },
    {
      step: "05",
      title: "BUILD",
      description: "Build cutting-edge prototypes with mentor support, lab workstations, and campus Wi-Fi."
    },
    {
      step: "06",
      title: "CONCLUDE",
      description: "Commit your GitHub repository, submit presentations, and event concludes at 4:00 PM."
    },
    {
      step: "07",
      title: "DEMONSTRATE",
      description: "Showcase live hardware prototypes or software demos before the judging panel."
    },
    {
      step: "08",
      title: "WIN",
      description: "Compete for top honors, merit certificates, and a share of the ₹7,000 prize pool."
    }
  ],

  // Organizing Clubs
  clubs: [
    {
      id: "association-of-aiml",
      name: "Association of AIML",
      tagline: "Student Technical Chapter",
      logo: "/logos/logo-aaiml.png",
    },
    {
      id: "intellizone",
      name: "Intellizone",
      tagline: "Student Technical Chapter",
      logo: "/logos/logo-intellizone.png",
    },
    {
      id: "code-mavericks",
      name: "Code Mavericks",
      tagline: "Student Developer Club",
      logo: "/logos/logo-codemavericks.png",
    },
    {
      id: "iei-of-aiml",
      name: "IEI of AIML",
      tagline: "Institution of Engineers (India) Chapter",
      logo: "/logos/logo-iei.webp",
    }
  ] as ClubItem[],

  // Coordinators
  coordinators: {
    students: [
      {
        name: "Akshaya R",
        phone: "+91 95245 79186",
        role: "President-AAIML"
      },
      {
        name: "Balamurugan",
        phone: "+91 73586 39093",
        role: "President-IEI"
      }
    ] as Coordinator[],
    faculty: [
      {
        name: "Ms. Vinitha",
        phone: "+91 98942 26675",
        role: "Faculty Coordinator"
      },
      {
        name: "Ms. Janu",
        phone: "+91 75980 81668",
        role: "Faculty Coordinator"
      }
    ] as Coordinator[]
  },

  // FAQs
  faqs: [
    {
      id: "faq-1",
      question: "When is AI-Innovathon?",
      answer: "AI-Innovathon takes place on 18 September 2026 (18/09). Report time is at 8:00 AM and the event will conclude at 4:00 PM."
    },
    {
      id: "faq-ps-split",
      question: "How is the challenge split between Hardware and Software?",
      answer: "The hackathon features two separated challenge tracks: Hardware Track (problem statement revealed 2 days early on 16 September 2026 for component sourcing and circuit prep) and Software Track (problem statement revealed on the spot on 18 September 2026 for pure spontaneous AI coding)."
    },
    {
      id: "faq-hw-reason",
      question: "Why is the Hardware problem statement released 2 days before the event?",
      answer: "Hardware prototyping requires physical component procurement (microcontrollers, specific sensors, actuators, breakout boards) and circuit schematic drafting. Giving 48 hours ensures hardware squads can arrive at the venue on 18/09 with components ready for physical assembly, edge AI model deployment, and live demonstration."
    },
    {
      id: "faq-sw-spot",
      question: "When is the Software problem statement revealed?",
      answer: "The Software problem statement is unlocked on the spot on 18 September 2026 in the auditorium. Strictly zero pre-existing code is allowed."
    },
    {
      id: "faq-2",
      question: "Where is the event?",
      answer: "The hackathon will be hosted at Jerusalem College of Engineering, Chennai. Use the 'Get Directions' button on this site to open Google Maps navigation."
    },
    {
      id: "faq-3",
      question: "How long is the hackathon?",
      answer: "The hackathon takes place on 18 September 2026. Reporting is at 8:00 AM and the event concludes at 4:00 PM."
    },
    {
      id: "faq-7",
      question: "What is the registration fee?",
      answer: "The registration fee is ₹400 per team, payable via UPI through the official Google Form."
    },
    {
      id: "faq-8",
      question: "When does registration close?",
      answer: "Registration closes strictly on 16 September 2026 (16/09)."
    },
    {
      id: "faq-9",
      question: "What is the prize pool?",
      answer: "The total prize pool for AI-INNOVATHON 2026 is ₹7,000, along with trophies and merit certificates."
    },
    {
      id: "faq-10",
      question: "Are AI tools allowed?",
      answer: "Yes! Participants across both tracks may freely utilize AI tools, GitHub Copilot, ChatGPT, Gemini, and foundation models during development."
    },
    {
      id: "faq-14",
      question: "Can pre-existing code or repositories be used?",
      answer: "No. Pre-existing code or pre-built software project repositories are strictly forbidden. All code must be authored and committed during the hackathon. Hardware teams may bring pre-tested component breakout modules, but system integration must be executed on-site."
    },
    {
      id: "faq-15",
      question: "What must be submitted?",
      answer: "A GitHub repository containing your project code and a PPT / presentation slide deck are required. Hardware teams also present a live physical working prototype to the jury."
    },
    {
      id: "faq-17",
      question: "Is lunch provided?",
      answer: "Yes, lunch and energizing snacks, tea/coffee, and beverages will be provided during the event."
    },
    {
      id: "faq-18",
      question: "Are snacks provided?",
      answer: "Yes! Refreshments, tea/coffee, and snacks will be provided during the event."
    },
    {
      id: "faq-19",
      question: "Is accommodation available?",
      answer: "No, accommodation is not available. Please plan local transit for the single-day event."
    },
    {
      id: "faq-20",
      question: "Are swags provided?",
      answer: "No, swags are not provided for this edition."
    },
    {
      id: "faq-21",
      question: "Do registered participants need to join WhatsApp?",
      answer: "Yes! All registered participants are required to join the official WhatsApp group for problem statement broadcasts, instructions, and event day announcements."
    },
    {
      id: "faq-hw-bring",
      question: "What should Hardware teams bring to the venue?",
      answer: "Hardware teams should bring their development boards (Arduino, ESP32, Raspberry Pi, etc.), sensors, connecting wires, breadboards, batteries/power banks, and programming cables. Power extension strips will be available in the lab."
    }
  ] as FAQItem[]
} as const;
