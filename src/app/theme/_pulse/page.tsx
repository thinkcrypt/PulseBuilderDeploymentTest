'use client';
import { EditorLayoutSuspense, useAppDispatch, resetBuilder, push } from '@/components/library';
import React, { useEffect } from 'react';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { PulseHero } from './_components/Banner';
import pulseHeroData from './_components/Banner/pulseHeroData';
import ServiceContent from './_components/services/ServiceContent';
import serviceData from './_components/services/serviceData';
import SponsoredBannerTwo from './_components/Sponsored-Banners/SponsoredBannerTwo';
import sponsoredBannerTwoData from './_components/Sponsored-Banners/sponsoredBannerTwoData';
import SponsoredBannerThree from './_components/Sponsored-Banners/SponsoredBannerThree';
import sponsoredBannerThreeData from './_components/Sponsored-Banners/sponsoredBannerThreeData';
import PulseProductListComponent from './_components/PulseProductList/PulseProduct';
import { FeaturedCategory } from './_components/featured-category';
import { Box } from '@chakra-ui/react';
import productListSchema from './_components/PulseProductList/productListSchema';
import ProductListTwo from './_components/PulseProductList/ProductListTwo';
import ProductListThree from './_components/PulseProductList/ProductListThree';
import { featuredCategoriesData } from './_components/FeatureProduct/Product';
import { homeSidebarData } from './_components/sidebarData/sidebarData';
import SponsoredBannerOne from './_components/Sponsored-Banners/SponsoredBannerOne';
import sponsoredBannerOneData from './_components/Sponsored-Banners/sponsoredBannerOneData';
import PageLayout from './_core-components/components/pageLayout/PageLayout';

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
			gap={0}>
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
