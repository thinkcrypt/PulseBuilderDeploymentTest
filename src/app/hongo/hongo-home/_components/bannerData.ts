import { fontOptions } from '@/components/library';

const data = [
	{
		sectionTitle: 'Content',
		name: 'banner.leftText',
		label: 'Left Text',
		type: 'text',
	},
	{
		name: 'banner.rightText',
		label: 'Right Text',
		type: 'text',
	},
	{
		name: 'banner.height',
		label: 'Banner Height',
		type: 'number',
		span: 1,
	},
	{
		name: 'banner.paddingY',
		label: 'Vertical Padding',
		type: 'number',
		span: 1,
	},
	{
		startOfSection: true,
		sectionTitle: 'Typography',
		name: 'banner.fontFamily',
		label: 'Font Family',
		type: 'select',
		options: fontOptions,
		span: 1,
	},
	{
		name: 'banner.fontSize',
		label: 'Font Size',
		type: 'number',
		span: 1,
	},
	{
		name: 'banner.fontWeight',
		label: 'Font Weight',
		type: 'number',
		span: 1,
	},
	{
		name: 'banner.letterSpacing',
		label: 'Letter Spacing',
		type: 'number',
		span: 1,
	},

	{
		startOfSection: true,
		sectionTitle: 'Color',
		name: 'banner.bgColor',
		label: 'Background Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'banner.fgColor',
		label: 'Foreground Color',
		type: 'color',
		span: 1,
	},

	{
		startOfSection: true,
		sectionTitle: 'Show/Hide Banner',
		name: 'banner.hide',
		label: 'Hide Banner',
		type: 'select',
		options: [
			{ label: 'Show', value: false },
			{ label: 'Hide', value: true },
		],
	},
];

export default data;
