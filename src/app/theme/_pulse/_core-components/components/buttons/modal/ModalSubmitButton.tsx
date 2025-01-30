import React, { FC, ReactNode } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

type ModalSubmitButtonProps = ButtonProps & {
	isLoading: boolean;
	children?: ReactNode;
};

const ModalSubmitButton: FC<ModalSubmitButtonProps> = ({ children, ...props }) => {
	return (
		<Button
			size='xs'
			type='submit'
			{...props}>
			{children || 'Confirm'}
		</Button>
	);
};

export default ModalSubmitButton;
