const sponsoredBannerThreeData = [
  {
    name: "sponsoredBannerThree.image",
    label: "Banner Image",
    type: "image",
  },

  {
    name: "sponsoredBannerThree.borderRadius",
    label: "Border Radius",
    type: "number",
    span: 1,
  },
  {
    name: "sponsoredBannerThree.h",
    label: "Banner Height",
    type: "number",
    span: 1,
  },

  {
    startOfSection: true,
    sectionTitle: "Show/Hide",
    name: "sponsoredBannerThree.hide",
    label: "Show/Hide Banner",
    type: "select",
    options: [
      { label: "Show", value: false },
      { label: "Hide", value: true },
    ],
  },
];

export default sponsoredBannerThreeData;
