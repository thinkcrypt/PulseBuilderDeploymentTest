'use client';

import React from 'react';
import { InputData } from '@/components/library/types';
import FormPage from '@/components/library/create-page/page/FormPage';
import useFormData from '@/components/library/utils/functions/useFormData';
import { useParams } from 'next/navigation';
import { useGetByIdQuery, useUpdateByIdMutation } from '@/store/services/commonApi';

const inputFields: any = [
	{
		sectionTitle: 'Product Image',
		name: 'image',
		label: 'Image',
		isRequired: false,
		type: 'image',
		endOfSection: true,
	},
	{
		name: 'name',
		label: 'Name',
		isRequired: true,
		type: 'text',
	},
	{
		label: 'Item Price',
		name: 'price',
		isRequired: true,
		type: 'number',
	},
	{
		name: 'time',
		label: 'Cooking Time',
		isRequired: false,
		type: 'number',
	},
	{
		name: 'description',
		label: 'Short Description',
		isRequired: false,
		type: 'textarea',
	},
	{
		name: 'longDescription',
		label: 'Long Description',
		isRequired: false,
		type: 'textarea',
	},
	{
		name: 'category',
		label: 'Item Category',
		isRequired: true,
		type: 'data-select',
		model: 'categories',
	},

	{
		sectionTitle: 'Product Collections',
		name: 'collection',
		label: 'Add to collections',
		isRequired: false,
		type: 'data-tag',
		model: 'collections',
	},
	{
		name: 'tags',
		label: 'Add Tags',
		isRequired: false,
		type: 'tag',
	},
];

const EditItemPage = () => {
	const { id } = useParams<{ id: string }>();
	const { data } = useGetByIdQuery({ path: 'items', id: id }, { skip: !id });
	const [formData, setFormData] = useFormData<any>(inputFields, data);

	const [trigger, result] = useUpdateByIdMutation();

	return (
		<>
			<FormPage
				data={inputFields}
				formData={formData}
				setFormData={setFormData}
				trigger={trigger}
				result={result}
				path='items'
				title='Update Menu Item'
				type='update'
				id={id}
			/>
		</>
	);
};

export default EditItemPage;
