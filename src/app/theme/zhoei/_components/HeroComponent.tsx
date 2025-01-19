import React, { FC } from 'react';
import { HoverContentContainer } from '@/components/library';
import ZhoeiHero from './hero/ZhoeiHero';

type HeroDataProps = {
	content: any;
	dataModel: any;
	data: any;
};

const HeroData: FC<HeroDataProps> = ({ data, content, dataModel }) => {
	return (
		<HoverContentContainer
			title='Hero Section'
			data={content}
			section
			dataModel={dataModel}>
			<ZhoeiHero
				data={data}
				content={content}
			/>
		</HoverContentContainer>
	);
};

export default HeroData;
