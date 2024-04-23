import React from 'react';
import { Button, Tooltip } from '@chakra-ui/react';
import { TbRefresh } from 'react-icons/tb';
import { useAppDispatch } from '@/hooks';
import { refresh } from '@/store/slices/tableSlice';

const TableRefresh = () => {
	const dispatch = useAppDispatch();

	const onReset = () => {
		dispatch(refresh());
	};
	return (
		<Tooltip label='Refresh' placement='top'>
			<Button size='sm' borderRadius={4} onClick={onReset} colorScheme='gray' borderRight='lg'>
				<TbRefresh />
			</Button>
		</Tooltip>
	);
};

export default TableRefresh;
