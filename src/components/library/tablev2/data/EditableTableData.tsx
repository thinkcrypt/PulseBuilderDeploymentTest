'use client';
import React, { FC, useState } from 'react';
import CustomTd from './CustomTd';
import { Switch, useColorModeValue } from '@chakra-ui/react';
import { useUpdateByIdMutation } from '@/store/services/commonApi';
import useCustomToast from '../../hooks/useCustomToast';
import RowInput from '../table-components/row-components/RowInput';
import RowSelect from '../table-components/row-components/RowSelect';

// Define the props type for better readability
type EditableTableDataProps = {
	path: string;
	value: any;
	type?: string;
	id: string;
	dataKey: string;
	editType?: string;
	options?: { label: string; value: string }[];
	style?: React.CSSProperties; // Use React.CSSProperties for style prop type
};

const EditableTableData: FC<EditableTableDataProps> = props => {
	const { path, value, id, dataKey, type, editType, options, style } = props;

	const [val, setVal] = useState(value);
	const [trigger, result] = useUpdateByIdMutation();
	const borderColor = useColorModeValue('brand.200', 'brand.200');

	useCustomToast({
		isError: result?.isError,
		isSuccess: result?.isSuccess,
		error: result?.error,
		successText: 'Information Updated',
		successTitle: 'Success',
		isLoading: result?.isLoading,
	});

	const handleSwitch = (e: any) => {
		setVal(e.target.checked);
		trigger({ path, id, body: { [dataKey]: e.target.checked } });
	};

	const handleChange = (e: any) => {
		setVal(e.target.value);
		trigger({ path, id, body: { [dataKey]: e.target.value } });
	};
	if (type == 'boolean') {
		return (
			<CustomTd>
				<Switch
					isChecked={val}
					colorScheme='brand'
					size={{ base: 'lg', md: 'sm' }}
					onChange={handleSwitch}
				/>
			</CustomTd>
		);
	}

	if (editType == 'select') {
		return (
			<CustomTd>
				<RowSelect
					value={val}
					onChange={handleChange}>
					{options?.map(({ label, value }: { label: string; value: string }, i: number) => (
						<option
							key={i}
							value={value}>
							{label}
						</option>
					))}
				</RowSelect>
			</CustomTd>
		);
	}

	return (
		<CustomTd>
			<RowInput
				type={editType || 'text'}
				focusBorderColor={borderColor}
				value={val}
				sx={style}
				onChange={handleChange}
			/>
		</CustomTd>
	);
};

export default EditableTableData;
