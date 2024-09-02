export type CreateLayoutProps = {
	sectionTitle: string;
	fields: string[] | string[][];
}[];

type SchemaFieldTypes =
	| 'text'
	| 'checkbox'
	| 'date'
	| 'string'
	| 'textarea'
	| 'tag'
	| 'data-menu'
	| 'password'
	| 'select'
	| 'data-tag'
	| 'multi-select';

type SchemaField = {
	label?: string;
	title?: string;
	type:
		| 'text'
		| 'checkbox'
		| 'date'
		| 'string'
		| 'textarea'
		| 'tag'
		| 'data-menu'
		| 'password'
		| 'select'
		| 'data-tag'
		| 'permissions'
		| 'checkbox-menu'
		| 'multi-select';

	tableType?: 'text' | 'checkbox' | 'date' | 'string' | 'tag';
	sort?: boolean;
	displayInTable?: boolean;
	default?: boolean;
	isRequired?: boolean;
	viewType?: SchemaFieldTypes | 'array-tag';
	model?: string;
	required?: boolean;
	options?: { label: string; value: string }[];
	tableKey?: string;
	colorScheme?: (data: any) => string;
	dataModel?: any;
};

export type SchemaProps = {
	[key: string]: SchemaField;
};
