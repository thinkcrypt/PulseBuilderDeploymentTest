import React from 'react';
import { MenuList, MenuListProps, ModalContent } from '@chakra-ui/react';

type MenuContainerProps = MenuListProps & {
	children: React.ReactNode;
};

const ModalContainer: React.FC<MenuContainerProps> = ({ children, ...props }) => {
	return (
		<ModalContent
			boxShadow='lg'
			borderRadius='2xl'
			bg='menu.light'
			_dark={{
				bg: 'menu.dark',
			}}
			{...props}>
			{children}
		</ModalContent>
	);
};

export default ModalContainer;
