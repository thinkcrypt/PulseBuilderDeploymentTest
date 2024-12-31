const navSchema = [

	{
		name: 'headerCategories.bgColor',
		label: 'Background Color',
		type: 'color',
		span: 1,
	},

	{
		name: 'headerCategories.borderBottomColor',
		label: 'Border Bottom Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'headerCategories.borderBottomWidth',
		label: 'Border Bottom Width',
		type: 'number',
		span: 1,
	},

	{
		name: 'headerCategories.fgColor',
		label: 'Foreground Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'headerCategories.fontSize',
		label: 'Font Size',
		type: 'number',
		span: 1,
	},
	{
		name: 'headerCategories.fontWeight',
		label: 'Font Weight',
		type: 'number',
		span: 1,
	},
	{
		name: 'headerCategories.gap',
		label: 'Gap',
		type: 'number',
		span: 1,
	},

	{
		name: 'headerCategories.hoverFg',
		label: 'Hover Fg Color',
		type: 'color',
		span: 1,
	},
	{
		sectionTitle: 'Show/Hide',
		name: 'headerCategories.hide',
		label: 'Show/Hide Banner',
		type: 'select',
		options: [
			{ label: 'Show', value: false },
			{ label: 'Hide', value: true },
		],
	},
];

export default navSchema;
