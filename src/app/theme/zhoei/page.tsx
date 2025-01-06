'use client';
import { EditorLayoutSuspense, push, resetBuilder, useAppDispatch } from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { Button, Link } from '@chakra-ui/react';
import React, { ReactNode, useEffect } from 'react';

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
			position='relative'
			gap={0}>
			{/* <Link
				isExternal
				href={process.env.NEXT_PUBLIC_ECOM}>
				<Button>Preview</Button>
			</Link> */}

			<HeroComponent
				content={data?.content}
				dataModel={heroData}
			/>

			<CategoryComponent
				content={data?.content}
				dataModel={collectionsData}
			/>

			<DiscoverComponent
				content={data?.content}
				dataModel={discoverData}
			/>

			<ProductListComponent
				content={data?.content}
				dataModel={listData}
			/>

			<AboutComponent
				content={data?.content}
				dataModel={aboutUsData}
			/>
			<FeaturedCollection
				content={data?.content}
				dataModel={featuredCollectionData}
			/>
		</EditorLayoutSuspense>
	);
};

export default HomeContentPage;
