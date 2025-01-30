import { Box, Flex, Skeleton } from '@chakra-ui/react';
import React from 'react';

const ProductCardSkeleton = () => {
	return (
		<Box>
			<Skeleton w='full' h={{ base: '160px', sm: '250px' }} />
			<Skeleton my='1rem' w='50%' h='20px' borderRadius='8px' />
			<Skeleton w='full' h='20px' borderRadius='8px' />
		</Box>
	);
};

export default ProductCardSkeleton;
