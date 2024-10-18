'use client';
import React from 'react';
import { NextPage } from 'next';
import {
	convertToTableFields,
	convertToViewFields,
	PageTable,
	TableObjectProps,
} from '@/components/library';
import schema from '@/models/purchase/purchase.schema';

const fields = [
	'invoice',
	'supplier',
	'date',
	'status',
	// 'totalItems',
	'total',
	'subTotal',
	'shippingCost',
	'isDelivered',
	'addedBy',
];

const tableFields = convertToTableFields({
	schema,
	fields,
});

const viewFields = convertToViewFields({ schema, fields });

const table: TableObjectProps = {
	title: 'Purchases',
	path: 'purchases',
	button: {
		title: 'Add Purchase',
		path: '/purchases/add',
	},
	hidePreferences: false,
	data: tableFields,
	menu: [
		{
			type: 'view-modal',
			title: 'View Details',
			dataModel: viewFields,
		},
	],
};

const page: NextPage = () => {
	return <PageTable table={table} />;
};

export default page;
