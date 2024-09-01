'use client';

import { FC } from 'react';
import {
	useDisclosure,
	Modal,
	ModalBody,
	ModalOverlay,
	ModalCloseButton,
	Drawer,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerBody,
	Flex,
} from '@chakra-ui/react';
import {
	ViewModalDataModelProps,
	Column,
	ModalContent,
	ModalHeader,
	useIsMobile,
	DrawerHeader,
	useGetByIdQuery,
	MenuItem,
} from '../../../../';
import { ViewItem } from './';
import { DrawerContentContainer } from '../pop-modals';

type DeleteItemModalProps = {
	title?: string;
	id: string;
	path: string;
	dataModel: ViewModalDataModelProps[];
	trigger?: any;
};

const ViewItemModal: FC<DeleteItemModalProps> = ({ title, path, dataModel, trigger, id }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { data, isFetching, isError } = useGetByIdQuery(
		{
			path: path,
			id: id,
		},
		{ skip: !id || !isOpen }
	);

	const getValue = (dataKey: string, type: any): any => {
		if (!data) return;
		// Split the dataKey by '.' to determine if it's nested
		const keys = dataKey?.split('.');
		// Determine the appropriate value based on whether the key is nested
		let value = 'n/a';
		if (keys?.length === 1) {
			// Single level key, directly access the value
			value = type === 'date' ? new Date(data[dataKey]) : data[dataKey];
		} else if (keys?.length === 2) {
			// Nested key, access the nested value
			const [parentKey, childKey] = keys;
			value = type === 'date' ? new Date(data[parentKey]?.[childKey]) : data[parentKey]?.[childKey];
		}
		return value;
	};

	const isMobile = useIsMobile();

	const Container = isMobile ? Drawer : Modal;
	const Overlay = isMobile ? DrawerOverlay : ModalOverlay;
	const Content = isMobile ? DrawerContentContainer : ModalContent;
	const Header = isMobile ? DrawerHeader : ModalHeader;
	const CloseButton = isMobile ? DrawerCloseButton : ModalCloseButton;
	const Body = isMobile ? DrawerBody : ModalBody;

	const renderTrigger = () => {
		if (trigger) {
			return <Flex onClick={onOpen}>{trigger}</Flex>;
		} else {
			return <MenuItem onClick={onOpen}>View</MenuItem>;
		}
	};

	return (
		<>
			{renderTrigger()}
			<Container
				isCentered
				{...(isMobile && { placement: 'bottom' })}
				{...(isMobile && { isFullHeight: false })}
				isOpen={isOpen}
				size='xl'
				onClose={onClose}>
				<Overlay />
				<Content>
					<Header>{title || 'Item Details'}</Header>
					<CloseButton />

					<Body px={0}>
						<Column
							gap={4}
							pt={2}>
							{dataModel.map((item: ViewModalDataModelProps, i: number) => {
								const { title, dataKey, type, colorScheme, path } = item;

								return (
									<ViewItem
										isLoading={isFetching}
										title={title}
										type={type}
										colorScheme={colorScheme}
										path={path}
										key={i}>
										{data && getValue(dataKey, type)}
									</ViewItem>
								);
							})}
						</Column>
					</Body>
				</Content>
				{/* </AlertDialogOverlay> */}
			</Container>
		</>
	);
};

export default ViewItemModal;
