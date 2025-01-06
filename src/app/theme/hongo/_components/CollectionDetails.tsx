import { AdminProductCard as ProductCard } from '@/commerce-components/landing-components/landing-products';
import { PLACEHOLDER_IMAGE, useGetAllQuery, HomeContentProps } from '@/components/library';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const CollectionDetails = ({ id, type }: { id: string; type: 'collection' | 'category' }) => {
	const { data, isLoading, isError } = useGetAllQuery({
		path: 'products',

		filters: {
			...(type == 'category' && { category_in: id }),
			...(type == 'collection' && { collection_in: id }),
			limit: 10,
			sort: 'priority',
		},
	});
	return (
		<Flex
			py={4}
			flexWrap='wrap'
			gap={4}>
			{data?.doc?.length <= 0 && <Text>No product to show</Text>}
			{data &&
				data?.doc?.map((item: any, index: number) => (
					<ProductCard
						w='180px'
						key={index}
						name={item.name}
						price={item.price}
						src={item.image || PLACEHOLDER_IMAGE}
						category={{ name: '' }}
					/>
				))}
		</Flex>
	);
};

export default CollectionDetails;
