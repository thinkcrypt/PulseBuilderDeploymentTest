import { Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type CartImageProps = FlexProps & {
	image: string;
	css?: any;
};

const CartImage: FC<CartImageProps> = ({ image, css, ...props }) => {
	return (
		<Flex mr='16px' w='64px' h='64px' {...props}>
			<Image
				w='full'
				h='full'
				objectFit='cover'
				src={image}
				alt='Product Image'
			/>
		</Flex>
	);
};
export default CartImage;
