import React, { FC, Fragment, ReactNode } from 'react';
import { Td, Image, Text, Stack, Flex } from '@chakra-ui/react';
import { TableDataProps } from '../types';
import { PLACEHOLDER_IMAGE } from '@/lib/constants';
import useIsMobile from '../../hooks/useIsMobile';
import Column from '../../containers/Column';

const PADDING_Y = 1;
const PADDING_X = 4;

const CustomTd: FC<TableDataProps> = ({ children, src, type, ...props }) => {
	const isMobile = useIsMobile();
	const letters = src ? 15 : 20;
	const text =
		typeof children === 'string' && !isMobile
			? children.slice(0, letters) + (children.length > letters ? '...' : '')
			: children;

	const Container = isMobile ? Column : Td;

	const TextContainer = isMobile ? Text : Fragment;

	return (
		<Container
			wordBreak='break-word'
			fontSize={isMobile && type == 'image-text' ? '1.5rem' : '.82rem'}
			py={PADDING_Y}
			px={isMobile ? 0 : PADDING_X}
			fontWeight='500'
			{...props}>
			{type == 'image-text' && (
				<Image
					bg='#ebebeb'
					_dark={{
						bg: '#2d2d2d',
					}}
					objectFit='contain'
					h={isMobile ? '200px' : '40px'}
					w={isMobile ? '200px' : '40px'}
					src={src || PLACEHOLDER_IMAGE}
					alt='img'
				/>
			)}
			<TextContainer>{text || <i>--</i>}</TextContainer>
		</Container>
	);
};

export default CustomTd;
