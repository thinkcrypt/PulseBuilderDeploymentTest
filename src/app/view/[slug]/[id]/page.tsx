'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { Column, convertToViewFields, useGetByIdQuery } from '@/components/library';
import { schema } from '@/models';
import { ViewModalDataModelProps, Layout, ViewItem } from '@/components/library';

const ViewPage = () => {
	const { id, slug }: { id: string; slug: string } = useParams();

	return (
		<Layout
			title={slug?.toUpperCase()}
			path={slug}>
			{slug && id && (
				<ViewInfo
					slug={slug}
					id={id}
				/>
			)}
		</Layout>
	);
};

const ViewInfo = ({ slug, id }: { slug: string; id: string }) => {
	const viewFields = convertToViewFields({ schema: schema[slug] });

	const [fields, setFields] = React.useState<any[]>([]);

	const { data, isFetching, isError } = useGetByIdQuery(
		{
			path: slug,
			id: id,
		},
		{ skip: !id || !slug }
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

export default ViewPage;
