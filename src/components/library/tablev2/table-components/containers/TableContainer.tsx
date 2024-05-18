import React, { ReactNode } from 'react';
import { TableContainer as ChakraTableContainer, Flex } from '@chakra-ui/react';
import { useIsMobile } from '../../../';

const style = {
	w: '100%',
	borderRadius: 8,
	borderWidth: 2,

	pb: 6,
	borderColor: 'stroke.light',

	_dark: {
		bg: 'table.dark',
		borderColor: 'stroke.dark',
	},
};

const TableContainer = ({ children }: { children: ReactNode }) => {
	const isMobile = useIsMobile();

	const Container = isMobile ? Flex : ChakraTableContainer;

	return <Container sx={style}>{children}</Container>;
};

export default TableContainer;
