const serviceData = [
  {
    name: "serviceContent",
    label: "Add Services",
    isRequired: true,
    type: "custom-section-array",
    hasImage: true,
    endOfSection: true,
  },

  {
    sectionTitle: "Image Styles",
    name: "serviceCSS.imageHeight",
    label: "Image Height",
    type: "number",
    span: 1,
  },
  {
    name: "serviceCSS.imageWidth",
    label: "Image Height",
    type: "number",
    span: 1,
  },
  {
    name: "serviceCSS.imageRadius",
    label: "Image Radius",
    type: "number",
  },
  {
    name: "serviceCSS.bgColor",
    label: "Background Color",
    type: "color",
    span: 1,
  },
  {
    name: "serviceCSS.titleColor",
    label: "Title Color",
    type: "color",
    span: 1,
  },
  {
    name: "serviceCSS.descriptionColor",
    label: "Description Color",
    type: "color",
    span: 1,
  },
  {
    name: "serviceCSS.titleSizeBG",
    label: "Title Size (BG)",
    type: "number",
    span: 1,
  },
  {
    name: "serviceCSS.titleSizeBASE",
    label: "Title Size (BASE)",
    type: "number",
    span: 1,
  },
  {
    name: "serviceCSS.descriptionSize",
    label: "Description Size",
    type: "number",
    span: 1,
  },
  {
    name: "serviceCSS.borderRadius",
    label: "Border Radius",
    type: "number",
    span: 1,
  },
  {
    sectionTitle: "Show/Hide Divider",
    name: "serviceCSS.showDivider",
    label: "Show/Hide Divider",
    type: "select",
    options: [
      { label: "Show", value: true },
      { label: "Hide", value: false },
    ],
  },
  {
    name: "serviceCSS.dividerColor",
    label: "Divider Color",
    type: "color",
    span: 1,
    endOfSection: true,
  },
  {
    sectionTitle: "Show/Hide",
    name: "serviceCSS.hide",
    label: "Show/Hide Services",
    type: "select",
    options: [
      { label: "Show", value: false },
      { label: "Hide", value: true },
    ],
    endOfSection: true,
  },
];

export default serviceData;
