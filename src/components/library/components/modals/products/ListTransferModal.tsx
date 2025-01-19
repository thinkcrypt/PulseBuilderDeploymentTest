'use client';

import { useDisclosure, Text } from '@chakra-ui/react';
import React, { FC, Fragment, useEffect, useState } from 'react';

import {
	MenuModal,
	MenuModalHeader,
	MenuModalBody,
	MenuModalCloseButton,
	MenuItem,
	Column,
	usePostMutation,
	useCustomToast,
	ViewItem,
} from '../../../';

type ListInventoryModalProps = {
	path: string;
	id: string;
	key: string;
	data: any;
	doc?: any;
};

const ListTransferModal: FC<ListInventoryModalProps> = ({ key, id, path, data, doc }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const closeModal = () => onClose();

	return (
		<>
			<MenuItem onClick={onOpen}>Product List</MenuItem>

			<MenuModal
				size='xl'
				isOpen={isOpen}
				onClose={closeModal}>
				<MenuModalHeader>Transfer Product Details</MenuModalHeader>
				<MenuModalCloseButton />
				<MenuModalBody px={0}>
					<Column
						gap={4}
						py={2}>
						{data?.products?.map((inv: any, i: number) => (
							<Fragment key={i}>
								<ViewItem
									key={i}
									isLoading={false}
									title={`${inv?.product?.name}`}
									type='number'>
									Qty: {inv?.quantity}
								</ViewItem>
								<ViewItem
									key={i}
									isLoading={false}
									title='Received Qty'
									type='number'>
									{inv?.receivedQty}
								</ViewItem>
								<ViewItem
									key={i}
									isLoading={false}
									title='To Receive'
									type='number'>
									{inv?.toReceive}
								</ViewItem>
								<ViewItem
									key={i}
									isLoading={false}
									title='Damaged Qty'
									type='number'>
									{inv?.damagedQty}
								</ViewItem>
							</Fragment>
						))}
					</Column>
				</MenuModalBody>
			</MenuModal>
		</>
	);
};

export default ListTransferModal;
