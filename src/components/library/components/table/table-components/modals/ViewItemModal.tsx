'use client';

import { FC } from 'react';
import { useDisclosure, Modal, ModalBody, ModalOverlay, ModalCloseButton } from '@chakra-ui/react';
import {
	CustomMenuitem as MenuItem,
	ViewModalDataModelProps,
	Column,
	ModalContent,
	ModalHeader,
} from '../../../../';
import { useGetByIdQuery } from '@/store/services/commonApi';
import { ViewItem } from './';

type DeleteItemModalProps = {
	title?: string;
	id: string;
	path: string;
	dataModel: ViewModalDataModelProps[];
};

const ViewItemModal: FC<DeleteItemModalProps> = ({ title, path, dataModel, id }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { data, isFetching, isError } = useGetByIdQuery(
		{
			path: path,
			id: id,
		},
		{ skip: !id }
	);

	return (
		<>
			<MenuItem onClick={onOpen}>View</MenuItem>

			<Modal
				isCentered
				isOpen={isOpen}
				size='xl'
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{title || 'Item Details'}</ModalHeader>
					<ModalCloseButton />

					<ModalBody px={0}>
						<Column
							gap={4}
							pt={2}>
							{data &&
								dataModel.map((item: ViewModalDataModelProps, i: number) => {
									const { title, dataKey, type, colorScheme } = item;
									let value = type == 'date' ? new Date(data[dataKey]) : data[dataKey];
									return (
										<ViewItem
											title={title}
											type={type}
											colorScheme={colorScheme}
											key={i}>
											{value}
										</ViewItem>
									);
								})}
						</Column>
					</ModalBody>
				</ModalContent>
				{/* </AlertDialogOverlay> */}
			</Modal>
		</>
	);
};

export default ViewItemModal;
