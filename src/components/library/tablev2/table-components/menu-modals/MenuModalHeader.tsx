import React, { FC } from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import { DrawerFooter, DrawerHeader, ModalFooter, ModalHeader } from '@chakra-ui/react';

type MenuModalBodyProps = {
	children: React.ReactNode;
};

const MenuModalHeader: FC<MenuModalBodyProps> = ({ children }) => {
	const isMobile = useIsMobile();
	if (isMobile) {
		return <DrawerHeader>{children}</DrawerHeader>;
	}

	return <ModalHeader>{children}</ModalHeader>;
};

export default MenuModalHeader;
