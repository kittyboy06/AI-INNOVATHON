import { BenefitItem, ClubItem, Coordinator, FAQItem, MetricItem, RuleItem, TimelineItem } from '../types/event';

export const EVENT_CONFIG = {
  name: "AI-INNOVATHON 2026",
  type: "Inter-College AI Hackathon",
  subtitle: "An Inter-College 8-Hour AI Hackathon",
  tagline: "THINK. BUILD. INNOVATE.",
  heroPunchline: "8 HOURS. ONE CHALLENGE.",
  department: "Department of Artificial Intelligence & Machine Learning",
  institution: "Jerusalem College of Engineering",
  venue: {
    name: "Jerusalem College of Engineering",
    mapUrl: "https://maps.app.goo.gl/Jbj6Cb1UEZbQmmFp9",
  },
  theme: "STAR WARS (Galactic Sci-Fi Aesthetic)",
  
  // Key Dates & Times
  eventDateDisplay: "18 September 2026",
  eventDuration: "8 Hours",
  reportingTime: "8:30 AM",
  startTime: "9:00 AM",
  regClosingDateDisplay: "8 September 2026",
  
  // ISO Timestamps for IST (UTC+05:30)
  // Registration closes: 8 Sept 2026 at 23:59:59 IST
  regClosingIso: "2026-09-08T23:59:59+05:30",
  // Event starts: 18 Sept 2026 at 09:00:00 IST
  eventStartIso: "2026-09-18T09:00:00+05:30",
  
  // Financials
  registrationFee: "₹400",
  registrationFeeNumber: 400,
  prizePool: "₹8,000",
  prizePoolNumber: 8000,
  paymentMethod: "UPI through the Google Form",

  // Problem statement highlight
  problemStatementCallout: "PROBLEM STATEMENT REVEALED ON THE SPOT",
  problemStatementSubtext: "No spoilers. No predefined path. Arrive ready to think fast and build smarter.",

  // External Action URLs
  urls: {
    // Replace this placeholder with the live Google Form link when provided by organizers
    googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSe-PLACEHOLDER/viewform",
    whatsappGroup: "https://chat.whatsapp.com/DQwMuhNTDNKDlfbTgI06cH",
    googleMaps: "https://maps.app.goo.gl/Jbj6Cb1UEZbQmmFp9",
  },

  // WhatsApp Notice
  whatsappNotice: "All registered participants are required to join the official AI-Innovathon WhatsApp group for important announcements, instructions, and event updates.",

  // Metrics / Highlights
  metrics: [
    {
      value: "8 HOURS",
      label: "Mission Duration",
      detail: "Rapid problem-solving, architectural modeling, and agile AI development."
    },
    {
      value: "₹8,000",
      label: "Total Prize Pool",
      detail: "Rewarding breakthrough AI innovation and exceptional execution."
    },
    {
      value: "₹400",
      label: "Registration Fee",
      detail: "Per team entry paid via UPI on Google Form submission."
    },
    {
      value: "ON THE SPOT",
      label: "Challenge Reveal",
      detail: "Problem statement unlocked live at kickoff — zero predefined code allowed."
    },
    {
      value: "INTER-COLLEGE",
      label: "Open Collaboration",
      detail: "Cross-department and cross-college teams welcome (2–4 members)."
    }
  ] as MetricItem[],

  // Eligibility Rules
  eligibility: [
    "Open to all Undergraduate (UG) and Postgraduate (PG) students.",
    "Team size: 2 to 4 members per team.",
    "Cross-department teams are fully permitted.",
    "Cross-college teams and inter-college collaboration are fully permitted.",
    "A participant can be part of only one team.",
    "There is no stated maximum number of teams."
  ],

  // Hackathon Rules
  rules: [
    {
      id: "ai-tools",
      category: "tools",
      title: "AI Tools & LLMs",
      status: "allowed",
      description: "Participants may freely use AI tools, copilot assistants, and foundation models during development."
    },
    {
      id: "pre-existing-code",
      category: "code",
      title: "Pre-existing Code / Repositories",
      status: "not_allowed",
      description: "No pre-existing code, pre-built solutions, or pre-configured repositories may be used. Everything must be built during the 8-hour window."
    },
    {
      id: "external-apis",
      category: "resources",
      title: "External APIs",
      status: "allowed",
      description: "External cloud APIs, inference endpoints, and third-party services are allowed."
    },
    {
      id: "open-source",
      category: "resources",
      title: "Open-Source Libraries / Tools",
      status: "allowed",
      description: "Public open-source frameworks, packages, UI kits, and libraries are allowed."
    },
    {
      id: "online-datasets",
      category: "resources",
      title: "Online Datasets",
      status: "allowed",
      description: "Publicly accessible datasets from Kaggle, Hugging Face, or research portals are allowed."
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
        title: "PPT / Presentation",
        description: "Slide deck summarizing problem analysis, technical architecture, and impact."
      }
    ],
    optional: [
      {
        title: "Working Demo",
        description: "Live prototype demonstration for judges during optional presentation slots."
      }
    ],
    notice: "Final submission details and exact deadlines will be announced during the event."
  },

  // Participant Logistics & Benefits
  benefits: [
    {
      id: "cert",
      title: "Participation Certificate",
      description: "Official recognition awarded to all verified attendees.",
      provided: true
    },
    {
      id: "snacks",
      title: "Snacks & Refreshments",
      description: "Refreshments provided throughout the intense 8-hour sprint.",
      provided: true
    },
    {
      id: "wifi",
      title: "High-Speed Wi-Fi / Internet",
      description: "Campus connectivity provided for development and cloud APIs.",
      provided: true
    },
    {
      id: "mentors",
      title: "Mentor Support",
      description: "Domain experts and faculty guidance available during the build.",
      provided: true
    },
    {
      id: "workspace",
      title: "Dedicated Workspace",
      description: "Collaborative lab workspace for team ideation and development.",
      provided: true
    },
    {
      id: "prizes",
      title: "Prizes & Recognition",
      description: "Opportunity to compete for the ₹8,000 prize pool.",
      provided: true
    },
    {
      id: "lunch",
      title: "Lunch",
      description: "Lunch is not provided. Participants may utilize college campus canteens or bring their own meals.",
      provided: false
    },
    {
      id: "stay",
      title: "Accommodation",
      description: "Accommodation is not available. Please plan local day transit accordingly.",
      provided: false
    },
    {
      id: "swags",
      title: "Swags & Merch",
      description: "Swags are not provided for this edition.",
      provided: false
    }
  ] as BenefitItem[],

  // Timeline
  timeline: [
    {
      id: "reporting",
      time: "8:30 AM",
      title: "Reporting & Registration Desk",
      description: "Participants check in at Jerusalem College of Engineering and verify team badges.",
      status: "confirmed"
    },
    {
      id: "inauguration",
      time: "8:30 AM",
      title: "Inauguration Ceremony",
      description: "Official welcome address by the Department of AI & ML.",
      status: "confirmed"
    },
    {
      id: "start",
      time: "9:00 AM",
      title: "Official Event Start & Mission Briefing",
      description: "The 8-hour hackathon timer commences.",
      status: "confirmed"
    },
    {
      id: "challenge-reveal",
      time: "TBA",
      title: "Problem Statement Reveal",
      description: "The classified hackathon challenge is revealed on the spot.",
      status: "tba"
    },
    {
      id: "building-phase",
      time: "8 Hours",
      title: "Development Sprint & Mentor Check-ins",
      description: "Teams build, innovate, and test their AI solutions.",
      status: "confirmed"
    },
    {
      id: "snacks-break",
      time: "TBA",
      title: "Refreshment / Snacks Distribution",
      description: "Snacks and beverages provided to power through the sprint.",
      status: "tba"
    },
    {
      id: "submission-gate",
      time: "TBA",
      title: "Code & Slide Submission Gate",
      description: "Final GitHub repository and PPT upload link made active.",
      status: "tba"
    },
    {
      id: "evaluation",
      time: "TBA",
      title: "Evaluation & Optional Demos",
      description: "Jury review of submitted solutions and presentations.",
      status: "tba"
    },
    {
      id: "valedictory",
      time: "TBA",
      title: "Results & Prize Distribution",
      description: "Announcement of winners and awarding of the ₹8,000 prize pool.",
      status: "tba"
    }
  ] as TimelineItem[],

  // 8 Steps Roadmap
  howItWorksSteps: [
    {
      step: "01",
      title: "REGISTER",
      description: "Complete team registration and UPI payment through the Google Form."
    },
    {
      step: "02",
      title: "REPORT",
      description: "Reach the Jerusalem College of Engineering campus by 8:30 AM."
    },
    {
      step: "03",
      title: "INAUGURATION",
      description: "Join the opening ceremony starting at 8:30 AM."
    },
    {
      step: "04",
      title: "CHALLENGE REVEAL",
      description: "Receive the surprise problem statement revealed on the spot."
    },
    {
      step: "05",
      title: "BUILD",
      description: "Architect and develop your AI solution during the 8-hour challenge."
    },
    {
      step: "06",
      title: "SUBMIT",
      description: "Submit your GitHub repository and PPT presentation before the bell."
    },
    {
      step: "07",
      title: "PRESENT",
      description: "Showcase your prototype if you opt for the optional live demo."
    },
    {
      step: "08",
      title: "RESULTS",
      description: "Compete for top honors and a share of the ₹8,000 prize pool."
    }
  ],

  // Organizing Clubs
  clubs: [
    {
      id: "association-of-aiml",
      name: "Association of AIML",
      tagline: "Student technical chapter promoting cutting-edge AI discourse"
    },
    {
      id: "intellizone",
      name: "Intellizone",
      tagline: "Innovation hub driving intelligent systems and algorithms"
    },
    {
      id: "code-mavericks",
      name: "Code Mavericks",
      tagline: "Elite competitive programming and software engineering circle"
    },
    {
      id: "iei-of-aiml",
      name: "IEI of AIML",
      tagline: "Institution of Engineers (India) collegiate student division"
    }
  ] as ClubItem[],

  // Coordinators
  coordinators: {
    students: [
      {
        name: "Jeffry Sam Raj C",
        phone: "+91 97913 70951",
        role: "Student Coordinator"
      },
      {
        name: "Janani J",
        phone: "+91 89255 29716",
        role: "Student Coordinator"
      }
    ] as Coordinator[],
    faculty: [
      {
        name: "Ms. Janu",
        phone: "+91 75980 81668",
        role: "Faculty Coordinator"
      },
      {
        name: "Ms. Vinitha",
        phone: "+91 98942 26675",
        role: "Faculty Coordinator"
      }
    ] as Coordinator[]
  },

  // FAQs (Exact 19 questions from prompt)
  faqs: [
    {
      id: "faq-1",
      question: "When is AI-Innovathon?",
      answer: "AI-Innovathon takes place on 18 September 2026. Reporting is at 8:30 AM and the official event starts at 9:00 AM."
    },
    {
      id: "faq-2",
      question: "Where is the event?",
      answer: "The hackathon will be hosted at Jerusalem College of Engineering. Use the 'Get Directions' button on this site to open Google Maps."
    },
    {
      id: "faq-3",
      question: "How long is the hackathon?",
      answer: "The hackathon is an intense 8-hour continuous building sprint."
    },
    {
      id: "faq-4",
      question: "What time should participants report?",
      answer: "Participants are required to report at the venue by 8:30 AM for verification and the inauguration ceremony."
    },
    {
      id: "faq-5",
      question: "What time does the event start?",
      answer: "The official event commences at 9:00 AM."
    },
    {
      id: "faq-6",
      question: "When is the problem statement revealed?",
      answer: "The problem statement is revealed on the spot at the event! There are no prior spoilers or predefined tasks."
    },
    {
      id: "faq-7",
      question: "What is the registration fee?",
      answer: "The registration fee is ₹400 per team, payable via UPI through the official Google Form."
    },
    {
      id: "faq-8",
      question: "When does registration close?",
      answer: "Registration closes strictly on 8 September 2026."
    },
    {
      id: "faq-9",
      question: "What is the prize pool?",
      answer: "The total prize pool for AI-INNOVATHON 2026 is ₹8,000."
    },
    {
      id: "faq-10",
      question: "Are AI tools allowed?",
      answer: "Yes! Participants may freely utilize AI tools, assistants, and foundation models during development."
    },
    {
      id: "faq-11",
      question: "Can teams use external APIs?",
      answer: "Yes, external APIs and cloud services are permitted."
    },
    {
      id: "faq-12",
      question: "Can open-source tools be used?",
      answer: "Yes, open-source libraries, packages, and frameworks are allowed."
    },
    {
      id: "faq-13",
      question: "Can online datasets be used?",
      answer: "Yes, publicly available online datasets are allowed."
    },
    {
      id: "faq-14",
      question: "Can pre-existing code or repositories be used?",
      answer: "No. Pre-existing code, pre-built modules, or existing project repositories are strictly not allowed. All development must take place during the hackathon."
    },
    {
      id: "faq-15",
      question: "What must be submitted?",
      answer: "A GitHub repository containing your project code and a PPT / presentation slide deck are required."
    },
    {
      id: "faq-16",
      question: "Is a demo required?",
      answer: "No, a live demo is optional. You may choose to present one during judging."
    },
    {
      id: "faq-17",
      question: "Is lunch provided?",
      answer: "No, lunch is not provided. Participants can purchase food on campus or bring their own meals."
    },
    {
      id: "faq-18",
      question: "Are snacks provided?",
      answer: "Yes, refreshments and snacks will be provided during the event."
    },
    {
      id: "faq-19",
      question: "Is accommodation available?",
      answer: "No, accommodation is not available."
    },
    {
      id: "faq-20",
      question: "Are swags provided?",
      answer: "No, swags are not provided."
    },
    {
      id: "faq-21",
      question: "Do registered participants need to join WhatsApp?",
      answer: "Yes! All registered participants are required to join the official WhatsApp group for important announcements, rules, and event day updates."
    },
    {
      id: "faq-22",
      question: "How do I register?",
      answer: "Click the 'Register Now' button on this website to fill out the official Google Form and complete UPI payment."
    }
  ] as FAQItem[]
} as const;
