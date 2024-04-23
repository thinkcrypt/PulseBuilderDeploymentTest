'use client';
import React, { useEffect, useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	GridItem,
	Grid,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { currency } from '@/lib/constants';
import Column from '../containers/Column';
import PosInput from './PosInput';
import VTextarea from '../library/utils/inputs/VTextarea';
import OrderPriceDetails from './pos-card/OrderPriceDetails';
import { useAddOrderMutation, useGetCartTotalMutation } from '@/store/services/ordersApi';
import ModalContainer from '../library/menu/ModalContainer';
import useCustomToast from '../library/hooks/useCustomToast';
import { resetCart } from '@/store/slices/cartSlice';

const OrderModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { cartItems, total, user, subTotal, discount, vat, shipping, address, isAddressSet } =
		useAppSelector(state => state.cart);
	const dispatch = useAppDispatch();

	const [trigger, result] = useGetCartTotalMutation();
	const [paidAmount, setPaidAmount] = useState<any>();
	const [paymentMethod, setPaymentMethod] = useState('cash');
	const [note, setNote] = useState('');

	const [createOrder, createOrderResult] = useAddOrderMutation();

	useEffect(() => {
		trigger({ items: cartItems, discount, shipping });
	}, [cartItems, discount, shipping, trigger]);

	const handlePaid = () => {
		setPaidAmount(total);
	};

	const onModalClose = () => {
		onClose();
		setPaidAmount(undefined);
		setPaymentMethod('cash');
		setNote('');
	};

	useCustomToast({
		successText: 'Order Created',
		isSuccess: createOrderResult?.isSuccess,
		isError: createOrderResult?.isError,
		isLoading: createOrderResult?.isLoading,
		error: createOrderResult?.error,
	});

	const handleCreateOrder = () => {
		createOrder({
			cart: result?.data,
			paymentMethod,
			paymentAmount: paidAmount,
			paidAmount,
			note,
			address,
			user,
		});
	};

	useEffect(() => {
		if (!createOrderResult?.isLoading)
			if (createOrderResult?.isSuccess) {
				dispatch(resetCart());
				onModalClose();
			}
	}, [createOrderResult]);

	const renderLeftSection = (
		<>
			<Grid gridTemplateColumns='1fr 1fr 1fr' rowGap={4} pb={4} w='100%'>
				<GridItem fontWeight='600'>Product Detail</GridItem>
				<GridItem fontWeight='600' textAlign='center'>
					Quantity
				</GridItem>
				<GridItem fontWeight='600' textAlign='right'>
					Price
				</GridItem>
			</Grid>
			<Grid gridTemplateColumns='1fr 1fr 1fr' rowGap={4} maxH='300px' overflowY='scroll'>
				{result?.data?.items?.map((item: any) => (
					<>
						<GridItem>{item?.name}</GridItem>
						<GridItem textAlign='center'>{item?.qty}</GridItem>
						<GridItem textAlign='right'>
							{currency.symbol}
							{item?.totalPrice?.toLocaleString()}
						</GridItem>
					</>
				))}
			</Grid>
			<Flex flex={1} align='flex-end' w='full'>
				<OrderPriceDetails
					total={result?.data?.total}
					subTotal={result?.data?.subTotal}
					discount={result?.data?.discount}
					shipping={result?.data?.shipping}
					vat={result?.data?.vat}
				/>
			</Flex>
		</>
	);

	const renderRightSection = (
		<>
			<Flex align='center' justify='space-between'>
				<Heading size='sm'>Billing Details</Heading>
				<Button size='xs' onClick={handlePaid}>
					Paid
				</Button>
			</Flex>

			<PosInput valueType='text' value={total?.toLocaleString()} label='Total Due' />
			<PosInput
				value={paidAmount}
				type='number'
				onChange={(e: any) => setPaidAmount(e.target.value)}
				label='Paid Amount'
			/>
			<PosInput
				value={paymentMethod}
				valueType='select'
				onChange={(e: any) => setPaymentMethod(e?.target?.value)}
				label='Payment Method'
				options={['cash', 'credit card', 'bkash', 'nagad', 'other']}
			/>
			<VTextarea value={note} onChange={(e: any) => setNote(e.target.value)} label='Note' />
		</>
	);

	return (
		<>
			<Button w='156px' h='100%' borderRadius={0} onClick={onOpen}>
				Confirm Order
			</Button>

			<Modal size='5xl' isOpen={isOpen} onClose={onModalClose}>
				<ModalOverlay />
				<ModalContainer>
					<ModalHeader>
						Order Details
						{isAddressSet && (
							<Text fontSize='.9rem' fontWeight='500'>
								<b>Delivery Address:</b> {address?.street}, {address?.city}, {address?.postalCode},{' '}
								{address?.country}
							</Text>
						)}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Grid gridTemplateColumns='3fr 2fr' gap={10}>
							<Flex flexDirection='column'>{renderLeftSection}</Flex>
							<Column flex={1} gap={4}>
								{renderRightSection}
								<Flex flex={1} align='flex-end' justify='flex-end'>
									<Button onClick={handleCreateOrder} isLoading={createOrderResult?.isLoading}>
										Confirm & Pay
									</Button>
								</Flex>
							</Column>
						</Grid>
					</ModalBody>
				</ModalContainer>
			</Modal>
		</>
	);
};

export default OrderModal;
