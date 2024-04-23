import {
	TableContainer,
	Table,
	Thead,
	Tr,
	Tbody,
	Flex,
	Center,
	Text,
	CloseButton,
} from '@chakra-ui/react';
import React from 'react';
import TableSkeleton from './TableSkeleton';
import TableSearch from './TableSearch';
import ResultContainer from './ResultContainer';
import SpaceBetween from '../../containers/SpaceBetween';
import TableRefresh from './TableRefresh';
import DynamicFilters from '../dynamic-filters/DynamicFilters';
import { CustomTableProps } from '../types/components.types';
import Preferences from './Preferences';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { selectAll } from '@/store/slices/tableSlice';

const CustomTable: React.FC<CustomTableProps> = ({
	children,
	filters,
	header,
	data,
	isLoading,
	col,
	preferences,
	path,
	hidePreferences,
	selectedItems,
}) => {
	const tbody = isLoading ? <TableSkeleton row={10} col={col || 5} /> : children;

	const dispatch = useAppDispatch();

	const onUnselect = () => {
		dispatch(selectAll({ ids: [], isSelected: false }));
	};

	return (
		<>
			{selectedItems?.length > 0 ? (
				<Flex p={2} w='full' py={2}>
					<SpaceBetween
						px={1}
						w='full'
						borderRadius='full'
						border='1px dashed'
						borderColor='gray.400'
						color='gray.600'
						fontWeight='600'
						_dark={{
							borderColor: 'gray.400',
							color: 'gray.200',
						}}>
						<Flex>
							<Flex align='center' gap={2}>
								<CloseButton size='md' borderRadius='full' onClick={onUnselect} />
								<Text>{selectedItems?.length} selected</Text>
							</Flex>
						</Flex>
						<Text>...</Text>
					</SpaceBetween>
				</Flex>
			) : (
				<SpaceBetween p={2} border='1px solid transparent'>
					<Flex align='center' gap={1} justify='space-between' w='100%'>
						{Boolean(filters) && (
							<Flex gap={2} align='center'>
								<DynamicFilters path={filters} />
							</Flex>
						)}

						<Flex align='center' gap={2}>
							{!hidePreferences && <Preferences path={path} />}
							<TableSearch />
							<TableRefresh />
						</Flex>
					</Flex>
				</SpaceBetween>
			)}

			<TableContainer sx={styles.table} pb={6}>
				<Table size='sm'>
					<Thead>
						<Tr>{header}</Tr>
					</Thead>
					<Tbody>{tbody}</Tbody>
				</Table>
			</TableContainer>
			{data?.docsInPage == 0 && (
				<Center flexDir='column' h='200px'>
					<Text>No results found.</Text>
					<Text>There aren't any results for that query. Try using different filters.</Text>
				</Center>
			)}
			<ResultContainer data={data} />
		</>
	);
};

const styles = {
	table: {
		w: '100%',
		borderRadius: 8,
		borderWidth: 2,
		bg: 'table.light',
		borderColor: 'stroke.light',
		_dark: {
			bg: 'table.dark',
			borderColor: 'stroke.dark',
		},
	},
};

export default CustomTable;
