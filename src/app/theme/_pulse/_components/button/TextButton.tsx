import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import useColors from '../../_core-components/hooks/useColors';

type TextButtonProps = ButtonProps & {
	basic: any;
	css?: any;
	children: any;
};

const TextButton: FC<TextButtonProps> = ({ children, basic, css, ...props }) => {
	const colors = useColors();
	return (
		<Button
			bg='transparent'
			py='12px'
			px='0px'
			borderBottom={`1px solid ${colors?.hoverColor}`}
			boxShadow='none'
			borderRadius='0px'
			display='inline-block'
			_hover={{
				bg: 'none',
				borderBottom: `2px solid ${colors?.hoverColor}`,
			}}
			fontWeight='400'
			fontSize='1rem'
			fontFamily={css?.fontFamily || basic?.secondaryFont}
			color={colors?.hoverColor || basic?.secondaryTextColor}
			{...props}>
			{children}
		</Button>
	);
};

export default TextButton;
