export type CreateLayoutProps = {
	sectionTitle: string;
	fields: string[] | string[][];
}[];

type SchemaField = {
	label?: string;
	title?: string;
	type: 'text' | 'checkbox' | 'date' | 'string' | 'textarea' | 'tag';
	tableType?: 'text' | 'checkbox' | 'date' | 'string' | 'tag';
	sort?: boolean;
	displayInTable?: boolean;
	default?: boolean;
	isRequired?: boolean;
	required?: boolean;
	colorScheme?: (data: any) => string;
};

export type SchemaProps = {
	[key: string]: SchemaField;
};
