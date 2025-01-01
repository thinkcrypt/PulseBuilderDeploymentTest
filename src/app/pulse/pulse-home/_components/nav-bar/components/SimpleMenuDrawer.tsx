import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	Box,
	BoxProps,
	Center,
	Drawer,
	DrawerBody,
	DrawerContent,
	Flex,
	useDisclosure,
} from '@chakra-ui/react';
import { FC, useRef } from 'react';
import useColors from '@/components/library/hooks/useColors';
import { Icon } from '../../icon';
import SimpleNavLists from './SimpleNavLists';

type MenuDrawerProps = BoxProps & {
	content: any;
	basic: any;
};

const MenuDrawer: FC<MenuDrawerProps> = ({ content, basic, ...props }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLDivElement>(null);
	const colors = useColors();
	const css = content?.headerCategories;

	const collections = content?.collections?.items;

	const logoHeight = content?.header?.logoHeight;

	return (
		<Center {...props}>
			<Flex alignItems='center' ref={btnRef} onClick={onOpen} h='full'>
				<Center
					w='40px'
					h='40px'
					bg={isOpen ? colors?.darkLight : 'transparent'}
					borderRadius='50%'
					ref={btnRef}
					onClick={onOpen}
				>
					{isOpen ? (
						<Icon size={24} color={colors?.white} name='cross' />
					) : (
						<Icon size={24} color={colors?.white} name='menu' />
					)}
				</Center>
			</Flex>
			<Drawer
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				{/* <DrawerOverlay /> */}
				<DrawerContent
					sx={{
						marginTop: `${logoHeight + 35}px`, // Moves the drawer down
					}}
				>
					<DrawerBody>
						{collections?.map((item: any, i: number) => {
							<SimpleNavLists item={item} key={i} css={css} basic={basic} />;
						})}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Center>
	);
};

export default MenuDrawer;
