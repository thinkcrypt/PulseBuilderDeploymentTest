import React, { FC } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useGetAllQuery } from '@/components/library';
import { ProductCard } from '.';
import { useAppSelector } from '@/hooks';

type HongoCollectionDetailsProps = {
	id?: string;
	type?: 'collection' | 'category';
	config: any;
	limit?: number;
};

const HongoCollectionDetails: FC<HongoCollectionDetailsProps> = ({
	id,
	type,
	config,
	limit = 4,
}) => {
	const { data, isError, isFetching } = useGetAllQuery({
		path: 'products',

		filters: {
			...(type == 'category' && { category_in: id }),
			...(type == 'collection' && { collection_in: id }),
			limit: limit || 4,
			sort: 'priority',
		},
	});

	// const { basic } = data;
	const { display } = useAppSelector(state => state.builder);

	const renderContent = () => {
		if (isError) {
			return <GridItem colSpan={{ base: 2, md: 4 }}>Error fetching data</GridItem>;
		}
		if (isFetching) {
			return <GridItem colSpan={{ base: 2, md: 4 }}>Fetching Data...</GridItem>;
		}

		if (data && data?.doc?.length === 0) {
			return <GridItem colSpan={{ base: 2, md: 4 }}>No product to show</GridItem>;
		}

		return data?.doc?.map((item: any, i: number) => (
			<ProductCard
				data={item}
				key={i}
				config={config}
			/>
		));
	};

	return (
		<Grid
			borderBottom='1px solid'
			borderBottomColor={config?.borderColor}
			gridTemplateColumns={{
				base: 'repeat(1, 1fr)',
				md: display == 'sm' ? '1fr' : '1fr 1fr 1fr 1fr',
			}}
			py={4}
			gap={4}>
			{renderContent()}
		</Grid>
	);
};

export default HongoCollectionDetails;
