'use client';

import React, { FC, ReactNode } from 'react';
import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { Button, ButtonChild, Column, currency, PLACEHOLDER_IMAGE } from '@/components/library';
import Title from './Title';
import SubHeading from './Subtitle';
import { BgImage, FlexChild } from '@/builder';

type ProductCardProps = FlexProps & {
	_id: string;
	name: string;
	price: number | string;
	image: string;
	stock?: number;
	data?: any;
	category: {
		name: string;
	};
};

const ProductCard: FC<ProductCardProps> = ({
	_id,
	name,
	price,
	image,
	category,
	stock = 0,
	data,
	...props
}) => {
	const toProductPage = () => {};
	return (
		<Container
			onClick={toProductPage}
			{...props}>
			<CardImage src={image || PLACEHOLDER_IMAGE}>
				<AddToCartButton data={data}>Add to Cart</AddToCartButton>
			</CardImage>
			<Column>
				<Text
					fontSize='1.2rem'
					fontFamily={data?.basic?.secondaryFont}
					color={data?.basic?.primaryTextColor}
					_dark={{ color: data?.basic?.primaryTextColor }}>
					{currency?.symbol} {price?.toLocaleString()}
				</Text>
				<Title
					type='h6'
					noOfLines={2}
					color={data?.basic?.primaryTextColor}
					fontFamily={data?.basic?.primaryFont}>
					{name}
				</Title>
				<SubHeading
					fontFamily={data?.basic?.secondaryFont}
					color={data?.basic?.secondaryTextColor}
					noOfLines={3}
					fontSize='1.1rem'
					fontWeight='600'
					textTransform='uppercase'>
					{category?.name}
				</SubHeading>
			</Column>
		</Container>
	);
};

const Container = ({ children, ...props }: FlexChild) => (
	<Column
		cursor='pointer'
		pb={8}
		pt={4}
		userSelect='none'
		w='full'
		gap={4}
		{...props}>
		{children}
	</Column>
);

const CardImage = ({ src, children }: { src: string; children: ReactNode }) => (
	<BgImage
		src={src}
		minH='320px'
		maxH='320px'
		w='full'
		p='16px'
		align='flex-end'
		justify='center'
		borderRadius='xl'>
		{children}
	</BgImage>
);

const AddToCartButton: FC<any> = ({ children, data }) => (
	<Button
		w='100%'
		minW='200px'
		flex={1}
		fontSize='13px'
		fontWeight='800'
		borderRadius='lg'
		borderWidth={0.5}
		textAlign='center'
		textTransform='uppercase'
		bg={data?.basic?.brandTextColor}
		borderColor={data?.basic?.brandColor}
		color={data?.basic?.brandColor}>
		{children}
	</Button>
);

export default ProductCard;
