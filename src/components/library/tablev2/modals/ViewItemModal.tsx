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
import { useDeleteByIdMutation, useGetByIdQuery } from '@/store/services/commonApi';
import useCustomToast from '../../hooks/useCustomToast';
import Column from '@/components/containers/Column';

type DeleteItemModalProps = {
	title?: string;
	id: string;
	path: string;
};

const ViewItemModal: React.FC<DeleteItemModalProps> = ({ title, path, id }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef<any>();

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
				{/* <AlertDialogOverlay> */}
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
						<Column gap={4}>
							{data &&
								Object.keys(data).map((key, index) => (
									<Column key={index}>
										<Heading
											size='sm'
											fontFamily='Bebas Neue'>
											{key}
										</Heading>
										<Text size='14px'> {data[key]}</Text>
									</Column>
								))}
						</Column>
					</ModalBody>
				</ModalContent>
				{/* </AlertDialogOverlay> */}
			</Modal>
		</>
	);
};

export default ViewItemModal;
