import React, { FC } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { ViewContentContainer, Column, ColorInput } from '@/components/library';
import { HomeContentProps } from './';

const BannerConfig: FC<HomeContentProps> = ({ dataModel, content }) => {
	const { leftText, rightText, bgColor, fgColor, hide } = content?.banner;
	return (
		<ViewContentContainer
			title='Banner Information'
			data={content}
			dataModel={dataModel}>
			<Column gap={4}>
				<Column gap={2}>
					<Heading size='sm'>Show Banner</Heading>
					<Text>{!hide ? 'Showing' : 'Hidden'}</Text>
				</Column>
				<Column gap={2}>
					<Heading size='sm'>Left Text</Heading>
					<Text>{leftText}</Text>
				</Column>
				<Column gap={2}>
					<Heading size='sm'>Right Text</Heading>
					<Text>{rightText}</Text>
				</Column>

				<ColorInput
					value={bgColor}
					title='Background Color'
				/>
				<ColorInput
					value={fgColor}
					title='Foreground Color'
				/>
			</Column>
		</ViewContentContainer>
	);
};

export default BannerConfig;
