'use client';

import { useEffect } from 'react';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import {
	EditorLayoutSuspense,
	useAppDispatch,
	resetBuilder,
	push,
} from '@/components/library';

import {
	homeSidebarData,
	PulseFooter,
	pulseFooterSchema,
	productDetailsData,
	Banner,
	pulseBannerData,
	PulseHeader,
	pulseHeaderData,
	navSchema,
	SimpleNavBar,
	ProductDetailsPage,
	ProductSpecifications,
	productSpecificiationsData,
	PageLayout,
} from '../_components/index';

//
const ProductDetails = () => {
	const { data, isLoading, isSuccess, isFetching } = useGetContentQuery({
		path: 'pulse',
	});

	console.log('product details data:::', data);

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
				<ProductDetailsPage
					data={data}
					path='pulse'
					basic={data?.basic}
					content={data?.content}
					dataModel={productDetailsData}
				/>
				<ProductSpecifications
					data={data}
					path='pulse'
					basic={data?.basic}
					content={data?.content}
					dataModel={productSpecificiationsData}
				/>
			</PageLayout>
		</EditorLayoutSuspense>
	);
};

export default ProductDetails;
