import { currency } from '@/components/library';
import { TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import NormalText from '../../_core-components/components/text/NormalText';

type ProductPriceProps = TextProps & {
	basic: any;
	css?: any;
	children: any;
};

const ProductPrice: FC<ProductPriceProps> = ({
	basic,
	children,
	css,
	...props
}) => {
	return (
		<NormalText
			mt={1}
			fontSize={{
				base: `${css?.priceSizeBase}px`,
				lg: `${css?.priceSizeBg}px`,
			}}
			basic={basic}
			color={css?.priceColor || '#ef4a23'}
			fontWeight={css?.priceWeight || 600}
			{...props}
		>
			{`${currency?.symbol} ${children?.toLocaleString()}`}
		</NormalText>
	);
};
export default ProductPrice;
