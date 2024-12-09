const fontOptions = [
	{ label: 'Playfair Display', value: 'Playfair Display' },
	{ label: 'Inter', value: 'Inter' },
	{ label: 'Roboto Mono', value: 'Roboto Mono' },
	{ label: 'Roboto', value: 'Roboto' },
	{ label: 'Montserrat', value: 'Montserrat' },
	{ label: 'Open Sans', value: 'Open Sans' },
	{ label: 'Lato', value: 'Lato' },
	{ label: 'Oswald', value: 'Oswald' },
	{ label: 'Raleway', value: 'Raleway' },
	{ label: 'Bebas Neue', value: 'Bebas Neue' },
	{ label: 'Montserrat', value: 'Montserrat' },
	{
		label: 'Poppins',
		value: 'Poppins',
	},
];

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
	{
		name: 'headerBg',
		label: 'Header Background Color',
		isRequired: true,
		type: 'color',
	},
	{
		name: 'headerFg',
		label: 'Header Foreground Color',
		isRequired: true,
		type: 'color',
	},
	{
		name: 'headerBorder',
		label: 'Header Border Color',
		type: 'color',
	},
	{
		name: 'footerBg',
		label: 'Footer Background Color',
		type: 'color',
	},
	{
		name: 'footerFg',
		label: 'Footer Foreground Color',
		type: 'color',
	},
	{
		name: 'footerBannerBg',
		label: 'Footer Banner Background Color',
		type: 'color',
	},
	{
		name: 'footerBannerFg',
		label: 'Footer Banner Foreground Color',
		type: 'color',
	},
];

export default data;
