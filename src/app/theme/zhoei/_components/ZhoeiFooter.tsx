import React, { FC } from 'react';
import { HoverContentContainer } from '@/components/library';
import ZhoeiHero from './hero/ZhoeiHero';
import { Footer } from './footer';

type HeroDataProps = {
	content: any;
	dataModel: any;
	data: any;
};

const HeroData: FC<HeroDataProps> = ({ data, content, dataModel }) => {
	return (
		<HoverContentContainer
			title='Hero Section'
			type='basic'
			data={content}
			dataModel={dataModel}>
			<Footer data={data} />
		</HoverContentContainer>
	);
};

export default HeroData;
