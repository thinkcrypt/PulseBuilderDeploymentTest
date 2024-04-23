import React from 'react';
import { Input } from '@chakra-ui/react';
import InputContainer from './InputContainer';
import { styles, HInputProps } from './util';

const HInput: React.FC<HInputProps> = ({ label, isRequired, placeholder, value, ...props }) => {
	return (
		<InputContainer label={label} isRequired={isRequired}>
			<Input
				sx={styles.input}
				placeholder={placeholder ? placeholder : label}
				value={value}
				{...props}
			/>
		</InputContainer>
	);
};

export default HInput;
