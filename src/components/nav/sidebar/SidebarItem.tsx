import React from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { navigate } from '@/store/slices/routeSlice';
import Icon from '@/components/library/icon/Icon';

type SidebarItemProps = {
	children: string;
	href: string;
	path: string;
	icon: string;
	sx?: any;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ href, children, path, icon, sx }) => {
	const { selected } = useAppSelector((state: any) => state.route);
	const dispatch = useAppDispatch();
	const color = useColorModeValue('#4a4a4a', '#fff');
	const bg = useColorModeValue('white', '#222');
	const hover = useColorModeValue('#fafafa', '#141414');

	const changeRoute = (): void => {
		dispatch(navigate({ selected: path }));
	};

	return (
		<Flex
			_hover={selected !== path ? { bg: hover } : {}}
			onClick={changeRoute}
			as={Link}
			href={href}
			bg={selected == path ? bg : 'transparent'}
			sx={{ ...styles.container, ...sx }}>
			<Icon
				color={color}
				name={icon}
			/>
			<Text sx={styles.text}>{children} </Text>
		</Flex>
	);
};

const styles = {
	container: {
		borderRadius: 10,
		alignItems: 'center',
		gap: 3,
		px: 2.5,
		h: 7,
		transition: 'all .2s ease-in-out',
		fontWeight: '600',
		cursor: 'pointer',
		fontSize: '.9rem',
	},
	text: {
		fontSize: 14,
		fontWeight: 600,
	},
};

export default SidebarItem;
