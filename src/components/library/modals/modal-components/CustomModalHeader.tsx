import React, { FC, ReactNode } from 'react';
import { ModalHeader, ModalHeaderProps } from '@chakra-ui/react';
import { radius } from '../../config';

type CustomModalHeaderProps = ModalHeaderProps & {
	children?: ReactNode;
};

const CustomModalHeader: FC<CustomModalHeaderProps> = ({ children, ...props }) => {
	return (
		<ModalHeader
			_dark={{ bg: 'background.dark', borderColor: 'border.dark' }}
			borderTopRadius={radius.MODAL}
			fontWeight='700'
			fontSize='.9rem'
			h='100px'
			{...props}>
			{children}
		</ModalHeader>
	);
};

export default CustomModalHeader;
