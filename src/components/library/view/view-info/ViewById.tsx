import React from 'react';

import {
	ViewModalDataModelProps,
	ViewItem,
	Column,
	convertToViewFields,
	useGetByIdQuery,
} from '../..';

const ViewById = ({ path, id, schema }: { path: string; id: string; schema: any }) => {
	const viewFields = convertToViewFields({ schema: schema });

	const { data, isFetching, isError } = useGetByIdQuery(
		{
			path: path,
			id: id,
		},
		{ skip: !id || !path }
	);

	const getValue = (dataKey: string, type: any): any => {
		if (!data) return;
		// Split the dataKey by '.' to determine if it's nested
		const keys = dataKey?.split('.');
		// Determine the appropriate value based on whether the key is nested
		let value = 'n/a';
		if (keys?.length === 1) {
			// Single level key, directly access the value
			value = type === 'date' ? new Date(data[dataKey]) : data[dataKey];
		} else if (keys?.length === 2) {
			// Nested key, access the nested value
			const [parentKey, childKey] = keys;
			value = type === 'date' ? new Date(data[parentKey]?.[childKey]) : data[parentKey]?.[childKey];
		}
		return value;
	};
	return (
		<Column
			gap={4}
			pt={2}>
			{viewFields.map((item: ViewModalDataModelProps, i: number) => {
				const { title, dataKey, type, colorScheme, path } = item;

				return (
					<ViewItem
						isLoading={isFetching}
						title={title}
						type={type}
						colorScheme={colorScheme}
						path={path}
						key={i}>
						{data && getValue(dataKey, type)}
					</ViewItem>
				);
			})}
		</Column>
	);
};

export default ViewById;
