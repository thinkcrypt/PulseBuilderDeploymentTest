import React from 'react';
import { CloseButton, Flex, FlexProps, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const Header = ({
	children,
	href,
	...props
}: FlexProps & {
	children?: React.ReactNode;
	href?: string;
}) => {
	return (
		<Flex
			borderBottomWidth={1}
			bg='container.light'
			borderColor='stroke.deepL'
			_dark={{ borderColor: 'stroke.deepD', bg: 'container.dark' }}
			as={Link}
			href={href}
			w='100%'
			h='64px'
			align='center'
			zIndex={100}
			px={4}
			position='fixed'
			top={0}
			left={0}
			gap={4}
			{...props}>
			<CloseButton />
			<Heading size='sm'>{children}</Heading>
		</Flex>
	);
};

export default Header;
