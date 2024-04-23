import { TableCellProps, Checkbox } from '@chakra-ui/react';
import React, { useState, FC, useEffect, ChangeEvent } from 'react';
import CustomTd from './CustomTd';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectItem } from '@/store/slices/tableSlice';

// Define the type for the props of the TableData component
type TableDataPropsType = TableCellProps & {
	id: string;
};

const TableSelectItem: FC<TableDataPropsType> = ({ id, ...props }) => {
	const [checked, setChecked] = useState(false);

	const { selectedItems } = useAppSelector(state => state.table);
	const dispatch = useAppDispatch();

	const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(selectItem({ id, isSelected: e.target.checked }));
		setChecked(e.target.checked);
	};

	useEffect(() => {
		const isSelected = selectedItems.includes(id);
		setChecked(isSelected);
	}, [selectedItems]);

	return (
		<CustomTd w='5px' alignItems='center' gap={2} {...props}>
			<Checkbox isChecked={checked} onChange={handleCheck} colorScheme='brand' />
		</CustomTd>
	);
};

export default TableSelectItem;
