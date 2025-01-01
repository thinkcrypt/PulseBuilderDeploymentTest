import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import {
	maxWidth,
	sectionPadding,
} from '@/components/library/config/lib/constants/constants';
type SectionPaddingProps = BoxProps & {
	children: ReactNode;
};

const SectionPadding: FC<SectionPaddingProps> = ({ children, ...props }) => {
	return (
		<Box
			px={{
				base: sectionPadding.PADDING_X_MOBILE,
				lg: sectionPadding.PADDING_X_LG,
				'2xl': sectionPadding.PADDING_X_2XL,
			}}
			w='full'
			maxW={maxWidth}
			mx='auto'
			{...props}
		>
			{children}
		</Box>
	);
};

export default SectionPadding;
