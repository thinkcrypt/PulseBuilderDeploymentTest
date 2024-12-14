import React, { FC, ReactNode } from 'react';
import { Box, Center, CenterProps, Flex, Image, Input, Text } from '@chakra-ui/react';
import { HomeContentProps, HoverContentContainer, Icon } from '@/components/library';
import { PADDING_X } from '.';

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

const HeaderConfig: FC<HomeContentProps> = ({ dataModel, content, path, data }) => {
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
			top='0'>
			<Flex
				align='center'
				justify='space-between'
				w='full'
				h='80px'
				bg={doc?.bgColor}
				py='.5rem'>
				<Image
					w='auto'
					h='2.5rem'
					objectFit='contain'
					src={doc?.logo}
					alt='Logo Image'
				/>
				<Flex
					align='center'
					gap={3}>
					<Container config={doc}>
						<SearchInputField config={doc} />
						<SearchButton config={doc}>
							<Icon
								name='search'
								color={doc?.searchBoxIcon}
							/>
						</SearchButton>
					</Container>
					{/* <BtnContainer config={content}>
						<Icon
							color={content?.brandTextColor}
							size={18}
							name='search'
						/>
					</BtnContainer> */}

					<BtnContainer config={doc}>
						<CartTotal config={doc}>{1}</CartTotal>
						<Icon
							color={doc?.iconFg}
							size={18}
							name='cart-bag'
						/>
					</BtnContainer>
				</Flex>
			</Flex>
		</HoverContentContainer>
	);
};

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

const SearchInputField = ({ config }: { config: HeaderConfigProps }) => {
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

const SearchButton = ({ children, config }: { children: ReactNode; config: HeaderConfigProps }) => {
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

const BtnContainer = ({
	children,
	config,
	...props
}: CenterProps & { config: HeaderConfigProps; children: ReactNode }) => {
	const BTN_WIDTH = { base: '2rem', md: '2.8rem' };
	return (
		<Center
			w={BTN_WIDTH}
			h={BTN_WIDTH}
			borderRadius={config?.iconRadius}
			backgroundColor={config?.iconBg}
			cursor='pointer'
			position='relative'
			{...props}>
			{children}
		</Center>
	);
};

const CartTotal = ({
	children,
	config,
	...props
}: CenterProps & { config: HeaderConfigProps; children: ReactNode }) => {
	return (
		<Center
			position='absolute'
			boxSize={'1.2rem'}
			top='-2px'
			right='-2px'
			fontSize='.775rem'
			color={config?.tagFg}
			bg={config?.tagBg}
			borderRadius='full'
			fontWeight='500'
			{...props}>
			{children}
		</Center>
	);
};

export default HeaderConfig;
