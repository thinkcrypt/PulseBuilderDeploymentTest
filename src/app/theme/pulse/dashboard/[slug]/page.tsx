'use client';
import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { EditorLayoutSuspense, useAuth } from '@/components/library';
import { ProfilePage } from './_components/profile-page';
import { homeSidebarData } from '../../_components/sidebarData/sidebarData';
import Banner from '../../_components/Banner/Banner';
import { pulseBannerData } from '../../_components/Banner';
import { PulseHeader, pulseHeaderData } from '../../_components/Header';
import PulseFooter from '../../_components/footer/Footer';
import pulseFooterSchema from '../../_components/footer/components/pulseFooterSchema';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import useColors from '../../_core-components/hooks/useColors';
import { PADDING_X } from '../../_core-components/config/lib/constants/constants';
import { BreadCrumbPulse } from '../../_core-components/components/breadcrumb';

const DashboardPage = () => {
	const { slug } = useParams<{ slug: string }>();
	// console.log('slug:', slug);
	const { isLoggedIn } = useAuth();
	const router = useRouter();

	// const { data, isLoading } = useGetStoreQuery({});
	const { data, isLoading } = useGetContentQuery({ path: 'pulse' });

	const colors = useColors();
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

				<Box
					px={PADDING_X}
					py='1rem'
					bg={breadCrumbCss?.bgColor || '#fff'}>
					<BreadCrumbPulse
						basic={data?.basic}
						css={breadCrumbCss}
					/>
				</Box>
				<Box
					px={PADDING_X}
					minH='100vh'
					bg={dashboardCss?.bgColor || '#fff'}
					color={dashboardCss?.fgColor || '#000'}>
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
