import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import useColors from '../../hooks/useColors';

type TextButtonProps = ButtonProps & {
	basic: any;
	css?: any;
	children: any;
};

const TextButton: FC<TextButtonProps> = ({
	children,
	basic,
	css,
	...props
}) => {
	const colors = useColors();
	return (
		<Button
			bg='transparent'
			py='2px'
			px='0px'
			boxShadow='none'
			borderRadius='0px'
			display='inline-block'
			fontWeight='400'
			fontSize='1rem'
			h='auto'
			_hover={{
				bg: 'none',
			}}
			fontFamily={css?.fontFamily || basic?.secondaryFont}
			color={colors?.hoverColor || basic?.secondaryTextColor}
			{...props}
		>
			{children}
		</Button>
	);
};

export default TextButton;
