import { BoxProps, Flex, Image } from '@chakra-ui/react';
import { FC } from 'react';

type ProductImageProps = BoxProps & {
	src: string;
};

const ProductImage: FC<ProductImageProps> = ({ src, ...props }) => {
	return (
		<Flex w='full' maxH='450px'>
			<Image
				src={src}
				w='full'
				h='full'
				alt='productImage'
				objectFit='cover'
				borderRadius='4px'
			/>
		</Flex>
	);
};

export default ProductImage;
