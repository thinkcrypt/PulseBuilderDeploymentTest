import React, { FC } from 'react';
import { Center, Flex, Grid, Heading, Spacer, Text } from '@chakra-ui/react';
import {
	HoverContentContainer,
	Column,
	HomeContentProps,
} from '@/components/library';
// import { HomeContentProps } from '.';
import { BgImage } from '@/builder';
// import { SubHeading, Title } from './hero';
import { IconButton } from '@/commerce-components';
import { useAppSelector } from '@/hooks';
import { SubHeading, Title } from '@/app/theme/zhoei/_components/hero';

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
			name: `featuredAds[${i}].image`,
			label: 'Image',
			isRequired: false,
			type: 'nested-image',
		},
		{
			name: `featuredAds[${i}].title`,
			label: 'Title',
			isRequired: true,
			type: 'nested-string',
		},
		{
			name: `featuredAds[${i}].subTitle`,
			label: 'Sub Title',
			type: 'nested-string',
		},
		{
			name: `featuredAds[${i}].type`,
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
			name: `featuredAds[${i}].href`,
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
				return data?.featuredAds[i].type === 'page';
			},
		},
		{
			name: `featuredAds[${i}].href`,
			label: 'Select Product',
			type: 'nested-data-menu',
			model: 'products',
			isRequired: true,
			renderCondition: (data: any) => {
				return data?.featuredAds[i].type === 'product';
			},
		},
		{
			name: `featuredAds[${i}].href`,
			label: 'Enter External Link [eg. https://google.com]',
			type: 'nested-string',
			isRequired: true,
			renderCondition: (data: any) => {
				return data?.featuredAds[i].type === 'external';
			},
		},
		{
			name: `featuredAds[${i}].href`,
			label: 'Select Collection',
			type: 'nested-data-menu',
			model: 'collections',
			isRequired: true,

			renderCondition: (data: any) => {
				return data?.featuredAds[i].type === 'collection';
			},
		},
		{
			name: `featuredAds[${i}].href`,
			label: 'Select Cateogry',
			type: 'nested-data-menu',
			model: 'categories',
			isRequired: true,
			renderCondition: (data: any) => data?.featuredAds[i].type == 'category',
		},
	];
};

const PulseFeaturedCollection: FC<HomeContentProps> = ({
	dataModel,
	content,
	data: asData,
}) => {
	const data = content?.featuredAds;
	const { display } = useAppSelector(state => state.builder);
	// console.log(schema(1));
	console.log('data:', data);
	return (
		<HoverContentContainer
			title='Featured Collection'
			data={content}
			bg={asData?.basic?.bgColor}
			p={display == 'sm' ? 4 : 8}
			dataModel={dataModel}
		>
			{!data ||
				(data?.length == 0 && (
					<Text
						className='hi'
						align='center'
						fontSize={24}
						color='red'
						pos='relative'
					>
						No Content Added Yet
					</Text>
				))}
			<Grid
				bg={asData?.basic?.bgColor}
				p={display == 'sm' ? 4 : 8}
				gridTemplateColumns={display == 'sm' ? '1fr' : '1fr 1fr 1fr'}
				gap={4}
			>
				{data?.map((item: ItemProps, i: number) => (
					<HoverContentContainer
						title='Featured Collection'
						data={content}
						key={i}
						h='520px'
						component={true}
						dataModel={schema(i)}
					>
						<BgImage key={i} src={item?.image} {...bgCss}>
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

export default PulseFeaturedCollection;
