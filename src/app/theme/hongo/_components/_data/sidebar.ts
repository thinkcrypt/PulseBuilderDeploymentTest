import { storeData, headerData, fontData, colorData } from '..';

const sidebarData = [
	{
		startOfSection: true,
		sectionTitle: 'Pages ',
		title: 'Home Page',
		href: '/theme/hongo',
		icon: 'content',
		path: 'theme/hongo',
		type: 'page',
	},

	{
		startOfSection: true,
		sectionTitle: 'Components (HONGO)',
		title: 'Store Settings',
		icon: 'content',
		dataPath: 'basic',
		type: 'component',
		path: 'hongo',
		dataModel: storeData,
	},
	{
		title: 'Header',
		icon: 'content',
		dataPath: 'content',
		type: 'component',
		path: 'hongo',
		dataModel: headerData,
	},
	{
		title: 'Fonts',
		icon: 'shop',
		type: 'component',
		path: 'hongo',
		dataPath: 'basic',
		dataModel: fontData,
	},
	{
		title: 'Colors',
		icon: 'shop',
		type: 'component',
		path: 'hongo',
		dataPath: 'basic',
		dataModel: colorData,
	},
];

export default sidebarData;
