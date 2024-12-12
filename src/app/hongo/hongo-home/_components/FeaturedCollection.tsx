import React, { FC } from 'react';
import { Center, Grid, Heading, Text } from '@chakra-ui/react';
import { ViewContentContainer, ImageView, HomeContentProps } from '@/components/library';

type ItemProps = {
	image: string;
	title: string;
	subTitle?: string;
};

const FeaturedCollection: FC<HomeContentProps> = ({ dataModel, content, path }) => {
	const data = content.featuredCollection;
	return (
		<ViewContentContainer
			title='Featured Collection'
			data={content}
			path={path}
			dataModel={dataModel}>
			{!data || (data?.length == 0 && <Center>No Content Added Yet</Center>)}
			<Grid
				gridTemplateColumns='1fr 1fr 1fr'
				gap={4}>
				{data?.map((item: ItemProps, i: number) => (
					<ImageView
						key={i}
						src={item?.image}
						direction='column'>
						<Heading size='md'>{item?.title}</Heading>
						<Text
							whiteSpace='pre-line'
							size='md'>
							{item?.subTitle}
						</Text>
					</ImageView>
				))}
			</Grid>
		</ViewContentContainer>
	);
};

export default FeaturedCollection;
