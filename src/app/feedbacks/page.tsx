'use client';

import React from 'react';
import { NextPage } from 'next';
import { TableObjectProps, ViewModalDataModelProps } from '@/components/library/types';
import PageTable from '@/components/library/pages/page-tables/PageTable';

const viewDataModel: ViewModalDataModelProps[] = [
	{
		title: 'Customer Name',
		dataKey: 'name',
		type: 'string',
	},
	{ title: 'Customer Email', dataKey: 'email', type: 'string' },
	{ title: 'Customer Phone', dataKey: 'phone', type: 'string' },
	{ title: 'Rating', dataKey: 'rating', type: 'string' },
	{ title: 'Feedback', dataKey: 'description', type: 'string' },
	{ title: 'Created', dataKey: 'createdAt', type: 'date' },
];

const data: TableObjectProps = {
	title: 'Feedbacks',
	path: 'feedbacks',

	menu: [
		{
			title: 'View',
			type: 'view-modal',
			dataModel: viewDataModel,
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
