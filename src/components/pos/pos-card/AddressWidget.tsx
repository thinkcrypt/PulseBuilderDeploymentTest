'use client';
import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	Flex,
	ModalFooter,
	Text,
} from '@chakra-ui/react';
import ModalContainer from '@/components/library/menu/ModalContainer';
import { InputData } from '@/components/library/types';
import useFormData from '@/components/library/utils/functions/useFormData';
import FormContent from '@/components/library/create-page/page/FormContent';
import { Address, removeAddress, setAddress } from '@/store/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import Column from '@/components/containers/Column';

const inputFields: InputData<Address>[] = [
	{
		name: 'name',
		label: 'Recipient Name',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'email',
		label: 'Recipient Email',
		isRequired: true,
		type: 'text',
		span: 1,
	},
	{
		name: 'phone',
		label: 'Recipient Phone',
		isRequired: true,
		type: 'text',
		span: 1,
	},
	{
		name: 'street',
		label: 'Street Address',
		isRequired: true,
		type: 'textarea',
	},
	{
		name: 'city',
		label: 'City',
		isRequired: true,
		type: 'text',
		span: 1,
	},
	{
		name: 'state',
		label: 'State',
		isRequired: false,
		type: 'text',
		span: 1,
	},
	{
		name: 'country',
		label: 'Country',
		isRequired: false,
		type: 'text',
		span: 1,
	},
	{
		name: 'postalCode',
		label: 'Post Code',
		isRequired: true,
		type: 'text',
		span: 1,
	},
];

const AddressWidget = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const dispatch = useAppDispatch();
	const { isAddressSet, address } = useAppSelector(state => state.cart);
	const [formData, setFormData] = useFormData<Address>(inputFields);

	const onModalClose = () => {
		onClose();
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		dispatch(setAddress(formData));
		onModalClose();
	};

	const deleteAddress = (e: any) => {
		dispatch(removeAddress());
	};

	return (
		<>
			<Flex w='100%' py={2}>
				{isAddressSet ? (
					<Flex>
						<Column gap={0}>
							<Text fontSize='.8rem' fontWeight='600'>
								{`${address?.street}, ${address?.city},`}{' '}
								{`${address?.postalCode}, ${address?.country}`}
							</Text>
						</Column>
						<Button size='xs' onClick={deleteAddress}>
							Delete
						</Button>
					</Flex>
				) : (
					<Button variant='link' onClick={onOpen}>
						Add Delivery Address
					</Button>
				)}
			</Flex>

			<Modal size='4xl' isOpen={isOpen} onClose={onModalClose}>
				<ModalOverlay />

				<ModalContainer>
					<ModalCloseButton />
					<ModalHeader>Delivery Address</ModalHeader>
					<form onSubmit={handleSubmit}>
						<ModalBody>
							<FormContent formData={formData} setFormData={setFormData} data={inputFields} />
						</ModalBody>
						<ModalFooter>
							<Button colorScheme='gray' mr={2} size='sm' onClick={onModalClose}>
								Discard
							</Button>
							<Button size='sm' type='submit'>
								Submit
							</Button>
						</ModalFooter>
					</form>
				</ModalContainer>
			</Modal>
		</>
	);
};

export default AddressWidget;
