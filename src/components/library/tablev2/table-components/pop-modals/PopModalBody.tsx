import React, { FC } from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import { DrawerBody, PopoverBody } from '@chakra-ui/react';

type MenuModalBodyProps = {
	children: React.ReactNode;
	isMobile: boolean;
};

const PopModalBody: FC<MenuModalBodyProps> = ({ children, isMobile }) => {
	if (isMobile) {
		return <DrawerBody>{children}</DrawerBody>;
	}

	return <PopoverBody>{children}</PopoverBody>;
};

export default PopModalBody;
