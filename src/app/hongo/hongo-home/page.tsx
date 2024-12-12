'use client';
import { LayoutSuspense } from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { Button, Link } from '@chakra-ui/react';
import React from 'react';

import {
	heroData,
	aboutUsData,
	discoverData,
	HeroComponent,
	ServicesComponent,
	AboutComponent,
	ProductListComponent,
	listData,
	CategoryComponent,
	collectionsData,
	FeaturedCollection,
	featuredCollectionData,
} from './_components';

const HomeContentPage = () => {
	const { data, isLoading } = useGetContentQuery({ path: 'hongo' });

	return (
		<LayoutSuspense
			isLoading={isLoading || !data}
			path='/home-content'
			title='Home Content'>
			<Link
				isExternal
				href={process.env.NEXT_PUBLIC_ECOM}>
				<Button>Preview</Button>
			</Link>

			<HeroComponent
				path='hongo'
				content={data?.content}
				dataModel={heroData}
			/>

			<ServicesComponent
				path='hongo'
				content={data?.content}
				dataModel={discoverData}
			/>

			<CategoryComponent
				path='hongo'
				content={data?.content}
				dataModel={collectionsData}
			/>

			{/* <DiscoverComponent
				content={data?.content}
				dataModel={discoverData}
			/> */}

			<ProductListComponent
				path='hongo'
				content={data?.content}
				dataModel={listData}
			/>

			{/* <AboutComponent
				content={data?.content}
				dataModel={aboutUsData}
			/>
			<FeaturedCollection
				content={data?.content}
				dataModel={featuredCollectionData}
			/> */}
		</LayoutSuspense>
	);
};

export default HomeContentPage;
