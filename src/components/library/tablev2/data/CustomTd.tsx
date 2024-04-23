import React, { FC } from 'react';
import { Td, Image, Text } from '@chakra-ui/react';
import { TableDataProps } from '../types';
import { PLACEHOLDER_IMAGE } from '@/lib/constants';

const PADDING_Y = 1;
const PADDING_X = 4;

const CustomTd: FC<TableDataProps> = ({ children, src, type, ...props }) => {
	const letters = src ? 15 : 20;
	const text =
		typeof children === 'string'
			? children.slice(0, letters) + (children.length > letters ? '...' : '')
			: children;

	return (
		<Td
			wordBreak='break-word'
			fontSize={'.82rem'}
			py={PADDING_Y}
			px={PADDING_X}
			fontWeight='500'
			{...props}>
			{type == 'image-text' && (
				<Image
					bg='#ebebeb'
					_dark={{
						bg: '#2d2d2d',
					}}
					objectFit='contain'
					h='40px'
					w='40px'
					src={src || PLACEHOLDER_IMAGE}
					alt='img'
				/>
			)}
			{text || <i>--</i>}
		</Td>
	);
};

export default CustomTd;
