const sponsoredBannerTwoData = [
  {
    startofSection: true,
    sectionTitle: "Banner 1",
    name: "sponsoredBannerTwo[0].image",
    label: "Image",
    isRequired: false,
    type: "nested-image",
  },

  {
    startofSection: true,
    sectionTitle: "Banner 2",
    name: "sponsoredBannerTwo[1].image",
    label: "Image",
    isRequired: false,
    type: "nested-image",
  },
  {
    sectionTitle: "Css Lists",
    name: "sponserBannerTwoCss.height",
    label: "Banner Height (Desktop)",
    type: "number",
    span: 1,
  },
  {
    sectionTitle: "Css Lists",
    name: "sponserBannerTwoCss.heightBase",
    label: "Banner Height (Mobile)",
    type: "number",
    span: 1,
  },
  {
    name: "sponserBannerTwoCss.borderRadius",
    label: "Border Radius",
    type: "number",
    span: 1,
    endOfSecton: true,
  },

  {
    startOfSection: true,
    sectionTitle: "Show/Hide",
    name: "sponserBannerTwoCss.hide",
    label: "Show/Hide Banner",
    type: "select",
    options: [
      { label: "Show", value: false },
      { label: "Hide", value: true },
    ],
  },
];

export default sponsoredBannerTwoData;
