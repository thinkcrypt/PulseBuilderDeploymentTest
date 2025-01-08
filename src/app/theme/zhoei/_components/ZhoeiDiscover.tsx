import React, { FC } from 'react';
import { Button, Grid } from '@chakra-ui/react';
import { BgImage } from '@/builder';
import { Column, HoverContentContainer } from '@/components/library';
import { SubHeading, Title } from './hero';

type ItemProps = {
	image: string;
	btnText: string;
	data?: any;
};

const DiscoverItem: FC<ItemProps> = ({ data, image, btnText }) => {
	return (
		<BgImage
			src={image}
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
	const renderItems = data?.content?.discover?.items.map((item: ItemProps, i: number) => (
		<DiscoverItem
			data={data}
			image={item.image}
			btnText={item.btnText}
			key={i}
		/>
	));
	return (
		<HoverContentContainer
			title='Discover Section'
			data={data?.content}
			dataModel={dataModel}
			p={4}
			py={8}
			bg={data?.basic?.bgColor}>
			<Column gap={16}>
				<Column
					textAlign='center'
					w={{ base: 'full', md: '75%' }}
					mx='auto'
					gap={8}>
					<SubHeading
						color={data?.basic?.secondaryTextColor}
						_dark={{
							color: data?.basic?.secondaryTextColor,
						}}
						fontFamily={data?.basic?.secondaryFont}>
						{data?.content?.discover?.subTitle}
					</SubHeading>
					<Title
						color={data?.basic?.primaryTextColor}
						fontFamily={data?.basic?.primaryFont}
						_dark={{
							color: data?.basic?.primaryTextColor,
						}}
						type='h3'>
						{data?.content?.discover?.title}
					</Title>
				</Column>
				<Grid
					gap={8}
					gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}>
					{renderItems}
				</Grid>
			</Column>
		</HoverContentContainer>
	);
};

export default Discover;
