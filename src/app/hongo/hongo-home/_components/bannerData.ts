const data = [
	{
		name: 'banner.leftText',
		label: 'Left Text',
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
		type: 'color',
	},
	{
		name: 'banner.fgColor',
		label: 'Foreground Color',
		type: 'color',
	},
	{
		name: 'banner.hide',
		label: 'Hide Banner',
		type: 'select',
		options: [
			{ label: 'Show', value: false },
			{ label: 'Hide', value: true },
		],
	},
];

export default data;
