import React, { FC } from 'react';
import { Heading, Text, Image, Flex } from '@chakra-ui/react';
import { ViewContentContainer, Column } from '@/components/library';
import { HomeContentProps } from './';

const StoreConfig: FC<HomeContentProps> = ({ dataModel, content }) => {
	return (
		<ViewContentContainer
			path='basic'
			title='Store Information'
			data={content}
			dataModel={dataModel}>
			<Column gap={4}>
				<Image
					src={content?.logo}
					w='200px'
					h='auth'
				/>
				<Column gap={2}>
					<Heading size='sm'>Store Name</Heading>
					<Text>{content?.name}</Text>
				</Column>
				<Column gap={2}>
					<Heading size='sm'>Phone</Heading>
					<Text>{content?.phone}</Text>
				</Column>
				<Column gap={2}>
					<Heading size='sm'>Email</Heading>
					<Text>{content?.email}</Text>
				</Column>
				<Column gap={2}>
					<Heading size='sm'>Brand Color</Heading>
					<Flex
						h='44px'
						w='100px'
						borderRadius='8px'
						bg={content?.brandColor}
					/>
				</Column>
				<Column gap={2}>
					<Heading size='sm'>Brand Text Color</Heading>
					<Flex
						border='1px solid'
						h='44px'
						w='100px'
						borderRadius='8px'
						bg={content?.brandTextColor}
					/>
				</Column>
			</Column>
		</ViewContentContainer>
	);
};

export default StoreConfig;
