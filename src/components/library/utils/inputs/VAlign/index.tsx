'use client';

import React, { FC } from 'react';
import { Flex, InputProps } from '@chakra-ui/react';
import { FormControl, Input } from '../';

type InputContainerProps = InputProps & {
	label: string;
	isRequired?: boolean;
	helper?: string;
	value: string | number | undefined;
	placeholder?: any;
};

const VAlignment: FC<InputContainerProps> = ({
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
			<AlignBox>Left</AlignBox>
			<AlignBox>Center</AlignBox>
			<AlignBox>Center</AlignBox>
		</FormControl>
	);
};

const AlignBox: FC<any> = ({ children }) => {
	return <Flex>{children}</Flex>;
};

export default VAlignment;
