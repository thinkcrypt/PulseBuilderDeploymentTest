const pulseHeaderData = [
  ////////////////// Header bg
  // startOfSection: true,
  // 	sectionTitle: 'Pages (HONGO)',
  // 	title: 'Home Page',
  // 	href: '/home-content',
  // 	icon: 'content',
  // 	path: 'home-content',
  // 	type: 'page',
  // {
  // 	// startOfSection: true,
  // 	sectionTitle: 'Header Logo',
  // 	// title: 'Header',
  // 	name: 'basic.logo',
  // 	label: 'Header Logo',
  // 	type: 'image',
  // 	span: 1,
  // },
  {
    // startOfSection: true,
    sectionTitle: "Header Colors",
    // title: 'Header',
    name: "header.bgColor",
    label: "Background Color",
    isRequired: true,
    type: "color",
    span: 1,
  },

  {
    name: "header.fgColor",
    label: "Foreground Color",
    isRequired: true,
    type: "color",
    span: 1,
  },
  ///////////////// Icon
  {
    // startOfSection: true,
    sectionTitle: "Icon Colors",
    // title: 'Icon',
    name: "header.iconBg",
    label: "Icon Background",
    type: "color",
    span: 1,
  },
  {
    name: "header.iconFg",
    label: "Icon Foreground",
    type: "color",
    span: 1,
  },
  {
    name: "header.iconHoverBg",
    label: "Icon Hover Background",
    type: "color",
    span: 1,
  },
  {
    name: "header.iconHoverFg",
    label: "Icon Hover Foreground",
    type: "color",
    span: 1,
  },
  {
    name: "header.tagBg",
    label: "Icon Tag Background",
    type: "color",
    span: 1,
  },
  {
    name: "header.tagFg",
    label: "Icon Tag Foreground",
    type: "color",
    span: 1,
  },
  {
    name: "header.tagRadius",
    label: "Icon Tag Radius",
    type: "number",
    span: 1,
  },
  {
    name: "header.iconRadius",
    label: "Icon Radius",
    type: "number",
    span: 1,
  },
  {
    name: "header.iconSize",
    label: "Icon Size",
    type: "number",
    span: 1,
  },
  ////////////////// Button
  {
    sectionTitle: "Button Colors",
    name: "header.btnBg",
    label: "Button Background",
    type: "color",
    span: 1,
  },
  {
    name: "header.btnFg",
    label: "Button Foreground",
    type: "color",
    span: 1,
  },
  {
    name: "header.btnFontSize",
    label: "Button Font Size",
    type: "number",
    span: 1,
  },
  {
    name: "header.btnFontWeight",
    label: "Button Font Weight",
    type: "number",
    span: 1,
  },
  {
    name: "header.btnHeight",
    label: "Button Height",
    type: "number",
    span: 1,
  },
  {
    name: "header.btnHoverBg",
    label: "Button Hover Background",
    type: "color",
    span: 1,
  },
  {
    name: "header.btnHoverFg",
    label: "Button Hover Foreground",
    type: "color",
    span: 1,
  },
  {
    name: "header.btnRadius",
    label: "Button Radius",
    type: "number",
    span: 1,
  },
  {
    name: "header.btnText",
    label: "Button Text",
    type: "text",
    span: 1,
  },
  {
    name: "header.btnWidth",
    label: "Button Width",
    type: "number",
    span: 1,
  },

  /////////////////// Logo
  {
    // startOfSection: true,
    sectionTitle: "Logo Colors",
    // title: 'Logo',
    name: "header.logoHeight",
    label: "Logo Height",
    type: "number",
    span: 1,
  },
  {
    name: "header.logoWidth",
    label: "Logo Width",
    type: "number",
    span: 1,
  },
  {
    name: "header.logoText",
    label: "Logo Text",
    isRequired: true,
    type: "text",
    endOfSection: true,
  },

  ////////////////// Border
  //   {
  //     sectionTitle: "Border Colors",
  //     name: "header.borderColor",
  //     label: "Search Box Border Color",
  //     type: "color",
  //     span: 1,
  //   },
  //   {
  //     name: "header.borderWidth",
  //     label: "Border Bottom Width",
  //     type: "number",
  //     span: 1,
  //   },

  /////////////////// Search Box
  {
    // startOfSection: true,
    sectionTitle: "Search Box Colors",
    // title: 'Search Box',
    name: "header.searchBoxBg",
    label: "Search Box Background",
    type: "color",
    span: 1,
  },
  {
    name: "header.searchBoxFg",
    label: "Search Box Foreground",
    type: "color",
    span: 1,
  },
  {
    name: "header.searchBoxIcon",
    label: "Search Box Icon",
    type: "color",
    span: 1,
  },
  {
    name: "header.searchBoxText",
    label: "Search Box Text",
    type: "text",
    span: 1,
  },
  {
    name: "header.searchBoxRadius",
    label: "Search Box Radius",
    type: "number",
    span: 1,
  },
];

export default pulseHeaderData;
