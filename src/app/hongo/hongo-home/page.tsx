'use client';
import { EditorLayoutSuspense, LayoutSuspense } from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import React from 'react';

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
	fontData,
	colorData,
} from './_components';

const sidebarData = [
	{
		startOfSection: true,
		sectionTitle: 'Pages (HONGO)',
		title: 'Home Page',
		href: '/home-content',
		icon: 'content',
		path: 'home-content',
		type: 'page',
	},
	{
		title: 'Store Settings',
		href: '/hongo/hongo-store',
		icon: 'shop',
		path: 'hongo/hongo-store',
		type: 'page',
	},
	{
		startOfSection: true,
		sectionTitle: 'Components (HONGO)',
		title: 'Header',
		icon: 'content',
		dataPath: 'content',
		type: 'component',
		path: 'hongo',
		dataModel: headerData,
	},
	{
		title: 'Fonts',
		icon: 'shop',
		type: 'component',
		path: 'hongo',
		dataPath: 'basic',
		dataModel: fontData,
	},
	{
		title: 'Colors',
		icon: 'shop',
		type: 'component',
		path: 'hongo',
		dataPath: 'basic',
		dataModel: colorData,
	},
];

const HomeContentPage = () => {
	const { data, isLoading } = useGetContentQuery({ path: 'hongo' });

	return (
		<EditorLayoutSuspense
			data={data}
			sidebarData={sidebarData}
			isLoading={isLoading || !data}
			path='/home-content'
			title='Home Content'
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
		</EditorLayoutSuspense>
	);
};

export default HomeContentPage;
