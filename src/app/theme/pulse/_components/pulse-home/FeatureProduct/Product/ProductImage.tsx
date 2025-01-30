import { Flex, FlexProps, Image } from '@chakra-ui/react';

import React, { FC } from 'react';

type ProductImageProps = FlexProps & {
	src: string;
	css: any;
};

const ProductImage: FC<ProductImageProps> = ({ src, css, ...props }) => {
	return (
		<Flex w='full' maxH='450px'>
			<Image
				w='full'
				h='full'
				src={src}
				objectFit='cover'
				alt={'Product Image'}
				borderRadius={`${css?.borderRadius}px`}
			/>
		</Flex>
	);
};

export default ProductImage;
