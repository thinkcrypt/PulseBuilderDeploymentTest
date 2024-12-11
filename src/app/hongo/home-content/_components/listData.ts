const data = [
	{
		name: 'title',
		label: 'Title',
		isRequired: true,
		type: 'text',
	},

	{
		name: 'type',
		label: 'Section Type',
		isRequired: false,
		type: 'select',
		options: [
			{
				label: 'Category',
				value: 'category',
			},
			{
				label: 'Collection',
				value: 'collection',
			},
		],
	},
	{
		name: 'id',
		label: 'Select Category',
		isRequired: true,
		type: 'data-menu',

		model: 'categories',
		renderCondition: (data: any) => {
			return data?.type === 'category';
		},
	},
	{
		name: 'id',
		label: 'Select Collection',
		isRequired: true,
		type: 'data-menu',

		model: 'collections',
		renderCondition: (data: any) => {
			return data?.type === 'collection';
		},
	},
	{
		name: 'priority',
		label: 'Priority',
		isRequired: false,
		type: 'number',
	},
];

export default data;
