import { fontOptions } from '@/components/library';

const data = [
	{
		name: 'logo',
		label: 'Image',
		isRequired: true,
		type: 'image',
	},
	{
		name: 'name',
		label: 'Store Name',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'phone',
		label: 'Store Phone',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'email',
		label: 'Store Email',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'address',
		label: 'Store Address',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'primaryFont',
		label: 'Primary Font',
		type: 'select',
		options: fontOptions,
	},
	{
		name: 'secondaryFont',
		label: 'Secondary Font',
		type: 'select',
		options: fontOptions,
	},
	{
		name: 'brandColor',
		label: 'Brand Color',
		isRequired: true,
		type: 'color',
	},
	{
		name: 'brandTextColor',
		label: 'Brand Text Color',
		isRequired: true,
		type: 'color',
	},
	{
		name: 'bgColor',
		label: 'Background Color',
		isRequired: true,
		type: 'color',
	},

	{
		name: 'btnColor',
		label: 'Button Color',
		isRequired: true,
		type: 'color',
	},
	{
		name: 'btnTextColor',
		label: 'Button Text Color',
		isRequired: true,
		type: 'color',
	},
	{
		name: 'borderColor',
		label: 'Border Color',
		type: 'color',
	},
	{
		name: 'primaryTextColor',
		label: 'Primary Text Color',
		isRequired: true,
		type: 'color',
	},
	{
		name: 'secondaryTextColor',
		label: 'Secondary Text Color',
		isRequired: true,
		type: 'color',
	},

	// {
	// 	name: 'cardBg',
	// 	label: 'Card Background Color',
	// 	type: 'color',
	// },
	// {
	// 	name: 'cardRadius',
	// 	label: 'Card Border Radius',
	// 	type: 'number',
	// },
];

export default data;
