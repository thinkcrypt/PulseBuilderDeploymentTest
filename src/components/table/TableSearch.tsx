import React from 'react';
import { Button, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { TbSearch } from 'react-icons/tb';
import { useAppDispatch } from '@/hooks';
import { updateTable } from '@/store/slices/tableSlice';

const TableSearch = () => {
	const [value, setValue] = React.useState<string>('');
	const dispatch = useAppDispatch();
	const handleSearch = () => {
		dispatch(updateTable({ search: value }));
	};

	return (
		<InputGroup size='sm' w={300}>
			<Input
				borderRadius={4}
				placeholder='Search'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<InputRightAddon as={Button} onClick={handleSearch}>
				<TbSearch color='black' />
			</InputRightAddon>
		</InputGroup>
	);
};

export default TableSearch;
