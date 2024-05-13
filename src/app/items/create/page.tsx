'use client';

import React from 'react';
import fields from './dataModel';
import FormPage from '@/components/library/create-page/page/FormPage';
import useFormData from '@/components/library/utils/functions/useFormData';
import { useAddProductMutation } from '@/store/services/productsApi';

const CreateItemsPage = () => {
	const [trigger, result] = useAddProductMutation();
	const [formData, setFormData] = useFormData(fields);

	return (
		<FormPage
			data={fields}
			formData={formData}
			setFormData={setFormData}
			trigger={trigger}
			result={result}
			path='items'
			title='Create Item'
		/>
	);
};

export default CreateItemsPage;
