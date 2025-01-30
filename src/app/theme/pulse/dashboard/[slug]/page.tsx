'use client';
import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { EditorLayoutSuspense, useAuth } from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import {
	PADDING_X,
	Banner,
	PulseHeader,
	PulseFooter,
	pulseBannerData,
	pulseHeaderData,
	pulseFooterSchema,
	BreadCrumbPulse,
	ProfilePage,
} from '../../_components';

import { dashboardSidebarNav } from '../../_components/index';
import { useAppSelector } from '@/hooks';

const DashboardPage = () => {
	const { display } = useAppSelector(state => state.builder);
	const { slug } = useParams<{ slug: string }>();
	const { isLoggedIn } = useAuth();
	const router = useRouter();
	const { data, isLoading } = useGetContentQuery({ path: 'pulse' });
	const dashboardCss = data?.content?.dashboardCss;
	const breadCrumbCss = data?.basic?.breadCrumbCss;

	useEffect(() => {
		if (isLoggedIn === false) {
			router.push('/');
		}
	}, [isLoggedIn]);

	return (
		<>
			<EditorLayoutSuspense
				data={data}
				sidebarData={dashboardSidebarNav}
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

				<Box
					px={{
						base: PADDING_X.base,
						md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
					}}
					py='1rem'
					bg={breadCrumbCss?.bgColor || '#fff'}
				>
					<BreadCrumbPulse basic={data?.basic} css={breadCrumbCss} />
				</Box>

				<Box
					px={{
						base: PADDING_X.base,
						md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
					}}
					minH='100vh'
					bg={dashboardCss?.bgColor || '#fff'}
					color={dashboardCss?.fgColor || '#000'}
				>
					<ProfilePage
						basic={data?.basic}
						content={data?.content}
						slug={slug}
					/>
				</Box>

				<PulseFooter
					data={data}
					path='pulse'
					basic={data?.basic}
					content={data?.content}
					dataModel={pulseFooterSchema}
				/>
			</EditorLayoutSuspense>
		</>
	);
};

export default DashboardPage;
