import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type NormalTextProps = TextProps & {
	children: string | number;
	css?: any;
};

const NormalText: FC<NormalTextProps> = ({ children, css, ...props }) => {
	return (
		<Text
			fontWeight='400'
			fontSize='1rem'
			fontFamily={css?.fontFamily}
			color={css?.color}
			{...props}
		>
			{children}
		</Text>
	);
};

export default NormalText;
