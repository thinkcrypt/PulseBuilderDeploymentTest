import { Box, Skeleton } from '@chakra-ui/react';
import React from 'react';

const ServiceCardSkeleton = () => {
	return (
		<Box w='100px' h='100px'>
			<Skeleton height='full' w='full' />
		</Box>
	);
};

export default ServiceCardSkeleton;
