type EditType = 'text' | 'number' | 'select' | 'boolean' | 'date';

type Options = {
	label: string;
	value: string;
}[];

type CommonProps = {
	date?: boolean;
	price?: boolean;
	type?:
		| 'date'
		| 'time'
		| 'date-only'
		| 'price'
		| 'boolean'
		| 'menu'
		| 'image-text'
		| 'checkbox'
		| 'tag';
	title?: string;
	sort?: string;
	dataKey?: string;
	image?: boolean;
	imageKey?: string;
	editable?: boolean;
	default?: boolean;
	style?: any;
	tagType?: { value?: string; color?: string }[];
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
	type?: 'date' | 'price' | 'boolean' | 'menu' | 'image-text' | 'checkbox' | 'tag' | 'string';
};

export type TableObjectProps = {
	title: string;
	path: string;
	filters?: string;
	button?: ButtonType;
	data: TableObjectDataProps[];
	menu?: {
		title: string;
		type: 'edit' | 'delete' | 'view' | 'view-modal';
		dataModel?: any;
	}[];
	preferences?: any;
	hidePreferences?: boolean;
};

export type InputDataType =
	| 'text'
	| 'number'
	| 'switch'
	| 'image'
	| 'date'
	| 'tag'
	| 'textarea'
	| 'select'
	| 'data-select'
	| 'data-menu'
	| 'checkbox'
	| 'multi-select'
	| 'radio'
	| 'nested-text'
	| 'nested-textarea'
	| 'view-only'
	| 'data-tag'
	| 'menu'
	| 'checkbox';

export type ModelType =
	| 'products'
	| 'brands'
	| 'categories'
	| 'users'
	| 'orders'
	| 'coupons'
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
