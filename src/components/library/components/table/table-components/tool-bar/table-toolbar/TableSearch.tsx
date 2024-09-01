import React from 'react';
import { Button, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { TbSearch } from 'react-icons/tb';

import { useAppDispatch, updateTable } from '../../../../..';

const TableSearch = () => {
	const [value, setValue] = React.useState<string>('');
	const dispatch = useAppDispatch();
	const handleSearch = () => {
		dispatch(updateTable({ search: value }));
	};

	return (
		<InputGroup
			flex={1}
			size='sm'
			w={{ base: 'full', lg: 300 }}>
			<Input
				borderRadius='lg'
				placeholder='Search'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<InputRightAddon
				as={Button}
				onClick={handleSearch}
				colorScheme='gray'
				borderRightRadius='lg'>
				<TbSearch />
			</InputRightAddon>
		</InputGroup>
	);
};

export default TableSearch;
