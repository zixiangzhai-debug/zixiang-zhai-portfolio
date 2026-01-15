export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  year?: string;
  location?: string;
  type?: string;
  materials?: string;
  role?: string;
  coverImage?: string; // path under /public, e.g. "/images/shelter/cover.jpg"
  tags?: string[];
  // Content is intentionally minimal: you can later replace this with Markdown or a CMS.
  summary?: string;
};

export const projects: Project[] = [
  {
    slug: "substation-renovation",
    title: "Substation Renovation",
    subtitle: "",
    year: "—",
    location: "—",
    type: "Renovation",
    materials: "Steel",
    role: "—",
    coverImage: "/projects/substation-renovation/cover.jpg",
    tags: ["Renovation", "Steel"],
    summary: "Replace this summary with your own text."
  },
  {
    slug: "glacier-mountaineering-hut",
    title: "Glacier Mountaineering Hut",
    subtitle: "",
    year: "—",
    location: "—",
    type: "Mountain Shelter",
    materials: "Timber",
    role: "—",
    coverImage: "/projects/glacier-mountaineering-hut/cover.jpg",
    tags: ["Timber", "Shelter"],
    summary: "Replace this summary with your own text."
  },
  {
    slug: "modular-renovation-strategy",
    title: "Modular Renovation Strategy",
    subtitle: "",
    year: "—",
    location: "—",
    type: "Urban Renewal",
    materials: "Timber + Steel",
    role: "—",
    coverImage: "/projects/modular-renovation-strategy/cover.jpg",
    tags: ["Modular", "Hybrid"],
    summary: "Replace this summary with your own text."
  },
  {
    slug: "lakeside-community-pavilion",
    title: "Lakeside Community Pavilion",
    subtitle: "",
    year: "—",
    location: "—",
    type: "Public Pavilion",
    materials: "Timber",
    role: "—",
    coverImage: "/projects/lakeside-community-pavilion/cover.jpg",
    tags: ["Pavilion", "Community"],
    summary: "Replace this summary with your own text."
  },
  {
    slug: "other-works",
    title: "Other Works",
    subtitle: "",
    year: "—",
    location: "—",
    type: "Collection",
    materials: "Mixed",
    role: "—",
    coverImage: "/projects/other-works/cover.jpg",
    tags: ["Selected Works"],
    summary: "Use this page to present smaller pieces or experiments."
  }
];

// Projects shown on the Home page under "Selected Works"
export const selectedSlugs = [
  "substation-renovation",
  "glacier-mountaineering-hut",
  "modular-renovation-strategy",
  "lakeside-community-pavilion",
];
