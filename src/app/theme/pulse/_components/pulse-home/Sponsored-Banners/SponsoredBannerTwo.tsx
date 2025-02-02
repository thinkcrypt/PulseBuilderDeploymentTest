import React, { FC } from 'react';
import { BoxProps, Center, Flex, Grid, Spacer } from '@chakra-ui/react';
import {
	HoverContentContainer,
	Column,
	PLACEHOLDER_IMAGE,
} from '@/components/library';
// import { HomeContentProps } from '.';
type SponsoredBannerTwoProps = BoxProps & {
	content: any;
	basic: any;
	path: any;
	dataModel: any;
	data: any;
};

import { BgImage } from '@/builder';
import { IconButton } from '@/commerce-components';
import { useAppSelector } from '@/hooks';
import { SubHeading, Title } from '@/app/theme/zhoei/_components/hero';
import sponsoredBannerTwoData from './sponsoredBannerTwoData';

type ItemProps = {
	image: string;
	title: string;
	subTitle?: string;
};

const schema = (i: number) => {
	return [
		{
			startofSection: true,
			sectionTitle: 'Banner 1',
			name: `sponsoredBannerTwo[${i}].image`,
			label: 'Image',
			isRequired: false,
			type: 'nested-image',
		},

		{
			name: `sponsoredBannerTwo[${i}].type`,
			label: 'Link Type',
			type: 'nested-select',
			isRequired: true,
			options: [
				{
					label: 'Page',
					value: 'page',
				},
				{
					label: 'Product',
					value: 'product',
				},
				{
					label: 'Category',
					value: 'category',
				},
				{
					label: 'Collection',
					value: 'collection',
				},
				{
					label: 'External Link',
					value: 'external',
				},
			],
		},
		{
			name: `sponsoredBannerTwo[${i}].href`,
			label: 'Select Page',
			type: 'nested-select',
			options: [
				{
					label: 'Home',
					value: '/',
				},
				{
					label: 'All Categories',
					value: '/category',
				},
				{
					label: 'FAQ',
					value: '/faq',
				},
				{
					label: 'Shop',
					value: '/explore',
				},
				{
					label: 'Contact',
					value: '/contact-us',
				},
			],

			isRequired: true,
			renderCondition: (data: any) => {
				return data?.sponsoredBannerTwo[i].type === 'page';
			},
		},
		{
			name: `sponsoredBannerTwo[${i}].href`,
			label: 'Select Product',
			type: 'nested-data-menu',
			model: 'products',
			isRequired: true,
			renderCondition: (data: any) => {
				return data?.sponsoredBannerTwo[i].type === 'product';
			},
		},
		{
			name: `sponsoredBannerTwo[${i}].href`,
			label: 'Enter External Link [eg. https://google.com]',
			type: 'nested-string',
			isRequired: true,
			renderCondition: (data: any) => {
				return data?.sponsoredBannerTwo[i].type === 'external';
			},
		},
		{
			name: `sponsoredBannerTwo[${i}].href`,
			label: 'Select Collection',
			type: 'nested-data-menu',
			model: 'collections',
			isRequired: true,

			renderCondition: (data: any) => {
				return data?.sponsoredBannerTwo[i].type === 'collection';
			},
		},
		{
			name: `sponsoredBannerTwo[${i}].href`,
			label: 'Select Cateogry',
			type: 'nested-data-menu',
			model: 'categories',
			isRequired: true,
			renderCondition: (data: any) =>
				data?.sponsoredBannerTwo[i].type == 'category',
		},
	];
};

const SponsoredBannerTwo: FC<SponsoredBannerTwoProps> = ({
	dataModel,
	content,
	data: asData,
}) => {
	const data = content.sponsoredBannerTwo;
	const { display } = useAppSelector(state => state.builder);
	// console.log('pulse sponser two:', data);
	return (
		<HoverContentContainer
			section={true}
			path='pulse'
			title='Sponsered Banner Two'
			data={content}
			bg={asData?.basic?.bgColor}
			p={display == 'sm' ? 4 : 8}
			dataModel={sponsoredBannerTwoData}
		>
			{!data || (data?.length == 0 && <Center>No Content Added Yet</Center>)}
			<Grid
				bg={asData?.basic?.bgColor}
				p={display == 'sm' ? 4 : 8}
				gridTemplateColumns={display == 'sm' ? '1fr' : '1fr 1fr 1fr'}
				gap={4}
			>
				{data?.map((item: ItemProps, i: number) => (
					<HoverContentContainer
						path='pulse'
						title='Featured Collection'
						data={content}
						key={i}
						h='520px'
						component={true}
						dataModel={schema(i)}
					>
						<BgImage key={i} src={item?.image || PLACEHOLDER_IMAGE} {...bgCss}>
							<Column gap={8} w='full'>
								<Column gap={4}>
									<Title
										type='h5'
										fontFamily={asData?.basic?.primaryFont}
										color={asData?.basic?.brandTextColor}
									>
										{item?.title}
									</Title>
									<SubHeading
										color={asData?.basic?.secondaryTextColor}
										fontFamily={asData?.basic?.brandTextColor}
									>
										{item?.subTitle}
									</SubHeading>
								</Column>
								<Spacer />
								<Flex justify='flex-end'>
									<IconButton
										aria-label='Arrow Button'
										{...iconButtonCss}
										bg={asData?.basic?.brandTextColor}
										borderColor={asData?.basic?.brandColor}
									/>
								</Flex>
							</Column>
						</BgImage>
					</HoverContentContainer>
				))}
			</Grid>
		</HoverContentContainer>
	);
};

const bgCss: any = {
	borderRadius: 'xl',
	h: '520px',
	w: 'full',
	p: '32px',
};

const iconButtonCss: any = {
	w: '58px',
	h: '58px',
	color: 'black',
	borderRadius: 'full',
	borderWidth: 1,
	iconSize: 24,
	iconName: 'arrow-right',
};

export default SponsoredBannerTwo;

// import { HoverContentContainer } from '@/components/library';
// import { useAppSelector } from '@/hooks';
// import {
// 	Box,
// 	BoxProps,
// 	Flex,
// 	FlexProps,
// 	Grid,
// 	GridProps,
// 	Image,
// } from '@chakra-ui/react';
// import React, { FC, ReactNode } from 'react';

// type SponsoredBannerTwoProps = BoxProps & {
// 	content: any;
// 	basic: any;
// 	path: any;
// 	dataModel: any;
// 	data: any;
// };

// export const PADDING_X = { base: 6, md: 24 };
// // dataModel, content, path, data
// const SponsoredBannerTwo: FC<SponsoredBannerTwoProps> = ({
// 	content,
// 	basic,
// 	path,
// 	data,
// 	dataModel,
// 	...props
// }) => {
// 	const { display } = useAppSelector(state => state.builder);
// 	const bannerData = content?.sponsoredBannerTwo;
// 	console.log(bannerData);

// 	return (
// 		<HoverContentContainer
// 			type='content'
// 			path={path}
// 			title='Banner Information'
// 			data={content}
// 			dataModel={dataModel}
// 			bg={basic?.bgColor}
// 			px={{
// 				base: PADDING_X.base,
// 				md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
// 			}}
// 			position='sticky'
// 			top='0'
// 		>
// 			<GridContainer {...props}>
// 				<BannerImage bannerData={bannerData} src={bannerData?.imageOne} />
// 				<BannerImage bannerData={bannerData} src={bannerData?.imageTwo} />
// 			</GridContainer>
// 		</HoverContentContainer>
// 	);
// };

// export default SponsoredBannerTwo;

// const GridContainer = ({
// 	children,
// 	...props
// }: GridProps & {
// 	children: ReactNode;
// }) => {
// 	const { display } = useAppSelector(state => state.builder);
// 	return (
// 		<Grid
// 			// gridTemplateColumns={{
// 			// 	base: `1fr`,
// 			// 	lg: `1fr 1fr`,
// 			// }}
// 			gridTemplateColumns={{
// 				base: '1fr',
// 				lg: display == 'sm' ? '1fr' : '1fr 1fr',
// 			}}
// 			gap={4}
// 			py='2rem'
// 			{...props}
// 		>
// 			{children}
// 		</Grid>
// 	);
// };

// const BannerImage = ({
// 	src,
// 	bannerData,
// 	...props
// }: FlexProps & {
// 	src: string;
// 	bannerData?: any;
// }) => (
// 	<Box
// 		w='full'
// 		position='relative'
// 		overflow='hidden'
// 		aspectRatio={16 / 9} // Adjust the aspect ratio as needed (16:9 is an example)
// 		{...props}
// 	>
// 		<Image
// 			src={src}
// 			w='full'
// 			h='full'
// 			objectFit='cover'
// 			// fallbackSrc={placeholderImage}
// 			alt='Banner Image'
// 		/>
// 	</Box>
// );
