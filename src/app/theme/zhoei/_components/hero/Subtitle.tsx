'use client';

import React, { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { TextChild } from '@/builder';

const SubHeading: FC<TextChild & { color?: string; fontFamily?: string }> = ({
	children,
	fontFamily,
	color,
	...props
}) => {
	return (
		<Text
			whiteSpace='pre-line'
			fontFamily={fontFamily}
			color={color}
			_dark={{
				color: color,
			}}
			fontSize={{ base: '1.2rem', md: '1.3rem' }}
			{...props}>
			{children}
		</Text>
	);
};

export default SubHeading;
