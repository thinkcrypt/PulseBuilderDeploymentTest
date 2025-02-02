const featuredAdSchema = [
	{
		startofSection: true,
		sectionTitle: 'Banner 1',
		name: 'featuredAds[0].image',
		label: 'Image',
		isRequired: false,
		type: 'nested-image',
	},
	{
		name: 'featuredAds[0].title',
		label: 'Title',
		isRequired: true,
		type: 'nested-string',
	},
	{
		name: 'featuredAds[0].subTitle',
		label: 'Sub Title',
		type: 'nested-string',
		endOfSection: true,
	},

	{
		startofSection: true,
		sectionTitle: 'Banner 2',
		name: 'featuredAds[1].image',
		label: 'Image',
		isRequired: false,
		type: 'nested-image',
	},
	{
		name: 'featuredAds[1].title',
		label: 'Title',
		isRequired: true,
		type: 'nested-string',
	},
	{
		name: 'featuredAds[1].subTitle',
		label: 'Sub Title',
		type: 'nested-string',
		endOfSection: true,
	},

	{
		startofSection: true,
		sectionTitle: 'Banner 3',
		name: 'featuredAds[2].image',
		label: 'Image',
		isRequired: false,
		type: 'nested-image',
	},
	{
		name: 'featuredAds[2].title',
		label: 'Title',
		isRequired: true,
		type: 'nested-string',
	},
	{
		name: 'featuredAds[2].subTitle',
		label: 'Sub Title',
		type: 'nested-string',
		endOfSection: true,
	},
];

export default featuredAdSchema;
