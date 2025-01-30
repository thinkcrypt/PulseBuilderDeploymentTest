const linkOptions = [
	{
		label: 'Page',
		value: 'page',
	},
	{
		label: 'Product',
		value: 'product',
	},
	{
		label: 'Category',
		value: 'category',
	},
	{
		label: 'Collection',
		value: 'collection',
	},
	{
		label: 'External Link',
		value: 'external',
	},
];

const pageOptions = [
	{
		label: 'Home',
		value: '/',
	},
	{
		label: 'All Categories',
		value: '/category',
	},
	{
		label: 'FAQ',
		value: '/faq',
	},
	{
		label: 'Shop',
		value: '/explore',
	},
	{
		label: 'Contact',
		value: '/contact-us',
	},
];

const generateItemConfig = (index: number) => [
	{
		name: `discover.items[${index}].image`,
		label: 'Image',
		isRequired: false,
		type: 'nested-image',
	},
	{
		name: `discover.items[${index}].btnText`,
		label: 'Button Text',
		isRequired: true,
		type: 'nested-string',
	},
	{
		name: `discover.items[${index}].type`,
		label: 'Link Type',
		type: 'nested-select',
		isRequired: true,
		options: linkOptions,
	},
	{
		name: `discover.items[${index}].href`,
		label: 'Select Page',
		type: 'nested-select',
		options: pageOptions,
		isRequired: true,
		renderCondition: (data: any) => {
			return data?.discover?.items[index]?.type === 'page';
		},
	},
	{
		name: `discover.items[${index}].href`,
		label: 'Select Product',
		type: 'nested-data-menu',
		model: 'products',
		isRequired: true,
		renderCondition: (data: any) => {
			return data?.discover?.items[index]?.type === 'product';
		},
	},
	{
		name: `discover.items[${index}].href`,
		label: 'Enter External Link [eg. https://google.com]',
		type: 'nested-string',
		isRequired: true,
		renderCondition: (data: any) => {
			return data?.discover?.items[index]?.type === 'external';
		},
	},
	{
		name: `discover.items[${index}].href`,
		label: 'Select Collection',
		type: 'nested-data-menu',
		model: 'collections',
		isRequired: true,
		renderCondition: (data: any) => {
			return data?.discover?.items[index]?.type === 'collection';
		},
	},
	{
		name: `discover.items[${index}].href`,
		label: 'Select Category',
		type: 'nested-data-menu',
		model: 'categories',
		isRequired: true,
		renderCondition: (data: any) => {
			return data?.discover?.items[index]?.type === 'category';
		},
	},
];

const data = [...generateItemConfig(0), ...generateItemConfig(1)];

export default data;
