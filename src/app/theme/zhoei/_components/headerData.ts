const data = [
	{
		name: 'logo',
		label: 'Logo',
		type: 'image',
		isRequired: true,
	},
	{
		startOfSection: true,
		sectionTitle: 'Logo Sizing',
		name: 'logoWidthSm',
		label: 'Logo Width Small',
		type: 'number',
		span: 1,
	},
	{
		name: 'logoWidthLg',
		label: 'Logo Width Large',
		type: 'number',
		span: 1,
	},

	{
		startOfSection: true,
		sectionTitle: 'Header Colors',
		name: 'headerBg',
		label: 'Header Background',
		type: 'color',
		span: 1,
	},
	{
		name: 'headerFg',
		label: 'Header Foreground',
		type: 'color',
		span: 1,
	},
	{
		name: 'headerBorder',
		label: 'Header Border',
		type: 'color',
	},
];

export default data;
