import { Box, BoxProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type DropdownWrapperProps = BoxProps & {
	css: any;
	children: ReactNode;
};
import {
	useColors,
	zIndex,
	productCardBoxShadow,
} from '../../../../_components/index';

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
			borderTop={`4px solid ${css?.hoverFg}`}
		>
			{children}
		</Box>
	);
};

export default DropdownWrapper;
