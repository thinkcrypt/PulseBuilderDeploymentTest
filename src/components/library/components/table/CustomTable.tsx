import { Table, Thead, Tr, Tbody, Flex, Center, Text, CloseButton } from '@chakra-ui/react';
import React from 'react';

import DynamicFilters from '../../dynamic-filters/DynamicFilters';
import { CustomTableProps } from '../../types/components.types';

import { selectAll } from '@/store/slices/tableSlice';

import {
	useAppDispatch,
	TableContainer,
	TableSkeleton,
	TableSearch,
	ResultContainer,
	TableRefresh,
	Preferences,
	SelectedItemsContainer,
	FilterContainer as FIlterContainer,
	TableSettingsMenuContainer,
	TableSearchContainer,
} from '../../';

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
	isError = false,
}) => {
	const tbody = isLoading ? (
		<TableSkeleton
			row={10}
			col={col || 5}
		/>
	) : (
		children
	);

	const dispatch = useAppDispatch();

	const onUnselect = () => {
		dispatch(selectAll({ ids: [], isSelected: false }));
	};

	return (
		<>
			{selectedItems?.length > 0 ? (
				<SelectedItemsContainer>
					<Flex>
						<Flex
							align='center'
							gap={2}>
							<CloseButton
								size='md'
								borderRadius='full'
								onClick={onUnselect}
							/>
							<Text>{selectedItems?.length} selected</Text>
						</Flex>
					</Flex>
					<Text>...</Text>
				</SelectedItemsContainer>
			) : (
				<TableSettingsMenuContainer>
					{Boolean(filters) && (
						<FIlterContainer>
							<DynamicFilters path={filters} />
						</FIlterContainer>
					)}

					<TableSearchContainer>
						{!hidePreferences && <Preferences path={path} />}
						<TableSearch />
						<TableRefresh />
					</TableSearchContainer>
				</TableSettingsMenuContainer>
			)}

			<TableContainer>
				<Table size='sm'>
					<Thead>
						<Tr>{header}</Tr>
					</Thead>
					<Tbody>{tbody}</Tbody>
				</Table>
			</TableContainer>
			{data?.docsInPage == 0 && (
				<Center
					flexDir='column'
					h='200px'>
					<Text>No results found.</Text>
					<Text>There {`aren't`} any results for that query. Try using different filters.</Text>
				</Center>
			)}
			{isError && (
				<Center
					flexDir='column'
					h='200px'>
					<Text>Error Fetching Data.</Text>
					<Text>There has been an error while fetching data. Please try refreshing the page.</Text>
				</Center>
			)}
			<ResultContainer data={data} />
		</>
	);
};

export default CustomTable;
