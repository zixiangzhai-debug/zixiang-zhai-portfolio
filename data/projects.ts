export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  year?: string;
  location?: string;
  type?: string;
  materials?: string;
  role?: string;
  coverImage?: string; // path under /public, e.g. "/projects/<slug>/cover.jpg"
  tags?: string[];
  // Content is intentionally minimal: you can later replace this with Markdown or a CMS.
  summary?: string;

  /**
   * Images shown on the project detail page (NOT including coverImage).
   * If you said "7 images including cover", then gallery should contain 6 images (01–06),
   * while coverImage points to cover.jpg.
   */
  gallery?: ProjectImage[];
};

function makeGallery(slug: string, countExcludingCover: number, title: string): ProjectImage[] {
  return Array.from({ length: countExcludingCover }, (_, i) => {
    const n = String(i + 1).padStart(2, "0"); // 01, 02, 03...
    return {
      src: `/projects/${slug}/${n}.jpg`,
      alt: `${title} – image ${i + 1}`,
    };
  });
}

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
    summary: "Replace this summary with your own text.",
    // 7 images total (including cover) => 6 images here (01–06) + cover.jpg
    gallery: makeGallery("substation-renovation", 6, "Substation Renovation"),
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
    summary: "Replace this summary with your own text.",
    // 7 images total (including cover) => 6 images here (01–06) + cover.jpg
    gallery: makeGallery("glacier-mountaineering-hut", 6, "Glacier Mountaineering Hut"),
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
    summary: "Replace this summary with your own text.",
    // 5 images total (including cover) => 4 images here (01–04) + cover.jpg
    gallery: makeGallery("modular-renovation-strategy", 4, "Modular Renovation Strategy"),
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
    summary: "Replace this summary with your own text.",
    // 7 images total (including cover) => 6 images here (01–06) + cover.jpg
    gallery: makeGallery("lakeside-community-pavilion", 6, "Lakeside Community Pavilion"),
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
    summary: "Use this page to present smaller pieces or experiments.",
    // You can add gallery later if you want:
    // gallery: makeGallery("other-works", 0, "Other Works"),
  },
];

// Projects shown on the Home page under "Selected Works"
export const selectedSlugs = [
  "substation-renovation",
  "glacier-mountaineering-hut",
  "modular-renovation-strategy",
  "lakeside-community-pavilion",
];
