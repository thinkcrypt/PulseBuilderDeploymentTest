'use client';
import {
	EditorLayoutSuspense,
	useAppDispatch,
	resetBuilder,
	push,
} from '@/components/library';
import React, { useEffect } from 'react';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import {
	PulseHero,
	pulseHeroData,
	ServiceContent,
	serviceData,
	SponsoredBannerTwo,
	sponsoredBannerTwoData,
	SponsoredBannerThree,
	sponsoredBannerThreeData,
	PulseProductListComponent,
	FeaturedCategory,
	productListSchema,
	ProductListTwo,
	ProductListThree,
	featuredCategoriesData,
	homeSidebarData,
	SponsoredBannerOne,
	sponsoredBannerOneData,
	PageLayout,
} from './_components/index';
import { Box } from '@chakra-ui/react';

const HomeContentPage = () => {
	
	const { data, isLoading, isSuccess, isFetching } = useGetContentQuery({
		path: 'pulse',
		
	});
	// console.log('pulse datass:::', data);
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
			sidebarData={homeSidebarData}
			isLoading={isLoading || !data}
			path='/home-content'
			title='Home Content'
			position='relative'
			gap={0}
		>
			<PageLayout>
				<Box bg={data?.basic?.bgColor}>
					<PulseHero
						data={data}
						path='pulse'
						basic={data?.basic}
						content={data?.content}
						dataModel={pulseHeroData}
					/>

					<ServiceContent
						data={data}
						path='pulse'
						basic={data?.basic}
						content={data?.content}
						dataModel={serviceData}
					/>

					<SponsoredBannerOne
						data={data}
						path='pulse'
						basic={data?.basic}
						content={data?.content}
						dataModel={sponsoredBannerOneData}
					/>

					<FeaturedCategory
						data={data}
						path='pulse'
						basic={data?.basic}
						content={data?.content}
						dataModel={featuredCategoriesData}
					/>

					<PulseProductListComponent
						data={data}
						path='pulse'
						basic={data?.basic}
						content={data?.content}
						dataModel={productListSchema}
					/>

					<SponsoredBannerTwo
						data={data}
						path='pulse'
						basic={data?.basic}
						content={data?.content}
						dataModel={sponsoredBannerTwoData}
					/>
					<ProductListTwo
						data={data}
						path='pulse'
						basic={data?.basic}
						content={data?.content}
						dataModel={productListSchema}
					/>
					<SponsoredBannerThree
						data={data}
						path='pulse'
						basic={data?.basic}
						content={data?.content}
						dataModel={sponsoredBannerThreeData}
					/>
					<ProductListThree
						data={data}
						path='pulse'
						basic={data?.basic}
						content={data?.content}
						dataModel={productListSchema}
					/>
				</Box>
			</PageLayout>
		</EditorLayoutSuspense>
	);
};

export default HomeContentPage;
