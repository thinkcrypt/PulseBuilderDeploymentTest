import React, { FC } from 'react';
import { Heading, Text, Image, Grid } from '@chakra-ui/react';
import { ViewContentContainer, Column, ColorInput, HomeContentProps } from '@/components/library';

const StoreConfig: FC<HomeContentProps> = ({ dataModel, content, path }) => {
	return (
		<ViewContentContainer
			path={path}
			type='basic'
			title='Store Information'
			data={content}
			dataModel={dataModel}>
			<Column gap={4}>
				<Image
					src={content?.logo}
					w='140px'
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
					<Heading size='sm'>Primary Font</Heading>
					<Text>{content?.primaryFont}</Text>
				</Column>

				<Column gap={2}>
					<Heading size='sm'>Secondary Font</Heading>
					<Text>{content?.secondaryFont}</Text>
				</Column>

				<Grid
					gridTemplateColumns={{ base: '1fr 1fr', md: 'repeat(3, 1fr)' }}
					gap={4}>
					<ColorInput
						value={content?.brandColor}
						title='Brand Color'
					/>

					<ColorInput
						value={content?.brandTextColor}
						title='Brand Text Color'
					/>

					<ColorInput
						value={content?.borderColor}
						title='Border Color'
					/>

					<ColorInput
						value={content?.btnColor}
						title='Button Color'
					/>

					<ColorInput
						value={content?.btnTextColor}
						title='Button Text Color'
					/>

					<ColorInput
						value={content?.bgColor}
						title='Background Color'
					/>

					<ColorInput
						value={content?.primaryTextColor}
						title='Primary Text Color'
					/>
					<ColorInput
						value={content?.secondaryTextColor}
						title='Secondary Text Color'
					/>
					<ColorInput
						value={content?.headerBg}
						title='Header Background Color'
					/>
					<ColorInput
						value={content?.headerFg}
						title='Header Foreground Color'
					/>
					<ColorInput
						value={content?.headerBorder}
						title='Header Border Color'
					/>
					<ColorInput
						value={content?.footerBg}
						title='Footer Background Color'
					/>
					<ColorInput
						value={content?.footerFg}
						title='Footer Foreground Color'
					/>
				</Grid>
			</Column>
		</ViewContentContainer>
	);
};

export default StoreConfig;
