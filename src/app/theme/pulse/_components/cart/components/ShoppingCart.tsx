'use client';
import { Box, BoxProps, Grid, GridItem } from '@chakra-ui/react';
import React, { FC } from 'react';
import { HoverContentContainer } from '@/components/library';
import { CartItem, OrderSummary } from './index';
import { cartItemsData } from './cartItemsData';
import { PADDING_X, BreadCrumbPulse } from '../../../_components/index';
import { useAppSelector } from '@/hooks';

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
	const { display } = useAppSelector(state => state.builder);
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
			<Box
				px={{
					base: PADDING_X.base,
					md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
				}}
				bg={shoppinCartCss?.bodyBg}
				minH='80vh'
				pb='2rem'
			>
				<Box py='1rem'>
					<BreadCrumbPulse basic={basic} css={breadCrumbCss} />
				</Box>

				<Grid
					gridTemplateColumns={{
						base: '1fr',
						lg: display === 'sm' ? '1fr' : '2fr 1fr',
					}}
					gap={8}
				>
					<GridItem
						pr={{ base: 0, lg: display === 'sm' ? 0 : 8 }}
						borderRight={{
							base: 'none',
							lg:
								display === 'sm'
									? 'none'
									: `1px solid ${shoppinCartCss?.borderColor}`,
						}}
						borderBottom={{
							base: `1px solid ${shoppinCartCss?.borderColor}`,
							lg:
								display === 'sm'
									? `1px solid ${shoppinCartCss?.borderColor}`
									: 'none',
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
