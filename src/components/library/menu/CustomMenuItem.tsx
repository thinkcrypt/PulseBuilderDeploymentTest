import React, { FC, ReactNode } from 'react';
import { MenuItem, MenuItemProps } from '@chakra-ui/react';

type CustomMenuItemProps = MenuItemProps & {
	children: ReactNode;
};

const CustomMenuItem: FC<CustomMenuItemProps> = ({ children, ...props }) => {
	return (
		<MenuItem
			fontSize='sm'
			px={4}
			bg='menu.light'
			color='text.selected'
			fontWeight='600'
			_hover={{
				bg: 'hover.light',
			}}
			_dark={{
				color: 'text.selectedDark',
				bg: 'menu.dark',
				_hover: {
					bg: 'hover.dark',
				},
			}}
			{...props}>
			{children}
		</MenuItem>
	);
};

export default CustomMenuItem;
