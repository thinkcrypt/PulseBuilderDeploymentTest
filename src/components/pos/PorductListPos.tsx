import { useGetAllQuery } from '@/store/services/commonApi';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { PLACEHOLDER_IMAGE, sizes } from '@/lib/constants';
import CardContainer from './pos-card/CardContainer';
import NoDataFound from '../library/utils/no-data-found/NoDataFound';
import { addToCart } from '@/store/slices/cartSlice';
import PosResultContainer from '../library/tablev2/PosResultContainer';

const PorductListPos = () => {
	const { page, limit, search, sort, filters, fields, preferences } = useAppSelector(
		(state: any) => state.table
	);

	const dispatch = useAppDispatch();

	const { data, isLoading, isError, error, isSuccess } = useGetAllQuery({
		page,
		limit,
		search,
		sort,
		filters,
		path: 'products',
	});

	const handleAddToCart = (item: any) => {
		dispatch(addToCart(item));
	};

	// Render product cards
	const renderProductCards = data?.doc?.map((item: any, i: number) => (
		<CardContainer key={i} onClick={() => handleAddToCart(item)}>
			<Box h='100px' w='100px'>
				<Image src={item?.image || PLACEHOLDER_IMAGE} h='100%' w='100%' objectFit='contain' />
			</Box>
			<Stack w='100%'>
				<Heading size='sm'>{item?.name}</Heading>
				<Text>BDT. {item?.price?.toLocaleString()}</Text>
			</Stack>
		</CardContainer>
	));

	return (
		<>
			<Flex
				wrap='wrap'
				gap={4}
				pb='32px'
				maxH={sizes.POS_MAX_HEIGHT}
				overflowY='scroll'
				justifyContent='space-between'>
				{renderProductCards}
				{data?.doc?.length === 0 && <NoDataFound />}
			</Flex>
			<PosResultContainer data={data} />
		</>
	);
};

export default PorductListPos;
