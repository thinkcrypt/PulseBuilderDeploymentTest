'use client';

import React from 'react';
import { Column, Layout, StaticPage } from '@/components/library';
import { UserEdit, StoreEdit, StoreSocials } from './_components';

const SettingsPage = () => {
	return (
		<Layout
			title='Settings'
			path='settings'>
			<StaticPage>
				<UserEdit />
				<StoreEdit />
				<StoreSocials />
			</StaticPage>
		</Layout>
	);
};

export default SettingsPage;
