'use client';
import data from './dataModel';
import React from 'react';
import useCustomToast from '@/components/library/hooks/useCustomToast';
import { usePostMutation } from '@/store/services/commonApi';
import fields from './dataModel';
import useFormData from '@/components/library/utils/functions/useFormData';
import ColorMode from '@/components/color-mode/ColorMode';
import FormDivision from '@/components/library/create-page/form-section/FormDivision';
import FormItem from '@/components/library/create-page/form-section/FormItem';
import FormInput from '@/components/library/create-page/inputs/form-input/FormInput';
import useRedirect from '@/hooks/useRedirect';
import generateFormSections from '@/components/library/hooks/generateFormSections';
import getFieldValue from '@/components/library/hooks/getFieldValues';
import UserFormContainer from '@/components/user-component/UserFormContainer';

const AttendancePage: any = () => {
	const [trigger, result] = usePostMutation();
	const { isSuccess, isError, isLoading, error } = result;

	const [formData, setFormData] = useFormData<any>(fields);

	useCustomToast({
		successText: 'Leave request Submitted successfully',
		isSuccess,
		isError,
		isLoading: isLoading,
		error: error,
	});

	useRedirect({
		isSuccess,
		path: `/leave-request/success?tid=${result?.data?.trackingId}`,
		isLoading,
	});

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sections = generateFormSections(data);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		trigger({ path: 'leave', body: formData });
	};

	return (
		<UserFormContainer
			title='Leave Request'
			isLoading={isLoading}
			handleSubmit={handleSubmit}>
			<>
				{sections.map((section: any, i: number) => (
					<FormDivision
						key={i}
						w='full'
						p='0'
						border='none'>
						{section?.map((item: any, i: number) => (
							<FormItem
								item={item}
								key={i}>
								{(!item?.renderCondition || item?.renderCondition(formData)) && (
									<FormInput
										isRequired={item?.isRequired || false}
										name={item?.name}
										label={item?.label}
										type={item?.type}
										value={getFieldValue({ name: item?.name, formData })}
										onChange={handleChange}
										model={item?.model}
										placeholder={item?.placeholder}
										options={item?.options}
										dataModel={item?.dataModel}
									/>
								)}
							</FormItem>
						))}
					</FormDivision>
				))}
			</>
			<ColorMode />
		</UserFormContainer>
	);
};

export default AttendancePage;
