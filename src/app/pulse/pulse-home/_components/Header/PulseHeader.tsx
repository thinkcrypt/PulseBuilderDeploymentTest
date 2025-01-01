import React, { FC, ReactNode } from 'react';
import {
	PADDING_X,
	placeholderLogo,
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

// dataModel, content, path, data
const HeaderConfig: FC<HomeContentProps> = ({
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
			<Grid gridTemplateColumns='repeat(3, 1fr)'>
				<MenuDrawer
					display={{ base: 'block', xl: 'none' }}
					basic={basic}
					content={content}
				/>
				<Flex justifyContent={{ base: 'center', xl: 'flex-start' }}>
					<LogoImage
						w={`${header?.logoWidth}px`}
						h={`${header?.logoHeight}px`}
						header={header}
						src={basic?.logo || placeholderLogo}
					/>
				</Flex>
				<Flex display={{ base: 'none', xl: 'flex' }}>
					<SearchBox header={header} />
				</Flex>
				<Flex justifyContent='flex-end' gap={2} alignItems='center'>
					<HeaderIcon
						display={{ base: 'flex', xl: 'none' }}
						header={header}
						name='search'
					/>
					<HeaderIcon header={header} name='cart' />
					<HeaderIcon header={header} name='user' />
				</Flex>
			</Grid>
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
			base: padding.PADDING_X_MOBILE,
			lg: padding.PADDING_X_LG,
			'2xl': padding.PADDING_X_2XL,
		}}
		w='full'
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
		w='40px'
		h='40px'
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

////////////////////////////
{
	/* <HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={doc?.bgColor}
			borderBottom={`1px solid ${doc?.borderColor}`}
			px={PADDING_X}
			position='sticky'
			top='0'
		></HoverContentContainer> */
}
