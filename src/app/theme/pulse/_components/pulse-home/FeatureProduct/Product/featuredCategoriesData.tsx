const featuredCategoriesData = [
	{
		name: 'collections.items',
		label: 'Collections List',
		isRequired: true,
		type: 'category-collection-array',
		endOfSection: true,
	},

	// subtitle
	{
		sectionTitle: 'Align',
		name: 'collectionsCss.align',
		label: 'Align',
		type: 'alignment',
		span: 1,
	},

	// card
	{
		sectionTitle: 'Card',
		name: 'collectionsCss.bgColor',
		label: 'Background Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'collectionsCss.fgColor',
		label: 'Foreground Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'collectionsCss.fgColorHover',
		label: 'Foreground Hover',
		type: 'color',
		span: 1,
	},
	{
		name: 'collectionsCss.fontSize',
		label: 'Font Size',
		type: 'font-size',
		span: 1,
	},
	{
		name: 'collectionsCss.fontWeight',
		label: 'font-weight',
		type: 'number',
		span: 1,
	},
	{
		name: 'collectionsCss.imageHeight',
		label: 'Image Height',
		type: 'number',
		span: 1,
	},
	{
		name: 'collectionsCss.imageWidth',
		label: 'Image Width',
		type: 'number',
		span: 1,
	},

	{
		name: 'collectionsCss.borderRadius',
		label: 'Card Border Radius',
		type: 'text',
		span: 1,
	},
	{
		name: 'collectionsCss.boxShadow',
		label: 'Box Shadow',
		type: 'color',
		span: 1,
	},
	{
		name: 'collectionsCss.innerGap',
		label: 'Inner Gap',
		type: 'number',
		span: 1,
	},
	{
		name: 'collectionsCss.outerGap',
		label: 'Outer Gap',
		type: 'number',
		span: 1,
		endOfSection: true,
	},

	{
		sectionTitle: 'Show/Hide',
		name: 'collectionsCss.hide',
		label: 'Show/Hide Category',
		type: 'select',
		options: [
			{ label: 'Show', value: false },
			{ label: 'Hide', value: true },
		],
	},
];

export default featuredCategoriesData;

export const featuredTtileSchema = [
	{
		name: 'collections.title',
		label: 'Title',
		isRequired: true,
		type: 'text',
	},

	{
		sectionTitle: 'Title',
		name: 'collectionsCss.titleColor',
		label: 'Title Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'collectionsCss.align',
		label: 'Title Align',
		type: 'select',
		options: [
			{ label: 'Left', value: 'left' },
			{ label: 'Center', value: 'center' },
			{ label: 'Right', value: 'right' },
		],
		span: 1,
	},
	{
		name: 'collectionsCss.titleFontSizeBASE',
		label: 'Font Size (BASE)',
		type: 'number',
		span: 1,
	},
	{
		name: 'collectionsCss.titleFontSizeBG',
		label: 'Font Size (BG)',
		type: 'number',
		span: 1,
	},
	{
		name: 'collectionsCss.titleFontWeight',
		label: 'Font Weight',
		type: 'font-weight',
		span: 1,
		endOfSection: true,
	},
];
