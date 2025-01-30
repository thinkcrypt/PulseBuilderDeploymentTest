'use client';

import { useEffect } from 'react';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { EditorLayoutSuspense, useAppDispatch, resetBuilder, push } from '@/components/library';
import PulseFooter from '../_components/footer/Footer';
import pulseFooterSchema from '../_components/footer/components/pulseFooterSchema';
import Banner from '../_components/Banner/Banner';
import { pulseBannerData } from '../_components/Banner';
import { PulseHeader, pulseHeaderData } from '../_components/Header';
import navSchema from '../_components/nav-bar/components/navSchema';
import SimpleNavBar from '../_components/nav-bar/SimpleNavBar';
import { homeSidebarData } from '../_components/sidebarData/sidebarData';
import { AllProducts } from './_components';

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
			gap={0}>
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
			<AllProducts
				data={data}
				basic={data?.basic}
				path='pulse'
				content={data?.content}
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

export default ProductDetails;
