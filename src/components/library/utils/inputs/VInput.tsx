'use client';
import React from 'react';
import { Input, InputProps, FormControl, Stack, useColorModeValue, Text } from '@chakra-ui/react';
import Label from '../../form/label/Label';
import HelperText from '../../form/label/HelperText';

type InputContainerProps = InputProps & {
	label: string;
	isRequired?: boolean;
	helper?: string;
	value: string;
	placeholder?: any;
};

const VInput: React.FC<InputContainerProps> = ({
	label,
	isRequired,
	placeholder,
	value,
	helper,
	...props
}) => {
	const borderColor = useColorModeValue('brand.500', 'brand.200');

	return (
		<FormControl
			isRequired={isRequired}
			gap={4}>
			<Stack
				spacing={2}
				w='full'>
				<Label>{label}</Label>

				<Stack
					spacing={1}
					w='full'>
					<Input
						size='sm'
						px={3}
						borderRadius='lg'
						focusBorderColor={borderColor}
						color='text.500'
						_dark={{
							color: 'gray.300',
						}}
						placeholder={placeholder ? placeholder : label}
						_placeholder={{ fontSize: 14, fontWeight: '500' }}
						value={value}
						{...props}
					/>

					{helper && <HelperText>{helper}</HelperText>}
				</Stack>
			</Stack>
		</FormControl>
	);
};

export default VInput;
