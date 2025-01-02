'use client';
import {
	Box,
	Center,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	useDisclosure,
} from '@chakra-ui/react';
import { FC, ReactNode, useRef } from 'react';
import { DrawerHeader } from '@chakra-ui/react';
type CartItemProps = {
	id: string;
	image: string;
	name: string;
	price: number;
	qty: number;
};
import { CartDrawerFooter, CartItem } from './index';
import useColors from '@/components/library/hooks/useColors';
import { useAppSelector } from '@/components/library/hooks/useReduxHooks';
import { FlexColumn } from '@/components/common';
import { Heading } from '../text';

const CART_DRAWER_WIDTH = '30rem';

type CartDrawerProps = {
	basic: any;
	content: any;
	children: ReactNode;
};

const CartDrawer: FC<CartDrawerProps> = ({ basic, content, children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLDivElement>(null);
	const colors = useColors();

	const { cartItems, subTotal } = useAppSelector(state => state.cart);
	const css = content?.shoppingCartCSS;

	return (
		<Center>
			<Flex alignItems='center' ref={btnRef} onClick={onOpen} h='full'>
				{children}
			</Flex>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent maxW={CART_DRAWER_WIDTH} bg={colors?.white}>
					{/* <SearchDrawerHeader /> */}
					<DrawerHeader m={0} bg={css?.headingBg || colors?.headingBg}>
						<Heading
							basic={basic}
							fontSize={{
								base: `${css?.headingSizeBase}px`,
								lg: `${css?.headingSizeBg}px`,
							}}
							fontWeight='600'
							color={css?.headingFg || colors?.headingFg}
						>
							Shopping Cart
						</Heading>
						<DrawerCloseButton />
					</DrawerHeader>
					<DrawerBody
						maxH='70vh'
						overflowY='auto'
						bg={css?.bodyBg || colors?.bodyBg}
					>
						{/* <FlexColumn py='.5rem'>
							{cartItems?.map((item: CartItemProps, i: number) => (
								<CartItem basic={basic} key={i} {...item} css={css} />
							))}
						</FlexColumn> */}
						{/* Later: how to show it */}
					</DrawerBody>
					<CartDrawerFooter css={css} basic={basic} subTotal={subTotal} />
				</DrawerContent>
			</Drawer>
		</Center>
	);
};

export default CartDrawer;
