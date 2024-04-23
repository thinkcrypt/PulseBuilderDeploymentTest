import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { calculateCartTotals } from '@/store/slices/cartSlice';
import { useGetCartTotalMutation } from '@/store/services/ordersApi';
import { addToCart, deleteOneFromCart, deleteSingleItemFromCart } from '@/store/slices/cartSlice';
import { Button, Flex, Grid, Heading, IconButton, Text } from '@chakra-ui/react';
import Column from '@/components/containers/Column';
import Icon from '@/components/library/icon/Icon';
import { currency } from '@/lib/constants';

type CartItem = {
	id: string;
	name: string;
	price: number;
	qty: number;
};

const CartItem = ({ id, name, price, qty }: CartItem) => {
	const dispatch = useAppDispatch();

	const [trigger, result] = useGetCartTotalMutation();
	const cart = useAppSelector(state => state.cart);

	const { cartItems, subTotal, total, vat, discount, shipping } = cart;

	const [itemsInCart, setItemsInCart] = useState<CartItem[]>([]);

	useEffect(() => {
		console.log('cartItems', cartItems);
		setItemsInCart(cartItems);
	}, [cartItems]);

	useEffect(() => {
		console.log('itemsInCart', itemsInCart);
	}, [cart]);

	useEffect(() => {
		trigger({ items: cartItems, shipping, discount });
	}, [itemsInCart]);

	useEffect(() => {
		if (!result.isLoading) {
			if (result.isSuccess) {
				dispatch(calculateCartTotals(result.data));
			}
		}
	}, [result]);

	const handleAddToCart = () => {
		dispatch(addToCart({ id, name, price }));
	};

	const handleDeleteFromCart = () => {
		dispatch(deleteOneFromCart(id));
	};

	const handleDelete = () => {
		dispatch(deleteSingleItemFromCart(id));
	};

	return (
		<Grid gridTemplateColumns='1fr 4fr 2fr' w='full'>
			<Flex align='flex-start'>
				<Column gap={0} align='center'>
					<IconButton
						onClick={handleAddToCart}
						aria-label='add'
						icon={<Icon name='add' size={16} />}
						size='xs'
						variant='ghost'
					/>
					<Text textAlign='center'>{qty}</Text>
					<IconButton
						onClick={handleDeleteFromCart}
						aria-label='subtract'
						icon={<Icon name='subtract' size={12} />}
						size='xs'
						variant='ghost'
					/>
				</Column>
			</Flex>

			<Column justify='center' align='flex-start'>
				<Text lineHeight='1.2'>{name}</Text>
				<Button onClick={handleDelete} size='sm' colorScheme='red' variant='link'>
					Remove
				</Button>
			</Column>

			<Column justify='center'>
				<Text textAlign='right' fontSize='.8rem'>
					{price?.toLocaleString()} x {qty}
				</Text>
				<Heading size='xs' textAlign='right'>
					{currency.symbol} {(price * qty)?.toLocaleString()}
				</Heading>
			</Column>
		</Grid>
	);
};

export default CartItem;
