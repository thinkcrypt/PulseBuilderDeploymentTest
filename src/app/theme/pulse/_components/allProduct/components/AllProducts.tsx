'use client';
import {
	clearFilters,
	SpaceBetween,
	useAppDispatch,
	useAppSelector,
	useGetAllQuery,
} from '@/components/library';

import { Box, BoxProps, Flex, Grid } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { ProductCard } from '../../../_components/index';
import { SortBy, FilterModal } from './index';
import {
	Heading,
	PADDING_X,
	FlexColumn,
	ProductCardSkeleton,
} from '../../../_components/index';

const TEMPLATE_COLUMNS = {
	base: 'repeat(2, 1fr)',
	sm: 'repeat(3, 1fr)',
	md: 'repeat(4, 1fr)',
	xl: 'repeat(5, 1fr)',
	'2xl': 'repeat(5, 1fr)',
};

type AllProductsProps = BoxProps & {
	basic: any;
	content: any;
	data?: any;
	path?: any;
	dataModel?: any;
};

const AllProducts: FC<AllProductsProps> = ({
	data: productData,
	path,
	dataModel,
	basic,
	content,
}) => {
	const { display } = useAppSelector(state => state.builder);
	const [sort, setSort] = React.useState('-createdAt');
	const [page, setPage] = useState(1);
	const { filters } = useAppSelector(state => state.table);
	const filterModalCss = content?.filterModalCss;
	// console.log(filterModalCss);
	const {
		data,
		isLoading: productLoading,
		isFetching,
		isUninitialized,
		isError,
		refetch,
	} = useGetAllQuery({
		path: 'products',
		sort,
		limit: 16 * page,
		filters,
	});

	// const [display, setDisplay] = useState<any[]>([]);

	const loadMore = () => setPage(page + 1);

	const showLoadMoreButton = () => {
		if (!data) return false;
		return data?.totalDocs > data?.doc?.length;
	};

	// const reset = () => {
	// 	setDisplay([]);
	// 	setPage(1);
	// };

	// const handleSort = (e: any) => {
	// 	reset();
	// 	setSort(e.target.value);
	// };

	// const onApplyFilters = () => {
	// 	reset();
	// 	refetch();
	// };

	// const onClearFilters = () => {
	// 	reset();
	// 	refetch();
	// };

	// const sortBy = <SortBy value={sort} onChange={handleSort} />;

	// const filterBy = (
	// 	<FilterModal
	// 		basic={productData?.basic}
	// 		data={productData}
	// 		path='pulse'
	// 		css={filterModalCss}
	// 		content={productData?.content}
	// 		onApply={onApplyFilters}
	// 		onClear={onClearFilters}
	// 	/>
	// );

	const loadingSkeleton = () => {
		return (
			<>
				{[1, 2, 3, 4, 5]?.map((item: any, i: number) => (
					<ProductCardSkeleton key={i} />
				))}
			</>
		);
	};

	const css = content?.homeProductCss;

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(clearFilters()); // Reset filters when the component mounts
	}, []);

	return (
		<Box
			py='2rem'
			pb='3rem'
			px={{
				base: PADDING_X.base,
				md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
			}}
		>
			<SpaceBetween mb='2rem'>
				<FlexColumn>
					{/* <Heading
						fontSize={{ base: '1.4rem', lg: '1.6rem' }}
						fontWeight='600'
						basic={basic}
						css={css}
					>
						{'All Products'}
					</Heading> */}
					<Box>
						<FilterModal
							basic={productData?.basic}
							data={productData}
							path='pulse'
							css={filterModalCss}
							content={productData?.content}
						/>
					</Box>
				</FlexColumn>
			</SpaceBetween>
			{/* </FlexColumn> */}

			{/* <Grid gridTemplateColumns={TEMPLATE_COLUMNS} gap={4}>
				{productLoading ? (
					loadingSkeleton()
				) : data?.doc?.length > 0 ? (
					data.doc.map((item: any, i: number) => (
						<ProductCard
							type={item?.type}
							id={item?.id}
							basic={basic}
							key={i}
							data={item}
							css={css}
						/>
					))
				) : (
					<Heading basic={basic} css={css} fontWeight='bold'>
						No products found!
					</Heading>
				)}
			</Grid> */}
		</Box>
	);
};

export default AllProducts;
