import useIsMobile from '../../../hooks/useIsMobile';
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	Popover,
	PopoverTrigger,
	Flex,
	useColorModeValue,
	PopoverArrow,
	PopoverContent,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { shadow, sizes } from '@/lib/constants';

type MenuModalProps = {
	children: React.ReactNode;
	trigger: any;
	onOpen: any;
	onClose: any;
	isOpen: any;
	isMobile: boolean;
};

const PopModal: FC<MenuModalProps> = ({ children, trigger, onClose, isOpen, onOpen, isMobile }) => {
	const arrow = useColorModeValue('menu.light', 'menu.dark');

	if (isMobile) {
		return (
			<>
				{trigger}
				<Drawer
					isFullHeight={false}
					placement='bottom'
					onClose={onClose}
					isOpen={isOpen}>
					<DrawerOverlay />
					<DrawerContent
						bg='menu.light'
						_dark={{
							bg: 'menu.dark',
						}}
						maxH='85vh'
						userSelect='none'
						borderTopRadius='20px'>
						{children}
					</DrawerContent>
				</Drawer>
			</>
		);
	}

	return (
		<Popover
			onOpen={onOpen}
			onClose={onClose}
			isOpen={isOpen}>
			<span> {trigger}</span>

			<PopoverContent
				boxShadow='lg'
				borderRadius='2xl'
				bg='menu.light'
				_focusVisible={{
					outline: 'none',
				}}
				_dark={{
					bg: 'menu.dark',
				}}
				maxW={sizes.POPOVER_WIDTH}>
				<PopoverArrow bg={arrow} />
				{children}
			</PopoverContent>
		</Popover>
	);
};

export default PopModal;
