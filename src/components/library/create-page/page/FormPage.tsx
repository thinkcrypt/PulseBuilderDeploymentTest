'use client';

import React, { FC, FormEvent, useState } from 'react';
import CreateBody from '@/components/nav/CreateBody';
import CreateNav from '@/components/nav/CreateNav';
import FormSection from '@/components/containers/FormSection';
import useRedirect from '@/hooks/useRedirect';
import useCustomToast from '@/hooks/useCustomToast';
import FormInput from '@/components/library/create-page/inputs/form-input/FormInput';
import FormItem from '@/components/library/create-page/form-section/FormItem';
import FormDivision from '../form-section/FormDivision';
import { usePostMutation } from '@/store/services/commonApi';

type FormPageType = {
	formData: any;
	setFormData: any;
	trigger: any;
	result: any;
	path: string;
	data: any[];
	title: string;
	type?: 'add' | 'update';
	id?: string;
	useCommonApi?: boolean;
};

const FormPage: FC<FormPageType> = ({
	formData,
	setFormData,
	trigger,
	result,
	path,
	data,
	title,
	type,
	id,
	useCommonApi,
}) => {
	const { isSuccess, isLoading, isError, error } = result;
	const [changedData, setChangedData] = useState({});

	const sections = React.useMemo(() => {
		let section: any[] = [];
		let sections: any[][] = [];

		data.forEach((field: any, i: number) => {
			section.push(field);

			if (field.endOfSection || i === data.length - 1) {
				sections.push(section);
				section = [];
			}
		});

		return sections;
	}, [data]);

	useRedirect({ isSuccess, isLoading, path: `/${path}` });
	useCustomToast({
		successText: type == 'update' ? 'Information Updated Successfully' : 'Item added successfully',
		isSuccess,
		isError,
		isLoading: isLoading,
		error: error,
	});

	const handleChange = (e: any) => {
		if (e.target.name.includes('.')) {
			const [parent, child] = e.target.name.split('.');
			setFormData((prevState: any) => ({
				...prevState,
				[parent]: {
					...prevState[parent],
					[child]: e.target.value,
				},
			}));
			setChangedData((prevState: any) => ({
				...prevState,
				[parent]: {
					...formData[parent],
					[child]: e.target.value,
				},
			}));
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
			setChangedData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
		}
	};

	const handleSwitch = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.checked });
		setChangedData(prevState => ({ ...prevState, [e.target.name]: e.target.checked }));
	};

	const handleImage = (e: any) => {
		setChangedData(prevState => ({ ...prevState, image: e }));
		setFormData({ ...formData, image: e });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (type === 'update') {
			trigger({ path, id, body: changedData });
			return;
		} else {
			if (useCommonApi) {
				trigger({ path, body: formData });
			} else {
				trigger(formData);
			}
		}
	};

	const getFieldValue = (name: string) => {
		const parentProperty = name?.split('.')[0];
		const childProperty = name?.split('.')[1];
		const value =
			name?.includes('.') && formData[parentProperty]
				? formData[parentProperty][childProperty]
				: formData[name];

		return value;
	};

	const getOnChangeHandler = (type: string) => {
		switch (type) {
			case 'image':
				return handleImage;
			case 'switch':
				return handleSwitch;
			case 'checkbox':
				return handleSwitch;

			default:
				return handleChange;
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CreateNav
				isLoading={isLoading}
				title={`${title}`}
				path={path}
			/>
			<CreateBody>
				<FormSection>
					{sections.map((section: any, i: number) => (
						<FormDivision key={i}>
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
											value={getFieldValue(item?.name)}
											onChange={getOnChangeHandler(item?.type)}
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
				</FormSection>
			</CreateBody>
		</form>
	);
};

export default FormPage;
