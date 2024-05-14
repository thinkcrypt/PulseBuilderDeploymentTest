'use client';

import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	Text,
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

	// useCustomToast({
	// 	successText: `${title ? title : 'Item'} Deleted Successfully`,
	// 	isSuccess: result?.isSuccess,
	// 	isError: result?.isError,
	// 	isLoading: result?.isLoading,
	// 	error: result?.error,
	// });

	return (
		<>
			<MenuItem
				color='red'
				onClick={onOpen}>
				Delete
			</MenuItem>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={close}>
				<AlertDialogOverlay>
					<AlertDialogContent
						boxShadow='lg'
						borderRadius='xl'
						bg='menu.light'
						_dark={{
							bg: 'menu.dark',
						}}>
						<AlertDialogHeader
							fontSize='lg'
							fontWeight='bold'>
							Item Details
						</AlertDialogHeader>

						<AlertDialogBody>
							{data &&
								Object.keys(data).map((key, index) => (
									<Column key={index}>
										<Text>{key}</Text>
										<Text>{data[key]}</Text>
									</Column>
								))}
						</AlertDialogBody>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};

export default ViewItemModal;
