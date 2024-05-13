'use client';

import React from 'react';
import { NextPage } from 'next';
import { TableObjectProps } from '@/components/library/types';
import PageTable from '@/components/library/pages/page-tables/PageTable';
import createCollection from '@/lib/dataModels/createCollection.model';

const data: TableObjectProps = {
	title: 'Product Collections',
	path: 'collections',
	button: {
		title: 'Add Collection',
	},
	menu: [
		{
			title: 'Edit',
			type: 'edit',
		},
		{
			title: 'View',
			type: 'view',
		},
	],

	data: [
		{
			title: 'Name',
			dataKey: 'name',
			sort: 'name',
			// type: 'image-text',
			// imageKey: 'image',
			default: true,
		},
		// {
		// 	title: 'Key',
		// 	dataKey: 'dataKey',
		// 	sort: 'dataKey',
		// 	default: true,
		// },
		{
			title: 'isActive',
			dataKey: 'isActive',
			type: 'boolean',
			sort: 'isActive',
			default: true,
			editable: true,
		},
		{
			title: 'Priority',
			dataKey: 'priority',
			sort: 'priority',
			type: 'price',
			editable: true,
		},
		{ title: 'Created', dataKey: 'createdAt', type: 'date', sort: 'createdAt' },
		{ title: '...', type: 'menu' },
	],
};

const page: NextPage = () => {
	return (
		<PageTable
			table={data}
			isModal={true}
			inputFields={createCollection}
		/>
	);
};

export default page;
