const createFormFields = ({ schema, layout }: any): any[] => {
	const dataFields: any[] = [];

	layout.forEach((section: any) => {
		const { sectionTitle, fields } = section;

		fields.forEach((field: any, index: number) => {
			const lastElement = index === fields.length - 1;
			const firstIndex = index === 0;

			if (Array.isArray(field)) {
				field.forEach((subField: any, subIndex: number) => {
					const fieldConfig = schema[subField];
					const lastSubIndex = subIndex === field.length - 1;
					if (fieldConfig) {
						dataFields.push({
							...(firstIndex && { sectionTitle: sectionTitle }),
							name: subField,
							label: fieldConfig.label || fieldConfig.title,
							isRequired: fieldConfig.isRequired || fieldConfig.required || false,
							type: fieldConfig.type,
							...(fieldConfig.placeholder && { placeholder: fieldConfig.placeholder }),
							...(fieldConfig.options && { options: fieldConfig.options }),
							...(fieldConfig.model && { model: fieldConfig.model }),
							...(fieldConfig.dataModel && { dataModel: fieldConfig.model }),
							span: 1,
							endOfSection: lastElement && lastSubIndex,
						});
					}
				});
			} else {
				const fieldConfig = schema[field];
				if (fieldConfig) {
					dataFields.push({
						...(firstIndex && { sectionTitle: sectionTitle }),
						name: field,
						label: fieldConfig.label || fieldConfig.title,
						isRequired: fieldConfig.isRequired || fieldConfig.required || false,
						type: fieldConfig.type,
						...(fieldConfig.placeholder && { placeholder: fieldConfig.placeholder }),
						...(fieldConfig.options && { options: fieldConfig.options }),
						...(fieldConfig.model && { model: fieldConfig.model }),
						...(fieldConfig.dataModel && { dataModel: fieldConfig.dataModel }),
						endOfSection: lastElement,
					});
				}
			}
		});
	});

	return dataFields;
};

export default createFormFields;
