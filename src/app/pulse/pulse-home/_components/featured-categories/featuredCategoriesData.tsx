const featuredCategoriesData = [
	{
		name: 'collections.title',
		label: 'Title',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'collections.subTitle',
		label: 'Sub Title',
		type: 'text',
		endOfSection: true,
	},
	{
		name: 'collections.borderRadius',
		label: 'Border Radius',
		// isRequired: true,
		type: 'number',
	},

	{
		name: 'collections.items',
		label: 'Collections List',
		isRequired: true,
		type: 'category-collection-array',
	},
	{
		sectionTitle: 'Featured Categories',
		name: 'collections.title',
		label: 'Title',
		isRequired: true,
		type: 'text',
	},

	{
		name: 'collections.items',
		label: 'Collections',
		type: 'text',
		endOfSection: true,
	},
	{
		sectionTitle: 'Categories CSS List',
		name: 'collectionsCss.align',
		label: 'Align Items',
		type: 'text',
	},
	{
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
		label: 'Foreground Color Hover',
		type: 'color',
		endOfSection: true,
	},
	{
		sectionTitle: 'Typography',
		name: 'collectionsCss.fontSize',
		label: 'Font Size',
		type: 'number',
		span: 1,
	},
	{
		name: 'collectionsCss.fontWeight',
		label: 'Font Weight',
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
		label: 'Border Radius',
		type: 'text',
		span: 1,
		endOfSection: true,
	},
	{
		sectionTitle: 'Categories CSS List',
		name: 'collectionsCss.titleColor',
		label: 'Title Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'collectionsCss.subTitleColor',
		label: 'Subtitle Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'collectionsCss.subTitleFontSizeBASE',
		label: 'Subtitle Font Size (BASE)',
		type: 'number',
		span: 1,
	},
	{
		name: 'collectionsCss.subTitleFontSizeBG',
		label: 'Subtitle Font Size (BG)',
		type: 'number',
		span: 1,
	},
	{
		name: 'collectionsCss.subTitleFontWeight',
		label: 'Subtitle Font Weight',
		type: 'number',
		span: 1,
	},
	{
		name: 'collectionsCss.titleFontSizeBASE',
		label: 'Title Font Size (BASE)',
		type: 'number',
		span: 1,
	},
	{
		name: 'collectionsCss.titleFontWeight',
		label: 'Title Font Weight',
		type: 'number',
		span: 1,
	},
];

export default featuredCategoriesData;
