import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SecondaryBtnProps = ButtonProps & {
	css: any;
	children: any;
};

const SecondaryBtn: FC<SecondaryBtnProps> = ({ css, children, ...props }) => {
	return (
		<Button
			w='full'
			bg={css?.secondaryBtnBg || '#fff'}
			color={css?.secondaryBtnFg || '#2C3A96'}
			_hover={{
				bg: css?.secondaryBtnHoverBg || '#2C3A96',
				color: css?.secondaryBtnHoverFg || '#fff',
			}}
			fontSize={`${css?.btnFontSize}px`}
			fontWeight={css?.css?.btnFontWeight}
			border={`1px solid ${css?.borderColor || '#3444ad'}`}
			{...props}
		>
			{children}
		</Button>
	);
};

export default SecondaryBtn;
