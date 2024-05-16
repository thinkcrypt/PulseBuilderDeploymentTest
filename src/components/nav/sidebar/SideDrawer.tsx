import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Flex,
	Heading,
	IconButton,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import { useGetSelfQuery } from '@/store/services/authApi';
import { sizes, zIndex } from '@/lib/constants';
import Icon from '@/components/library/icon/Icon';

const SideDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { data } = useGetSelfQuery({});

	return (
		<>
			<Flex sx={styles.container}>
				<IconButton
					aria-label='menu'
					icon={
						<Icon
							name='menu'
							size={20}
						/>
					}
					onClick={onOpen}
					size='xs'
					variant='ghost'
				/>
				<Heading size='md'>{data?.store?.name}</Heading>
			</Flex>

			<Drawer
				isOpen={isOpen}
				placement='left'
				onClose={onClose}>
				<DrawerOverlay />

				<DrawerContent>
					<Sidebar
						w='100%'
						closeBtn={<DrawerCloseButton />}
					/>
				</DrawerContent>
			</Drawer>
		</>
	);
};

const styles = {
	container: {
		gap: 2,
		zIndex: zIndex.NAV,
		w: sizes.SIDEBAR_WIDTH,
		alignItems: 'center',
		h: '64px',
		top: 0,
		left: 0,
		position: 'fixed',
		px: 6,
		bg: 'background.light',
		_dark: { bg: 'background.dark' },
	},
};

export default SideDrawer;
