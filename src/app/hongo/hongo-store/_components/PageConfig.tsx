import React, { FC } from 'react';
import { Flex, Heading, Text, Image } from '@chakra-ui/react';
import { ViewContentContainer, Column, ColorInput, HomeContentProps } from '@/components/library';

const PageConfig: FC<HomeContentProps & { title?: string; data: any }> = ({
	dataModel,
	content,
	path,
	title,
	data,
}) => {
	return (
		<ViewContentContainer
			path={path}
			title={title || 'Information'}
			data={content}
			dataModel={dataModel}>
			<Column gap={4}>
				<Column gap={2}>
					<Image
						src={data?.image}
						w='100%'
						h='300ox'
						objectFit='cover'
						bgPosition='center center'
					/>
				</Column>
				<ColorInput
					value={data?.textColor}
					title='Text Color'
				/>
				<Column gap={2}>
					<Heading size='sm'>Title</Heading>
					<Text>{data?.title}</Text>
				</Column>

				<Column gap={2}>
					<Heading size='sm'>Description</Heading>
					<div dangerouslySetInnerHTML={{ __html: data?.description || '' }} />
				</Column>
			</Column>
		</ViewContentContainer>
	);
};

export default PageConfig;
