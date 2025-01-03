'use client';
//fundtions and hooks

export * from './hooks';
export * from './functions';

export * from './config';
export * as theme from './config';

export type ThemeProps = {
	TABLE: any;
	SIDEBAR: any;
};

//components
export * from './containers';

export * from './icon';

export * from './wrappers';

export * from './cms';

export * from './menu';
export * from './components';

export * from './nav';
export * from './utils/inputs';
export * from './utils/texts';

export * from './stat';

export * from './detail';
export { default as HeadingMenu } from './settings/heading-menu/HeadingMenu';

export { default as PageTable } from './pages/page-tables/PageTable';

export type * from './types';
export * from './utils/functions/handlers';

export * from './view';

export * from './components/table';

export * from './dynamic-filters/filters';

export { default as DynamicFilters } from './dynamic-filters/DynamicFilters';

export * from './create-page';
export * from './components/buttons';
export * from './modals';
export { Label, HelperText } from './form';
//export { OrderModal } from './pos';

export * from './store';
export * from './model';

export * from './model/types';
export * from './content';
export * from './components/skeleton';
export * from './page';
export * from './pos';
export * from './settings';

export const fontOptions = [
	{ label: 'Anton', value: 'Anton' },
	{ label: 'Arimo', value: 'Arimo' },
	{ label: 'Atma', value: 'Atma' },
	{ label: 'Barlow', value: 'Barlow' },
	{ label: 'Barlow Condensed', value: 'Barlow Condensed' },
	{ label: 'Bebas Neue', value: 'Bebas Neue' },
	{ label: 'Caveat', value: 'Caveat' },
	{ label: 'Comfortaa', value: 'Comfortaa' },
	{ label: 'Cormorant Garamond', value: 'Cormorant Garamond' },
	{ label: 'Dosis', value: 'Dosis' },
	{ label: 'EB Garamond', value: 'EB Garamond' },
	{ label: 'Exo 2', value: 'Exo 2' },
	{ label: 'Inter', value: 'Inter' },
	{ label: 'Lato', value: 'Lato' },
	{ label: 'Libre Baskerville', value: 'Libre Baskerville' },
	{ label: 'Lora', value: 'Lora' },
	{ label: 'Marcellus', value: 'Marcellus' },
	{ label: 'Merriweather', value: 'Merriweather' },
	{ label: 'Michroma', value: 'Michroma' },
	{ label: 'Montserrat', value: 'Montserrat' },
	{ label: 'Mulish', value: 'Mulish' },
	{ label: 'Noto Serif', value: 'Noto Serif' },
	{ label: 'Open Sans', value: 'Open Sans' },
	{ label: 'Orbitron', value: 'Orbitron' },
	{ label: 'Oswald', value: 'Oswald' },
	{ label: 'Outfit', value: 'Outfit' },
	{ label: 'Playfair Display', value: 'Playfair Display' },
	{ label: 'Poppins', value: 'Poppins' },
	{ label: 'PT Serif', value: 'PT Serif' },
	{ label: 'Quicksand', value: 'Quicksand' },
	{ label: 'Raleway', value: 'Raleway' },
	{ label: 'Roboto', value: 'Roboto' },
	{ label: 'Roboto Condensed', value: 'Roboto Condensed' },
	{ label: 'Roboto Mono', value: 'Roboto Mono' },
	{ label: 'Rubik', value: 'Rubik' },
	{ label: 'Source Code Pro', value: 'Source Code Pro' },
	{ label: 'Space Grotesk', value: 'Space Grotesk' },
	{ label: 'Syncopate', value: 'Syncopate' },
	{ label: 'Tomorrow', value: 'Tomorrow' },
	{ label: 'Work Sans', value: 'Work Sans' },
];

export const fontWeightOptions = [
	{
		label: '100',
		value: 100,
	},
	{
		label: '200',
		value: 200,
	},
	{
		label: '300',
		value: 300,
	},
	{
		label: '400',
		value: 400,
	},
	{
		label: '500',
		value: 500,
	},
	{
		label: '600',
		value: 600,
	},
	{
		label: '700',
		value: 700,
	},
	{
		label: '800',
		value: 800,
	},
	{
		label: '900',
		value: 900,
	},
];

export const alignmentOptions = [
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
];

const BASE_LIMIT = 16;
export const SHOW_PER_PAGE_OPTIONS = [
	{ value: BASE_LIMIT, label: BASE_LIMIT },
	{ value: BASE_LIMIT * 2, label: BASE_LIMIT * 2 },
	{ value: 50, label: 50 },
	{ value: 100, label: 100 },
	{ value: 250, label: 250 },
	{ value: 999, label: 999 },
];

export type HomeContentProps = {
	content: any;
	dataModel: any;
	path: any;
	data?: any;
};
