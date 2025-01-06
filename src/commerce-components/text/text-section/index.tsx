import React, { FC } from 'react';
import { Flex, FlexProps, Text } from '@chakra-ui/react';

type TextSectionProps = FlexProps & {
	title: string;
	children: React.ReactNode;
};

const TextSection: FC<TextSectionProps> = ({ title, children, ...props }) => {
	return (
		<Flex
			flexDir='column'
			gap='2px'
			{...props}>
			<Text
				fontSize='14px'
				color='text.shade'>
				{title}
			</Text>
			<Text
				fontSize='14px'
				fontWeight='600'>
				{children}
			</Text>
		</Flex>
	);
};

export default TextSection;
