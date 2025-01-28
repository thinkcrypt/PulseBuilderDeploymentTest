import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type NormalTextProps = TextProps & {
	children: string | number;
	basic?: any;
	css?: any;
};

const NormalText: FC<NormalTextProps> = ({ children, css, ...props }) => {
	return (
		<Text
			fontWeight='400'
			fontSize='1rem'
			fontFamily={css?.fontFamily}
			color={css?.titleColor}
			{...props}
		>
			{children}
		</Text>
	);
};

export default NormalText;
