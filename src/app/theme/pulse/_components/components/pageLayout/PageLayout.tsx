import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { push, resetBuilder } from '@/components/library';

import {
	PulseHeader,
	pulseHeaderData,
	SimpleNavBar,
	PulseFooter,
	pulseBannerData,
	navSchema,
	pulseFooterSchema,
	Banner,
} from '../../../_components/index';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
	const { data, isLoading, isSuccess, isFetching } = useGetContentQuery({
		path: 'pulse',
	});
	console.log('pulse data:', data);
	const { display } = useAppSelector(state => state.builder);
	// console.log('pulse data:::', data);
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
		<>
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
			{display === 'lg' && (
				<SimpleNavBar
					data={data}
					basic={data?.basic}
					path='pulse'
					content={data?.content}
					dataModel={navSchema}
				/>
			)}
			{children}
			<PulseFooter
				data={data}
				path='pulse'
				basic={data?.basic}
				content={data?.content}
				dataModel={pulseFooterSchema}
			/>
		</>
	);
};

export default PageLayout;
