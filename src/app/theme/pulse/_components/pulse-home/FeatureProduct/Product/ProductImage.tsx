import { useAppSelector } from '@/hooks';
import { Flex, FlexProps, Image } from '@chakra-ui/react';

import React, { FC } from 'react';

type ProductImageProps = FlexProps & {
	src: string;
	css: any;
};

const ProductImage: FC<ProductImageProps> = ({ src, css, ...props }) => {
	const { display } = useAppSelector(state => state.builder);
	return (
		<Flex
			w='full'
			h={{ base: '360px', md: display === 'sm' ? '360px' : '400px' }}
		>
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
