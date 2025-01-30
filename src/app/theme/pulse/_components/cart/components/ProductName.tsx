import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import Link from 'next/link';
import ProductPrice from './ProductPrice';
import { NormalText } from '../../../_components/index';
// import NormalText from '@/components/text/NormalText';

type ProductNameProps = FlexProps & {
	name: string;
	price: any;
	css?: any;
	basic: any;
	id: string;
};

const ProductName: FC<ProductNameProps> = ({
	css,
	basic,
	name,
	price,
	id,
	...props
}) => {
	return (
		<Flex flexDir={{ base: 'column', md: 'row' }} {...props}>
			<Link href={`/products/${id}`}>
				<NormalText
					fontSize={{
						base: `${css?.titleSizeBase}px`,
						lg: `${css?.titleSizeBg}px`,
					}}
					fontWeight={css?.titleWeight}
					color={css?.bodyFg}
					basic={basic}
				>
					{name}
				</NormalText>
			</Link>
			<ProductPrice display={{ base: 'block', md: 'none' }} basic={basic}>
				{price}
			</ProductPrice>
		</Flex>
	);
};
export default ProductName;
