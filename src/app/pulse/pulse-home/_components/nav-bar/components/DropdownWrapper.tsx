import {
	productCardBoxShadow,
	zIndex,
} from '@/components/library/config/lib/constants/constants';
import useColors from '@/components/library/hooks/useColors';
import { Box, BoxProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type DropdownWrapperProps = BoxProps & {
	css: any;
	children: ReactNode;
};

const DropdownWrapper: FC<DropdownWrapperProps> = ({ children, css }) => {
	const colors = useColors();
	return (
		<Box
			position='absolute'
			bg={colors?.white}
			left='0'
			top='90%'
			zIndex={zIndex?.navbarDropdown}
			w='200px'
			boxShadow={productCardBoxShadow}
			borderTop={`4px solid ${colors?.hoverColor}`}
		>
			{children}
		</Box>
	);
};

export default DropdownWrapper;
