'use client';

import React from 'react';
import { Column, Layout } from '@/components/library';
import { UserEdit, StoreEdit, StoreSocials } from './_components';

const SettingsPage = () => {
	return (
		<Layout
			title='Settings'
			path='settings'>
			<Column
				pt={{ base: 4, md: 6 }}
				pb='32px'
				gap={{ base: 4, md: 8 }}>
				<UserEdit />
				<StoreEdit />
				<StoreSocials />
			</Column>
		</Layout>
	);
};

export default SettingsPage;
