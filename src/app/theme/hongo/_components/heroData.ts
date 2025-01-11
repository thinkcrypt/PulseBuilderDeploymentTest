import { alignmentOptions, fontWeightOptions } from '@/components/library';

export const titleDetails = [
	{
		startOfSection: true,
		sectionTitle: 'Title Details',
		name: 'hero.title',
		label: 'Title',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'hero.titleColor',
		label: 'Title Color',
		isRequired: true,
		type: 'color',
		span: 1,
	},
	{
		name: 'hero.titleFont',
		label: 'Title Font',
		type: 'font',

		span: 1,
	},
	{
		name: 'hero.titleFontSizeSm',
		label: 'Font Size (Mobile)',
		type: 'number',
		span: 1,
	},
	{
		name: 'hero.titleFontSizeLg',
		label: 'Font Size (Desktop)',
		type: 'number',
		span: 1,
	},
	{
		name: 'hero.titleFontWeight',
		label: 'Font Weight',
		type: 'font-weight',
		span: 1,
	},
	{
		name: 'hero.titleLineHeight',
		label: 'Line Height',
		type: 'line-height',
		span: 1,
	},
	{
		name: 'hero.titleLetterSpacing',
		label: 'Letter Spacing',
		type: 'number',
		span: 1,
	},
];

export const subTitleDetails = [
	{
		startOfSection: true,
		sectionTitle: 'SubTitle Details',
		name: 'hero.subTitle',
		label: 'Sub Title',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'hero.subTitleColor',
		label: 'SubTitle Color',
		isRequired: true,
		type: 'color',
		span: 1,
	},
	{
		name: 'hero.subTitleFont',
		label: 'SubTitle Font',
		type: 'font',
		span: 1,
	},
	{
		name: 'hero.subTitleFontSizeSm',
		label: 'SubTitle Size (Mobile)',
		type: 'number',
		span: 1,
	},
	{
		name: 'hero.subTitleFontSizeLg',
		label: 'SubTitle Size (Desktop)',
		type: 'number',
		span: 1,
	},
	{
		name: 'hero.subTitleFontWeight',
		label: 'Sub Title Font Weight',
		type: 'font-weight',
		span: 1,
	},
	{
		name: 'hero.subTitleLetterSpacing',
		label: 'SubTitle Spacing',
		type: 'number',
		span: 1,
	},
	{
		name: 'hero.subTitleLineHeight',
		label: 'SubTitle Height',
		type: 'line-height',
		span: 1,
	},
];

export const btnData = [
	{
		sectionTitle: 'CTA Button',
		startOfSection: true,
		name: 'hero.btnText',
		label: 'Button Text',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'hero.btnHeight',
		label: 'Button Height',
		type: 'number',
		span: 1,
	},
	{
		name: 'hero.btnWidth',
		label: 'Button Width',
		type: 'number',
		span: 1,
	},
	{
		name: 'hero.btnColor',
		label: 'Button Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'hero.btnTextColor',
		label: 'Button Text Color',
		type: 'color',
		span: 1,
	},

	{
		name: 'hero.btnFontSize',
		label: 'Button Font Size',
		type: 'number',
		span: 1,
	},

	{
		name: 'hero.btnRadius',
		label: 'Button Radius',
		type: 'number',
		span: 1,
	},
	{
		name: 'hero.btnBorderColor',
		label: 'Button Border Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'hero.btnHoverColor',
		label: 'Button Hover Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'hero.btnHoverTextColor',
		label: 'Button Hover Text Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'hero.btnHoverBorderColor',
		label: 'Button Hover Border Color',
		type: 'color',
		span: 1,
	},
];

const data = [
	{
		sectionTitle: 'Hero Section',
		name: 'hero.image',
		label: 'Image',
		isRequired: false,
		type: 'image',
	},
	{
		label: 'Align Contents',
		startOfSection: true,
		name: 'hero.align',
		isRequired: true,
		type: 'select',
		options: alignmentOptions,
	},
];

export default data;
