import React, { FC } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useGetAllQuery } from '@/components/library';
import { ProductCard } from '@/app/pulse/pulse-home/_components/FeatureProduct/Product';
import SliderArrowWrapper from '../swiper/SliderArrowWrapper';
import SwipperArrowButton from '../swiper/SwipperArrowButton';

// import { ProductCard } from '.';

type HongoCollectionDetailsProps = {
	id?: string;
	type?: 'collection' | 'category';
	config: any;
	dataModel?: any;
	css?: any;
	content?: any;
	basic?: any;
	path?: any;
	data?: any;
	limit?: number;
};

const PulseCollectionDetails: FC<HongoCollectionDetailsProps> = ({
	id,
	type,
	config,
	css,
	limit = 10,
}) => {
	const { data, isError, isFetching } = useGetAllQuery({
		path: 'products',
		filters: {
			...(type == 'category' && { category_in: id }),
			...(type == 'collection' && { collection_in: id }),
			limit: limit || 10,
			sort: 'priority',
		},
	});

	const renderContent = () => {
		if (isError) {
			return (
				<GridItem colSpan={{ base: 2, md: 4 }}>Error fetching data</GridItem>
			);
		}
		if (isFetching) {
			return <GridItem colSpan={{ base: 2, md: 4 }}>Fetching Data...</GridItem>;
		}

		if (data && data?.doc?.length === 0) {
			return (
				<GridItem colSpan={{ base: 2, md: 4 }}>No product to show</GridItem>
			);
		}

		return data?.doc
			?.slice(0, 4)
			?.map((item: any, i: number) => (
				<ProductCard data={item} key={i} basic={config} css={css} />
			));
	};

	return (
		<Grid
			borderBottom='1px solid'
			borderBottomColor={config?.borderColor}
			gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: '1fr 1fr 1fr 1fr' }}
			py={4}
			gap={4}
		>
			{renderContent()}
			<SliderArrowWrapper>
				<SwipperArrowButton
					css={css}
				/>
			</SliderArrowWrapper>
		</Grid>
	);
};

export default PulseCollectionDetails;
