const data = [
	{
		sectionTitle: 'Hero Section',
		name: 'hero.image',
		label: 'Image',
		isRequired: false,
		type: 'image',
	},
	{
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
	},
	{
		name: 'hero.subTitle',
		label: 'Sub Title',
		isRequired: true,
		type: 'textarea',
	},
	{
		name: 'hero.align',
		label: 'Align Contents',
		isRequired: true,
		type: 'select',
		options: [
			{
				label: 'Left',
				value: 'left',
			},
			{
				label: 'Center',
				value: 'center',
			},
			{
				label: 'Right',
				value: 'right',
			},
		],
	},
	{
		name: 'hero.subTitleColor',
		label: 'Sub Title Color',
		isRequired: true,
		type: 'color',
		endOfSection: true,
	},
	{
		sectionTitle: 'CTA Button Button',
		name: 'hero.btnText',
		label: 'Button Text',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'hero.btnColor',
		label: 'Button Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'hero.btnTextColor',
		label: 'Button Text Text',
		type: 'color',
		span: 1,
	},
];

export default data;
