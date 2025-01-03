'use client';

import React, { FC } from 'react';
import { Flex, Heading, useMediaQuery, FlexProps, Button } from '@chakra-ui/react';

import {
	useIsMobile,
	AuthWrapper,
	SpaceBetween,
	padding,
	sizes,
	useAppDispatch,
	ColorMode,
	Body,
	Column,
	LayoutWrapper,
	THEME,
	refresh,
	navigate,
	Align,
	Icon,
	EditorSidebar,
	useAppSelector,
	undo,
	redo,
} from '../';
import EditorNavbar from './EditorNavbar';
import { useUpdateContentMutation } from '../store/services/contentApi';

const PX = { base: padding.BASE, md: padding.MD, lg: padding.LG };
const navbarStyleProps = {
	px: PX,
	w: { base: 'full', md: sizes.HOME_NAV_MAX_WIDTH },
	left: { base: 0, md: sizes.HOME_NAV_LEFT },
};

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
	const [trigger, result] = useUpdateContentMutation();

	React.useEffect(() => {
		dispatch(refresh());
	}, []);

	const { history, next } = useAppSelector(state => state.builder);
	const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
	const type = isLargerThan800 ? (props?.type == 'pos' ? 'pos' : 'default') : 'pos';

	const isMobile = useIsMobile();
	const showMenu = isMobile || props?.type == 'pos';
	const navbarDataProps = { doc: data, sidebarData, showMenu };

	const handleUndo = () => {
		const formData = history[history?.length - 1];
		trigger({
			body: formData,
			path: 'hongo',
			type: 'all',
		});
		dispatch(undo());
	};

	const handleRedo = () => {
		const formData = next[next?.length - 1];
		trigger({
			body: formData,
			path: 'hongo',
			type: 'all',
		});
		dispatch(redo());
	};

	return (
		<AuthWrapper>
			<LayoutWrapper>
				<EditorNavbar
					{...navbarStyleProps}
					{...navbarDataProps}>
					<SpaceBetween>
						<Flex
							gap={2}
							align='center'>
							<Button
								isLoading={result.isLoading}
								onClick={handleUndo}
								isDisabled={history?.length < 1}
								variant='white'
								leftIcon={<Icon name='undo' />}>
								Undo
							</Button>
							{/* <Button
								isLoading={result.isLoading}
								onClick={handleRedo}
								isDisabled={next.length < 1}
								variant='white'
								rightIcon={<Icon name='redo' />}>
								Redo
							</Button> */}
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
							h='80vh'
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
		pt={{ base: 4, md: 4 }}
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
