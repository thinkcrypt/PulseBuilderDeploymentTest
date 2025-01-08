const data = [
	{
		name: 'banner.hide',
		label: 'Hide Banner',
		type: 'select',
		options: [
			{ label: 'Show', value: false },
			{ label: 'Hide', value: true },
		],
	},
	{
		name: 'banner.centerText',
		label: 'Center Text',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'banner.rightText',
		label: 'Right Text',
		isRequired: true,
		type: 'text',
	},

	{
		name: 'banner.bgColor',
		label: 'Background Color',
		span: 1,
		type: 'color',
	},
	{
		name: 'banner.fgColor',
		label: 'Foreground Color',
		type: 'color',
		span: 1,
	},
];

export default data;
