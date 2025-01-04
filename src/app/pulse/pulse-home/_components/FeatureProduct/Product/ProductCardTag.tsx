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
			bg={css?.tagColor || '#6E2594'}
			px='1rem'
			py='.2rem'
			borderRightRadius='20px'
			{...props}
		>
			<NormalText
				basic={basic}
				fontSize='12px'
				color={css?.tagColor || '#fff'}
			>{`Save: ${`${discountValue}${currency?.symbol}`} ${percentage}`}</NormalText>
		</Box>
	);
};

export default ProductCardTag;
