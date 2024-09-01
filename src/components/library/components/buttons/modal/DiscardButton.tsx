import React, { FC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

type DiscardButtonProps = ButtonProps & {
	children?: React.ReactNode;
};

const DiscardButton: FC<DiscardButtonProps> = ({ children, ...props }) => {
	return (
		<Button
			size='xs'
			colorScheme='gray'
			{...props}>
			{children || 'Discard'}
		</Button>
	);
};

export default DiscardButton;
