'use client';

import { useGetSelfQuery } from '@/store/services/authApi';
import React, { useEffect, useState } from 'react';
import {
	useCustomToast,
	Details,
	SettingsEditContainer,
	useUpdateByIdMutation,
} from '@/components/library';
import moment from 'moment';

const StoreEdit = () => {
	const { data, isFetching } = useGetSelfQuery({});
	const [editing, setEditing] = useState(false);

	const [updateSelf, result] = useUpdateByIdMutation();

	const [formData, setFormData] = useState<any>({
		name: '',
		email: '',
		phone: '',
		description: '',
		expire: '',
	});

	const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const refresh = () =>
		setFormData({
			name: data?.shop?.name || '',
			email: data?.shop?.email || '',
			phone: data?.shop?.phone || '',
			description: data?.shop?.description || '',
			expire: data?.shop?.expire || '',
		});

	const handleSubmit = (e: any) => {
		e.preventDefault();

		updateSelf({
			path: '/auth/update/shop',
			id: data?.shop?._id,
			invalidate: ['self'],
			body: {
				name: formData?.name,
				phone: formData?.phone,
				description: formData?.description,
			},
		});
	};

	const closeEdit = () => {
		setEditing(false);
		refresh();
	};
	const openEdit = () => setEditing(true);

	useEffect(() => {
		if (!isFetching && data) {
			refresh();
		}
	}, [data]);

	useEffect(() => {
		if (!result?.isLoading && result?.isSuccess) {
			setEditing(false);
			refresh();
		}
	}, [result?.isLoading]);

	useCustomToast({
		...result,
		successText: 'Store Details updated successfully',
	});

	return (
		<SettingsEditContainer
			handleSubmit={handleSubmit}
			isLoading={result?.isLoading}
			openEdit={openEdit}
			heading='Shop Details'
			closeEdit={closeEdit}
			editing={editing}>
			<Details
				editing={editing}
				title='Shop Name'
				name='name'
				onChange={handleChange}>
				{formData?.name}
			</Details>
			<Details
				editing={editing}
				title='Email'
				name='email'
				isDisabled>
				{formData?.email}
			</Details>
			<Details
				editing={editing}
				title='Phone'
				name='phone'
				onChange={handleChange}>
				{formData?.phone}
			</Details>
			<Details
				editing={editing}
				title='Expire'
				isDisabled
				name='expire'>
				{moment(formData?.expire).format('DD-MM-YYYY') || '--'}
			</Details>
			<Details
				editing={editing}
				title='Description'
				name='description'
				onChange={handleChange}
				type='textarea'>
				{formData?.description}
			</Details>
		</SettingsEditContainer>
	);
};

export default StoreEdit;
