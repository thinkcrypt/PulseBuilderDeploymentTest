import React, { FC, ReactNode } from 'react';
import { Box, Center, CenterProps, Flex, Image, Input, Text } from '@chakra-ui/react';
import { HomeContentProps, HoverContentContainer, Icon } from '@/components/library';
import { PADDING_X } from '.';

const HeaderConfig: FC<HomeContentProps> = ({ dataModel, content, path, data }) => {
	return (
		<HoverContentContainer
			type='basic'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={content?.headerBg}
			borderBottom={`1px solid ${content?.headerBorder}`}
			px={PADDING_X}
			position='sticky'
			top='0'>
			<Flex
				align='center'
				justify='space-between'
				w='full'
				h='80px'
				bg={content?.headerBg}
				py='.5rem'>
				<Image
					w='auto'
					h='2.5rem'
					objectFit='contain'
					src={content?.logo}
					alt='Logo Image'
				/>
				<Flex
					align='center'
					gap={3}>
					<Container>
						<SearchInputField config={content} />
						<SearchButton>
							<Icon
								name='search'
								color={content?.searchBoxColor}
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

					<BtnContainer config={content}>
						<CartTotal config={content}>{1}</CartTotal>
						<Icon
							color={content?.headerIconColor}
							size={18}
							name='cart-bag'
						/>
					</BtnContainer>
				</Flex>
			</Flex>
		</HoverContentContainer>
	);
};

const Container = ({ children, ...props }: CenterProps & { children: ReactNode }) => {
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
			_placeholder={{ letterSpacing: '-0.5px', fontSize: '.95rem', color: config.searchTextColor }}
			h={BTN_WIDTH}
			borderRadius='full'
			type='text'
			placeholder='Search your desired products'
			w='300px'
			borderColor={config?.searchBoxColor}
		/>
	);
};

const SearchButton = ({ children }: { children: ReactNode }) => {
	return (
		<Center
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
}: CenterProps & { config: any; children: ReactNode }) => {
	const BTN_WIDTH = { base: '2rem', md: '2.8rem' };
	return (
		<Center
			w={BTN_WIDTH}
			h={BTN_WIDTH}
			borderRadius='full'
			backgroundColor={config?.headerFg}
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
}: CenterProps & { config: any; children: ReactNode }) => {
	return (
		<Center
			position='absolute'
			boxSize={'1.2rem'}
			top='-2px'
			right='-2px'
			fontSize='.775rem'
			color={config?.headerTagTextColor}
			bg={config?.headerTagColor}
			borderRadius='full'
			fontWeight='500'
			{...props}>
			{children}
		</Center>
	);
};

export default HeaderConfig;
