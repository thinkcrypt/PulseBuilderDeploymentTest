'use client';
import React from 'react';
import { NextPage } from 'next';
import {
	convertToFormFields,
	convertToTableFields,
	convertToViewFields,
	PageTable,
	TableObjectProps,
} from '@/components/library';
import { locationSchema as schema } from '@/models';

const form = convertToFormFields({
	schema,
	layout: [
		{
			sectionTitle: 'Basic Info',
			fields: ['name', ['phone', 'email'], 'address'],
		},
		{
			sectionTitle: 'description',
			fields: ['description'],
		},
	],
});

const viewModel = convertToViewFields({
	schema,
	fields: ['name', 'phone', 'email', 'address', 'createdAt'],
});

const table: TableObjectProps = {
	title: 'Locations',
	data: convertToTableFields({
		schema,
		fields: ['name', 'phone', 'email', 'createdAt'],
	}),
	path: 'locations',
	button: {
		title: 'Add Location',
		isModal: true,
		dataModel: form,
		prompt: {
			title: 'Add New Location',
		},
	},
	menu: [
		{
			title: 'View',
			type: 'view-modal',
			dataModel: viewModel,
		},
		{
			title: 'Edit',
			type: 'edit-modal',
			dataModel: form,
		},
	],
};

const page: NextPage = () => {
	return <PageTable table={table} />;
};

export default page;
