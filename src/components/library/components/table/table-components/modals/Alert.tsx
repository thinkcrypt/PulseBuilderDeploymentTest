'use client';

import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogOverlay,
	Button,
	Flex,
	useDisclosure,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { AlertDialogHeader, AlertDialogContent } from '../../../../';

type DeleteItemModalProps = {
	prompt?: {
		title?: string;
		body?: string;
		btnText?: string;
		successMsg?: string;
	};
	children: ReactNode;
	handler: () => void;
};

const Alert: React.FC<DeleteItemModalProps> = ({ prompt, children, handler }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef<any>(undefined);

	const [isLoading, setIsLoading] = React.useState(false);

	const closeItem = () => {
		onClose();
	};

	const handleDelete = (e: any) => {
		setIsLoading(true);
		handler();
	};

	return (
		<>
			<Flex onClick={onOpen}>{children}</Flex>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={closeItem}>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader>{prompt?.title}</AlertDialogHeader>

						<AlertDialogBody>{prompt?.body}</AlertDialogBody>

						<AlertDialogFooter>
							<Button
								ref={cancelRef}
								onClick={closeItem}
								size='sm'
								colorScheme='gray'>
								Discard
							</Button>

							<Button
								isLoading={isLoading}
								colorScheme='red'
								onClick={handleDelete}
								ml={2}
								size='sm'>
								{prompt?.btnText || 'Proceed'}
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};

export default Alert;
