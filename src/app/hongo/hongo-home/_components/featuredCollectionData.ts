import { start } from 'repl';

const data = [
	{
		startofSection: true,
		sectionTitle: 'Banner 1',
		name: 'featuredCollection[0].image',
		label: 'Image',
		isRequired: false,
		type: 'nested-image',
	},
	{
		name: 'featuredCollection[0].title',
		label: 'Title',
		isRequired: true,
		type: 'nested-string',
	},
	{
		name: 'featuredCollection[0].subTitle',
		label: 'Sub Title',
		type: 'nested-string',
		endOfSection: true,
	},

	{
		startofSection: true,
		sectionTitle: 'Banner 2',
		name: 'featuredCollection[1].image',
		label: 'Image',
		isRequired: false,
		type: 'nested-image',
	},
	{
		name: 'featuredCollection[1].title',
		label: 'Title',
		isRequired: true,
		type: 'nested-string',
	},
	{
		name: 'featuredCollection[1].subTitle',
		label: 'Sub Title',
		type: 'nested-string',
		endOfSection: true,
	},

	{
		startofSection: true,
		sectionTitle: 'Banner 3',
		name: 'featuredCollection[2].image',
		label: 'Image',
		isRequired: false,
		type: 'nested-image',
	},
	{
		name: 'featuredCollection[2].title',
		label: 'Title',
		isRequired: true,
		type: 'nested-string',
	},
	{
		name: 'featuredCollection[2].subTitle',
		label: 'Sub Title',
		type: 'nested-string',
		endOfSection: true,
	},
];

export default data;
