const sponsoredBannerTwoData = [
	{
		startofSection: true,
		sectionTitle: 'Banner 1',
		name: 'sponsoredBannerTwo[0].image',
		label: 'Image',
		isRequired: false,
		type: 'nested-image',
	},

	{
		startofSection: true,
		sectionTitle: 'Banner 2',
		name: 'sponsoredBannerTwo[1].image',
		label: 'Image',
		isRequired: false,
		type: 'nested-image',
	},
	{
		sectionTitle: 'Css Lists',
		name: 'sponsoredBannerTwo.height',
		label: 'Banner Height (Desktop)',
		type: 'number',
		span: 1,
	},
	{
		sectionTitle: 'Css Lists',
		name: 'sponsoredBannerTwo.heightBase',
		label: 'Banner Height (Mobile)',
		type: 'number',
		span: 1,
	},
	{
		name: 'sponsoredBannerTwo.borderRadius',
		label: 'Border Radius',
		type: 'number',
		span: 1,
		endOfSecton: true,
	},

	{
		startOfSection: true,
		sectionTitle: 'Show/Hide',
		name: 'sponsoredBannerTwo.hide',
		label: 'Show/Hide Banner',
		type: 'select',
		options: [
			{ label: 'Show', value: false },
			{ label: 'Hide', value: true },
		],
	},
];

export default sponsoredBannerTwoData;
