'use client';
import { Box, Flex, Grid, GridItem, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import {
	AccountInfo,
	ProfileHeaderImage,
	ProfileLinks,
} from './components/index';
import { OrderComponent } from './components/orders-component';
import { FaqComponent } from './components/faq-component';
import { useRouter } from 'next/navigation';
import { useGetSelfQuery } from '@/store/services/authApi';
import {
	HoverContentContainer,
	logout,
	useAppDispatch,
} from '@/components/library';
import { faqContent } from './components/profilePageData';
import { ProfileJson } from './components/profileJson';
import dashboardNavigationCssSchema from './components/dashboardNavigationSchema';
import dashboardCssSchema from './components/dashboardSchema';
import useColors from '../../../../_core-components/hooks/useColors';
import { productCardBoxShadow } from '../../../../_core-components/config/lib/constants/constants';
import { SimpleButton } from '../../../../_core-components/components/button';

type ProfilePageProps = GridProps & {
	basic: any;
	content: any;
	slug: string;
};

const ProfilePage: FC<ProfilePageProps> = ({
	basic,
	content,
	slug,
	...props
}) => {
	const { data: selfData, isLoading: selfLoading } = useGetSelfQuery({});

	const colors = useColors();
	const router = useRouter();

	const dashboardNavigationCss = content?.dashboardNavigationCss;

	const dashboardCss = content?.dashboardCss;

	const faqData = faqContent;

	const dispatch = useAppDispatch();
	const onLogout = () => {
		dispatch(logout());
		router.push('/');
	};

	return (
		<Grid
			gridTemplateColumns={{ base: '1fr', xl: 'repeat(6, 1fr)' }}
			py='1rem'
			gap={{ base: 0, xl: 8 }}
			rowGap={{ base: 8, xl: 0 }}
			{...props}
		>
			<GridItem colSpan={{ base: 2 }}>
				<HoverContentContainer
					type='content'
					path={'pulse'}
					title='Dashboard'
					data={content}
					dataModel={dashboardNavigationCssSchema}
					position='sticky'
					top='0'
				>
					<Box
						bg={colors?.white}
						boxShadow={productCardBoxShadow}
						border={`1px solid ${
							dashboardNavigationCss?.borderColor || '#f5f5f5'
						}`}
						borderRadius={`${dashboardNavigationCss?.borderRadius || 4}px`}
					>
						{ProfileJson?.map((item: any, i: number) => (
							<ProfileLinks
								slug={slug}
								basic={basic}
								css={dashboardNavigationCss}
								item={item}
								key={i}
							/>
						))}
						<Flex>
							<SimpleButton
								w='full'
								bg={dashboardNavigationCss?.logoutBg || '#ef4a23'}
								color={dashboardNavigationCss?.logoutFg || '#fff'}
								_hover={{
									bg: dashboardNavigationCss?.logoutHoverBg || '#ef4a23',
									color: dashboardNavigationCss?.logoutFg || '#fff',
								}}
								basic={basic}
								onClick={onLogout}
							>
								Log Out
							</SimpleButton>
						</Flex>
					</Box>
				</HoverContentContainer>
			</GridItem>
			<GridItem colSpan={{ base: 4 }}>
				<HoverContentContainer
					type='content'
					path={'pulse'}
					title='Dashboard'
					data={content}
					dataModel={dashboardCssSchema}
					position='sticky'
					top='0'
				>
					<ProfileHeaderImage
						selfData={selfData}
						isLoading={selfLoading}
						basic={basic}
						css={dashboardCss}
					/>

					{slug === 'account' && (
						<AccountInfo
							isLoading={selfLoading}
							selfData={selfData}
							basic={basic}
							content={content}
						/>
					)}
					{slug === 'orders' && (
						<OrderComponent basic={basic} css={content?.dashboardOrderCss} />
					)}

					{/* {slug === 'address' && (
					<AddressComponent basic={basic} css={content?.dashboardAddressCss} />
				)} */}

					{slug === 'faq' && (
						<FaqComponent basic={basic} css={dashboardCss} faqData={faqData} />
					)}
				</HoverContentContainer>
			</GridItem>
		</Grid>
	);
};

export default ProfilePage;
