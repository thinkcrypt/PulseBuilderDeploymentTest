import React, { FC, ReactNode } from 'react';
import {
	maxWidth,
	PADDING_X,
	placeholderLogo,
	sectionPadding,
} from '@/components/library/config/lib/constants/constants';
import {
	Box,
	BoxProps,
	Center,
	CenterProps,
	Flex,
	Grid,
	Image,
	Input,
	Text,
} from '@chakra-ui/react';
import {
	HomeContentProps,
	HoverContentContainer,
	Icon,
	IconNameOptions,
} from '@/components/library';
// import { PADDING_X } from '.';
import SearchBox from './SearchBox';
import LogoImage from './LogoImage';
import { MenuDrawer } from '../nav-bar/components';
import SimpleMenuDrawer from '../nav-bar/components/SimpleMenuDrawer';
import CartDrawer from './CartDrawer';
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
const HeaderConfig: FC<HeaderProps> = ({
	dataModel,
	content,
	path,
	data,
	basic,
}) => {
	const header = content?.header;
	const doc: HeaderConfigProps = content?.header;
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
		>
			<Box bg={header?.bgColor}>
				<Grid gridTemplateColumns='repeat(3, 1fr)'>
					<SimpleMenuDrawer
						display={{ base: 'block', xl: 'none' }}
						basic={basic}
						content={content}
					/>
					<Flex justifyContent={{ base: 'flex-start', sm: 'center' }}>
						<LogoImage header={header} src={basic?.logo || placeholderLogo} />
					</Flex>
					<Flex display={{ base: 'none', xl: 'flex' }}>
						<SearchBox header={header} />
					</Flex>
					<Flex
						justifyContent='flex-end'
						gap={{ base: 1, sm: 2 }}
						alignItems='center'
					>
						<HeaderIcon
							display={{ base: 'flex', xl: 'none' }}
							header={header}
							name='search'
						/>
						<CartDrawer basic={basic} content={content}>
							<HeaderIcon header={header} name='cart' />
						</CartDrawer>
						<HeaderIcon header={header} name='user' />
					</Flex>
				</Grid>
			</Box>
		</HoverContentContainer>
	);
};

export default HeaderConfig;

const SectionPadding = ({
	children,
	...props
}: BoxProps & { children: ReactNode }) => (
	<Box
		px={{
			base: sectionPadding.PADDING_X_MOBILE,
			lg: sectionPadding.PADDING_X_LG,
			'2xl': sectionPadding.PADDING_X_2XL,
		}}
		maxW={maxWidth}
		mx='auto'
		{...props}
	>
		{children}
	</Box>
);

const HeaderIcon = ({
	header,
	name,
	...props
}: CenterProps & {
	header: any;
	name: IconNameOptions;
}) => (
	<Center
		w={{ base: '30px', md: `${header?.iconSize + 14}px` }}
		h={{ base: '30px', md: `${header?.iconSize + 14}px` }}
		borderRadius={header?.iconRadius}
		bg={header?.iconBg}
		cursor='pointer'
		transition='.3s'
		_hover={{
			bg: header?.iconHoverBg || 'gray.300',
		}}
		{...props}
	>
		<Icon size={header?.iconSize} color={header?.iconFg} name={name} />
	</Center>
);
