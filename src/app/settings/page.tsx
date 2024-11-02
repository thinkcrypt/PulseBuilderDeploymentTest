'use client';

import Layout from '@/components/layout/Layout';
import { Heading } from '@chakra-ui/react';
import React from 'react';
import { Column } from '@/components/library';
import { UserEdit, StoreEdit } from './_components';

const SettingsPage = () => {
	return (
		<Layout
			title='Settings'
			path='settings'>
			<Heading size='lg'>Profile</Heading>
			<Column>
				<UserEdit />
				<StoreEdit />
			</Column>
		</Layout>
	);
};

export default SettingsPage;
