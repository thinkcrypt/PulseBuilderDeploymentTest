'use client';

import React from 'react';
import { Column, Layout } from '@/components/library';
import { UserEdit, StoreEdit, StoreSocials } from './_components';

const SettingsPage = () => {
	return (
		<Layout
			title='Settings'
			path='settings'>
			<Column pb='32px'>
				<UserEdit />
				<StoreEdit />
				<StoreSocials />
			</Column>
		</Layout>
	);
};

export default SettingsPage;
