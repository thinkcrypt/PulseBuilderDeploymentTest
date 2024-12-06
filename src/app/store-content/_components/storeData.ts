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
		type: 'text',
	},
	{
		name: 'brandTextColor',
		label: 'Brand Text Color',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'primaryTextColor',
		label: 'Primary Text Color',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'secondaryTextColor',
		label: 'Secondary Text Color',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'headerBg',
		label: 'Header Background Color',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'headerFg',
		label: 'Header Foreground Color',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'headerBorder',
		label: 'Header Border Color',
		type: 'text',
	},
];

export default data;
