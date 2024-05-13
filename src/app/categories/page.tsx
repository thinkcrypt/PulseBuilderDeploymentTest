'use client';

import React from 'react';
import { NextPage } from 'next';
import { TableObjectProps } from '@/components/library/types';
import PageTable from '@/components/library/pages/page-tables/PageTable';

const data: TableObjectProps = {
	title: 'Categories',
	path: 'categories',
	button: {
		title: 'Add Category',
		path: '/categories/create',
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
			default: true,
		},
		{ title: 'Priority', dataKey: 'priority', sort: 'priority', default: true, editable: true },

		{ title: 'isActive', dataKey: 'isActive', type: 'boolean', sort: 'isActive', default: true },
		{ title: 'Created', dataKey: 'createdAt', type: 'date', sort: 'createdAt' },
		{ title: '...', type: 'menu' },
	],
};

const page: NextPage = () => {
	return <PageTable table={data} />;
};

export default page;
