'use client';

import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { useGetSelfQuery, useRegisterMutation } from '@/store/services/authApi';
import Column from '@/components/containers/Column';
import Details from '@/components/library/detail/Details';
import HeadingMenu from '@/components/library/settings/heading-menu/HeadingMenu';
import QrComponent from './_components/QrComponent';

const SettingsPage = () => {
	const { data, isFetching } = useGetSelfQuery({});

	const [trigger, result] = useRegisterMutation();

	const [formData, setFormData] = useState<any>({});

	const refresh = () => {
		setFormData({
			name: data?.restaurant?.name || '',
			email: data?.restaurant?.email || '',
			template: data?.restaurant?.template || '',
		});
	};

	const [editing, setEditing] = useState(false);

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	const close = () => {
		setEditing(false);
		refresh();
	};
	const open = () => setEditing(true);

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

	if (!data) return null;
	return (
		<Layout
			title={'Settings'}
			path={'/settings'}>
			<Column>
				<form onSubmit={handleSubmit}>
					<Column gap={4}>
						<HeadingMenu
							open={open}
							close={close}
							title='Restaurant Details'
							editing={editing}
							isLoading={false}>
							<Details
								editing={editing}
								title='Name'
								onChange={handleChange}
								name='name'>
								{formData?.name}
							</Details>
							<Details
								editing={editing}
								onChange={handleChange}
								title='Email'
								isDisabled>
								{formData?.email}
							</Details>
							<Details
								editing={editing}
								type='number'
								onChange={handleChange}
								title='Template'>
								{formData?.template}
							</Details>
						</HeadingMenu>
					</Column>
				</form>

				<QrComponent id={data?.restaurant?._id} />
			</Column>
		</Layout>
	);
};

export default SettingsPage;
