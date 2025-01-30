'use client';
import React, { useEffect } from 'react';
import { EditorLayoutSuspense, useAppDispatch, resetBuilder, push } from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { homeSidebarData } from '../_components/sidebarData/sidebarData';
// import PageLayout from '@/components/library/components/pageLayout/PageLayout';
import { ShoppingCart } from './_components';
import cartSchema from './_components/cartSchema';
import PageLayout from '../_core-components/components/pageLayout/PageLayout';

const CartPage = () => {
	const { data, isLoading, isSuccess, isFetching } = useGetContentQuery({
		path: 'pulse',
	});

	console.log('pulse data:::', data);
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
				<ShoppingCart
					data={data}
					basic={data?.basic}
					path='pulse'
					content={data?.content}
					dataModel={cartSchema}
				/>
			</PageLayout>
		</EditorLayoutSuspense>
	);
};

export default CartPage;
