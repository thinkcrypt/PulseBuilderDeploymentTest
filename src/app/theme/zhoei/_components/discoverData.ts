const data = [
	// {
	// 	name: 'discover.subTitle',
	// 	label: 'Title',
	// 	isRequired: true,
	// 	type: 'text',
	// },
	// {
	// 	name: 'discover.title',
	// 	label: 'Title',
	// 	isRequired: true,
	// 	type: 'textarea',
	// },
	{
		name: 'discover.items[0].image',
		label: 'Image',
		isRequired: false,
		type: 'nested-image',
	},
	{
		name: 'discover.items[0].btnText',
		label: 'Button Text',
		isRequired: true,
		type: 'nested-string',
	},
	{
		name: 'discover.items[1].image',
		label: 'Image',
		isRequired: false,
		type: 'nested-image',
	},
	{
		name: 'discover.items[1].btnText',
		label: 'Button Text',
		isRequired: true,
		type: 'nested-string',
	},

	// {
	// 	name: 'hero.btnText',
	// 	label: 'Button Text',
	// 	isRequired: true,
	// 	type: 'text',
	// 	endOfSection: true,
	// },
];

export default data;
