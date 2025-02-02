import React, { FC } from 'react';
import { Button, Grid } from '@chakra-ui/react';
import { BgImage } from '@/builder';
import { Column, HoverContentContainer, PLACEHOLDER_IMAGE } from '@/components/library';
import { SubHeading, Title } from './hero';
import { useAppSelector } from '@/hooks';

type ItemProps = {
	image: string;
	btnText: string;
	data?: any;
};

const titleModel = [
	{
		sectionTitle: 'Section Title',
		name: 'discover.title',
		label: 'Title',
		isRequired: true,
		type: 'textarea',
	},
];

const subTitleModel = [
	{
		sectionTitle: 'Section Sub Title',
		name: 'discover.subTitle',
		label: 'Title',
		isRequired: true,
		type: 'textarea',
	},
];

const imageModel = (index: number) => [
	{
		sectionTitle: 'Discover Section',
		name: `discover.items[${index}].image`,
		label: 'Image',
		isRequired: false,
		type: 'nested-image',
	},
	{
		name: `discover.items[${index}].btnText`,
		label: 'Button Text',
		isRequired: true,
		type: 'nested-string',
	},
];

const DiscoverItem: FC<ItemProps> = ({ data, image, btnText }) => {
	return (
		<BgImage
			src={image || PLACEHOLDER_IMAGE}
			h='340px'
			p='32px'
			align='flex-end'
			justify='center'
			borderRadius='xl'>
			<>
				<Button
					fontFamily={data?.basic?.secondaryFont}
					w='150px'
					borderWidth={0.5}
					bg={data?.basic?.brandTextColor}
					borderColor={data?.basic?.brandColor}
					color={data?.basic?.brandColor}>
					{btnText}
				</Button>
			</>
		</BgImage>
	);
};

const Discover: FC<{
	data: any;
	dataModel: any;
}> = ({ data, dataModel }) => {
	const { display } = useAppSelector(state => state.builder);
	const renderItems = data?.content?.discover?.items.map((item: ItemProps, i: number) => (
		<HoverContentContainer
			component={true}
			title='Discover Section'
			data={data?.content}
			dataModel={imageModel(i)}
			key={i}
			h='340px'>
			<DiscoverItem
				data={data}
				image={item.image}
				btnText={item.btnText}
			/>
		</HoverContentContainer>
	));
	return (
		// <HoverContentContainer
		// 	section={true}
		// 	title='Discover Section'
		// 	data={data?.content}
		// 	dataModel={dataModel}
		// 	p={display == 'sm' ? 4 : 8}
		// 	bg={data?.basic?.bgColor}>
		<Column
			p={display == 'sm' ? 4 : 8}
			gap={16}
			bg={data?.basic?.bgColor}>
			<Column
				textAlign='center'
				w={{ base: 'full', md: display == 'sm' ? 'full' : '75%' }}
				mx='auto'
				gap={8}>
				<HoverContentContainer
					component={true}
					title='Sub Heading'
					data={data?.content}
					dataModel={subTitleModel}>
					<SubHeading
						color={data?.basic?.secondaryTextColor}
						_dark={{
							color: data?.basic?.secondaryTextColor,
						}}
						fontFamily={data?.basic?.secondaryFont}>
						{data?.content?.discover?.subTitle &&
						data?.content?.discover?.subTitle.trim().length > 0
							? data?.content?.discover?.subTitle
							: 'Enter Text'}
					</SubHeading>
				</HoverContentContainer>

				<HoverContentContainer
					component={true}
					title='Heading'
					data={data?.content}
					dataModel={titleModel}>
					<Title
						color={data?.basic?.primaryTextColor}
						fontFamily={data?.basic?.primaryFont}
						_dark={{
							color: data?.basic?.primaryTextColor,
						}}
						type={display == 'sm' ? 'h5' : 'h3'}>
						{data?.content?.discover?.title && data?.content?.discover?.title.trim().length > 0
							? data?.content?.discover?.title
							: 'Enter Text'}
					</Title>
				</HoverContentContainer>
			</Column>
			<Grid
				gap={8}
				gridTemplateColumns={{ base: '1fr', md: display == 'sm' ? '1fr' : '1fr 1fr' }}>
				{renderItems}
			</Grid>
		</Column>
		// </HoverContentContainer>
	);
};

export default Discover;
