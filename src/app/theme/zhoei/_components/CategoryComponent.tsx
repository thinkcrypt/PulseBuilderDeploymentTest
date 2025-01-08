import React, { FC } from 'react';
import { Heading, Text, Flex, Image, Grid } from '@chakra-ui/react';
import {
	ViewContentContainer,
	Column,
	Align,
	Button,
	useGetItemNameById,
	PLACEHOLDER_IMAGE,
	HoverContentContainer,
	ColRow,
} from '@/components/library';
import { FlexChild } from '@/builder';
import { SubHeading, Title } from './hero';

type HeroDataProps = {
	content: any;
	dataModel: any;
	data: any;
};

const CategoryComponent: FC<HeroDataProps> = ({ content, dataModel, data }) => {
	const titleProps = {
		fontFamily: data?.basic?.primaryFont,
		color: data?.basic?.primaryTextColor,
	};
	const subTitleProps = {
		color: data?.basic?.secondaryTextColor,
		fontFamily: data?.basic?.secondaryFont,
	};
	const GetItem = ({ path, id }: { path: string; id: string }) => {
		const { name, image } = useGetItemNameById({
			id,
			path,
		});

		return (
			<Column
				py={4}
				userSelect='none'
				w='full'
				gap={4}>
				<Image
					src={image || PLACEHOLDER_IMAGE}
					h='300px'
					w='100%'
					borderRadius='xl'
					objectFit='cover'
				/>

				<Column>
					<Title
						{...titleProps}
						type='h6'>
						{name}
					</Title>
					<SubHeading
						{...subTitleProps}
						fontSize='1.1rem'>
						8 products
					</SubHeading>
				</Column>
			</Column>
		);
	};

	return (
		<HoverContentContainer
			title='Category Section'
			data={content}
			bg={data?.basic?.bgColor}
			px={8}
			py={8}
			dataModel={dataModel}>
			<TopContainer>
				<Column
					w='full'
					gap={4}
					textAlign={{ base: 'center', md: 'left' }}>
					<Title
						{...titleProps}
						type='h4'>
						{content?.collections?.title}
					</Title>
					<SubHeading {...subTitleProps}>{content?.collections?.subTitle}</SubHeading>
				</Column>
				<Button
					fontFamily={data?.basic?.secondaryFont}
					bg={data?.basic?.brandColor}
					borderColor={data?.basic?.brandColor}
					color={data?.basic?.brandTextColor}
					borderWidth={1}
					px={4}>
					{content?.collections?.btnText}
				</Button>
			</TopContainer>

			<Grid
				gridTemplateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
				py={8}
				gap={4}>
				{content?.collections?.items?.length <= 0 && <Text>No items found</Text>}
				{content?.collections?.items?.map(
					(item: any, i: number) =>
						i < 4 && (
							<GetItem
								key={i}
								path={item?.type}
								id={item?.id}
							/>
						)
				)}
			</Grid>
		</HoverContentContainer>
	);
};

const TopContainer: FC<FlexChild> = ({ children }) => (
	<ColRow
		gap={6}
		justify='center'
		align='center'>
		{children}
	</ColRow>
);

export default CategoryComponent;
