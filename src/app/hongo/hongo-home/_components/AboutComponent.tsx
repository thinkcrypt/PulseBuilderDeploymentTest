import React, { FC } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { ViewContentContainer, ImageView, HomeContentProps } from '@/components/library';

const AboutComponent: FC<HomeContentProps> = ({ dataModel, content, path }) => {
	const { title, subTitle, image } = content?.about;
	return (
		<ViewContentContainer
			path={path}
			title='About Us'
			data={content}
			dataModel={dataModel}>
			<ImageView
				src={image}
				direction='row'>
				<Heading size='md'>{title}</Heading>
				<Text
					whiteSpace='pre-line'
					size='md'>
					{subTitle}
				</Text>
			</ImageView>
		</ViewContentContainer>
	);
};

export default AboutComponent;
