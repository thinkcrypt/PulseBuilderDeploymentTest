import React, { FC, ReactNode } from 'react';
import { Button, Flex, FlexProps, Heading, Text } from '@chakra-ui/react';
import { BgImage } from '@/builder';
import Link from 'next/link';
import { Column, FlexChild } from '@/components/library';

type HeroProps = {
	content: any;
	data: any;
};

const FS_BASE = {
	h1: '2.5rem',
	h2: '2rem',
	h3: '1.75rem',
	h4: '1.5rem',
	h5: '1.25rem',
	h6: '1rem',
};
const FS_MD = {
	h1: '4.5rem',
	h2: '4rem',
	h3: '3rem',
	h4: '2.5rem',
	h5: '2rem',
	h6: '1.5rem',
};

const ZhoeiHero: FC<HeroProps> = ({ content, data }) => {
	return (
		<BgImage
			h='1000px'
			py='92px'
			borderRadius={content?.hero?.padding == 'apply' ? '2xl' : 'none'}
			src={content?.hero?.image}
			justify={content?.hero?.align == 'center' ? 'center' : 'flex-start'}>
			<Overlay>
				<ContentBox {...(content?.hero?.align == 'center' && { mx: 'auto' })}>
					<Heading
						fontFamily={data?.basic?.primaryFont}
						fontSize={{
							base: FS_BASE['h1'],
							md: FS_MD['h1'],
						}}
						textAlign={content?.hero?.align}
						color={content?.hero?.titleColor}
						lineHeight={1.2}>
						{content?.hero?.title}
					</Heading>

					<Text
						whiteSpace='pre-line'
						fontFamily={data?.basic?.secondaryFont}
						fontSize={{ base: '1.2rem', md: '1.3rem' }}
						textAlign={content?.hero?.align}
						color={content?.hero?.subTitleColor}>
						{content?.hero?.subTitle}
					</Text>
					<Link href='/explore'>
						<Flex
							w='full'
							{...(content?.hero?.align == 'center' && { justify: 'center' })}>
							<Button
								fontFamily={data?.basic?.secondaryFont}
								bg={data?.basic?.brandColor}
								borderColor={data?.basic?.brandColor}
								color={data?.basic?.brandTextColor}
								borderWidth={1}
								size='lg'
								_hover={{
									bg: data?.basic?.brandTextColor,
									color: data?.basic?.brandColor,
								}}>
								{content?.hero?.btnText || 'Shop Now'}
							</Button>
						</Flex>
					</Link>
				</ContentBox>
			</Overlay>
		</BgImage>
	);
};

const ContentBox = ({ children, ...props }: FlexProps & { children: ReactNode }) => (
	<Column
		justify='center'
		gap={6}
		px={{ base: '16px', md: '64px' }}
		w={{ base: 'full', md: '80%' }}
		{...props}>
		{children}
	</Column>
);

const Overlay: FC<FlexChild> = ({ children }) => (
	<Flex
		flex={1}
		w='full'
		borderRadius='inherit'
		bg='rgba(0,0,0,.1)'>
		{children}
	</Flex>
);

export default ZhoeiHero;
