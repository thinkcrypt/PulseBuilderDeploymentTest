type TableDataFieldConverter = {
	schema: any;
	fields?: string[];
};

const createViewField = ({ key, field }: { key: string; field: any }): any => {
	let type = field?.type || 'string';
	if (field?.type == 'data-tag') type = 'data-array-tag';
	if (field?.type == 'text') type = 'string';

	return {
		title: field?.label || field?.title,
		dataKey: field?.tableKey || key,
		type: field?.type ? (field?.type == 'text' ? 'string' : field?.type) : 'string',
		...(field?.colorScheme && { colorScheme: field.colorScheme }),
	};
};

const convertToViewFields = ({ schema, fields }: TableDataFieldConverter): any[] => {
	const tableFields: any[] = [];

	const processField = (key: string) => {
		const field = schema[key];

		const tableField = createViewField({ key, field });
		tableFields.push(tableField);
	};

	// if (fields && fields.length > 0) {
	// 	fields.forEach(processField);
	// } else {
	Object.keys(schema).forEach(processField);
	// }

	//if (menu) tableFields.push({ title: '...', type: 'menu' });

	return tableFields;
};

export default convertToViewFields;
