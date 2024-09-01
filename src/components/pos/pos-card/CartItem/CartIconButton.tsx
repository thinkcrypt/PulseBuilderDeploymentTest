import React, { FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { Icon } from '@/components/library';

type CartIconButtonProps = {
	size: number;
	onClick: any;
	name: string;
};

const CartIconButton: FC<CartIconButtonProps> = ({ size, onClick, name }) => (
	<IconButton
		onClick={onClick}
		aria-label={name}
		icon={
			<Icon
				name={name}
				size={size}
			/>
		}
		size='xs'
		variant='ghost'
	/>
);

export default CartIconButton;
