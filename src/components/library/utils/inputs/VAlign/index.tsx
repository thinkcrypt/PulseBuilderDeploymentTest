'use client';

import React, { FC } from 'react';
import { Center, Flex, InputProps } from '@chakra-ui/react';
import { FormControl, Icon } from '../../../';

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
	const onChange = (e: string) => {
		if (props.onChange) {
			const event = {
				target: {
					name: props.name,
					value: e,
				},
			} as any;
			props.onChange(event);
		}
	};
	const size = 20;
	return (
		<FormControl
			isRequired={isRequired}
			label={label}
			helper={helper}>
			<Flex
				mt={0}
				align='center'
				gap={1}>
				<AlignBox
					onClick={() => onChange('left')}
					isSelected={value == 'left'}>
					<Icon
						name='align-left'
						size={size}
					/>
				</AlignBox>
				<AlignBox
					onClick={() => onChange('center')}
					isSelected={value == 'center'}>
					<Icon
						name='align-center'
						size={size}
					/>
				</AlignBox>
				<AlignBox
					onClick={() => onChange('right')}
					isSelected={value == 'right'}>
					<Icon
						name='align-right'
						size={size}
					/>
				</AlignBox>
			</Flex>
		</FormControl>
	);
};

const AlignBox: FC<any> = ({ children, isSelected, ...props }) => {
	return (
		<Center
			p={2}
			h='32px'
			w='44px'
			fontSize='14px'
			fontWeight='600'
			borderWidth={2}
			cursor='pointer'
			borderColor={isSelected ? 'black' : 'container.borderLight'}
			_dark={{
				borderColor: isSelected ? '#fafafa' : 'border.dark',
			}}
			borderRadius='md'
			{...props}>
			{children}
		</Center>
	);
};

export default VAlignment;
