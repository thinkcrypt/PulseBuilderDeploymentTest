'use client';

import {
	useDisclosure,
	Text,
	Heading,
	Modal,
	ModalHeader,
	ModalContent,
	ModalBody,
	ModalOverlay,
	ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import MenuItem from '../../menu/CustomMenuItem';
import { useGetByIdQuery } from '@/store/services/commonApi';

import Column from '@/components/containers/Column';
import { ViewModalDataModelProps } from '../../types';

type DeleteItemModalProps = {
	title?: string;
	id: string;
	path: string;
	dataModel: ViewModalDataModelProps[];
};

const ViewItemModal: React.FC<DeleteItemModalProps> = ({ title, path, dataModel, id }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { data, isFetching } = useGetByIdQuery({
		path: path,
		id: id,
	});

	return (
		<>
			<MenuItem onClick={onOpen}>View</MenuItem>

			<Modal
				isOpen={isOpen}
				size='4xl'
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					boxShadow='lg'
					borderRadius='xl'
					bg='menu.light'
					_dark={{
						bg: 'menu.dark',
					}}>
					<ModalHeader
						fontSize='lg'
						fontWeight='bold'>
						Item Details
					</ModalHeader>
					<ModalCloseButton />

					<ModalBody>
						<Column
							gap={4}
							pb={4}>
							{data &&
								dataModel.map(
									({ title, dataKey, type }: ViewModalDataModelProps, index: number) => {
										let value = type == 'date' ? new Date(data[dataKey]) : data[dataKey];
										return (
											<Column key={index}>
												<Heading
													size='sm'
													fontFamily='Bebas Neue'>
													{title}
												</Heading>
												<Text size='14px'>{type === 'date' ? value.toLocaleString() : value}</Text>
											</Column>
										);
									}
								)}
						</Column>
					</ModalBody>
				</ModalContent>
				{/* </AlertDialogOverlay> */}
			</Modal>
		</>
	);
};

export default ViewItemModal;
