'use client';

import React from 'react';
import fields from './dataModel';
import FormPage from '@/components/library/create-page/page/FormPage';
import useFormData from '@/components/library/utils/functions/useFormData';
import { useRegisterMutation } from '@/store/services/authApi';

const CreateEmployeePage = () => {
	const [trigger, result] = useRegisterMutation();
	const [formData, setFormData] = useFormData(fields);

	return (
		<FormPage
			data={fields}
			formData={formData}
			setFormData={setFormData}
			trigger={trigger}
			result={result}
			path='employees'
			title='Create Employee'
		/>
	);
};

export default CreateEmployeePage;
