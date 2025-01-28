'use client';
import { EditorLayoutSuspense, useAppDispatch, resetBuilder, push } from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import React, { useEffect } from 'react';

import {
	heroData,
	discoverData,
	HeroComponent,
	ServicesComponent,
	ProductListComponent,
	listData,
	CategoryComponent,
	collectionsData,
	BannerConfig,
	bannerData,
	HeaderConfig,
	headerData,
	FooterConfig,
	footerData,
	sidebarData,
} from './_components';

const HomeContentPage = () => {
	const { data, isLoading, isSuccess, isFetching } = useGetContentQuery({ path: 'hongo' });
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(resetBuilder());
	}, []);

	useEffect(() => {
		if (data && !isFetching && isSuccess) {
			dispatch(
				push({
					basic: data?.basic,
					content: data?.content,
				})
			);
		}
	}, [isFetching]);

	return (
		<EditorLayoutSuspense
			data={data}
			sidebarData={sidebarData}
			isLoading={isLoading || !data}
			path='/theme/hongo'
			title='Home Page'
			dataPath='hongo'
			position='relative'
			gap={0}>
			<BannerConfig
				data={data}
				path='hongo'
				content={data?.content}
				dataModel={bannerData}
			/>

			<HeaderConfig
				data={data}
				path='hongo'
				content={data?.content}
				dataModel={headerData}
			/>

			<HeroComponent
				data={data}
				path='hongo'
				content={data?.content}
				dataModel={heroData}
			/>

			<ServicesComponent
				path='hongo'
				data={data}
				content={data?.content}
				dataModel={discoverData}
			/>

			<CategoryComponent
				data={data}
				path='hongo'
				content={data?.content}
				dataModel={collectionsData}
			/>

			<ProductListComponent
				data={data}
				path='hongo'
				content={data?.content}
				dataModel={listData}
			/>

			<FooterConfig
				data={data}
				path='hongo'
				content={data?.content}
				dataModel={footerData}
			/>
		</EditorLayoutSuspense>
	);
};

export default HomeContentPage;
