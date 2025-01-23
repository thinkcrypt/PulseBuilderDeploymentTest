'use client';

import React, { FC } from 'react';
import { Center, Flex, Grid, Image, Text, TextProps } from '@chakra-ui/react';
import { FlexChild, GridChild } from '@/builder';
import { Align, HoverContentContainer, Icon } from '@/components/library';
import { useAppSelector } from '@/hooks';

const ZhoeiHeaderComponent = ({ data, dataModel }: { data: any; dataModel: any }) => {
	const cartCount = () => {
		return 3;
	};
	const { display } = useAppSelector(state => state.builder);
	return (
		<HoverContentContainer
			title='Hero Section'
			type='basic'
			data={data?.basic}
			dataModel={dataModel}>
			<HeaderContainer
				data={data}
				h={{ base: '60px', md: display == 'lg' ? '80px' : '60px' }}>
				{display == 'lg' ? (
					<HeaderSection display={{ base: 'none', md: 'flex' }}>
						<HeaderText color={data?.basic?.headerFg}>Home</HeaderText>
						<HeaderText color={data?.basic?.headerFg}>Categories</HeaderText>
						<HeaderText color={data?.basic?.headerFg}>Shop</HeaderText>
					</HeaderSection>
				) : (
					<HeaderIcon
						color={data?.basic?.headerFg}
						name='menu'
						// href='#'
					/>
				)}
				{/* <HeaderSection display={{ base: 'flex', md: 'none' }}>
				<MenuDrawer />
			</HeaderSection> */}
				<Center>
					<Image
						w={{
							base: `${data?.basic?.logoWidthSm}px`,
							md:
								display == 'lg' ? `${data?.basic?.logoWidthLg}px` : `${data?.basic?.logoWidthSm}px`,
						}}
						h='auto'
						maxH='50px'
						objectFit='contain'
						src={data?.basic?.logo}
					/>
				</Center>

				<HeaderSection
					gap={{ base: 4, md: display == 'lg' ? 8 : 4 }}
					justify='flex-end'>
					{/* <SearchDrawer> */}
					<HeaderIcon
						color={data?.basic?.headerFg}
						name='search'
						// href='#'
					/>
					{/* </SearchDrawer> */}

					<Flex>
						<HeaderIcon
							name='z-cart'
							color={data?.basic?.headerFg}
						/>
						<Center
							ml={-2}
							color={data?.basic?.brandTextColor}
							borderRadius='full'
							bg={data?.basic?.brandColor}
							h={4}
							fontSize='12px'
							w={4}>
							{cartCount()}
						</Center>
					</Flex>

					{/* <HeaderMenu> */}
					<HeaderIcon
						name='z-grid'
						color={data?.basic?.headerFg}
					/>
					{/* </HeaderMenu> */}
				</HeaderSection>
			</HeaderContainer>
		</HoverContentContainer>
	);
};

const padding = {
	LAYOUT_X: 4,
};

const HeaderSection: FC<FlexChild> = ({ children, ...props }) => {
	return (
		<Align
			w='100%'
			gap={6}
			{...props}>
			{children}
		</Align>
	);
};

const HeaderContainer: FC<GridChild & { data: any }> = ({ children, data, ...props }) => {
	return (
		<Grid
			bg={data?.basic?.headerBg}
			position='sticky'
			left={0}
			top={0}
			px={padding.LAYOUT_X}
			alignItems='center'
			w='100%'
			gridTemplateColumns='1fr 1fr 1fr'
			borderBottom='1px solid'
			borderBottomColor={data?.basic?.headerBorder}
			h={{ base: '60px', md: '80px' }}
			{...props}>
			{children}
		</Grid>
	);
};

const HeaderText: FC<TextProps & { children: string; href?: string }> = ({
	children,
	...props
}) => {
	return (
		<Text
			fontSize='.9rem'
			fontWeight='500'
			{...props}>
			{children}
		</Text>
	);
};

const HeaderIcon = ({ name, color, ...props }: { name: any; href?: string; color: string }) => {
	return (
		// <Link href={href}>
		<Icon
			name={name}
			size={22}
			color={color}
			{...props}
		/>
		// </Link>
	);
};

export default ZhoeiHeaderComponent;
