import React from 'react';
import { Button, Tooltip } from '@chakra-ui/react';
import { TbRefresh } from 'react-icons/tb';
import { useAppDispatch, refresh, radius } from '../../../../..';

const TableRefresh = () => {
	const dispatch = useAppDispatch();

	const onReset = () => {
		dispatch(refresh());
	};

	return (
		<Tooltip
			label='Refresh'
			placement='top'>
			<Button
				size='md'
				borderRadius={radius?.BUTTON}
				onClick={onReset}
				colorScheme='gray'
				borderWidth={1}
				_light={{
					borderColor: 'container.borderLight',
					bg: 'container.newLight',
				}}>
				<TbRefresh />
			</Button>
		</Tooltip>
	);
};

export default TableRefresh;
