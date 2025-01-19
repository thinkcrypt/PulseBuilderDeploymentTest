'use client';

import React, { useEffect, useState } from 'react';

import {
	useAppDispatch,
	useAppSelector,
	calculateCartTotals,
	deleteAllFromCart,
	updateUser,
	Column,
	EmptyCartModal,
	SpaceBetween,
	IconButton,
} from '@/components/library';

import { useGetCartTotalMutation } from '@/store/services/ordersApi';

import EditablePriceItem from './pos-card/EditablePriceItem';
import CartItem from './pos-card/CartItem/CartItem';
import PriceItem from './pos-card/PriceItem';
import PosSelect from './PosSelect';
import AddressWidget from './pos-card/AddressWidget';

import { formFields as createCustomer } from '@/models/customer';
import CartPriceContainer from './CartPriceContainer';

import { CartContainer, SummaryContainer } from '.';

const PosCart = () => {
	const dispatch: any = useAppDispatch();
	const [trigger, result] = useGetCartTotalMutation();
	const { isLoading, isSuccess, isError, error, data } = result;

	const { cartItems, subTotal, vat, discount, shipping, user, total }: any = useAppSelector(
		(state: any) => state.cart
	);

	const [val, setVal] = useState<{ discount: number; shipping: number }>({
		discount: shipping,
		shipping: discount,
	});

	const handleChange = (e: any) => {
		setVal({ ...val, [e.target.name]: e.target.value });
		if (e.target.name === 'discount') {
			trigger({ items: cartItems, discount: Number(e.target.value), shipping });
		} else {
			trigger({ items: cartItems, discount, shipping: Number(e.target.value) });
		}
	};
	const handleResetCart = () => {
		dispatch(deleteAllFromCart());
		trigger({ items: [] });
	};

	useEffect(() => {
		setVal({ discount, shipping });
	}, [shipping, discount]);

	useEffect(() => {
		if (!isLoading && isSuccess) {
			dispatch(calculateCartTotals(result?.data));
		}
	}, [result]);

	const selectCustomer = (
		<PosSelect
			insert={true}
			dataModel={createCustomer}
			path='customers'
			value={user}
			setValue={(e: string) => dispatch(updateUser(e))}
			defaultValue={{ _id: 'guest', name: 'Walk in Customer' }}
		/>
	);

	const emptyCartButton = (
		<EmptyCartModal
			onClick={handleResetCart}
			title='Empty Cart'
			trigger={
				<IconButton
					tooltip='Empty Cart'
					aria-label='Empty Cart'
					colorScheme='red'
					iconName='delete'
					iconSize={18}
				/>
			}
		/>
	);

	return (
		<>
			<Column p='16px 8px 0 8px'>
				<SpaceBetween>
					<>{selectCustomer}</>
					<>{emptyCartButton}</>
				</SpaceBetween>
				<AddressWidget />
			</Column>
			<CartContainer>
				{cartItems?.map((item: any) => (
					<CartItem
						key={item?.id}
						item={item}
					/>
				))}
			</CartContainer>
			<CartPriceContainer>
				<PriceItem title='Subtotal'>{subTotal}</PriceItem>
				<PriceItem title='VAT (+)'>{vat}</PriceItem>

				<EditablePriceItem
					title='Shipping (+)'
					value={val.shipping}
					name='shipping'
					onChange={handleChange}
				/>
				<EditablePriceItem
					title='Discount (-)'
					value={val.discount}
					name='discount'
					onChange={handleChange}
				/>

				<PriceItem
					title='Total'
					heading>
					{total}
				</PriceItem>
			</CartPriceContainer>
		</>
	);
};

export default PosCart;
