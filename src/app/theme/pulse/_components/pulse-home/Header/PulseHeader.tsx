import React, { FC, ReactNode } from 'react';
import { Box, BoxProps, Center, CenterProps, Flex, Grid, GridItem } from '@chakra-ui/react';
import {
	HomeContentProps,
	HoverContentContainer,
	Icon,
	IconNameOptions,
	useAppSelector,
	useAuth,
} from '@/components/library';

import SearchBox from './SearchBox';
import LogoImage from './LogoImage';
import SimpleMenuDrawer from '../nav-bar/components/SimpleMenuDrawer';
import Link from 'next/link';
import { useGetSelfQuery } from '@/store/services/authApi';
import LoggedInIcon from './LoggedInIcon';
import { usePathname } from 'next/navigation';
import {
	PADDING_X,
	placeholderLogo,
	NormalText,
	SearchDrawer,
	zIndex,
	sectionPadding,
	maxWidth,
	HeaderContainer,
} from '../../../_components/index';
import LoginModal from '../../auth/components/LoginModal';

// import { SearchDrawer } from '../../../../search-page';
// import LoginModal from '../../../../auth/_components/LoginModal';
export const padding = {
	PADDING_X_2XL: '18rem',
	PADDING_X_LG: '12rem',
	PADDING_X_MOBILE: '1rem',
};
type HeaderConfigProps = {
	bgColor: string; //
	fgColor: string; //
	borderColor: string; //
	searchBoxBg: string; //
	searchBoxFg: string; //
	searchBoxIcon: string;
	iconBg: string; //
	iconFg: string; //
	tagBg: string; //
	tagFg: string; //
	logo?: string; //
	searchBoxText: string; //
	searchBoxTextColor: string; //
	searchBoxRadius: string; //
	iconRadius: string; //
};
type HeaderProps = {
	dataModel?: any;
	content?: any;
	path?: any;
	data?: any;
	basic?: any;
};
// dataModel, content, path, data
const HeaderConfig: FC<HeaderProps> = ({ dataModel, content, path, data, basic }) => {
	const header = content?.header;
	const doc: HeaderConfigProps = content?.header;

	const { isLoggedIn } = useAuth();
	const { data: user } = useGetSelfQuery({});

	const firstLetter = user?.name?.slice(0, 1);

	const { cartItems } = useAppSelector(state => state.cart);
	const { display } = useAppSelector(state => state.builder);
	// console.log('display val::', display);
	const cartTotal = cartItems.reduce((acc: any, item: any) => acc + item.qty, 0);
	const pathUrl = usePathname();
	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={doc?.bgColor}
			px={{
				base: PADDING_X.base,
				md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
			}}
			position='sticky'
			top='0'
			edit={pathUrl === '/pulse/search-page' ? false : true}>
			<HeaderContainer
				py={`${header?.headerPaddingY}px`}
				header={header}>
				<SectionPadding
					w='full'
					h='full'
					display='flex'
					alignItems='center'>
					<Grid
						gridTemplateColumns={{
							base: '1fr 1.5fr 1fr',
							sm: 'repeat(3, 1fr)',
						}}
						w='full'>
						<SimpleMenuDrawer
							//   display={{ base: "block", xl: "none" }}
							display={{
								base: 'block',
								xl: display == 'sm' ? 'block' : 'none',
							}}
							basic={basic}
							content={content}
						/>

						<GridItem
							w='full'
							colSpan={{ base: 1.5, sm: 1 }}>
							<LogoImage
								header={header}
								src={basic?.logo || placeholderLogo}
							/>
						</GridItem>

						<Flex
							//   display={{ base: "none", xl: "flex" }}

							display={{
								base: 'none',
								xl: display == 'sm' ? 'none' : 'flex',
							}}
							justifyContent='center'>
							<SearchBox
								basic={basic}
								content={content}
								header={header}
							/>
						</Flex>

						<Flex
							justifyContent='flex-end'
							gap={{ base: 1, sm: 2 }}
							alignItems='center'
							w='full'>
							<SearchDrawer
								basic={basic}
								content={content}>
								<HeaderIcon
									basic={basic}
									//   display={{ base: "flex", xl: "none" }}
									display={{
										base: 'flex',
										xl: display === 'sm' ? 'flex' : 'none',
									}}
									header={header}
									name='search'
								/>
							</SearchDrawer>
							<Link href='/cart'>
								<HeaderIcon
									type={'cart'}
									basic={basic}
									header={header}
									name='cart'
									cartTotal={cartTotal}
								/>
							</Link>

							{!isLoggedIn && (
								<LoginModal
									basic={basic}
									content={content}
								/>
							)}
							{isLoggedIn && (
								<Link href='/dashboard/account'>
									<LoggedInIcon
										firstLetter={firstLetter}
										header={header}
									/>
								</Link>
							)}
						</Flex>
					</Grid>
				</SectionPadding>
			</HeaderContainer>
		</HoverContentContainer>
	);
};

export default HeaderConfig;

const HeaderIcon = ({
	header,
	name,
	basic,
	type,
	cartTotal,
	...props
}: CenterProps & {
	header?: any;
	basic?: any;
	type?: string;
	cartTotal?: any;
	name: IconNameOptions;
}) => (
	<Center
		position='relative'
		w={{ base: '30px', md: `${header?.iconSize + 14}px` }}
		h={{ base: '30px', md: `${header?.iconSize + 14}px` }}
		borderRadius={header?.iconRadius}
		bg={header?.iconBg}
		cursor='pointer'
		transition='.3s'
		_hover={{
			bg: header?.iconHoverBg || 'gray.300',
		}}
		{...props}>
		{type == 'cart' && (
			<Center
				position='absolute'
				top='-8px'
				right='-8px'
				bg={header?.tagBg || '#d4692b'}
				w='20px'
				h='20px'
				borderRadius='50%'>
				<NormalText
					basic={basic}
					fontSize='10px'
					fontWeight='bold'
					color={header?.tagFg || '#fff'}>
					{cartTotal}
				</NormalText>
			</Center>
		)}
		<Icon
			size={header?.iconSize}
			color={header?.iconFg}
			name={name}
		/>
	</Center>
);

const SectionPadding = ({ children, ...props }: BoxProps & { children: ReactNode }) => (
	<Box
		mx='auto'
		{...props}>
		{children}
	</Box>
);
