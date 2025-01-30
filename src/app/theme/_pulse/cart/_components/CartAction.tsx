import { Button, Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Quantity } from './index';
import { Icon } from '@/components/library';
import useColors from '../../_core-components/hooks/useColors';

type CartActionProps = FlexProps & {
	image: string;
	css?: any;
	basic: any;
	id: any;
	name: any;
	price: any;
	qty: any;
	handleRemove: () => void;
};

const CartAction: FC<CartActionProps> = ({
	image,
	id,
	name,
	price,
	qty,
	css,
	basic,
	handleRemove,
	...props
}) => {
	const colors = useColors();
	return (
		<Flex
			alignItems='center'
			display={{ base: 'flex', md: 'none' }}
			flexDir={{ base: 'column', md: 'row' }}
			{...props}
		>
			<Quantity
				basic={basic}
				id={id}
				name={name}
				price={price}
				image={image}
				qty={qty}
				css={css}
			/>
			<Button
				fontSize={`${css?.removeSize}px`}
				px='0px'
				bg='none'
				py='0px'
				onClick={handleRemove}
				color={css?.removeFg || colors?.removeFg}
				_hover={{ bg: 'none' }}
			>
				<Icon color={css?.removeFg} size={css?.removeSize} name='delete' />
			</Button>
		</Flex>
	);
};
export default CartAction;
