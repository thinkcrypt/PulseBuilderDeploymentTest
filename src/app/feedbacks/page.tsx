'use client';

import React from 'react';
import { NextPage } from 'next';
import { TableObjectProps } from '@/components/library/types';
import PageTable from '@/components/library/pages/page-tables/PageTable';

const data: TableObjectProps = {
	title: 'Feedbacks',
	path: 'feedbacks',
	// button: {
	// 	title: 'Add Category',
	// 	path: '/categories/create',
	// },
	menu: [
		// {
		// 	title: 'Edit',
		// 	type: 'edit',
		// },
		{
			title: 'View',
			type: 'view-modal',
		},
	],

	data: [
		{
			title: 'Customer',
			dataKey: 'name',
			sort: 'name',
			default: true,
		},
		{
			title: 'Phone',
			dataKey: 'phone',
			default: true,
		},
		{
			title: 'Email',
			dataKey: 'email',
			default: true,
		},
		{ title: 'Rating', dataKey: 'rating', sort: 'rating', default: true },

		{ title: 'Created', dataKey: 'createdAt', type: 'date', sort: 'createdAt' },
		{ title: '...', type: 'menu' },
	],
};

const page: NextPage = () => {
	return <PageTable table={data} />;
};

export default page;
