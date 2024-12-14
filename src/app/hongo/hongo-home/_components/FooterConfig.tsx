import React, { FC, ReactNode } from 'react';
import {
	Box,
	BoxProps,
	Center,
	CenterProps,
	Flex,
	Grid,
	GridItem,
	Image,
	Input,
	Text,
	TextProps,
} from '@chakra-ui/react';
import { HomeContentProps, HoverContentContainer, Icon } from '@/components/library';
import { PADDING_X } from '.';
import { Column } from '@/commerce-components';

type HeaderConfigProps = {
	bgColor: string; //
	fgColor: string; //
};

const pages: any = {
	label: 'Quick Links',
	links: [
		{
			name: 'About',
			link: '/about',
		},
		{
			name: 'Privacy Policy',
			link: '/privacy',
		},

		{
			name: 'FAQ',
			link: '/faq',
		},
		{
			name: 'Contact',
			link: '/contact',
		},
	],
};

const FooterConfig: FC<HomeContentProps> = ({ dataModel, content, path, data }) => {
	const doc: HeaderConfigProps = content?.footer;
	const headerDoc = content?.header;
	return (
		<HoverContentContainer
			type='content'
			path={path}
			data={content}
			dataModel={dataModel}
			bg={doc?.bgColor}
			px={PADDING_X}>
			<Box
				bg={doc.bgColor}
				color={doc?.fgColor}
				py='4rem'>
				<Grid
					templateColumns='repeat(3, 1fr)'
					gap={6}>
					<Item>
						<Contact config={data} />
					</Item>
					<Item>
						<QuickLinks
							data={pages}
							config={data}
						/>
					</Item>
					<Item>
						<Container config={headerDoc}>
							<SearchInputField config={headerDoc} />
							<SearchButton config={headerDoc}>
								<Icon
									name='search'
									color={data?.content?.header?.searchBoxIcon}
								/>
							</SearchButton>
						</Container>
					</Item>
				</Grid>
			</Box>
		</HoverContentContainer>
	);
};

const Item = ({ children }: { children: React.ReactNode }) => (
	<GridItem
		w='100%'
		h='auto'>
		{children}
	</GridItem>
);

const Container = ({
	children,
	config,
	...props
}: CenterProps & { config: HeaderConfigProps; children: ReactNode }) => {
	return (
		<Center
			position='relative'
			display={{ base: 'none', lg: 'flex' }}
			w='300px'
			{...props}>
			{children}
		</Center>
	);
};

const SearchInputField = ({ config }: { config: any }) => {
	const BTN_WIDTH = { base: '2rem', md: '2.8rem' };
	return (
		<Input
			_placeholder={{
				letterSpacing: '-0.5px',
				fontSize: '.95rem',
				color: config.searchBoxTextColor,
			}}
			bg={config?.searchBoxFg}
			h={BTN_WIDTH}
			borderRadius={config?.searchBoxRadius}
			type='text'
			placeholder={config?.searchBoxText}
			w='300px'
			borderColor={config?.searchBoxBg}
		/>
	);
};

const SearchButton = ({ children, config }: { children: ReactNode; config: any }) => {
	return (
		<Center
			color={config?.searchBoxIcon}
			w='36px'
			h='36px'
			position='absolute'
			top='4px'
			right='12px'
			userSelect='none'>
			{children}
		</Center>
	);
};

const QuickLinks: FC<any> = ({ data, config, ...props }) => {
	return (
		<Box
			color={data?.fgColor}
			{...props}>
			<TextNormal
				mb='1rem'
				fontWeight='600'
				fontSize='2rem'
				fontFamily={config?.basic?.primaryFont}
				color={config?.content?.footer?.fgColor}>
				{data?.label}
			</TextNormal>
			<Column gap={3}>
				{data?.links?.map((item: any, i: number) => (
					<TextNormal
						key={i}
						fontFamily={config?.basic?.secondaryFont}
						color={config?.content?.footer?.fgColor}
						display='inline-block'>
						{item?.name}
					</TextNormal>
				))}
			</Column>
		</Box>
	);
};

type ContactProps = BoxProps & {
	data?: any;
	config?: any;
};

const Contact: FC<ContactProps> = ({ data, config, ...props }) => {
	return (
		<Box
			color={config?.content?.footer?.fgColor}
			{...props}>
			<TextNormal
				mb='1rem'
				fontWeight='600'
				fontSize='2rem'
				fontFamily={config?.basic?.primaryFont}
				color={config?.content?.footer?.fgColor}>
				Contact Us
			</TextNormal>
			<Flex
				mb={3}
				alignItems='center'
				gap={2}>
				<Icon
					color={config?.content?.footer?.fgColor}
					size={16}
					name='map'
				/>

				<TextNormal color={config?.content?.footer?.fgColor}>{config?.basic?.address}</TextNormal>
			</Flex>
			<Flex
				mb={3}
				alignItems='center'
				gap={2}>
				<Icon
					color={config?.content?.footer?.fgColor}
					size={16}
					name='phone'
				/>
				<TextNormal color={data?.fgColor}>{config?.basic?.phone}</TextNormal>
			</Flex>
			<Flex
				mb={3}
				alignItems='center'
				gap={2}>
				<Icon
					color={config?.content?.footer?.fgColor}
					size={16}
					name='envelope'
				/>
				<TextNormal color={data?.fgColor}>{config?.basic?.email}</TextNormal>
			</Flex>
		</Box>
	);
};

type TextNormalProps = TextProps & {
	children?: React.ReactNode;
};

const TextNormal: FC<TextNormalProps> = ({ children, ...props }) => {
	return (
		<Text
			fontSize='1rem'
			fontWeight='400'
			{...props}>
			{children}
		</Text>
	);
};

export default FooterConfig;
