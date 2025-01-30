const sponsoredBannerTwoData = [
  {
    name: "sponsoredBannerTwo.imageOne",
    label: "First Banner Image",
    type: "image",
  },
  {
    name: "sponsoredBannerTwo.imageTwo",
    label: "Second Banner Images",
    type: "image",
  },
  {
    name: "sponsoredBannerTwo.borderRadius",
    label: "Border Radius",
    type: "number",
    span: 1,
  },

  {
    startOfSection: true,
    sectionTitle: "Show/Hide",
    name: "sponsoredBannerTwo.hide",
    label: "Show/Hide Banner",
    type: "select",
    options: [
      { label: "Show", value: false },
      { label: "Hide", value: true },
    ],
  },
];

export default sponsoredBannerTwoData;
