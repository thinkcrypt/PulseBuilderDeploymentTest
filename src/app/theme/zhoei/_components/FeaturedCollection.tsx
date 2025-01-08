import React, { FC } from 'react';
import { Center, Flex, Grid, Heading, Spacer, Text } from '@chakra-ui/react';
import { HoverContentContainer, Column } from '@/components/library';
import { HomeContentProps } from '.';
import { BgImage } from '@/builder';
import { SubHeading, Title } from './hero';
import { IconButton } from '@/commerce-components';

type ItemProps = {
	image: string;
	title: string;
	subTitle?: string;
};

const FeaturedCollection: FC<HomeContentProps> = ({ dataModel, content, data: asData }) => {
	const data = content.featuredCollection;
	return (
		<HoverContentContainer
			title='Featured Collection'
			data={content}
			bg={asData?.basic?.bgColor}
			p={8}
			dataModel={dataModel}>
			{!data || (data?.length == 0 && <Center>No Content Added Yet</Center>)}
			<Grid
				gridTemplateColumns='1fr 1fr 1fr'
				gap={4}>
				{data?.map((item: ItemProps, i: number) => (
					<BgImage
						key={i}
						src={item?.image}
						h='520px'
						w='full'
						p='32px'
						// justify='center'
						borderRadius='xl'>
						<Column
							gap={8}
							w='full'>
							<Column gap={4}>
								<Title
									type='h5'
									fontFamily={asData?.basic?.primaryFont}
									color={asData?.basic?.brandTextColor}>
									{item?.title}
								</Title>
								<SubHeading
									color={asData?.basic?.secondaryTextColor}
									fontFamily={asData?.basic?.brandTextColor}>
									{item?.subTitle}
								</SubHeading>
							</Column>
							<Spacer />
							<Flex justify='flex-end'>
								<IconButton
									aria-label='Arrow Button'
									w='58px'
									h='58px'
									color='black'
									borderRadius='full'
									bg={asData?.basic?.brandTextColor}
									borderColor={asData?.basic?.brandColor}
									borderWidth={1}
									iconSize={24}
									iconName='arrow-right'
								/>
							</Flex>
						</Column>
					</BgImage>
				))}
			</Grid>
		</HoverContentContainer>
	);
};

export default FeaturedCollection;
