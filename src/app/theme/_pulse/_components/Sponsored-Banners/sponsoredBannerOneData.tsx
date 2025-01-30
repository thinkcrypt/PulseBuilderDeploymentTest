const sponsoredBannerOneData = [
  {
    name: "sponsoredBannerOne.images",
    label: "Banner Images",
    type: "image-array",
  },

  {
    name: "sponsoredBannerOne.borderRadius",
    label: "Border Radius",
    type: "number",
    span: 1,
  },
  {
    name: "sponsoredBannerOne.grid",
    label: "Banner Grid",
    type: "number",
    span: 1,
  },

  {
    startOfSection: true,
    sectionTitle: "Show/Hide",
    name: "sponsoredBannerOne.hide",
    label: "Show/Hide Banner",
    type: "select",
    options: [
      { label: "Show", value: false },
      { label: "Hide", value: true },
    ],
  },
];

export default sponsoredBannerOneData;
