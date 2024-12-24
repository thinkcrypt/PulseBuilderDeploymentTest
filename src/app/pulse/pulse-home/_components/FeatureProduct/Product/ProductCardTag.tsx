import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import NormalText from '../NormalText';

type ProductCardTagProps = BoxProps & {
	css: any;
	basic: any;
	discountValue: number;
	percent: number;
};

const ProductCardTag: FC<ProductCardTagProps> = ({
	css,
	discountValue,
	percent,
	...props
}) => {
	return (
		<Box
			position='absolute'
			top='16px'
			left='0px'
			bg={css?.tagColor || '#6E2594'}
			px='1rem'
			py='.2rem'
			{...props}
		>
			<NormalText fontSize='12px'>{`Save: ${discountValue} (${percent}%)`}</NormalText>
		</Box>
	);
};

export default ProductCardTag;
