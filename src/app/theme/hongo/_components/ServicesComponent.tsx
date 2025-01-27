import React, { FC } from 'react';
import { Grid, Heading, Text, Flex, Image } from '@chakra-ui/react';
import { HoverContentContainer, Column, HomeContentProps } from '@/components/library';
import { PADDING_X } from '.';
import { useAppSelector } from '@/hooks';

const ServicesComponent: FC<HomeContentProps> = ({ dataModel, content, path, data }) => {
	const serviceData = content?.services;
	const { basic } = data;
	const { display } = useAppSelector(state => state.builder);
	const px = display == 'sm' ? '16px' : PADDING_X;

	return (
		<HoverContentContainer
			title='Services Information'
			data={content}
			path={path}
			bg={basic?.bgColor}
			dataModel={dataModel}
			px={px}>
			<Grid
				py={12}
				templateColumns={{
					base: 'repeat(1, 1fr)',
					md: display == 'sm' ? '1fr' : 'repeat(2, 1fr)',
					lg: display == 'sm' ? '1fr' : 'repeat(4, 1fr)',
					xl: display == 'sm' ? '1fr' : 'repeat(4, 1fr)',
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
