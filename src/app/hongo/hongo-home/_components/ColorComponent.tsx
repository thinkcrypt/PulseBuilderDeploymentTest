import React, { FC } from 'react';
import { Grid, Heading, Text, Flex, Image } from '@chakra-ui/react';
import { HoverContentContainer, Column, HomeContentProps, ColorInput } from '@/components/library';
import { PADDING_X } from '.';

const ColorComponent: FC<HomeContentProps> = ({ dataModel, content, path, data }) => {
	const serviceData = content?.services;
	const { basic } = data;
	return (
		<HoverContentContainer
			title='Services Information'
			data={content}
			path={path}
			bg={basic?.bgColor}
			dataModel={dataModel}
			px={PADDING_X}>
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
		</HoverContentContainer>
	);
};

export default ColorComponent;
