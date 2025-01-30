import { Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type FLexImageProps = FlexProps & {
	image: string;
};
const FLexImage: FC<FLexImageProps> = ({ image, ...props }) => {
	return (
		<Flex maxW='full' h='auto' {...props}>
			<Image
				w='full'
				h='auto'
				objectFit='contain'
				src={image}
				alt='Logo Image'
			/>
		</Flex>
	);
};

export default FLexImage;
