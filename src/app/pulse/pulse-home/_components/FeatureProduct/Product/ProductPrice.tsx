import { Box, BoxProps, Center, Flex, TextProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

import { currency } from '@/components/library/config/lib/constants/constants';
import useColors from '@/components/library/hooks/useColors';
import { NormalText } from '../../text';

type ProductPriceProps = BoxProps & {
	children: number; // Original price
	discountValue: number; // Discount amount
	isDiscount: boolean; // Whether a discount is applied
	discount: number;
	css: any;
	basic: any;
};

const ProductPrice: FC<ProductPriceProps> = ({
	children: price, // Original price
	css,
	basic,
	discountValue,
	isDiscount,
	...props
}) => {
	const finalPrice = isDiscount ? price - discountValue : price;
	const colors = useColors();
	return (
		<Center gap={2}>
			<NormalText
				css={css}
				basic={basic}
				// color={css?.priceTextColor}
				// fontSize={`${css?.cardTitleSize}px`}
				// fontWeight={css?.cardTitleWeight}
				// textAlign={css?.cardTitleTextAlign}
				fontSize='16px'
				fontWeight='600'
				color={colors?.hoverColor}
				{...props}
			>
				{`${finalPrice.toLocaleString()} ${currency?.symbol}`}
			</NormalText>

			{isDiscount && (
				<NormalText
					css={css}
					basic={basic}
					// color={css?.priceTextColor}
					// fontWeight={css?.cardTitleWeight}
					// textAlign={css?.cardTitleTextAlign}
					textDecoration='line-through'
					fontSize={`12px`}
					fontWeight='600'
					color={colors?.cardText}
					{...props}
				>
					{`${price.toLocaleString()} ${currency?.symbol}`}
				</NormalText>
			)}
		</Center>
	);
};

export default ProductPrice;
