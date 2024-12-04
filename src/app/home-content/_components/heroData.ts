const data = [
	{
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
		type: 'text',
	},
	{
		name: 'hero.subTitle',
		label: 'Sub Title',
		isRequired: true,
		type: 'textarea',
	},
	{
		name: 'hero.subTitleColor',
		label: 'Sub Title Color',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'hero.btnText',
		label: 'Button Text',
		isRequired: true,
		type: 'text',
		endOfSection: true,
	},
];

export default data;
