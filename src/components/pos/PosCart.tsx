import { Button, Flex, useColorModeValue } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { calculateCartTotals, deleteAllFromCart, updateUser } from '@/store/slices/cartSlice';
import Column from '../containers/Column';
import { useGetCartTotalMutation } from '@/store/services/ordersApi';
import EditablePriceItem from './pos-card/EditablePriceItem';
import CartItem from './pos-card/CartItem';
import PriceItem from './pos-card/PriceItem';
import PosSelect from './PosSelect';
import SpaceBetween from '../containers/SpaceBetween';
import AddressWidget from './pos-card/AddressWidget';
import createCustomer from '@/lib/dataModels/createCustomer.model';

const HEIGHT = 'calc(100vh - 64px - 52px - 8px)';

const PosCart = () => {
	const dispatch: any = useAppDispatch();
	const [trigger, result] = useGetCartTotalMutation();
	const borderColor = useColorModeValue('stroke.deepL', 'stroke.deepD');

	const { cartItems, subTotal, vat, discount, shipping, user, total }: any = useAppSelector(
		(state: any) => state.cart
	);

	const [val, setVal] = useState<{ discount: number; shipping: number }>({
		discount: shipping,
		shipping: discount,
	});

	const handleChange = useCallback(
		(e: any) => {
			setVal({ ...val, [e.target.name]: e.target.value });
			if (e.target.name === 'discount') {
				trigger({ items: cartItems, discount: Number(e.target.value), shipping });
			} else {
				trigger({ items: cartItems, discount, shipping: Number(e.target.value) });
			}
		},
		[val, cartItems, discount, shipping, trigger]
	);

	const handleResetCart = useCallback(() => {
		dispatch(deleteAllFromCart());
		trigger({ items: [] });
	}, [dispatch, trigger]);

	useEffect(() => {
		setVal({ discount, shipping });
	}, [shipping, discount]);

	useEffect(() => {
		if (!result.isLoading) {
			if (result.isSuccess) {
				dispatch(calculateCartTotals(result?.data));
			}
		}
	}, [result]);

	return (
		<Flex flexDir='column' h={HEIGHT}>
			<SpaceBetween>
				<PosSelect
					insert={true}
					dataModel={createCustomer}
					path='customers'
					value={user}
					setValue={(e: string) => dispatch(updateUser(e))}
					defaultValue={{ _id: 'guest', name: 'Walk in Customer' }}
				/>
				<Button onClick={handleResetCart}>Empty Cart</Button>
			</SpaceBetween>
			<AddressWidget />

			<Flex h={`calc(${HEIGHT} - 160px)`} flexDir='column' overflowY='scroll'>
				{cartItems?.map(({ id, name, price, qty }: CartItem) => (
					<CartItem key={id} id={id} name={name} price={price} qty={qty} />
				))}
			</Flex>
			<Column py={2} borderTop='1px solid' borderTopColor={borderColor}>
				<PriceItem title='Subtotal'>{subTotal}</PriceItem>
				<EditablePriceItem
					title='Discount (-)'
					value={val.discount}
					name='discount'
					onChange={handleChange}
				/>
				<PriceItem title='VAT (+)'>{vat}</PriceItem>
				<EditablePriceItem
					title='Shipping (+)'
					value={val.shipping}
					name='shipping'
					onChange={handleChange}
				/>
				<PriceItem title='Total' heading>
					{total}
				</PriceItem>
			</Column>
		</Flex>
	);
};

export default PosCart;
