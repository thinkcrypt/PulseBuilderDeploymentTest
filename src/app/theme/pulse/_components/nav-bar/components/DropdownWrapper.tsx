import { Box, BoxProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type DropdownWrapperProps = BoxProps & {
	css: any;
	children: ReactNode;
};
import useColors from '../../../_core-components/hooks/useColors';
import { zIndex } from '../../../_core-components/config';
import { productCardBoxShadow } from '../../../_core-components/config/lib/constants/constants';

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
			borderTop={`4px solid ${css?.hoverFg}`}>
			{children}
		</Box>
	);
};

export default DropdownWrapper;
