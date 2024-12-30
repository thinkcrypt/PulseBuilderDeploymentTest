const pulseHeroData = [
  {
    sectionTitle: "Hero Section",
    name: "hero.images",
    label: "Hero Images",
    type: "image-array",
  },
  {
    name: "hero.height",
    label: "Hero Height",
    type: "number",
    endOfSection: true,
  },

  {
    sectionTitle: "Show/Hide",
    name: "hero.hide",
    label: "Show/Hide Banner",
    type: "select",
    options: [
      { label: "Show", value: false },
      { label: "Hide", value: true },
    ],
  },
];

export default pulseHeroData;
