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
	{ label: 'Bebas Neue', value: 'Bebas Neue' },
	{ label: 'Inter', value: 'Inter' },
	{ label: 'Lato', value: 'Lato' },
	{ label: 'Marcellus', value: 'Marcellus' },
	{ label: 'Montserrat', value: 'Montserrat' },
	{ label: 'Montserrat', value: 'Montserrat' },
	{ label: 'Open Sans', value: 'Open Sans' },
	{ label: 'Oswald', value: 'Oswald' },
	{ label: 'Playfair Display', value: 'Playfair Display' },
	{ label: 'Poppins', value: 'Poppins' },
	{ label: 'Raleway', value: 'Raleway' },
	{ label: 'Roboto', value: 'Roboto' },
	{ label: 'Roboto Mono', value: 'Roboto Mono' },
];

export type HomeContentProps = {
	content: any;
	dataModel: any;
	path: any;
};
