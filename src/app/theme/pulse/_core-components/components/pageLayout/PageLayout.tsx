import React, { useEffect } from 'react';
import { useAppDispatch } from '@/hooks';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { push, resetBuilder } from '@/components/library';
import Banner from '../../../_components/Banner/Banner';
import { PulseHeader, pulseHeaderData } from '../../../_components/Header';
import SimpleNavBar from '../../../_components/nav-bar/SimpleNavBar';
import PulseFooter from '../../../_components/footer/Footer';
import { pulseBannerData } from '../../../_components/Banner';
import navSchema from '../../../_components/nav-bar/components/navSchema';
import pulseFooterSchema from '../../../_components/footer/components/pulseFooterSchema';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
	const { data, isLoading, isSuccess, isFetching } = useGetContentQuery({
		path: 'pulse',
	});

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
			<SimpleNavBar
				data={data}
				basic={data?.basic}
				path='pulse'
				content={data?.content}
				dataModel={navSchema}
			/>
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
