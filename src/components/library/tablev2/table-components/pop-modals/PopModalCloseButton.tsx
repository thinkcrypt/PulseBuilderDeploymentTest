import React from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import { DrawerCloseButton } from '@chakra-ui/react';

const PopModalCloseButton = ({ isMobile }: { isMobile: boolean }) => {
	if (isMobile) {
		return <DrawerCloseButton />;
	}

	return null;
};

export default PopModalCloseButton;
