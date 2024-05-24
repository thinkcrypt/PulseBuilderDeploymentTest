import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

const Section = ({ title, children }: { title: string; children: ReactNode }) => {
	return (
		<Flex
			_notLast={{
				borderBottomWidth: 1,
			}}
			borderColor='stroke.deepL'
			_dark={{ borderColor: 'stroke.deepD' }}
			flexDirection='column'
			p={8}
			gap={2}>
			<Flex
				fontWeight='bold'
				fontFamily='Bebas Neue'>
				{title}
			</Flex>
			<Flex>{children}</Flex>
		</Flex>
	);
};

export default Section;
