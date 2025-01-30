import { Box, Button, Center, DrawerFooter } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { useColors,currency,NormalText } from '../../../_components/index';

type CartDrawerFooterProps = {
	subTotal: number;
	basic: any;
	css?: any;
};

const CartDrawerFooter: FC<CartDrawerFooterProps> = ({
	subTotal,
	basic,
	css,
}) => {
	const colors = useColors();

	return (
		<DrawerFooter mt={'auto'} bg={css?.footerBg || colors?.footerBg}>
			<Box w='full'>
				<Center w='full' justifyContent='space-between' mb='1rem'>
					<NormalText
						fontSize={css?.fTextSize}
						fontWeight={css?.fTextWeight}
						basic={basic}
					>
						Subtotal:
					</NormalText>
					<Box>
						<NormalText
							fontSize={css?.fTextSize}
							fontWeight={css?.fTextWeight}
							basic={basic}
						>{`${currency?.symbol} ${subTotal?.toLocaleString()}`}</NormalText>
					</Box>
				</Center>
				<Link href='/checkout'>
					<Button
						bg={css?.checkoutBg || colors?.checkoutBg}
						color={css?.checkoutFg || colors?.checkoutFg}
						fontSize={`${css?.checkoutTextSize}px`}
						fontWeight={css?.checkoutTextWeight}
						_hover={{
							bg: css?.checkoutHoverBg || colors?.checkoutHoverBg,
							color: css?.checkoutHoverFg || colors?.checkoutHoverFg,
						}}
						w='full'
					>
						Checkout
					</Button>
				</Link>
			</Box>
		</DrawerFooter>
	);
};

export default CartDrawerFooter;
