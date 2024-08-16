import { ModalContent, ModalContentProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type ModalContentContainerProps = ModalContentProps & {
	children: ReactNode;
};

const ModalContentContainer: FC<ModalContentContainerProps> = ({ children, ...props }) => {
	return (
		<ModalContent
			boxShadow='lg'
			borderRadius='xl'
			bg='menu.light'
			_dark={{
				bg: 'menu.dark',
			}}
			{...props}>
			{children}
		</ModalContent>
	);
};

export default ModalContentContainer;
