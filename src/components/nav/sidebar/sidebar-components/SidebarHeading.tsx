import { TextProps, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type SidebarHeadingProps = TextProps & {
	children: any;
};

const SidebarHeading: FC<SidebarHeadingProps> = ({ children, ...props }) => {
	return (
		<Text
			px={2}
			pt={4}
			fontSize={{ base: 'md', md: '2xs' }}
			fontWeight='700'
			textTransform='uppercase'
			{...props}>
			{children}
		</Text>
	);
};

export default SidebarHeading;
