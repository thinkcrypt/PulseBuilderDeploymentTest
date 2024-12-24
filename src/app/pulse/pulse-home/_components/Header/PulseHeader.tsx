import React, { FC, ReactNode } from 'react';
import {
	placeholderLogo,
	PADDING_X,
} from '../../../../../components/library/config/lib/constants/constants';

import {
	Box,
	BoxProps,
	Center,
	CenterProps,
	Flex,
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
			borderBottom={`1px solid ${doc?.borderColor}`}
			px={PADDING_X}
			position='sticky'
			top='0'
		>
			<SectionPadding h='80px' bg={header?.bgColor} overflow='hidden' py='1rem'>
				<Flex h='full' alignItems='center' justifyContent='space-between'>
					<Flex>
						<Box>
							<LogoImage
								w={`${header?.logoWidth}px`}
								h={`${header?.logoHeight}px`}
								src={basic?.logo || placeholderLogo}
							/>
						</Box>
						<SearchBox header={header} />
					</Flex>
					<Flex gap={2}>
						<HeaderIcon header={header} name='cart' />
						<HeaderIcon header={header} name='user' />
					</Flex>
				</Flex>
			</SectionPadding>
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
