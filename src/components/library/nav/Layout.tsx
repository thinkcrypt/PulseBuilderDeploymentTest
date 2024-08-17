'use client';

import React, { FC } from 'react';
import { Flex, Heading, useMediaQuery, FlexProps } from '@chakra-ui/react';

import { refresh } from '@/store/slices/tableSlice';
import { navigate } from '@/store/slices/routeSlice';

import {
	useIsMobile,
	AuthWrapper,
	SelfMenu,
	SpaceBetween,
	CreateMenu,
	padding,
	sizes,
	useAppDispatch,
	ColorMode,
	Body,
	Navbar,
	Sidebar,
	Column,
} from '../';

const PX = { base: padding.BASE, md: padding.MD, lg: padding.LG };
const PADDING_TOP = { base: 16, md: 16, lg: 16 };

export type FlexPropsType = FlexProps & {
	children?: React.ReactNode;
};

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
	path = '/dashboard',
	hideColorMode = false,
	...props
}) => {
	const dispatch = useAppDispatch();
	dispatch(navigate({ selected: path }));

	React.useEffect(() => {
		dispatch(refresh());
	}, []);

	const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

	const type = isLargerThan800 ? 'default' : 'pos';

	const isMobile = useIsMobile();

	return (
		<AuthWrapper>
			<Flex
				bg='navbar.light'
				w='100%'
				flex={1}>
				<Navbar
					bg='inherit'
					px={PX}
					w={isMobile ? 'full' : sizes.HOME_NAV_MAX_WIDTH}
					left={isMobile ? 0 : sizes.HOME_NAV_LEFT}>
					<SpaceBetween>
						<Heading
							color='white'
							size='md'
							fontFamily='Bebas Neue'>
							{title}
						</Heading>
					</SpaceBetween>
					<Flex
						align='center'
						gap={4}>
						<SelfMenu />
						<CreateMenu />
					</Flex>
				</Navbar>

				<Body>
					{type == 'default' && <Sidebar />}
					<Flex
						flexDir='column'
						w='full'
						pl={type !== 'default' ? 0 : sizes.HOME_NAV_LEFT}
						{...props}>
						<Flex
							pt={type == 'pos' ? 12 : sizes.NAV_HEIGHT}
							flex={1}
							w='full'>
							<Flex
								overflowY='hidden'
								h={`calc(100vh - ${sizes.NAV_HEIGHT})`}
								borderTopRightRadius={{ base: `0`, md: 'xl' }}
								bg={{ base: 'background.400', md: 'background.light' }}
								_dark={{ bg: 'background.dark', borderTopRightRadius: 0 }}
								p={PX}
								pb={0}
								w='full'>
								<Column
									pl={{ base: 0, md: 2 }}
									w='full'
									gap={4}>
									{children}
								</Column>
							</Flex>
						</Flex>
					</Flex>
				</Body>
				{!hideColorMode && <ColorMode />}
			</Flex>
		</AuthWrapper>
	);
};

export default Layout;
