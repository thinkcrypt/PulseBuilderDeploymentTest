'use client';
import {
	EditorLayoutSuspense,
	useAppDispatch,
	resetBuilder,
	push,
	LayoutSuspense,
} from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';

//////////////////////////// chakra
// import { padding } from '@/lib/config/constants';
// import { BoxProps, Center, CenterProps, Flex } from '@chakra-ui/react';
// import { LogoImage, SearchBox } from './sections/index';
// // import { useGetStoreQuery } from '@/store/services/storeApi';
// import { placeholderImage } from '@/lib/config/constants';
// import { Icon, IconNameOptions } from '../icon';

import PulseHeader from './_components/Header/PulseHeader';
import pulseHeaderData from './_components/Header/pulseHeaderData';
import basicDataSchema from './_components/Basic/basicData';
import { FooterConfig, footerData, listData } from '@/app/hongo/hongo-home/_components';
import PulseProductListComponent from './_components/PulseProductList/PulseProduct';
// import { listData } from '@/app/home-content/_components';
// import FeatureProduct from './_components/FeatureProduct/FeatureProduct';

const sidebarData = [
	{
		startOfSection: true,
		sectionTitle: 'Pages (HONGO)',
		title: 'Home Page',
		href: '/home-content',
		icon: 'content',
		path: 'home-content',
		type: 'page',
	},
	{
		startOfSection: true,
		sectionTitle: 'Basic',
		title: 'Basic',
		icon: 'content',
		dataPath: 'basic',
		type: 'component',
		path: 'pulse',
		// dataModel: storeData,
		dataModel: basicDataSchema,
	},
];

const HomeContentPage = () => {
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
			sidebarData={sidebarData}
			isLoading={isLoading || !data}
			path='/home-content'
			title='Home Content'
			position='relative'
			gap={0}
		>
			<PulseHeader
				data={data}
				path='pulse'
				basic={data?.basic}
				content={data?.content}
				dataModel={pulseHeaderData}
			/>
			<PulseProductListComponent
				data={data}
				path='pulse'
				basic={data?.basic}
				content={data?.content}
				dataModel={listData}
			/>

			{/* <FeatureProduct
				data={data}
				path='pulse'
				basic={data?.basic}
				content={data?.content}
				dataModel={pulseHeaderData}
			/> */}
			{/* <StoreConfig
				content={data?.basic}
				path='pulse'
				// dataModel={basicDataSchema}
				dataModel={storeData}
			/> */}
			<FooterConfig
				data={data}
				path='hongo'
				content={data?.content}
				dataModel={footerData}
			/>
		</EditorLayoutSuspense>
	);
};

export default HomeContentPage;
