import { PLACEHOLDER_IMAGE, useGetAllQuery } from '@/components/library';
import { Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import ProductCard from './hero/ProductCard';
import { useAppSelector } from '@/hooks';

const CollectionDetails = ({
	id,
	type,
	data: asData,
}: {
	id: string;
	type: 'collection' | 'category';
	data: any;
}) => {
	const { display } = useAppSelector(state => state.builder);
	const limit = display == 'sm' ? 1 : 4;
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
		<Grid
			gridTemplateColumns={{ base: '1fr', md: `repeat(${limit}, 1fr)` }}
			py={4}
			pb={0}
			gap={4}>
			{data?.doc?.length <= 0 && <Text>No product to show</Text>}
			{data &&
				data?.doc?.map(
					(item: any, index: number) =>
						index < limit && (
							<ProductCard
								data={asData}
								w='100%'
								key={index}
								_id={item._id}
								name={item.name}
								price={item.price}
								image={item.image || PLACEHOLDER_IMAGE}
								category={{ name: '' }}
							/>
						)
				)}
		</Grid>
	);
};

export default CollectionDetails;
