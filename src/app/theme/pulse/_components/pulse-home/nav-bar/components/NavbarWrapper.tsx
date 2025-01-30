import { Box, BoxProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { useColors, navbarBoxShadow } from '../../../../_components/index';
type NavbarWrapperProps = BoxProps & {
	css: any;
	children: ReactNode;
};

const NavbarWrapper: FC<NavbarWrapperProps> = ({ children, css, ...props }) => {
	const colors = useColors();
	return (
		<Box
			// zIndex={zIndex?.navbar}
			bg={css?.bgColor || colors?.white}
			color={css?.fgColor || colors?.white}
			boxShadow={navbarBoxShadow}
			h='44px'
			{...props}
		>
			{children}
		</Box>
	);
};

export default NavbarWrapper;
