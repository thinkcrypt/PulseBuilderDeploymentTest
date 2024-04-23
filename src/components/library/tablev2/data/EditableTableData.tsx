'use client';
import React, { FC, useState } from 'react';
import CustomTd from './CustomTd';
import { Input, Switch, Text, useColorModeValue } from '@chakra-ui/react';
import { useUpdateByIdMutation } from '@/store/services/commonApi';
import SelectContainer from '../../utils/inputs/containers/SelectContainer';
import useCustomToast from '../../hooks/useCustomToast';

type Option = {
	label: string;
	value: string;
};

const EditableTableData: FC<{
	path: string;
	value: any;
	type?: string;
	id: string;
	dataKey: string;
	editType?: string;
	options?: Option[];
	style?: any;
}> = ({ path, value, id, dataKey, type, editType, options, style }) => {
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
				<Switch isChecked={val} colorScheme='brand' size='sm' onChange={handleSwitch} />
			</CustomTd>
		);
	}

	if (editType == 'select') {
		return (
			<CustomTd>
				<SelectContainer size='xs' minW='100px' value={val} onChange={handleChange}>
					{options?.map((option: Option, i: number) => (
						<option key={i} value={option?.value}>
							{option?.label}
						</option>
					))}
				</SelectContainer>
			</CustomTd>
		);
	}

	return (
		<CustomTd>
			<Input
				type={editType || 'text'}
				size='xs'
				borderRadius='lg'
				focusBorderColor={borderColor}
				color='text.500'
				fontWeight='600'
				borderColor='selectBorder.light'
				_dark={{
					color: 'gray.300',
					borderColor: 'selectBorder.dark',
				}}
				boxShadow='sm'
				value={val}
				w='100px'
				sx={style}
				onChange={handleChange}
			/>
		</CustomTd>
	);
};

export default EditableTableData;
