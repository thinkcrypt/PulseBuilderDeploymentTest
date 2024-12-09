'use client';

import React, { FC } from 'react';
import { InputProps, Flex } from '@chakra-ui/react';
import { FormControl, Input } from './';

type InputContainerProps = InputProps & {
	label: string;
	isRequired?: boolean;
	helper?: string;
	value: string | number | undefined;
	placeholder?: any;
};

const VColor: FC<InputContainerProps> = ({
	label,
	isRequired,
	placeholder,
	value,
	helper,
	...props
}) => {
	return (
		<FormControl
			isRequired={isRequired}
			label={label}
			helper={helper}>
			<Flex
				align='center'
				gap={2}>
				<Input
					h='32px'
					px={3}
					placeholder={placeholder ? placeholder : label}
					value={value}
					{...props}
					type='text'
				/>
				<Input
					w='44px'
					h='32px'
					p={0.3}
					px={1}
					type='color'
					placeholder={placeholder ? placeholder : label}
					value={value}
					{...props}
				/>
			</Flex>
		</FormControl>
	);
};

export default VColor;
