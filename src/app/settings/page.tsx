'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button, Flex } from '@chakra-ui/react';

import { useUpdateByIdMutation } from '@/store/services/commonApi';
import { useGetSelfQuery } from '@/store/services/authApi';

import QrComponent from './_components/QrComponent';

import { Layout, Column, VImage, Details, HeadingMenu, useCustomToast } from '@/components/library';

const SettingsPage = () => {
	const { data, isFetching } = useGetSelfQuery({});

	const [trigger, result] = useUpdateByIdMutation();

	const [formData, setFormData] = useState<any>({});

	const refresh = () => {
		setFormData({
			name: data?.restaurant?.name || '',
			email: data?.restaurant?.email || '',
			image: data?.restaurant?.image || '',
		});
	};

	const [editing, setEditing] = useState(false);

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		trigger({ body: formData, path: 'restaurant', invalidate: 'self', id: data?.restaurant?._id });
	};

	const handleImage = (e: any) => {
		//setChangedData(prevState => ({ ...prevState, image: e }));
		setFormData({ ...formData, image: e });
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
	useCustomToast({
		isLoading: result?.isLoading,
		isError: result?.isError,
		error: result?.error,
		isSuccess: result?.isSuccess,
		successText: 'Updated successfully',
	});

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
							isLoading={result?.isLoading}>
							<Flex pb='44px'>
								<VImage
									name='image'
									value={formData.image}
									onChange={handleImage}
									isDisabled={!editing}
								/>
							</Flex>

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
							<Link href='/editor'>
								<Button size='xs'>Customize QR Code</Button>
							</Link>
						</HeadingMenu>
					</Column>
				</form>

				<QrComponent id={data?.restaurant?._id} />
			</Column>
		</Layout>
	);
};

export default SettingsPage;
