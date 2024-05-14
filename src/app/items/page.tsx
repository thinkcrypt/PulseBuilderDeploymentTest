'use client';

import React from 'react';
import { NextPage } from 'next';
import { TableObjectProps } from '@/components/library/types';
import PageTable from '@/components/library/pages/page-tables/PageTable';

const data: TableObjectProps = {
	title: 'Items',
	path: 'items',
	button: {
		title: 'Add Item',
		path: '/items/create',
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
			sort: 'name',
			type: 'image-text',
			dataKey: 'name',
			imageKey: 'image',
			default: true,
		},
		{ title: 'Category', dataKey: 'category.name', default: true },

		{
			title: 'Price',
			dataKey: 'price',
			sort: 'price',
			default: true,
			editable: true,
		},

		{
			title: 'isActive',
			dataKey: 'isActive',
			type: 'boolean',
			sort: 'isActive',
			default: true,
			editable: true,
		},
		{
			title: 'Is Discount?',
			dataKey: 'isDiscount',
			type: 'boolean',
			sort: 'isDiscount',
			default: true,
			editable: true,
		},
		{
			title: 'After Discount',
			dataKey: 'discountPrice',
			sort: 'discountPrice',
			default: true,
			editable: true,
		},
		{ title: 'Created', dataKey: 'createdAt', type: 'date', sort: 'createdAt' },
		{ title: '...', type: 'menu' },
	],
};

const page: NextPage = () => {
	return <PageTable table={data} />;
};

export default page;
