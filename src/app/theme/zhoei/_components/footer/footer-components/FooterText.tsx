import React, { FC } from 'react';
import { Link, Text, TextProps } from '@chakra-ui/react';

const FooterText: FC<TextProps & { children: string; href: string }> = ({
	children,
	href,
	...props
}) => {
	return (
		<Link href={href}>
			<Text
				fontSize='.9rem'
				{...props}>
				{children}
			</Text>
		</Link>
	);
};

export default FooterText;
