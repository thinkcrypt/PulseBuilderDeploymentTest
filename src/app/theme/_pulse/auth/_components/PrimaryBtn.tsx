import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type PrimaryBtnProps = ButtonProps & {
	css: any;
	children: any;
};

const PrimaryBtn: FC<PrimaryBtnProps> = ({ css, children, ...props }) => {
	return (
		<Button
			w='full'
			bg={css?.primaryBtnBg || '#3444ad'}
			color={css?.primaryBtnFg || '#fff'}
			_hover={{
				bg: css?.primaryBtnHoverBg || '#263596',
				color: css?.primaryBtnHoverFg || '#fff',
			}}
			fontSize={`${css?.btnFontSize}px`}
			fontWeight={css?.css?.btnFontWeight}
			{...props}
		>
			{children}
		</Button>
	);
};

export default PrimaryBtn;
