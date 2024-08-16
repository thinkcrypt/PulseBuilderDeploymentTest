import React, { FC, ReactNode } from 'react';
import { ModalFooter, ModalFooterProps } from '@chakra-ui/react';

type CustomModalHeaderProps = ModalFooterProps & {
	children?: ReactNode;
};

const CustomModalFooter: FC<CustomModalHeaderProps> = ({ children, ...props }) => {
	return (
		<ModalFooter
			borderTopWidth={1}
			_dark={{ borderColor: 'border.dark' }}
			borderBottomRadius='2xl'
			{...props}>
			{children}
		</ModalFooter>
	);
};

export default CustomModalFooter;
