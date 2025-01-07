import useColors from '@/components/library/hooks/useColors';
import { Box, Button, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type AddToCartProps = FlexProps & {
	addToCart?: () => void;
	css?: any;
	basic: any;
};

const AddToCart: FC<AddToCartProps> = ({ addToCart, css, basic, ...props }) => {
	const colors = useColors();
	return (
		<Button
			color={css?.atcBtnFg}
			bg={css?.atcBtnBg}
			minW='150px'
			// w='full'
			// h='full'
			onClick={addToCart}
			_hover={{
				bg: css?.atcBtnHoverBg,
				color: css?.atcBtnHoberFg,
			}}
		>
			Add To Cart
		</Button>
	);
};

export default AddToCart;
