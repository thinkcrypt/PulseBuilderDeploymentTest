import {
	ButtonProps,
	FormControl,
	FormControlProps,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import React, { FC } from 'react';

type FormControlCompProps = FormControlProps & {
	css: any;
	label: string;
	placeholder: string;
	type: any;
	value: any;
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormControlComp: FC<FormControlCompProps> = ({
	css,
	label,
	placeholder,
	type,
	name,
	value,
	onChange,
	...props
}) => {
	return (
		<FormControl mb='1rem' {...props}>
			<FormLabel
				fontWeight={css?.labelWeight || 600}
				fontSize={`${css?.labelSize || 12}px`}
			>
				{label}
			</FormLabel>
			<Input
				name={name}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
				type={type}
			/>
		</FormControl>
	);
};

export default FormControlComp;
