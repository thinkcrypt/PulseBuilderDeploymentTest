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
	pulseBannerData,
	PulseFooter,
	pulseFooterSchema,
	Banner,
	PulseHeader,
	pulseHeaderData,
	navSchema,
	SimpleNavBar,
	homeSidebarData,
	AllProducts,
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
				<AllProducts
					data={data}
					basic={data?.basic}
					path='pulse'
					content={data?.content}
				/>
			</PageLayout>
		</EditorLayoutSuspense>
	);
};

export default ProductDetails;
