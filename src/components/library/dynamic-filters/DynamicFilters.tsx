'use client';
import { useGetFiltersQuery } from '@/store/services/usersApi';
import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import BooleanFilter from './filters/BooleanFilter';
import MultiSelectFilter from './filters/MultiSeletFilter';
import DateFilter from './filters/date-filter/DateFilter';
import { useAppDispatch } from '@/hooks';
import { clearFilters } from '@/store/slices/tableSlice';
import RangeFilter from './filters/range-filter/RangeFilter';

const DynamicFilters = ({ path }: { path: any }) => {
	const { data, isFetching, isError, error, isSuccess } = useGetFiltersQuery(path);
	const dispatch = useAppDispatch();

	if (isFetching) return null;
	return (
		<Flex
			gap={2}
			flexWrap='wrap'>
			{data?.map((item: any, i: number) => {
				if (item.type === 'boolean') {
					return (
						<BooleanFilter
							key={i}
							field={item?.field}
							label={item?.label}
							title={item?.title}
						/>
					);
				}
				if (item.type === 'multi-select') {
					return (
						<MultiSelectFilter
							key={i}
							field={item?.field}
							label={item?.label}
							title={item?.title}
							options={item?.options}
						/>
					);
				}
				if (item.type === 'date') {
					return (
						<DateFilter
							key={i}
							field={item?.field}
							label={item?.label}
							title={item?.title}
						/>
					);
				}
				if (item.type === 'range') {
					return (
						<RangeFilter
							key={i}
							field={item?.field}
							label={item?.label}
							title={item?.title}
						/>
					);
				}
			})}
			<Button
				onClick={() => dispatch(clearFilters())}
				variant='link'
				size='xs'>
				Clear filters
			</Button>
		</Flex>
	);
};

export default DynamicFilters;
