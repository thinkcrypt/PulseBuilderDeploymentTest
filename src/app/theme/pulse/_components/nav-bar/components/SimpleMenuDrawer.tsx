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
// import useColors from '@/components/library/hooks/useColors';
import { Icon } from '../../icon';
import SimpleNavLists from './SimpleNavLists';
import useColors from '../../../_core-components/hooks/useColors';
type MenuDrawerProps = BoxProps & {
	content: any;
	basic: any;
};

const SimpleMenuDrawer: FC<MenuDrawerProps> = ({ content, basic, ...props }) => {
	// const { isOpen, onOpen, onClose } = useDisclosure();
	// const btnRef = useRef<HTMLDivElement>(null);
	// const colors = useColors();
	// const css = content?.headerCategories;

	// const collections = content?.collections?.items;

	// const logoHeight = content?.header?.logoHeight;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLDivElement>(null);
	const colors = useColors();
	const css = content?.headerCategories;

	const collections = content?.collections?.items;

	const logoHeight = content?.header?.logoHeight;
	const border = `${css?.borderBottomWidth}px solid ${content?.serviceCSS?.dividerColor}`;
	return (
		<Center {...props}>
			<Flex
				alignItems='center'
				ref={btnRef}
				onClick={onOpen}
				h='full'>
				<Center
					w='40px'
					h='40px'
					bg={isOpen ? colors?.darkLight : 'transparent'}
					borderRadius='50%'
					ref={btnRef}
					onClick={onOpen}>
					{isOpen ? (
						<Icon
							size={24}
							color={colors?.white}
							name='cross'
						/>
					) : (
						<Icon
							size={24}
							color={colors?.white}
							name='menu'
						/>
					)}
				</Center>
			</Flex>
			<Drawer
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				finalFocusRef={btnRef}
				autoFocus={false}>
				{/* <DrawerOverlay /> */}
				<DrawerContent
					marginTop={{
						base: `${logoHeight}px`,
						lg: `${logoHeight + 35}px`,
					}}>
					<DrawerBody>
						{collections?.map((item: any, i: number) => (
							<SimpleNavLists
								index={i}
								key={i}
								item={item}
								css={css}
								basic={basic}
								border={border}
								collectionLength={collections?.length - 1}
							/>
						))}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Center>
	);
};

export default SimpleMenuDrawer;
