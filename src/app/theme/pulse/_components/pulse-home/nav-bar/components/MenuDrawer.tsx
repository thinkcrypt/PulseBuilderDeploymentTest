import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	BoxProps,
	Button,
	Center,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useRef } from 'react';
import { MenuDrawerBody } from './index';
import { useColors, Icon } from '../../../../_components/index';

type MenuDrawerProps = BoxProps & {
	content: any;
	basic: any;
};

const MenuDrawer: FC<MenuDrawerProps> = ({ content, basic, ...props }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLDivElement>(null);
	const colors = useColors();

	const css = content?.headerCategories;

	return (
		<Box {...props}>
			<Box ref={btnRef} onClick={onOpen}>
				<Center
					w='40px'
					h='40px'
					bg={isOpen ? colors?.darkLight : 'transparent'}
					borderRadius='50%'
				>
					{isOpen ? (
						<Icon size={24} color={colors?.white} name='cross' />
					) : (
						<Icon size={24} color={colors?.white} name='menu' />
					)}
				</Center>
			</Box>
			<Drawer
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				{/* <DrawerOverlay /> */}
				<DrawerContent
					sx={{
						marginTop: '74px', // Moves the drawer down
						height: 'calc(100vh - 74px)', // Ensures it doesn't exceed the viewport
						borderRadius: '0 8px 8px 0', // Optional: Adds rounded corners to the top
					}}
				>
					<MenuDrawerBody css={css} basic={basic} />
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default MenuDrawer;
