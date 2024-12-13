import React, { ReactNode, FC } from 'react';
import { Box, Center, Text, Button, Flex, TextProps } from '@chakra-ui/react';
import { Column } from '@/components/library';
import { CartHeader, Rating } from '.';

const HongoProductCard = ({ data, config, ...props }: { data: any; config: any }) => {
	return (
		<Flex
			w='full'
			flexDir='column'
			bg={config.cardBg}
			borderRadius={`${config.cardRadius}px`}>
			<CartHeader imgSrc={data?.image} />
			<Column
				bg={config.cardBg}
				alignItems='center'
				gap={2}
				p='.8rem'
				{...props}>
				<Name config={config}>{data?.name}</Name>
				<Box>
					<Rating
						ratingValue={data?.rating || '3'}
						color={config?.primaryText}
					/>
				</Box>
				<Price config={config}>{data?.price.toLocaleString()}</Price>
			</Column>

			<Center
				mt='auto'
				p='.8rem'>
				<AddToCart config={config}>Add to Cart</AddToCart>
			</Center>
		</Flex>
	);
};

type TextConfig = {
	config: any;
	children: ReactNode;
};

const Name: FC<TextConfig> = ({ children, config }) => (
	<Text
		textAlign='center'
		fontWeight='500'
		noOfLines={2}
		fontSize='1.2rem'
		color={config?.primaryTextColor}
		_dark={{
			color: config?.primaryTextColor,
		}}
		fontFamily={config?.primaryFont}>
		{children}
	</Text>
);

const Price: FC<TextConfig> = ({ children, config }) => (
	<Text
		fontWeight='bold'
		fontSize='1rem'
		color={config?.primaryTextColor}
		_dark={{
			color: config?.primaryTextColor,
		}}
		fontFamily={config?.secondaryFont}>
		{children}
	</Text>
);

const AddToCart: FC<TextConfig> = ({ children, config }) => (
	<Button
		w='full'
		transition='.4s'
		bg={config?.btnColor}
		borderRadius='0'
		color={config?.btnTextColor}
		borderWidth={1}
		borderColor={config?.btnColor}
		_hover={{
			backgroundColor: config.btnTextColor,
			color: config.btnColor,
			borderColor: config.btnColor,
		}}>
		{children}
	</Button>
);

export default HongoProductCard;
