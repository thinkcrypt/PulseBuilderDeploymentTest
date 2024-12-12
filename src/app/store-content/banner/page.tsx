'use client';

import { LayoutSuspense } from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import React from 'react';
import { BannerConfig, bannerData, StoreConfig, storeData } from '../_components';

const HomeContentPage = () => {
	const { data, isLoading } = useGetContentQuery({
		path: 'nexa',
	});

	return (
		<LayoutSuspense
			isLoading={isLoading || !data}
			path='/home-content'
			title='Banner content'>
			<BannerConfig
				path='nexa'
				content={data?.content?.banner}
				dataModel={bannerData}
			/>
		</LayoutSuspense>
	);
};

export default HomeContentPage;
