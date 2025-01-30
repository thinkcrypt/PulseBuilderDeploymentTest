import { Box, Flex, Skeleton } from '@chakra-ui/react';
import React from 'react';

const SearchProductSkeleton = () => {
	return (
		<Flex my='1rem' alignItems='flex-start' gap={4}>
			<Flex>
				<Skeleton height='50px' w='50px' borderRadius='8px' />
			</Flex>

			<Flex flexDir='column' w='full'>
				<Skeleton height='16px' w='full' />
				<Box mt={2}></Box>
				<Skeleton height='16px' w='50%' />
			</Flex>
		</Flex>
	);
};

export default SearchProductSkeleton;
