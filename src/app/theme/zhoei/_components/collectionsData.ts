const data = [
	{
		name: 'collections.title',
		label: 'Title',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'collections.subTitle',
		label: 'Sub Title',
		isRequired: true,
		type: 'textarea',
	},

	{
		name: 'collections.items',
		label: 'Collections List',
		isRequired: true,
		type: 'category-collection-array',
	},

	{
		name: 'collections.btnText',
		label: 'Button Text',
		isRequired: true,
		type: 'text',
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
