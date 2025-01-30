import { Box, Flex, Skeleton, Td, Tr } from '@chakra-ui/react';
import React from 'react';

const OrderTableRowSkeleton = () => {
	return (
		<Tr>
			<Td>
				<Skeleton height='14px' w='130px' borderRadius='4px' />
			</Td>
			<Td>
				<Skeleton height='14px' w='100px' borderRadius='4px' />
			</Td>
			<Td>
				<Skeleton height='14px' w='130px' borderRadius='4px' />
			</Td>
			<Td>
				<Skeleton height='14px' w='80px' borderRadius='4px' />
			</Td>
			<Td>
				<Skeleton height='14px' w='80px' borderRadius='4px' />
			</Td>
			<Td>
				<Skeleton height='14px' w='100px' borderRadius='4px' />
			</Td>
			<Td>
				<Skeleton height='14px' w='100px' borderRadius='4px' />
			</Td>
			<Td>
				<Skeleton height='14px' w='100px' borderRadius='4px' />
			</Td>
		</Tr>
	);
};

export default OrderTableRowSkeleton;
