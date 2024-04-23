'use client';
import {
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import InsertUrl from './InsertUrl';
import MyPhotos from './MyPhotos';
import UploadImage from './UploadImage';
import AddImageButton from '@/components/library/utils/buttons/AddImageButton';
import EditImageButton from '@/components/library/utils/buttons/EditImageButton';

const PADDING_X = 4;

const buttonTypes = {
	add: <AddImageButton size='200px' />,
	edit: <EditImageButton />,
};

const UploadModal = ({
	album,
	trigger,
	handleImage,
	type = 'add',
}: {
	album?: string;
	trigger?: React.ReactNode;
	handleImage: any;
	type?: 'add' | 'edit';
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const bg = useColorModeValue('menu.light', 'menu.dark');
	const [img, setImg] = useState(null);

	let triggerButton = buttonTypes[type] || trigger;

	const handleImageSelect = (e: any) => {
		setImg(e);
	};

	const handleInsert = () => {
		handleImage(img);
		onClose();
	};

	const handleUploadComplete = (e: any) => {
		setImg(e);
		handleImage(e);
		onClose();
	};

	return (
		<>
			<Flex onClick={onOpen}>{triggerButton}</Flex>
			<Modal isOpen={isOpen} onClose={onClose} size='6xl' isCentered>
				<ModalOverlay />
				<ModalContent bg={bg}>
					<ModalHeader>Insert Photo/File</ModalHeader>
					<ModalCloseButton />
					<ModalBody minH='70vh'>
						<Tabs h='60vh' colorScheme='brand' flex={1}>
							<TabList>
								<Tab>Photos</Tab>
								<Tab>Upload</Tab>
								<Tab>Web Address (URL)</Tab>
							</TabList>
							<TabPanels h='full' px={0} overflowY='scroll'>
								<TabPanel sx={styles.panel}>
									<MyPhotos handleSelect={handleImageSelect} />
								</TabPanel>
								<TabPanel sx={styles.panel}>
									<UploadImage handleSelect={handleUploadComplete} />
								</TabPanel>
								<TabPanel sx={styles.panel}>
									<InsertUrl handleSelect={handleImageSelect} />
								</TabPanel>
							</TabPanels>
						</Tabs>
					</ModalBody>

					<ModalFooter>
						<Flex gap={2} flex={1}>
							<Button size='sm' isDisabled={!img} onClick={handleInsert}>
								Insert
							</Button>
							<Button colorScheme='gray' size='sm' onClick={onClose}>
								Cancel
							</Button>
						</Flex>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

const styles = {
	container: {
		border: '1px solid red',
		h: '80vh',
		w: '1200px',
		position: 'fixed',
		left: '20',
		top: '20',
		bg: 'background.light',
		_dark: {
			bg: 'background.dark',
		},
		zIndex: '999',
	},
	panel: {
		flex: 1,
		h: 'full',
		px: 0,
	},
};

export default UploadModal;
