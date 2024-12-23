const pulseHeroData = [
  {
    startOfSection: true,
    sectionTitle: "Hero Section",
    name: "hero.images",
    label: "Hero Images",
    type: "image-array",
    dataKey: "hero.images",
  },
  {
    name: "hero.height",
    label: "Hero Height",
    type: "number",
    endOfSection: true,
  },
  {
    startOfSection: true,
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
