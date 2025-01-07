import { BoxProps, Flex, FlexProps, Image, Input } from '@chakra-ui/react';
import { FC } from 'react';
import { InfoTag } from './index';
import { currency } from '@/commerce-components';

type ProductBadgeProps = FlexProps & {
	basic: any;
	productData: any;
	css: any;
};

const ProductBadge: FC<ProductBadgeProps> = ({
	basic,
	productData,
	css,
	...props
}) => {
	const discountValue =
		productData?.discountType === 'percentage'
			? (productData?.price * productData?.discount) / 100
			: productData?.discountType === 'flat'
			? productData?.discount
			: 0;

	const regularPrice = productData?.price - discountValue;

	const inStock = productData?.inStock == true ? 'In Stock' : 'Out of Stock';
	return (
		<Flex gap={2} flexWrap='wrap' {...props}>
			<InfoTag
				basic={basic}
				title='Price'
				value={`${productData?.price?.toLocaleString()}${currency?.symbol}`}
				css={css}
			/>
			<InfoTag
				basic={basic}
				title='Regular Price'
				value={`${regularPrice?.toLocaleString()}${currency?.symbol}`}
				css={css}
			/>
			<InfoTag css={css} basic={basic} title='Status' value={inStock} />
		</Flex>
	);
};

export default ProductBadge;
