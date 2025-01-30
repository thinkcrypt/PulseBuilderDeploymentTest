
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type HeadngProps = TextProps & {
	children: string | number;
	basic: any;
	css?: any;
};

const Headng: FC<HeadngProps> = ({ children, css, basic, ...props }) => {
	return (
		<Text
			fontWeight='400'
			fontSize='1rem'
			fontFamily={css?.primaryFont || basic?.primaryFont}
			color={css?.color || basic?.primaryTextColor}
			{...props}
		>
			{children}
		</Text>
	);
};

export default Headng;
