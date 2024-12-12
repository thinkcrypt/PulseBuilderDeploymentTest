import React, { FC } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { ViewContentContainer, ImageView, Column, HomeContentProps } from '@/components/library';

type HeroDataProps = {
	content: any;
	dataModel: any;
};

const HeroData: FC<HomeContentProps> = ({ content, dataModel, path }) => {
	return (
		<ViewContentContainer
			title='Hero Section'
			data={content}
			path={path}
			dataModel={dataModel}>
			<ImageView src={content?.hero?.image}>
				<Heading size='md'>{content?.hero?.title}</Heading>
				<Text size='md'>{content?.hero?.subTitle}</Text>
				<Box>
					<Button>{content?.hero?.btnText}</Button>
				</Box>
			</ImageView>
			<Column gap={2}>
				<Heading size='sm'>Align</Heading>
				<Text>{content?.hero?.align}</Text>
			</Column>
		</ViewContentContainer>
	);
};

export default HeroData;
