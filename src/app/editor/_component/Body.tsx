import { useIsMobile } from '@/components/library';
import { Center, Flex, Grid } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const Body = ({ children }: { children: ReactNode }) => {
	const isMobile = useIsMobile();
	if (isMobile) {
		return (
			<Flex
				w='100vw'
				flexDir='column-reverse'>
				{children}
			</Flex>
		);
	}
	return (
		<Center w='100vw'>
			<Grid
				h='100%'
				gridTemplateColumns={{ base: '1fr', md: '3fr 2fr' }}
				w='full'
				pl={{ base: '16px', md: '128px' }}>
				{children}
			</Grid>
		</Center>
	);
};

export default Body;
