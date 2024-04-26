'use client';

import React from 'react';
import fields from './dataModel';
import FormPage from '@/components/library/create-page/page/FormPage';
import useFormData from '@/components/library/utils/functions/useFormData';
import { usePostMutation } from '@/store/services/commonApi';

const CreateEmployeePage = () => {
	const [trigger, result] = usePostMutation();
	const [formData, setFormData] = useFormData(fields);

	return (
		<FormPage
			useCommonApi={true}
			data={fields}
			formData={formData}
			setFormData={setFormData}
			trigger={trigger}
			result={result}
			path='leave'
			title='Create Leave'
		/>
	);
};

export default CreateEmployeePage;
