import { Box, BoxProps, Center, Flex, TextProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import NormalText from '../NormalText';


type ProductPriceProps = BoxProps & {
	children: any;
	discountValue: number;
	isDiscount: boolean;
	discount: number;
	css: any;
	basic: any;
};

const ProductPrice: FC<ProductPriceProps> = ({
	children,
	css,
	discountValue,
	discount,
	isDiscount,
	...props
}) => {
	return (
		<Center gap={2}>
			<NormalText
				css={css}
				color={css?.priceTextColor}
				fontSize={`${css?.cardTitleSize}px`}
				fontWeight={css?.cardTitleWeight}
				textAlign={css?.cardTitleTextAlign}
				{...props}
			>
				{`Tk. ${children?.toLocaleString()}`}
			</NormalText>

			{isDiscount && (
				<NormalText
					css={css}
					color={css?.priceTextColor}
					fontSize={`12px`}
					fontWeight={css?.cardTitleWeight}
					textAlign={css?.cardTitleTextAlign}
					textDecoration='line-through'
					{...props}
				>
					{`Tk. ${discountValue?.toLocaleString()}`}
				</NormalText>
			)}
		</Center>
	);
};

export default ProductPrice;
