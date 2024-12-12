'use client';
import { LayoutSuspense } from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { Button, Link } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { BannerConfig, bannerData, StoreConfig, storeData } from './_components';

const HomeContentPage = () => {
	const { data, isLoading } = useGetContentQuery({ path: 'nexa' });

	return (
		<LayoutSuspense
			isLoading={isLoading || !data}
			path='/store-content'
			title='Store Content'>
			<StoreConfig
				path='nexa'
				content={data?.basic}
				dataModel={storeData}
			/>
			<BannerConfig
				path='nexa'
				content={data?.content}
				dataModel={bannerData}
			/>
		</LayoutSuspense>
	);
};

export default HomeContentPage;
