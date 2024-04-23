'use client';

import React, { FC } from 'react';
import { Input, InputGroup, InputGroupProps, InputLeftAddon } from '@chakra-ui/react';
import { useAppDispatch } from '@/hooks';
import { updateSearch } from '@/store/slices/tableSlice';
import Icon from '../library/icon/Icon';

type PosSearchProps = InputGroupProps & {};

const PosSearch: FC<PosSearchProps> = ({ ...props }) => {
	const [value, setValue] = React.useState<string>('');
	const dispatch = useAppDispatch();

	const handleSearch = (e: any) => {
		setValue(e.target.value);
		dispatch(updateSearch(e.target.value || ''));
	};

	return (
		<InputGroup {...props}>
			<InputLeftAddon>
				<Icon name='barcode' />
			</InputLeftAddon>
			<Input
				borderRadius='lg'
				placeholder='Search By Barcode/Product Name'
				value={value}
				onChange={handleSearch}
			/>
		</InputGroup>
	);
};

export default PosSearch;
