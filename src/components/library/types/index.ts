import { ButtonProps, FlexProps, GridProps, TableCellProps, TextProps } from '@chakra-ui/react';
export type { CustomTableProps } from './components.types';
import { MenuItem, SelectmenuItem } from './table';

export type { MenuItem as MenuItemProps, SelectmenuItem as SelectmenuItemProps } from './table';

export type { default as Schema } from './schema.types';

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
	heading?: string;
	editable?: boolean;
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

type CommonButton = {
	title: string;
	icon?: string;
	path?: never;
	isModal?: true;
	dataModel?: any;
};

type RedirectButton = {
	title: string;
	icon?: string;
	path: string;
	isModal?: never;
	dataModel?: never;
	prompt?: never;
};

type ModalButton = {
	title: string;
	icon?: string;
	path?: never;
	isModal: true;
	dataModel: any;
	prompt?: PromptType;
};

type ButtonType = CommonButton | RedirectButton | ModalButton;

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

export type FormLayout = { sectionTitle: string; fields: any[] }[];

export type TableObjectProps = {
	title: string;
	path: string;
	data: TableObjectDataProps[];
	filters?: boolean;
	button?: ButtonType;
	pagination?: boolean;
	clickable?: boolean;
	toPath?: string;
	isModal?: boolean;
	invalidate?: any;
	createModel?: any;
	export?: boolean;
	menu?: MenuItem[];
	select?: SelectDataType;
	preferences?: any;
	hidePreferences?: boolean;
	search?: boolean;
	showMenu?: boolean;
	topPagination?: boolean;
	limit?: number;
	preFilters?: any;
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
	value?: any;
	getValue?: (doc: any) => any;
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

export type PromptType = {
	title: string;
	body?: string;
	btnText?: string;
	successMsg?: string;
};

export type { SchemaType } from './schema.types';
