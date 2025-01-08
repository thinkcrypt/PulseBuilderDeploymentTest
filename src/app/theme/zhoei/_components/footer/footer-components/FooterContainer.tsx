import React from 'react';
import { Center } from '@chakra-ui/react';
import { FC } from 'react';
import { FlexChild } from '@/builder';

const FooterContainer: FC<FlexChild & { data: any }> = ({ children, data }) => {
	return (
		<Center
			bg={data?.footerBg}
			flex={1}
			flexDir='column'
			w='100%'>
			{children}
		</Center>
	);
};

export default FooterContainer;
