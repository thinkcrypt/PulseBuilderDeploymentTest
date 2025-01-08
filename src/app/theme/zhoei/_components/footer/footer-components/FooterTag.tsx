'use client';

import React, { FC } from 'react';
import { Center, Text } from '@chakra-ui/react';
import { FlexChild } from '@/builder';

const FooterTag: FC<FlexChild & { data: any }> = ({ children, data, ...props }) => {
	return (
		<Center
			w='full'
			bg={data?.footerBannerBg}
			flex={1}
			p={8}
			py={2}
			{...props}>
			<Text
				fontSize='14px'
				letterSpacing='2px'
				color={data?.footerBannerFg}>
				{children}
			</Text>
		</Center>
	);
};

export default FooterTag;
