'use client';

import React, { FC } from 'react';
import { Flex, Heading, useMediaQuery, FlexProps } from '@chakra-ui/react';

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
	LayoutWrapper,
	THEME,
	refresh,
	navigate,
	Align,
	Icon,
	EditorSidebar,
} from '../';
import EditorNavbar from './EditorNavbar';

const PX = { base: padding.BASE, md: padding.MD, lg: padding.LG };

export type FlexPropsType = FlexProps & {
	children?: React.ReactNode;
};

type LayoutProps = FlexPropsType & {
	children: React.ReactNode;
	title: string;
	path?: string;
	type?: 'default' | 'pos';
	hideColorMode?: boolean;
	sidebarData?: any;
	data: any;
};

const EditorLayout: FC<LayoutProps> = ({
	children,
	title,
	data,
	path = '/dashboard',
	hideColorMode = false,
	sidebarData,
	...props
}) => {
	const dispatch = useAppDispatch();
	dispatch(navigate({ selected: path }));

	React.useEffect(() => {
		dispatch(refresh());
	}, []);

	const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

	const type = isLargerThan800 ? (props?.type == 'pos' ? 'pos' : 'default') : 'pos';

	const isMobile = useIsMobile();
	const showMenu = isMobile || props?.type == 'pos';

	return (
		<AuthWrapper>
			<LayoutWrapper>
				<EditorNavbar
					doc={data}
					sidebarData={sidebarData}
					showMenu={showMenu}
					px={PX}
					w={showMenu ? 'full' : sizes.HOME_NAV_MAX_WIDTH}
					left={showMenu ? 0 : sizes.HOME_NAV_LEFT}>
					<SpaceBetween>
						<Flex
							gap={2}
							align='center'>
							<Icon
								color={THEME == 'basic' ? 'inherit' : 'white'}
								name='arrow-left'
							/>
							<Heading
								color={THEME == 'basic' ? 'inherit' : 'white'}
								size='md'
								fontFamily='Bebas Neue'>
								Exit Editor
							</Heading>
						</Flex>
					</SpaceBetween>
					<Align gap={4}>
						<ColorMode
							size='20px'
							position='navbar'
						/>
					</Align>
				</EditorNavbar>
				<Body>
					{type == 'default' && (
						<EditorSidebar
							doc={data}
							data={sidebarData}
						/>
					)}
					<Flex
						flexDir='column'
						w='full'
						pl={type !== 'default' ? 0 : sizes.HOME_NAV_LEFT}
						{...props}>
						<Flex
							pt={props?.type == 'pos' ? 0 : type == 'pos' ? 12 : sizes.NAV_HEIGHT}
							flex={1}
							w='full'>
							<Main>{children}</Main>
						</Flex>
					</Flex>
				</Body>
				{!hideColorMode && <ColorMode />}
			</LayoutWrapper>
		</AuthWrapper>
	);
};

const Main = ({ children }: { children: React.ReactNode }) => (
	<Flex
		overflowY='hidden'
		h={`calc(100vh - ${sizes.NAV_HEIGHT})`}
		borderTopRightRadius={{ base: `0`, md: THEME == 'basic' ? 0 : 'xl' }}
		bg={{ base: 'background.400', md: 'background.light' }}
		_dark={{ bg: 'background.dark', borderTopRightRadius: 0 }}
		px={PX}
		pt={{ base: 4, md: 1 }}
		pb='32px'
		w='full'>
		<Column
			pl={{ base: 0, md: 0 }}
			w='full'
			gap={4}>
			{children}
		</Column>
	</Flex>
);

export default EditorLayout;
