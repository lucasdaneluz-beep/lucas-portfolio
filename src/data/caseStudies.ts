export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  summary: string;
  metric: string;
  problem: string;
  tags: string[];
  visualLabel: string;
  image?: string;
};

// Single source of truth for case studies, consumed by the Work page (full
// cards) and the homepage work teaser (id / index / title only).
export const caseStudies: CaseStudy[] = [
  {
    id: "platter-onboarding",
    index: "01",
    title: "Platter — Onboarding Automation",
    summary: "Turned manual supplier data migration into a guided mapping, review, and validation workflow.",
    metric: "1–2 weeks → minutes",
    problem: "Supplier onboarding relied on spreadsheet-heavy data mapping that could take internal teams one to two weeks.",
    tags: ["B2B SaaS", "Data Migration", "Workflow Automation"],
    visualLabel: "Supplier Data Onboarding",
    image: "/platter/onboarding-mapping.svg",
  },
  {
    id: "walkup",
    index: "02",
    title: "WalkUp — Smarter Queues",
    summary: "Improved trust, queue transparency, and retention in a two-sided marketplace.",
    metric: "3× loyalty engagement uplift",
    problem: "Wait times felt unreliable, the app was unstable, and there was no loyalty loop to bring diners back.",
    tags: ["Marketplace", "Waitlist UX", "Loyalty"],
    visualLabel: "Marketplace Trust",
  },
  {
    id: "hipen-media",
    index: "03",
    title: "Hipen Media — User Onboarding",
    summary: "Reduced onboarding friction across multiple customer segments with a lean MVP.",
    metric: "40% faster onboarding completion",
    problem: "A one-size-fits-all onboarding flow and unfiltered dataset slowed time-to-value for every segment.",
    tags: ["Discovery", "Onboarding", "MVP"],
    visualLabel: "Segmentation Flow",
  },
  {
    id: "westpak",
    index: "04",
    title: "Westpak — Cost Optimisation",
    summary: "Aligned finance and operations around a cost-saving initiative without disrupting supply.",
    metric: "25% cost reduction delivered",
    problem: "Costs were inflated across three core categories, with internal resistance to changing suppliers.",
    tags: ["Stakeholder Management", "Cost Optimisation", "Supply Chain"],
    visualLabel: "Cost Programme",
  },
  {
    id: "run-your-pace",
    index: "05",
    title: "Run Your Pace — Personal Build",
    summary: "Shipped a Couch-to-5K app because no existing one let me freely scroll interval timings. I use it weekly.",
    metric: "Live · Used weekly",
    problem: "Every running app I tried had fixed durations or clunky steppers. One scroll interaction was missing everywhere — so I built the whole app around it.",
    tags: ["Personal Build", "Side Project", "React"],
    image: "/run-your-pace/home.png",
    visualLabel: "Run5K App",
  },
];
