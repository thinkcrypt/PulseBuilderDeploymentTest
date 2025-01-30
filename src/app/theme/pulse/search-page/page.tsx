'use client';
import React, { useEffect } from 'react';
import {
	homeSidebarData,
	Banner,
	PulseHeader,
	pulseHeaderData,
	pulseBannerData,
} from '../_components/index';
import {
	EditorLayoutSuspense,
	useAppDispatch,
	resetBuilder,
	push,
} from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
const SearchPage = () => {
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
		</EditorLayoutSuspense>
	);
};

export default SearchPage;
