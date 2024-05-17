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
	Button,
	DrawerFooter,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { shadow, sizes } from '@/lib/constants';
import Column from '@/components/library/containers/Column';

type MenuModalProps = {
	children: React.ReactNode;
	trigger: any;
	onOpen: any;
	onClose: any;
	isOpen: any;
	isMobile: boolean;
	handleClick: any;
};

const PopModal: FC<MenuModalProps> = ({
	children,
	trigger,
	onClose,
	isOpen,
	onOpen,
	isMobile,
	handleClick,
}) => {
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
						w='100%'
						maxH='85vh'
						minH='20vh'
						userSelect='none'
						borderTopRadius='20px'>
						{children}

						<DrawerFooter
							pt={2}
							px={4}>
							<Button
								w='full'
								size='md'
								onClick={handleClick}>
								Apply
							</Button>
						</DrawerFooter>
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
				<Column
					gap={1}
					pb={1}>
					{children}
					<Button
						size='sm'
						onClick={handleClick}>
						Apply
					</Button>
				</Column>
			</PopoverContent>
		</Popover>
	);
};

export default PopModal;
