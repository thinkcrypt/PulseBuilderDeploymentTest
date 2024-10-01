import { ButtonProps, FlexProps, GridProps, TableCellProps, TextProps } from '@chakra-ui/react';
export type { CustomTableProps } from './components.types';
import { MenuItem, SelectmenuItem } from './table';

export type { MenuItem as MenuItemProps, SelectmenuItem as SelectmenuItemProps } from './table';

import { InputDataType } from './data-types';
export type { InputDataType } from './data-types';

import { ViewDataType, TableDataFieldType } from './data-types';
import { ReactNode } from 'react';
export type { ViewDataType, TableDataFieldType } from './data-types';

export type SidebarItemType = {
	title: string;
	href: string;
	icon: string;
	path: string;
	startOfSection?: boolean;
	sectionTitle?: string;
};

export type TableItemProps = {
	title: string;
	sort?: string;
	dataKey?: any;
};

export type TableDataProps = TableCellProps & {
	children: any;
	date?: boolean;
	price?: boolean;
	src?: string;
	type?: string;
};

type EditType = 'text' | 'number' | 'select' | 'boolean' | 'date';

type Options = {
	label: string;
	value: string;
}[];

type CommonProps = {
	date?: boolean;
	price?: boolean;
	type?: TableDataFieldType;
	title?: string;
	sort?: string;
	dataKey?: string;
	image?: boolean;
	imageKey?: string;
	editable?: boolean;
	default?: boolean;
	style?: any;
	tagType?: { value?: string; color?: string }[];
	colorScheme?: any;
	helperText?: string;
	toLocaleStr?: boolean;
};

type SelectProps = CommonProps & {
	editType: 'select';
	options: Options;
};

type NonSelectProps = CommonProps & {
	editType?: Exclude<EditType, 'select'>;
};

export type TableObjectDataProps = SelectProps | NonSelectProps;

type ButtonType = {
	title: string;
	path?: string;
};

/**
 * Data Modal for the
 * View Modal
 * When the user clicks on the view button
 * on the table, if the type is view-modal
 * this data model will be used to display
 */

export type ViewModalDataModelProps = {
	title: string;
	dataKey: string;
	type?: ViewDataType;
	colorScheme?: any;
	path?: string;
};

export type SelectDataType = {
	show: boolean;
	menu: SelectmenuItem[];
};

export type TableObjectProps = {
	title: string;
	path: string;
	filters?: boolean;
	button?: ButtonType;
	pagination?: boolean;
	clickable?: boolean;
	toPath?: string;
	isModal?: boolean;
	createModel?: any;
	data: TableObjectDataProps[];
	export?: boolean;
	menu?: MenuItem[];
	select?: SelectDataType;
	preferences?: any;
	hidePreferences?: boolean;
	search?: boolean;
	showMenu?: boolean;
	limit?: number;
};

export type ModelType =
	| 'products'
	| 'brands'
	| 'categories'
	| 'users'
	| 'orders'
	| 'coupons'
	| 'customers'
	| 'collections';

type BaseInputData<T> = {
	name: string;
	label: string;
	isRequired?: boolean;
	placeholder?: string;
	renderCondition?: (formData: T) => boolean;
	span?: number;
	options?: { label: string; value: string }[];
	startOfSection?: boolean;
	sectionTitle?: string;
	endOfSection?: boolean;
	object?: boolean;
	dataModel?: any;
};

type DataSelectInputData<T> = BaseInputData<T> & {
	type: 'data-select' | 'data-tag' | 'data-menu';
	model: ModelType;
};

type OtherInputData<T> = BaseInputData<T> & {
	type: Exclude<InputDataType, 'data-select'>;
};

export type InputData<T> = DataSelectInputData<T> | OtherInputData<T>;

export type FlexChild = FlexProps & {
	children?: ReactNode;
};

export type GridChild = GridProps & {
	children?: ReactNode;
};

export type ButtonChild = ButtonProps & {
	children?: ReactNode;
};

export type TextChild = TextProps & {
	children?: ReactNode;
};
