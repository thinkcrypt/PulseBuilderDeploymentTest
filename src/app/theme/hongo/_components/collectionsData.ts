const data = [
	{
		name: 'collections.title',
		label: 'Title',
		isRequired: true,
		type: 'text',
	},

	{
		name: 'collections.borderRadius',
		label: 'Border Radius',
		isRequired: true,
		type: 'number',
	},

	{
		name: 'collections.items',
		label: 'Collections List',
		isRequired: true,
		type: 'category-collection-array',
	},
];

export default data;
