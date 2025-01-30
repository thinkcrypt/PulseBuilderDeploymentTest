import { Flex, FlexProps, Image } from '@chakra-ui/react';

import React, { FC } from 'react';

type ProductImageProps = FlexProps & {
	src: string;
	css: any;
};

const ProductImage: FC<ProductImageProps> = ({ src, css, ...props }) => {
	return (
		<Flex
			w='full'
			h={{ base: '160px', sm: '250px' }}
			borderBottom={`2px solid rgba(230, 230, 230, 0.2)}`}
		>
			<Image
				w='full'
				h='full'
				src={src}
				objectFit='cover'
				alt={'Product Image'}
				borderTopLeftRadius={`${css?.borderRadius}px`}
				borderTopRightRadius={`${css?.borderRadius}px`}
			/>
		</Flex>
	);
};

export default ProductImage;
