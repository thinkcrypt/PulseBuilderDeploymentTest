'use client';
import { LayoutSuspense } from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import React, { ReactNode } from 'react';
import {
	aboutPageData,
	BannerConfig,
	bannerData,
	PageConfig,
	StoreConfig,
	storeData,
} from './_components';

const HomeContentPage = () => {
	const { data, isLoading } = useGetContentQuery({
		path: 'pulse',
	});

	return (
		<LayoutSuspense
			isLoading={isLoading || !data}
			path='/store-content'
			title='Store Content'>
			<StoreConfig
				content={data?.basic}
				path='pulse'
				dataModel={storeData}
			/>
			{/* <BannerConfig
				path='hongo'
				content={data?.content}
				dataModel={bannerData}
			/>
			<PageConfig
				dataModel={aboutPageData}
				path='hongo'
				title='About Page'
				content={data?.content}
				data={data?.content?.aboutPage}
			/> */}
		</LayoutSuspense>
	);
};

export default HomeContentPage;
