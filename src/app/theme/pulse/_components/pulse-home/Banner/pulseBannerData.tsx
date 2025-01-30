const pulseBannerData = [
	{
		name: 'banner.children',
		label: 'Banner Children',
		type: 'text',
	},
	{
		startOfSection: true,
		sectionTitle: 'Typography',
		name: 'banner.fontFamily',
		label: 'Font Family',
		type: 'font',
	},
	{
		name: 'banner.textAlign',
		label: 'Text Align',
		type: 'select',
		options: [
			{ label: 'Left', value: 'left' },
			{ label: 'Center', value: 'center' },
			{ label: 'Right', value: 'right' },
		],
		span: 1,
	},
	{
		name: 'banner.height',
		label: 'Height',
		isRequired: true,
		type: 'color',
		span: 1,
	},
	{
		name: 'banner.fontSize',
		label: 'Font Size',
		type: 'number',
		span: 1,
	},
	{
		name: 'banner.fontWeight',
		label: 'Font Weight',
		type: 'font-weight',
		span: 1,
	},
	{
		endOfSection: true,
		name: 'banner.letterSpacing',
		label: 'Letter Spacing',
		type: 'number',
		span: 1,
	},
	{
		startOfSection: true,
		sectionTitle: 'Padding',
		name: 'banner.paddingY',
		label: 'Vertical Padding',
		type: 'number',
		span: 1,
	},
	{
		name: 'banner.paddingX',
		label: 'Horizontal Padding',
		type: 'number',
		span: 1,
	},

	{
		startOfSection: true,
		sectionTitle: 'Colors',
		name: 'banner.bgColor',
		label: 'Background Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'banner.fgColor',
		label: 'Foreground Color',
		type: 'color',
		span: 1,
	},

	{
		startOfSection: true,
		sectionTitle: 'Show/Hide',
		name: 'banner.hide',
		label: 'Show/Hide Banner',
		type: 'select',
		options: [
			{ label: 'Show', value: false },
			{ label: 'Hide', value: true },
		],
	},
];

export default pulseBannerData;
