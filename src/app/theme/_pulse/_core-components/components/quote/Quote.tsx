import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type QuoteProps = TextProps & {
	children?: string;
	basic: any;
	css?: any;
};

const Quote: FC<QuoteProps> = ({ children, basic, css, ...props }) => {
	return (
		<Text
			py='3rem'
			textAlign='center'
			fontWeight='400'
			fontSize='1rem'
			fontFamily={css?.fontFamily || basic?.secondaryFont}
			color={css?.color || basic?.secondaryTextColor}
			{...props}
		>
	
			{`“`}
			{children}
			{`”`}
		</Text>
	);
};

export default Quote;
