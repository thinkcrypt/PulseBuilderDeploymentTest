'use client';
import { Box, Flex, Grid, GridItem, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useGetSelfQuery } from '@/store/services/authApi';
import {
	HoverContentContainer,
	logout,
	useAppDispatch,
} from '@/components/library';
import { faqContent } from './profilePageData';
import {
	productCardBoxShadow,
	SimpleButton,
	useColors,
} from '../../../_components/index';
import {
	AccountInfo,
	dashboardCssSchema,
	dashboardNavigationCssSchema,
	OrderComponent,
	ProfileHeaderImage,
	ProfileJson,
	ProfileLinks,
} from './index';
import { FaqComponent } from './faq-component';
import { useAppSelector } from '@/hooks';

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
	const { display } = useAppSelector(state => state.builder);
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
			gridTemplateColumns={{
				base: '1fr',
				xl: display == 'sm' ? '1fr' : 'repeat(6, 1fr)',
			}}
			py='1rem'
			gap={{ base: 0, xl: display == 'sm' ? 0 : 8 }}
			rowGap={{ base: 8, xl: display == 'sm' ? 8 : 0 }}
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
