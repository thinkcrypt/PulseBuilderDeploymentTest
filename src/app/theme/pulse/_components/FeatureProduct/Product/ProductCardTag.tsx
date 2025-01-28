import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { currency } from '@/components/library/config/lib/constants/constants';
import { NormalText } from '../../text';

type ProductCardTagProps = BoxProps & {
	css: any;
	basic: any;
	discountValue: number;
	percent: number;
	discountType: string;
};

const ProductCardTag: FC<ProductCardTagProps> = ({
	css,
	basic,
	discountValue,
	percent,
	discountType,
	...props
}) => {
	const percentage = discountType === 'flat' ? '' : `(${percent}%)`;
	return (
		<Box
			position='absolute'
			top='16px'
			left='0px'
			bg={css?.tagBg || '#6E2594'}
			px='1rem'
			py='.2rem'
			borderRightRadius={`${css?.tagRadius || 20}px`}
			{...props}
		>
			<NormalText
				basic={basic}
				fontSize={`${css?.tagTextSize || 12}px`}
				color={css?.tagFg || '#fff'}
			>{`Save: ${discountValue}${currency?.symbol} ${percentage}`}</NormalText>
		</Box>
	);
};

export default ProductCardTag;
