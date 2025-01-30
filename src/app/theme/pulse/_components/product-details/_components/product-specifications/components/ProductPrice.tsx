import { currency } from '@/lib/constants';

import { BoxProps, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { useColors, NormalText } from '../../../../../_components/index';

type ProductPriceProps = BoxProps & {
	children: number; // Original price
	isDiscount: boolean; // Whether a discount is applied
	discount: number;
	product: any;
	css: any;
	basic: any;
};

const ProductPrice: FC<ProductPriceProps> = ({
	children: price, // Original price
	css,
	basic,
	product,
	isDiscount,
	...props
}) => {
	const discountValue =
		product?.discountType === 'percentage'
			? (product?.price * product?.discount) / 100
			: product?.discountType === 'flat'
			? product?.discount
			: 0;

	const finalPrice = isDiscount ? price - discountValue : price;
	const colors = useColors();

	return (
		<Flex
			gap={{ base: 0, sm: 2 }}
			flexDir={{ base: 'column', sm: 'row' }}
			alignItems={{ base: 'flex-start', sm: 'center' }}
		>
			<NormalText
				css={css}
				basic={basic}
				fontSize='16px'
				fontWeight='600'
				color={css?.priceColor}
				{...props}
			>
				{`${finalPrice?.toLocaleString()} ${currency?.symbol}`}
			</NormalText>

			{isDiscount && (
				<NormalText
					css={css}
					basic={basic}
					textDecoration='line-through'
					fontSize={`12px`}
					fontWeight='600'
					color={css?.textSecondary}
					{...props}
				>
					{`${price?.toLocaleString()} ${currency?.symbol}`}
				</NormalText>
			)}
		</Flex>
	);
};

export default ProductPrice;
