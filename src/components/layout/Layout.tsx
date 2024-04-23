'use client';
import React, { FC } from 'react';
import Navbar from '../nav/Navbar';
import Body from '../nav/Body';
import { Button, Flex } from '@chakra-ui/react';
import { useAppDispatch } from '@/hooks';
import { logout } from '@/store/slices/authSlice';
import AuthWrapper from '../library/wrappers/AuthWrapper';
import Sidebar from '../nav/sidebar/Sidebar';
import ColorMode from '../color-mode/ColorMode';
import { padding, sizes } from '@/lib/constants';
import { FlexPropsType } from '@/types';
import { refresh } from '@/store/slices/tableSlice';
import { navigate } from '@/store/slices/routeSlice';
import CreateMenu from '../library/menu/CreateMenu';
import Column from '../containers/Column';
import SelfMenu from '../library/menu/SelfMenu';
import SideDrawer from '../nav/sidebar/SideDrawer';
import MomentumScroll from '../scroll/MomentumScroll';

const PX = { base: padding.BASE, md: padding.MD, lg: padding.LG };
const PADDING_TOP = { base: 16, md: 16, lg: 16 };

type LayoutProps = FlexPropsType & {
	children: React.ReactNode;
	title: string;
	path?: string;
	type?: 'default' | 'pos';
	hideColorMode?: boolean;
};

const Layout: FC<LayoutProps> = ({
	children,
	title,
	type = 'default',
	path = '/',
	hideColorMode = false,
	...props
}) => {
	const dispatch = useAppDispatch();
	dispatch(navigate({ selected: path }));

	React.useEffect(() => {
		dispatch(refresh());
	}, []);

	return (
		<AuthWrapper>
			<Flex w='100%'>
				{type !== 'default' && <SideDrawer />}
				<Navbar
					px={PX}
					w={sizes.HOME_NAV_MAX_WIDTH}
					left={sizes.HOME_NAV_LEFT}
					_dark={{ bg: 'navbar.dark' }}>
					<Flex w='full' justify='space-between'>
						{title}
					</Flex>
					<Flex align='center' gap={4}>
						<SelfMenu />
						<CreateMenu />
					</Flex>
				</Navbar>
			</Flex>
			<Body scrollBehavior='smooth'>
				{type == 'default' && <Sidebar />}
				<Flex flexDir='column' w='full' pl={type != 'default' ? 0 : sizes.HOME_NAV_LEFT} {...props}>
					<Flex pt={type == 'pos' ? 12 : PADDING_TOP} flex={1} w='full'>
						<Flex p={PX} pb={0} w='full'>
							<Column w='full' gap={4}>
								{children}
							</Column>
						</Flex>
					</Flex>
				</Flex>
			</Body>
			{!hideColorMode && <ColorMode />}
		</AuthWrapper>
	);
};

export default Layout;
