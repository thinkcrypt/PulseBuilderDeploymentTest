import React, { FC, ReactNode } from 'react';
// import {
// 	maxWidth,
// 	PADDING_X,
// 	placeholderLogo,
// 	sectionPadding,
// } from '@/components/library/config/lib/constants/constants';
import { Box, Center, CenterProps, Flex, Grid } from '@chakra-ui/react';
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
import { PADDING_X, placeholderLogo } from '../../_core-components/config/lib/constants/constants';
import { SearchDrawer } from '../../search-page';
import LoginModal from '../../auth/_components/LoginModal';
import NormalText from '../../_core-components/components/text/NormalText';
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
			px={PADDING_X}
			position='sticky'
			top='0'
			edit={pathUrl === '/pulse/search-page' ? false : true}>
			<Box
				bg={header?.bgColor}
				// zIndex={zIndex?.header}
				position='sticky'
				top='0px'>
				<Grid gridTemplateColumns='repeat(3, 1fr)'>
					<SimpleMenuDrawer
						display={{ base: 'block', xl: 'none' }}
						basic={basic}
						content={content}
					/>
					<Flex justifyContent={{ base: 'center', xl: 'flex-start' }}>
						<LogoImage
							header={header}
							src={basic?.logo || placeholderLogo}
						/>
					</Flex>
					<Flex display={{ base: 'none', xl: 'flex' }}>
						<SearchBox
							dataModel={dataModel}
							path={path}
							basic={basic}
							content={content}
							header={header}
						/>
					</Flex>
					<Flex
						justifyContent='flex-end'
						gap={{ base: 1, sm: 2 }}
						alignItems='center'>
						<SearchDrawer
							basic={basic}
							content={content}>
							<HeaderIcon
								basic={basic}
								display={{ base: 'flex', xl: 'none' }}
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
						{/* {!isLoggedIn && (
              <LoginModal basic={basic} content={content}>
                <HeaderIcon basic={basic} header={header} name="user" />
              </LoginModal> 
            )} */}
						{isLoggedIn && (
							<Link href='dashboard/account'>
								<LoggedInIcon
									firstLetter={firstLetter}
									header={header}
								/>
							</Link>
						)}
					</Flex>
				</Grid>
			</Box>
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
				bg={header?.countBg || '#D4692B'}
				w='20px'
				h='20px'
				borderRadius='50%'>
				<NormalText
					basic={basic}
					fontSize='10px'
					fontWeight='bold'
					color={header?.countFg || '#fff'}>
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
