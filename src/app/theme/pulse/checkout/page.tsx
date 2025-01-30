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
	Checkout,
	checkoutCssSchema,
	Banner,
	PulseHeader,
	pulseHeaderData,
	pulseBannerData,
	navSchema,
	PulseFooter,
	pulseFooterSchema,
	SimpleNavBar,
	homeSidebarData,
} from '../_components/index';

const CheckoutPage = () => {
	const { data, isLoading, isSuccess, isFetching } = useGetContentQuery({
		path: 'pulse',
	});
	console.log('login', data);
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
			<Banner
				data={data}
				path='pulse'
				content={data?.content}
				basic={data?.basic}
				dataModel={pulseBannerData}
			/>

			<PulseHeader
				data={data}
				basic={data?.basic}
				path='pulse'
				content={data?.content}
				dataModel={pulseHeaderData}
			/>

			<SimpleNavBar
				data={data}
				basic={data?.basic}
				path='pulse'
				content={data?.content}
				dataModel={navSchema}
			/>

			<Checkout
				content={data?.content}
				basic={data?.basic}
				data={data}
				path='pulse'
				dataModel={checkoutCssSchema}
			/>
			<PulseFooter
				data={data}
				path='pulse'
				basic={data?.basic}
				content={data?.content}
				dataModel={pulseFooterSchema}
			/>
		</EditorLayoutSuspense>
	);
};

export default CheckoutPage;
