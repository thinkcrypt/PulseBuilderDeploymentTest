import {
	TableContainer,
	Table,
	Thead,
	Tr,
	Tbody,
	Flex,
	Button,
	TableProps,
} from '@chakra-ui/react';
import React from 'react';
import { TbRefresh } from 'react-icons/tb';
import TableHeading from './TableHeading';
import Pagination from './Pagination';
import { useAppDispatch } from '@/hooks';
import { refresh } from '@/store/slices/tableSlice';
import TableSkeleton from './TableSkeleton';
import TableSearch from './TableSearch';

export type CustomTableProps = TableProps & {
	children: React.ReactNode;
	header?: React.ReactNode;
	data: any;
	isLoading: boolean;
	col?: number;
};

const CustomTable: React.FC<CustomTableProps> = ({ children, header, data, isLoading, col }) => {
	const dispatch = useAppDispatch();

	const onReset = () => {
		dispatch(refresh());
	};

	const tbody = isLoading ? <TableSkeleton row={10} col={col || 5} /> : children;

	return (
		<TableContainer sx={styles.table}>
			<Flex px={2} justify='space-between' align='center'>
				<Flex align='center' gap={1}>
					<Button size='sm' borderRadius={4} onClick={onReset}>
						<TbRefresh />
					</Button>
					<TableSearch />
					<TableHeading ml={2}>{`ITEMS (${data?.totalDocs && data.totalDocs})`}</TableHeading>
				</Flex>

				<Flex align='center' justify='flex-end' gap={4}>
					<Pagination data={data && data} />
				</Flex>
			</Flex>
			<Table size='sm'>
				<Thead>
					<Tr>{header}</Tr>
				</Thead>
				<Tbody>{tbody}</Tbody>
			</Table>
		</TableContainer>
	);
};

const styles = {
	table: {
		w: '100%',
		borderRadius: 8,
		borderWidth: 2,
		minH: 400,
		bg: 'table.light',
		borderColor: 'stroke.light',
		_dark: {
			bg: 'table.dark',
			borderColor: 'stroke.dark',
		},
	},
};

export default CustomTable;
