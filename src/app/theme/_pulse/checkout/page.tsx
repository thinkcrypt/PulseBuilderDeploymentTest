'use client';
import { FC, useEffect } from 'react';
import basicDataSchema from '../_components/Basic/basicData';
import cartSchema from '../_components/Header/cartDrawerSchema2';
import productCartStyleSchema from '../_components/PulseProductList/productCartStyleSchema';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { EditorLayoutSuspense, useAppDispatch, resetBuilder, push } from '@/components/library';
import Checkout from './_components/Checkout';
import checkoutCssSchema from './_components/checkoutSchema';
import Banner from '../_components/Banner/Banner';
import { pulseBannerData } from '../_components/Banner';
import { PulseHeader, pulseHeaderData } from '../_components/Header';
import navSchema from '../_components/nav-bar/components/navSchema';
import PulseFooter from '../_components/footer/Footer';
import pulseFooterSchema from '../_components/footer/components/pulseFooterSchema';
import SimpleNavBar from '../_components/nav-bar/SimpleNavBar';
import { homeSidebarData } from '../_components/sidebarData/sidebarData';

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
