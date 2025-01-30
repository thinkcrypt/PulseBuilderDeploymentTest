'use client';
import {
	Box,
	BoxProps,
	Checkbox,
	Flex,
	Grid,
	GridItem,
	Image,
	useToast,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import OrderSummary from './OrderSummary';
import { HoverContentContainer, useAppSelector } from '@/components/library';
import CartItem, { CartItemProps } from './CartItem';
import { cartItemsData } from './cartItemsData';
import { PADDING_X } from '../../_core-components/config/lib/constants/constants';
import { BreadCrumbPulse } from '../../_core-components/components/breadcrumb';

type ShoppingCartProps = BoxProps & {
	basic: any;
	content: any;
	dataModel?: any;
	path?: any;
	data?: any;
};

const ShoppingCart: FC<ShoppingCartProps> = ({
	basic,
	content,
	dataModel,
	path,
	data,
}) => {
	// const { cartItems, subTotal } = useAppSelector(state => state.cart);
	const cartItems = cartItemsData?.cartItems;
	const shoppinCartCss = content?.shoppingCartCSS;
	const breadCrumbCss = basic?.breadCrumbCss;
	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={basic?.bgColor}
			position='sticky'
			top='0'
		>
			<Box px={PADDING_X} bg={shoppinCartCss?.bodyBg} minH='80vh' pb='2rem'>
				<BreadCrumbPulse basic={basic} css={breadCrumbCss} />
				<Grid gridTemplateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
					<GridItem
						pr={{ base: 0, lg: 8 }}
						borderRight={{
							base: 'none',
							lg: `1px solid ${shoppinCartCss?.borderColor}`,
						}}
						borderBottom={{
							base: `1px solid ${shoppinCartCss?.borderColor}`,
							lg: 'none',
						}}
						pb={{ base: '2rem' }}
					>
						{cartItems?.map((item: any, i: number) => (
							<CartItem
								{...item}
								basic={basic}
								key={i}
								css={shoppinCartCss}
								borderBottom={
									i === cartItems.length - 1
										? 'none'
										: `1px solid ${shoppinCartCss?.borderColor}`
								}
							/>
						))}
					</GridItem>
					<GridItem>
						<OrderSummary
							content={content}
							basic={basic}
							css={shoppinCartCss}
							cartItems={cartItems}
							cartItemsData={cartItemsData}
						/>
					</GridItem>
				</Grid>
			</Box>
		</HoverContentContainer>
	);
};

export default ShoppingCart;
