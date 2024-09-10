'use client';
import React, { useEffect, useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	GridItem,
	Grid,
	Flex,
	Heading,
	useColorModeValue,
	Drawer,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
} from '@chakra-ui/react';

import PosInput from './PosInput';
import OrderPriceDetails from './pos-card/OrderPriceDetails/OrderPriceDetails';

import {
	ModalContainer,
	Column,
	currency,
	VTextarea,
	useGetByIdQuery,
	Align,
	MenuItem,
	useUpdateByIdMutation,
	useCustomToast,
	useIsMobile,
} from '@/components/library';
import {
	OrderAddress,
	OrderButton,
	OrderCustomer,
	OrderItemHeading,
	OrderItemsContainer,
	OrderItemText,
	OrderRightSectionContainer,
} from './pos-card/odder';

const ViewOrderModal = ({ id }: { id: string }) => {
	const { data, isFetching, isError, isSuccess, refetch } = useGetByIdQuery({
		id: id,
		path: 'orders',
	});
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [status, setStatus] = useState();

	const [trigger, result] = useUpdateByIdMutation();

	const onModalOpen = () => {
		onOpen();
		refetch();
	};

	const onModalClose = () => {
		setStatus(data?.status);
		onClose();
	};

	useEffect(() => {
		if (!isFetching && isSuccess) setStatus(data?.status);
	}, [isFetching]);

	const borderColor = useColorModeValue('#bbb', 'stroke.deepD');

	const onUpdate = () => {
		trigger({ id: id, body: { status }, path: 'orders' });
	};

	useCustomToast({
		successText: 'Order status updated successfully',
		isSuccess: result?.isSuccess,
		isError: result?.isError,
		isLoading: result?.isLoading,
		error: result?.error,
	});

	const renderLeftSection = (
		<>
			<OrderRightSectionContainer>
				<OrderItemHeading>Description</OrderItemHeading>
				<OrderItemHeading textAlign='center'>Price</OrderItemHeading>
				<OrderItemHeading textAlign='center'>Qty</OrderItemHeading>
				<OrderItemHeading textAlign='right'>Amount</OrderItemHeading>
			</OrderRightSectionContainer>
			<OrderItemsContainer>
				{data?.items?.map((item: any, i: number) => (
					<Grid
						gridTemplateColumns='2fr 1fr 1fr 1fr'
						key={i}>
						<OrderItemText fontWeight='600'>
							{i + 1}. {item?.name}
						</OrderItemText>
						<GridItem textAlign='center'>{item?.unitPrice?.toFixed(2)?.toLocaleString()}</GridItem>
						<GridItem textAlign='center'>{item?.qty}</GridItem>
						<GridItem textAlign='right'>
							{currency.symbol}
							{item?.totalPrice?.toFixed(2)?.toLocaleString()}
						</GridItem>
					</Grid>
				))}
			</OrderItemsContainer>
			<Flex
				flex={1}
				align='flex-end'
				w='full'>
				<OrderPriceDetails
					total={data?.total}
					subTotal={data?.subTotal}
					discount={data?.discount}
					shipping={data?.shipping}
					vat={data?.vat}
				/>
			</Flex>
		</>
	);

	const renderRightSection = (
		<>
			<Align
				py={3}
				borderBottom='1px dashed'
				borderTop='1px dashed'
				borderColor={borderColor}>
				<Heading size='sm'>Billing Details</Heading>
			</Align>

			<PosInput
				valueType='price'
				value={data?.dueAmount}
				label='Total Due'
				isDisabled
			/>
			<PosInput
				value={data?.paidAmount}
				isDisabled
				label='Paid Amount'
				valueType='price'
			/>
			<PosInput
				isDisabled
				value={data?.paymentMethod}
				valueType='text'
				label='Payment Method'
			/>
			<PosInput
				value={status}
				onChange={(e: any) => setStatus(e.target.value)}
				valueType='select'
				label='Order Status'
				options={[
					'pending',
					'order-placed',
					'confirmed',
					'out-for-delivery',
					'delivered',
					'completed',
					'cancelled',
				]}
			/>
			<VTextarea
				value={data?.note}
				isDisabled
				label='Note'
			/>
		</>
	);

	const isSmallScreen = useIsMobile();

	const Container = isSmallScreen ? Drawer : Modal;
	const Overlay = isSmallScreen ? DrawerOverlay : ModalOverlay;
	const CloseButton = isSmallScreen ? DrawerCloseButton : ModalCloseButton;
	const Header = isSmallScreen ? DrawerHeader : ModalHeader;
	const Body = isSmallScreen ? DrawerBody : ModalBody;

	return (
		<>
			<MenuItem onClick={onModalOpen}>View Order</MenuItem>

			<Container
				{...(!isSmallScreen && { isCentered: true })}
				{...(isSmallScreen && { placement: 'bottom' })}
				closeOnOverlayClick={false}
				size='5xl'
				isOpen={isOpen}
				onClose={onModalClose}>
				<Overlay />
				<ModalContainer isSmallScreen={isSmallScreen}>
					<Header>
						Order Details
						{data?.customer && <OrderCustomer data={data?.customer} />}
						{data?.address && <OrderAddress address={data?.address} />}
					</Header>
					<CloseButton />
					{data && (
						<Body>
							<Grid
								display={{ base: 'flex', md: 'grid' }}
								flexDir={{ base: 'column', md: 'row' }}
								gridTemplateColumns={{ base: '1fr', md: '3fr 2fr' }}
								gap={10}>
								<Flex flexDirection='column'>{renderLeftSection}</Flex>
								<Column
									flex={1}
									gap={4}>
									<Column
										gap={2}
										flex={1}>
										{renderRightSection}
									</Column>

									<OrderButton
										isLoading={result?.isLoading}
										onClick={onUpdate}
										isDisabled={!data || status == data?.status}>
										Update Order
									</OrderButton>
								</Column>
							</Grid>
						</Body>
					)}
				</ModalContainer>
			</Container>
		</>
	);
};

export default ViewOrderModal;
