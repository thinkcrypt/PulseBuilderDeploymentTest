const pulseFooterSchema = [
  {
    sectionTitle: "Typography",
    name: "footer.fontSize",
    label: "Font Size",
    type: "number",
    span: 1,
  },
  {
    name: "footer.bgColor",
    label: "Background Color",
    type: "color",
    span: 1,
  },
  {
    name: "footer.fgColor",
    label: "Foreground Color",
    type: "color",
    span: 1,
  },
  {
    name: "footer.borderColor",
    label: "Border Color",
    type: "color",
    span: 1,
  },
  {
    name: "footer.hoverColor",
    label: "Hover Color",
    type: "color",
    span: 1,
    endOfSection: true,
  },

  {
    sectionTitle: "Tag",
    name: "footer.footerTagBg",
    label: "Background",
    type: "color",
    span: 1,
  },
  {
    name: "footer.footerTagFg",
    label: "Foreground",
    type: "color",
    span: 1,
  },
  {
    name: "footer.footerTagFontSize",
    label: "Font Size",
    type: "number",
    span: 1,
  },
  {
    name: "footer.hideFooterTag",
    label: "Hide Tag",
    type: "boolean",
    span: 1,
    endOfSection: true,
  },

  // icon
  {
    sectionTitle: "Icon",
    name: "footer.iconBg",
    label: "Icon Background",
    type: "color",
    span: 1,
  },
  {
    name: "footer.iconFg",
    label: "Icon Foreground",
    type: "color",
    span: 1,
  },
  {
    name: "footer.iconHoverBg",
    label: "Icon Hover Background",
    type: "color",
    span: 1,
  },
  {
    name: "footer.iconHoverFg",
    label: "Icon Hover Foreground",
    type: "color",
    span: 1,
  },
  {
    name: "footer.iconRadius",
    label: "Icon Radius",
    type: "number",
    span: 1,
  },
  {
    name: "footer.iconSize",
    label: "Icon Size",
    type: "number",
    span: 1,
    endOfSection: true,
  },
  // logo
  {
    sectionTitle: "Logo",
    name: "footer.logoHeight",
    label: "Logo Height",
    type: "number",
    span: 1,
  },
  {
    name: "footer.logoWidth",
    label: "Logo Width",
    type: "number",
    span: 1,
    endOfSection: true,
  },
  // title
  {
    sectionTitle: "Title",
    name: "footer.titleSizeBG",
    label: "Title Size (BG)",
    type: "number",
    span: 1,
  },
  {
    name: "footer.titleSizeBase",
    label: "Title Size (Base)",
    type: "number",
    span: 1,
    endOfSection: true,
  },
];

export default pulseFooterSchema;
