import React, { FC } from 'react';
import { Box, Center, Grid, Heading, Text, Button } from '@chakra-ui/react';
import { ViewContentContainer, ImageView } from '@/components/library';
import { HomeContentProps } from '.';
import { useAppSelector } from '@/hooks';

const DiscoverComponent: FC<HomeContentProps> = ({ dataModel, content }) => {
	const { title, subTitle, items } = content?.discover;
	const { display } = useAppSelector(state => state.builder);
	return (
		<ViewContentContainer
			title='Discover'
			data={content}
			dataModel={dataModel}>
			<Center
				flexDir='column'
				textAlign='center'>
				<Text size={display == 'sm' ? 'sm' : 'md'}>{subTitle}</Text>
				<Heading size={display == 'sm' ? 'md' : 'lg'}>{title}</Heading>
			</Center>
			<Grid
				gridTemplateColumns={{ base: '1fr', md: display == 'sm' ? '1fr' : '1fr 1fr' }}
				gap={6}>
				<ImageView src={items[0]?.image}>
					<Box>
						<Button>{items[0]?.btnText}</Button>
					</Box>
				</ImageView>
				<ImageView src={items[1]?.image}>
					<Box>
						<Button>{items[1]?.btnText}</Button>
					</Box>
				</ImageView>
			</Grid>
		</ViewContentContainer>
	);
};

export default DiscoverComponent;
