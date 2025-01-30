import { useAppSelector } from '@/hooks';
import { Box, RadioProps, useRadio } from '@chakra-ui/react';
import React from 'react';

type RadioCardProps = RadioProps & {
	isSelected: boolean;
	children: React.ReactNode;
	css?: any;
};

const RadioCard = ({ isSelected, css, children, ...props }: RadioCardProps) => {
	const { getInputProps, getRadioProps } = useRadio(props);
	const { display } = useAppSelector(state => state.builder);
	const input = getInputProps();
	const checkbox = getRadioProps();

	return (
		<Box as='label'>
			<input {...input} />
			<Box
				{...checkbox}
				fontSize={{ base: '12px', md: display == 'sm' ? '10px' : '16px' }}
				cursor='pointer'
				borderWidth='1px'
				borderRadius='full'
				letterSpacing='.5px'
				fontWeight={isSelected ? css?.activeFontWeight || 600 : 'normal'}
				borderColor={
					isSelected ? css?.activeBorder || '#000' : css?.borderColor || ''
				}
				_checked={{
					borderColor: 'teal.600',
				}}
				_focus={{
					boxShadow: 'outline',
				}}
				px={5}
				py={3}
			>
				{children}
			</Box>
		</Box>
	);
};

export default RadioCard;
