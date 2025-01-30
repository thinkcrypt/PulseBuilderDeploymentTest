
import { TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import NormalText from '../../_core-components/components/text/NormalText';

type FormInfoTextProps = TextProps & {
	css: any;
	basic: any;
	children: any;
};

const FormInfoText: FC<FormInfoTextProps> = ({
	css,
	children,
	basic,
	...props
}) => {
	return (
		<NormalText
			fontSize={`${css?.secondaryTextSize}px`}
			color={css?.secondaryTextColor || '#666666'}
			textAlign='center'
			basic={basic}
			css={css}
			{...props}
		>
			{children}
		</NormalText>
	);
};

export default FormInfoText;
