// // import { FlexColumn, NormalText } from '@/components';

// import { useAppDispatch, useColors } from '@/library';

// import {
// 	addToCart,
// 	deleteOneFromCart,
// 	deleteSingleItemFromCart,
// } from '@/store/slices/cartSlice';
// import { Box, Button, Center, Flex, Image } from '@chakra-ui/react';
// import React from 'react';
// import { NormalText } from '../text';
// import { FlexColumn } from '@/components/common';
// import { currency } from '@/components/library';

// export type CartItemProps = {
// 	id: string;
// 	image: string;
// 	name: string;
// 	price: number;
// 	qty: number;
// 	basic: any;
// 	css?: any;
// };

// const CartItem = ({
// 	image,
// 	id,
// 	name,
// 	price,
// 	qty,
// 	css,
// 	basic,
// }: CartItemProps) => {
// 	const dispatch = useAppDispatch();
// 	const handleRemove = () => {
// 		dispatch(deleteSingleItemFromCart(id));
// 	};

// 	const handleAdd = () => {
// 		dispatch(
// 			addToCart({
// 				item: {
// 					_id: id,
// 					name,
// 					price,
// 					vat: 0,
// 					image,
// 				},
// 			})
// 		);
// 	};

// 	const handleRemoveOne = () => {
// 		dispatch(deleteOneFromCart(id));
// 	};

// 	const colors = useColors();

// 	return (
// 		<Flex
// 			py='1rem'
// 			borderBottom={`1px solid ${css?.borderColor || colors?.borderColor}`}
// 		>
// 			<Box>
// 				<Flex mr='16px' w='100px' h='100px'>
// 					<Image
// 						w='full'
// 						h='full'
// 						objectFit='cover'
// 						src={image}
// 						alt='Product Image'
// 					/>
// 				</Flex>
// 			</Box>
// 			<FlexColumn>
// 				<NormalText
// 					fontSize={{
// 						base: `${css?.titleSizeBase}px`,
// 						lg: `${css?.titleSizeBg}px`,
// 					}}
// 					fontWeight={css?.titleWeight}
// 					noOfLines={2}
// 					basic={basic}
// 				>
// 					{name}
// 				</NormalText>
// 				<NormalText
// 					mt={1}
// 					fontSize={{
// 						base: `${css?.priceSizeBase}px`,
// 						lg: `${css?.priceSizeBg}px`,
// 					}}
// 					basic={basic}
// 				>
// 					{`${currency?.symbol} ${price?.toLocaleString()}`}
// 				</NormalText>
// 				<Flex
// 					bg={css?.qtyBg || colors?.qtyBg}
// 					w='130px'
// 					mt={2}
// 					justifyContent='center'
// 					borderRadius='8px'
// 				>
// 					<Button
// 						bg='transparent'
// 						color={css?.qtyFg || colors?.qtyFg}
// 						_hover={{ bg: 'none' }}
// 						onClick={handleRemoveOne}
// 					>
// 						-
// 					</Button>
// 					<Center width='2rem'>
// 						<NormalText color={css?.qtyFg || colors?.qtyFg} basic={basic}>
// 							{qty}
// 						</NormalText>
// 					</Center>
// 					<Button
// 						color={css?.qtyFg || colors?.qtyFg}
// 						bg='transparent'
// 						_hover={{ bg: 'none' }}
// 						onClick={handleAdd}
// 					>
// 						+
// 					</Button>
// 				</Flex>
// 				<Box>
// 					<Button
// 						fontSize={`${css?.removeSize}px`}
// 						px='0px'
// 						bg='none'
// 						py='0px'
// 						onClick={handleRemove}
// 						color={css?.removeFg || colors?.removeFg}
// 						_hover={{ bg: 'none' }}
// 					>
// 						Remove
// 					</Button>
// 				</Box>
// 			</FlexColumn>
// 		</Flex>
// 	);
// };

// export default CartItem;
