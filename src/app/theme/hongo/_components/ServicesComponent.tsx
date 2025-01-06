import React, { FC } from 'react';
import { Grid, Heading, Text, Flex, Image } from '@chakra-ui/react';
import { HoverContentContainer, Column, HomeContentProps } from '@/components/library';
import { PADDING_X } from '.';

const ServicesComponent: FC<HomeContentProps> = ({ dataModel, content, path, data }) => {
	const serviceData = content?.services;
	const { basic } = data;
	return (
		<HoverContentContainer
			title='Services Information'
			data={content}
			path={path}
			bg={basic?.bgColor}
			dataModel={dataModel}
			px={PADDING_X}>
			<Grid
				py={12}
				templateColumns={{
					base: 'repeat(1, 1fr)',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(3, 1fr)',
					xl: 'repeat(4, 1fr)',
				}}
				gap={4}
				borderBottom='1px solid'
				borderBottomColor={basic?.borderColor}>
				{serviceData?.map(({ image, title, description }: any, i: number) => (
					<Flex
						key={i}
						gap={3}
						align='center'>
						<Image
							h='64px'
							w='64px'
							src={image}
							objectFit={'contain'}
						/>
						<Column gap={2}>
							<Heading
								color={basic?.primaryTextColor}
								fontFamily={basic?.primaryFont}
								_dark={{ color: basic?.primaryTextColor }}
								fontSize='1.15rem'>
								{title}
							</Heading>
							<Text
								fontSize='1rem'
								color={basic?.secondaryTextColor}
								_dark={{ color: basic?.secondary }}
								fontFamily={basic?.secondaryFont}>
								{description}
							</Text>
						</Column>
					</Flex>
				))}
			</Grid>
		</HoverContentContainer>
	);
};

export default ServicesComponent;
