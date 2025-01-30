const featuredCategoriesData = [
  {
    name: "collections.title",
    label: "Title",
    isRequired: true,
    type: "text",
  },
  {
    name: "collections.subTitle",
    label: "Sub Title",
    type: "text",
    endOfSection: true,
  },

  {
    name: "collections.items",
    label: "Collections List",
    isRequired: true,
    type: "category-collection-array",
    endOfSection: true,
  },

  // title
  {
    sectionTitle: "Title",
    name: "collectionsCss.titleColor",
    label: "Title Color",
    type: "color",
    span: 1,
  },
  {
    name: "collectionsCss.align",
    label: "Title Align",
    type: "text",
    span: 1,
  },
  {
    name: "collectionsCss.titleFontSizeBASE",
    label: "Font Size (BASE)",
    type: "number",
    span: 1,
  },
  {
    name: "collectionsCss.titleFontSizeBG",
    label: "Font Size (BG)",
    type: "number",
    span: 1,
  },
  {
    name: "collectionsCss.titleFontWeight",
    label: "Font Weight",
    type: "number",
    span: 1,
    endOfSection: true,
  },
  // subtitle
  {
    sectionTitle: "Subtitle",
    name: "collectionsCss.subTitleColor",
    label: "Color",
    type: "color",
    span: 1,
  },
  {
    name: "collectionsCss.subTitleFontSizeBASE",
    label: "Font Size (BASE)",
    type: "number",
    span: 1,
  },
  {
    name: "collectionsCss.subTitleFontSizeBG",
    label: "Font Size (BG)",
    type: "number",
    span: 1,
  },
  {
    name: "collectionsCss.subTitleFontWeight",
    label: "Font Weight",
    type: "number",
    span: 1,
    endOfSection: true,
  },
  // card
  {
    sectionTitle: "Card",
    name: "collectionsCss.bgColor",
    label: "Background Color",
    type: "color",
    span: 1,
  },
  {
    name: "collectionsCss.fgColor",
    label: "Foreground Color",
    type: "color",
    span: 1,
  },
  {
    name: "collectionsCss.fgColorHover",
    label: "Foreground Hover",
    type: "color",
    span: 1,
  },
  {
    name: "collectionsCss.fontSize",
    label: "Font Size",
    type: "number",
    span: 1,
  },
  {
    name: "collectionsCss.fontWeight",
    label: "Font Weight",
    type: "number",
    span: 1,
  },
  {
    name: "collectionsCss.imageHeight",
    label: "Image Height",
    type: "number",
    span: 1,
  },
  {
    name: "collectionsCss.imageWidth",
    label: "Image Width",
    type: "number",
    span: 1,
  },

  {
    name: "collectionsCss.borderRadius",
    label: "Card Border Radius",
    type: "text",
    span: 1,
  },
  {
    name: "collectionsCss.boxShadow",
    label: "Box Shadow",
    type: "color",
    span: 1,
  },
  {
    name: "collectionsCss.innerGap",
    label: "Inner Gap",
    type: "number",
    span: 1,
  },
  {
    name: "collectionsCss.outerGap",
    label: "Outer Gap",
    type: "number",
    span: 1,
    endOfSection: true,
  },

  {
    sectionTitle: "Show/Hide",
    name: "collectionsCss.hide",
    label: "Show/Hide Category",
    type: "select",
    options: [
      { label: "Show", value: false },
      { label: "Hide", value: true },
    ],
  },
];

export default featuredCategoriesData;
