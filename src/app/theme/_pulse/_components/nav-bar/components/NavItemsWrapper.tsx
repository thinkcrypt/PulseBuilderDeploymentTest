import { Box, BoxProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type NavItemsWrapperProps = BoxProps & {
	handleHoverToggle: (index: number | null) => void;
	index: number;
	children: ReactNode;
};

const NavItemsWrapper: FC<NavItemsWrapperProps> = ({
	children,
	handleHoverToggle,
	index,
	...props
}) => {
	return (
		<Box
			mr='12px'
			h='full'
			position='relative'
			onMouseEnter={() => handleHoverToggle(index)}
			onMouseLeave={() => handleHoverToggle(null)}
			{...props}
		>
			{children}
		</Box>
	);
};

export default NavItemsWrapper;
