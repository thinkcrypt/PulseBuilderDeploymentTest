import React, { FC } from 'react';
import { Box, Button, Grid, Heading, Image, Text } from '@chakra-ui/react';
import {
	ViewContentContainer,
	ImageView,
	HoverContentContainer,
	Column,
} from '@/components/library';
import { HomeContentProps } from '.';
import { SubHeading, Title } from './hero';

const AboutComponent: FC<HomeContentProps> = ({ dataModel, content, data }) => {
	const { title, subTitle, image } = content?.about;
	return (
		<HoverContentContainer
			bg={data?.basic?.bgColor}
			px={8}
			title='About Us'
			data={content}
			dataModel={dataModel}>
			{/* <ImageView
				src={image}
				direction='row'>
				<Heading size='md'>{title}</Heading>
				<Text
					whiteSpace='pre-line'
					size='md'>
					{subTitle}
				</Text>
			</ImageView> */}
			<Grid
				py={8}
				gap={16}
				w='full'
				alignItems='center'
				gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}>
				<Image
					alt='About Us'
					w='full'
					borderRadius={'xl'}
					h={{ base: '40vh', md: '70vh' }}
					objectFit='cover'
					src={image}
				/>
				<Column
					flex={1}
					justify='center'
					px={{ base: 4, md: 0 }}
					gap={{ base: 8, md: 8 }}
					textAlign={{ base: 'center', md: 'left' }}>
					<Title
						type='h3'
						color={data?.basic?.primaryTextColor}
						fontFamily={data?.basic?.primaryFont}>
						{title}
					</Title>
					<SubHeading
						color={data?.basic?.secondaryTextColor}
						fontFamily={data?.basic?.secondaryFont}
						fontSize='1.05rem'>
						{subTitle}
					</SubHeading>
					<Box>
						<Button
							fontFamily={data?.basic?.secondaryFont}
							bg={data?.basic?.brandColor}
							borderColor={data?.basic?.brandColor}
							color={data?.basic?.brandTextColor}
							borderWidth={1}>
							Shop Now
						</Button>
					</Box>
				</Column>
			</Grid>
		</HoverContentContainer>
	);
};

export default AboutComponent;
