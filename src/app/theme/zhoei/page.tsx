'use client';
import { EditorLayoutSuspense, push, resetBuilder, useAppDispatch } from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import React, { useEffect } from 'react';

import {
	heroData,
	aboutUsData,
	discoverData,
	HeroComponent,
	DiscoverComponent,
	AboutComponent,
	ProductListComponent,
	listData,
	CategoryComponent,
	collectionsData,
	FeaturedCollection,
	featuredCollectionData,
	storeData,
	headerData,
	HeaderComponent,
	BannerComponent,
	bannerData,
	FooterComponent,
	footerData,
} from './_components';

const sidebarData = [
	{
		startOfSection: true,
		sectionTitle: 'Pages',
		title: 'Home Page',
		href: '/theme/zhoei',
		icon: 'content',
		path: 'theme/zhoei',
		type: 'page',
	},
	{
		startOfSection: true,
		sectionTitle: 'Components',
		title: 'Store Settings',
		icon: 'content',
		dataPath: 'basic',
		type: 'component',
		path: 'hongo',
		dataModel: storeData,
	},
];

const HomeContentPage = () => {
	const { data, isLoading, isFetching, isSuccess } = useGetContentQuery({ path: 'nexa' });

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
			path='/theme/zhoei'
			title='Home Page'
			dataPath='nexa'
			gap={0}>
			<BannerComponent
				data={data}
				dataModel={bannerData}
			/>

			<HeaderComponent
				data={data}
				dataModel={headerData}
			/>

			<HeroComponent
				data={data}
				content={data?.content}
				dataModel={heroData}
			/>

			<CategoryComponent
				data={data}
				content={data?.content}
				dataModel={collectionsData}
			/>

			<DiscoverComponent
				// content={data}
				data={data}
				dataModel={discoverData}
			/>

			<ProductListComponent
				data={data}
				content={data?.content}
				dataModel={listData}
			/>

			<AboutComponent
				data={data}
				content={data?.content}
				dataModel={aboutUsData}
			/>
			<FeaturedCollection
				content={data?.content}
				dataModel={featuredCollectionData}
				data={data}
			/>
			<FooterComponent
				data={data}
				content={data?.basic}
				dataModel={footerData}
			/>
		</EditorLayoutSuspense>
	);
};

export default HomeContentPage;
