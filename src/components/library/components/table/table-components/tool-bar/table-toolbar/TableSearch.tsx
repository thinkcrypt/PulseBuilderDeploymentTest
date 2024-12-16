import React from 'react';
import { Button, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { TbSearch } from 'react-icons/tb';

import { useAppDispatch, updateTable, radius } from '../../../../..';

const TableSearch = () => {
	const [value, setValue] = React.useState<string>('');
	const dispatch = useAppDispatch();
	const handleSearch = () => {
		dispatch(updateTable({ search: value }));
	};

	return (
		<InputGroup
			flex={1}
			size='md'
			w={{ base: 'full', lg: 300 }}>
			<Input
				borderRadius={radius.BUTTON}
				placeholder='Search'
				_light={{
					bg: 'container.newLight',
					borderColor: 'container.borderLight',
				}}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<InputRightAddon
				as={Button}
				onClick={handleSearch}
				colorScheme='gray'
				_light={{
					borderLeftColor: 'container.borderLight',
					bg: 'container.newLight',
				}}
				borderRightRadius={radius?.BUTTON}>
				<TbSearch />
			</InputRightAddon>
		</InputGroup>
	);
};

export default TableSearch;
