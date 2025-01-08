import React from 'react';
import { Center } from '@chakra-ui/react';
import { FC } from 'react';
import { FlexChild } from '@/builder';

const FooterIconContainer: FC<FlexChild & { color: string }> = ({ children, color }) => {
	return (
		<Center
			bg={color}
			w='full'
			px={8}
			py={6}
			gap={6}>
			{children}
		</Center>
	);
};

export default FooterIconContainer;
