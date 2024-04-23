import { FormHelperText, FormHelperTextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const FONT_SIZE = '.8rem';
const PX = 3;
const COLOR = 'gray.400';
const COLOR_DARK = 'gray.400';

type HelperTextProps = FormHelperTextProps & {
	children: string;
};

const HelperText: FC<HelperTextProps> = ({ children, ...props }) => {
	return (
		<FormHelperText
			color={COLOR}
			px={PX}
			fontSize={FONT_SIZE}
			_dark={{ color: COLOR_DARK }}
			{...props}>
			{children}
		</FormHelperText>
	);
};

export default HelperText;
