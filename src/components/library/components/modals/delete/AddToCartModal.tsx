'use client';

import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogOverlay,
	Button,
	Flex,
	Heading,
	Text,
	useDisclosure,
	Input,
	FormControl,
	Stack,
} from '@chakra-ui/react';
import React, { ReactNode, useState } from 'react';

import {
	AlertDialogHeader,
	AlertDialogContent,
	Column,
	useAppDispatch,
	addToCart,
	Label,
	Price,
} from '../../../';
import CardContainer from '@/components/pos/pos-card/CardContainer';

type DeleteItemModalProps = {
	item: any;
	children: ReactNode;
};

const AddToCartModal: React.FC<DeleteItemModalProps> = ({ children, item }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef<any>();
	const inputRef = React.useRef<HTMLInputElement>(null);

	const [qty, setQty] = useState<number>();

	const dispatch = useAppDispatch();

	const closeItem = () => {
		setQty(undefined);
		onClose();
	};

	const handleDelete = (e: any) => {
		e.preventDefault();
		dispatch(addToCart({ item, qty }));
		closeItem();
	};

	const onModalOpen = () => {
		onOpen();
		setTimeout(() => {
			inputRef?.current?.focus();
		}, 100);
	};

	return (
		<>
			<CardContainer onClick={onModalOpen}>{children}</CardContainer>

			<AlertDialog
				closeOnOverlayClick={false}
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={closeItem}>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader>Add Item To cart</AlertDialogHeader>
						<form onSubmit={handleDelete}>
							<AlertDialogBody>
								<Column
									pt={4}
									gap={2}>
									<Heading size='md'>{item?.name}</Heading>
									{item?.unitValue && (
										<Text>
											{item?.unitValue} {item?.unit}
										</Text>
									)}
									<Text fontSize='.8rem'>SKU: {item?.sku}</Text>
									<Text fontSize='.8rem'>Barcode: {item?.barcode}</Text>
									<Heading size='xs'>Qty: {qty}</Heading>
									<Heading size='sm'>
										Unit Price: <Price>{item?.price}</Price>
									</Heading>
									<Flex pt={4}>
										<FormControl gap={4}>
											<Stack
												spacing={2}
												w='full'>
												<Label>Enter Quantity</Label>
												<Stack
													spacing={1}
													w='full'>
													<Input
														value={qty}
														ref={inputRef}
														onChange={(e: any) => setQty(e.target.value)}
														type='number'
													/>
												</Stack>
											</Stack>
										</FormControl>
									</Flex>
								</Column>
							</AlertDialogBody>

							<AlertDialogFooter>
								<Button
									ref={cancelRef}
									onClick={closeItem}
									size='sm'
									colorScheme='gray'>
									Discard
								</Button>

								<Button
									colorScheme='brand'
									type='submit'
									ml={2}
									size='sm'>
									Add To Cart
								</Button>
							</AlertDialogFooter>
						</form>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};

export default AddToCartModal;
