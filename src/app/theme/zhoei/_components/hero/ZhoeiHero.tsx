import React, { FC, ReactNode } from 'react';
import { Button, Flex, FlexProps, Heading, Text } from '@chakra-ui/react';
import { BgImage } from '@/builder';
import Link from 'next/link';
import { Column, FlexChild, HoverContentContainer } from '@/components/library';
import { generateButtonSchema, generateTextModel } from '@/components/library/builder';
import { useAppSelector } from '@/hooks';

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

const headingModel = [
	{
		sectionTitle: 'Heading Content',
		name: `hero.headingContent`,
		label: 'Content',
		isRequired: true,
		type: 'text',
	},
	...generateTextModel('hero.headingCss', 'Heading Style'),
];

const subHeadingModel = [
	{
		sectionTitle: 'Sub-Heading Content',
		name: `hero.subHeadingContent`,
		label: 'Content',
		isRequired: true,
		type: 'text',
	},
	...generateTextModel('hero.subHeadingCss', 'Sub-Heading Style'),
];

const ZhoeiHero: FC<HeroProps> = ({ content, data }) => {
	const { display } = useAppSelector(state => state.builder);

	return (
		<BgImage
			h='1000px'
			py='92px'
			borderRadius={content?.hero?.padding == 'apply' ? '2xl' : 'none'}
			src={content?.hero?.image}
			justify={content?.hero?.align == 'center' ? 'center' : 'flex-start'}>
			{/* <Overlay> */}
			<ContentBox
				h='full'
				{...(content?.hero?.align == 'center' && { mx: 'auto' })}
				px={{
					base: '16px',
					md: display == 'lg' ? '64px' : '16px',
				}}>
				<HoverContentContainer
					title='Heading'
					component
					dataModel={headingModel}
					data={content}>
					<Heading
						{...content?.hero?.headingCss}
						fontSize={{
							base: content?.hero?.headingCss.fontSize.base || FS_BASE['h1'],
							md:
								display == 'sm'
									? content?.hero?.headingCss.fontSize.base
									: content?.hero?.headingCss.fontSize.md || FS_MD['h1'],
						}}
						textAlign={content?.hero?.align}>
						{content?.hero?.headingContent || 'Enter your title here'}
					</Heading>
				</HoverContentContainer>
				<HoverContentContainer
					title='Sub Heading'
					component
					dataModel={subHeadingModel}
					data={content}>
					<Text
						{...content?.hero?.subHeadingCss}
						fontSize={{
							base: content?.hero?.subHeadingCss?.fontSize?.base,
							md:
								display == 'sm'
									? content?.hero?.subHeadingCss?.fontSize?.base
									: content?.hero?.subHeadingCss?.fontSize.md,
						}}
						textAlign={content?.hero?.align}>
						{content?.hero?.subHeadingContent || 'Enter Subheading Here'}
					</Text>
				</HoverContentContainer>
				<HoverContentContainer
					title='CTA Button'
					component
					dataModel={generateButtonSchema('hero.button', 'CTA Button')}
					data={content}>
					<Flex
						w='full'
						{...(content?.hero?.align == 'center' && { justify: 'center' })}>
						<Button {...content?.hero?.button} />
					</Flex>
				</HoverContentContainer>
			</ContentBox>

			{/* </Overlay> */}
		</BgImage>
	);
};

const ContentBox = ({ children, ...props }: FlexProps & { children: ReactNode }) => (
	<Column
		justify='center'
		gap={6}
		w={{ base: 'full', md: '80%' }}
		{...props}>
		{children}
	</Column>
);

const Overlay: FC<FlexChild> = ({ children }) => (
	<Flex
		flex={1}
		w='full'
		h='full'
		borderRadius='inherit'
		bg='rgba(0,0,0,.1)'>
		{children}
	</Flex>
);

export default ZhoeiHero;
