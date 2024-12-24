import { Flex, FlexProps, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type ProductImageProps = FlexProps & {
	src: string;
};

const ProductImage: FC<ProductImageProps> = ({ src, ...props }) => {
	return (
		<Flex w='full' h='250px' mb='16px'>
			<Image
				w='full'
				h='auto'
				src={src}
				objectFit='cover'
				alt={'Product Image'}
			/>
		</Flex>
	);
};

export default ProductImage;
