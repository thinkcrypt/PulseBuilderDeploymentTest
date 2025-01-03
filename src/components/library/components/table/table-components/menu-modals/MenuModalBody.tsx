import React, { FC } from 'react';
import { useIsMobile } from '../../../../';
import { DrawerBody, DrawerContentProps, ModalBody, ModalBodyProps } from '@chakra-ui/react';

type MenuModalBodyProps = ModalBodyProps &
	DrawerContentProps & {
		children: React.ReactNode;
	};

const MenuModalBody: FC<MenuModalBodyProps> = ({ children }) => {
	const isMobile = useIsMobile();
	if (isMobile) {
		return (
			<DrawerBody
				px={{ base: 4, md: 6 }}
				overflowY='scroll'>
				{children}
			</DrawerBody>
		);
	}

	return <ModalBody px={{ base: 4, md: 6 }}>{children}</ModalBody>;
};

export default MenuModalBody;
