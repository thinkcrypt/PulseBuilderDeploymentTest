import { Center, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

const Footer = () => {
	return <FooterTag />;
};

const FooterTag = () => {
	return (
		<Center
			bg='eblack.200'
			flex={1}
			py='64px'
			h='64px'>
			<Text color='white.200'>Copyright © 2024, powered by thinkcrypt.io</Text>
		</Center>
	);
};

export default Footer;
