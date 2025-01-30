import { Center, CenterProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type LoggedInIconProps = CenterProps & {
	header: any;
	firstLetter: string;
};

const LoggedInIcon: FC<LoggedInIconProps> = ({
	header,
	firstLetter,
	...props
}) => {
	return (
		<Center
			w={{ base: '30px', md: `${header?.iconSize + 14}px` }}
			h={{ base: '30px', md: `${header?.iconSize + 14}px` }}
			borderRadius={header?.iconRadius}
			bg={header?.iconBg}
			color={header?.iconFg}
			cursor='pointer'
			transition='.3s'
			_hover={{
				bg: header?.iconHoverBg || 'gray.300',
			}}
			fontWeight='bold'
			fontSize={header?.iconSize}
			{...props}
		>
			{firstLetter}
		</Center>
	);
};

export default LoggedInIcon;
