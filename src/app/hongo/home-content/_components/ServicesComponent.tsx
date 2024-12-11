import React, { FC } from 'react';
import { Box, Center, Grid, Heading, Text, Flex, Image } from '@chakra-ui/react';
import { ViewContentContainer, Column } from '@/components/library';
import { HomeContentProps } from '.';

const ServicesComponent: FC<HomeContentProps> = ({ dataModel, content }) => {
	const data = content?.services;
	return (
		<ViewContentContainer
			title='Services Information'
			data={content}
			dataModel={dataModel}>
			<Grid
				gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
				gap={6}>
				{data?.map(({ image, title, description }: any, i: number) => (
					<Flex
						key={i}
						gap={2}
						align='center'>
						<Image
							h='100px'
							w='100px'
							src={image}
							objectFit={'contain'}
						/>
						<Column gap={2}>
							<Heading size='md'>{title}</Heading>
							<Text>{description}</Text>
						</Column>
					</Flex>
				))}
			</Grid>
		</ViewContentContainer>
	);
};

export default ServicesComponent;
