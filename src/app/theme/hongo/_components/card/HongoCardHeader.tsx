import React from 'react';
import { Flex, FlexProps, Image } from '@chakra-ui/react';
import { PLACEHOLDER_IMAGE } from '@/components/library';

const HongoCardHeader = ({ imgSrc, ...props }: FlexProps & { imgSrc: string }) => (
	<Flex
		w='full'
		h='200px'
		overflow='hidden'
		{...props}>
		<Image
			w='full'
			h='full'
			objectFit='cover'
			src={imgSrc || PLACEHOLDER_IMAGE}
			alt='Product Image'
			transition='.8s'
			_hover={{ transform: 'scale(1.1)' }}
		/>
	</Flex>
);

export default HongoCardHeader;
