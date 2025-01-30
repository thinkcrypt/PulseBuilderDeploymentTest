import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import Link from 'next/link';
import { useAuth } from '@/components/library';
import { SimpleButton, LoginModal } from '../../../_components/index';

type ShoppingCartActionProps = BoxProps & {
	basic: any;
	css: any;
	content: any;
};

const ShoppingCartAction: FC<ShoppingCartActionProps> = ({
	basic,
	css,
	content,
	...props
}) => {
	const { isLoggedIn } = useAuth();

	return (
		<Box w={{ base: 'full', sm: '200px', lg: 'full' }} ml='auto' {...props}>
			{isLoggedIn ? (
				<Link href='/checkout'>
					<SimpleButton
						bg={css?.checkoutBg}
						color={css?.checkoutFg}
						_hover={{
							bg: css?.checkoutHoverBg,
							fg: css?.checkoutHoverFg,
						}}
						borderRadius='4px'
						my='8px'
						w={{ base: 'full', md: '200px', lg: 'full' }}
						basic={basic}
					>
						Checkout
					</SimpleButton>
				</Link>
			) : (
				<LoginModal basic={basic} content={content} />
				// 	<SimpleButton
				// 		bg={css?.checkoutBg}
				// 		color={css?.checkoutFg}
				// 		_hover={{
				// 			bg: css?.checkoutHoverBg,
				// 			fg: css?.checkoutHoverFg,
				// 		}}
				// 		borderRadius='4px'
				// 		my='8px'
				// 		w={{ base: 'full', md: '200px', lg: 'full' }}
				// 		basic={basic}
				// 	>
				// 		Log in to Checkout
				// 	</SimpleButton>
				// </LoginModal>
			)}
			{!isLoggedIn && (
				<Link href='/checkout'>
					<SimpleButton
						bg={css?.checkoutBg}
						color={css?.checkoutHoverBg}
						_hover={{
							bg: 'none',
							fg: 'none',
						}}
						borderRadius='4px'
						my='8px'
						w={{ base: 'full', md: '200px', lg: 'full' }}
						basic={basic}
						border={`1px solid ${css?.checkoutHoverBg}`}
						background='transparent'
					>
						Checkout as Guest
					</SimpleButton>
				</Link>
			)}
		</Box>
	);
};

export default ShoppingCartAction;
