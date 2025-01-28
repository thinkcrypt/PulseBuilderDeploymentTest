'use client';

// import PageLayout from '@/components/library/components/pageLayout/PageLayout';
// import SmallBanner from '@/components/library/components/smallBanner/SamllBanner';
// import useColors from '@/components/library/hooks/useColors';
// import { useGetStoreQuery } from '@/components/library/store/services/storeApi';
// import NormalText from '@/components/text/NormalText';
import Content from './_components/Content';
// import Quote from '@/components/library/components/quote/Quote';
import {
	EditorLayoutSuspense,
	HoverContentContainer,
	push,
	resetBuilder,
	useAppDispatch,
} from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { useEffect } from 'react';
// import { PADDING_X } from '@/components/library/config/lib/constants/constants';
import aboutPageSchema from './_components/aboutDataSchema';
import { homeSidebarData } from '../_components/sidebarData/sidebarData';
import { Box } from '@chakra-ui/react';
import PageLayout from '../_core-components/components/pageLayout/PageLayout';
import SmallBanner from '../_core-components/components/smallBanner/SamllBanner';
import { PADDING_X } from '../_core-components/config/lib/constants/constants';

export default function About() {
	const { data, isLoading, isSuccess, isFetching } = useGetContentQuery({
		path: 'pulse',
	});

	console.log('pulse data:::', data);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(resetBuilder());
	}, []);

	useEffect(() => {
		if (data && !isFetching && isSuccess) {
			dispatch(
				push({
					basic: data?.basic,
					content: data?.content,
				})
			);
		}
	}, [isFetching]);
	const sections = [
		{
			label: data?.content?.aboutPage?.communityLabel,
			paraOne: data?.content?.aboutPage?.communityParagraphOne,
		},
		{
			label: data?.content?.aboutPage?.customerCentricLabel,
			paraOne: data?.content?.aboutPage?.customerCentricParagraphOne,
		},
		{
			label: data?.content?.aboutPage?.missionLabel,
			paraOne: data?.content?.aboutPage?.missionParagraphOne,
			paraTwo: data?.content?.aboutPage?.missionParagraphTwo,
		},
		{
			label: data?.content?.aboutPage?.productRangeLabel,
			paraOne: data?.content?.aboutPage?.productRangeParagraphOne,
			paraTwo: data?.content?.aboutPage?.productRangeParagraphTwo,
		},
		{
			label: data?.content?.aboutPage?.reliableDeliveryLabel,
			paraOne: data?.content?.aboutPage?.reliableDeliveryParagraphOne,
		},
		{
			label: data?.content?.aboutPage?.seamlessShoppingLabel,
			paraOne: data?.content?.aboutPage?.seamlessShoppingParagraphOne,
		},
		{
			label: data?.content?.aboutPage?.sustainablePracticeLabel,
			paraOne: data?.content?.aboutPage?.sustainablePracticeParagraphOne,
		},
		{
			label: data?.content?.aboutPage?.trustedQualityLabel,
			paraOne: data?.content?.aboutPage?.trustedQualityParagraphOne,
		},
	];
	const css = data?.content?.aboutPageCss;
	console.log(css);
	return (
		<EditorLayoutSuspense
			data={data}
			sidebarData={homeSidebarData}
			isLoading={isLoading || !data}
			path='/home-content'
			title='Home Content'
			position='relative'
			gap={0}>
			<PageLayout>
				<HoverContentContainer
					type='content'
					path={'pulse'}
					title='About'
					data={data?.content}
					dataModel={aboutPageSchema}
					position='sticky'
					top='0'>
					{/* Slider */}
					<SmallBanner
						basic={data?.basic}
						bannerData={data?.content?.aboutPage}
					/>
					{/* Slider Bottom */}

					{/* <NormalText
						basic={data?.basic}
						fontWeight='600'
						fontSize='3rem'
						mb='2rem'
					>
						{data.bannerText}
					</NormalText> */}

					<Box
						px={PADDING_X}
						pt='1rem'
						bg={css?.bgColor}>
						{sections.map((section, index) => (
							<Content
								key={index}
								label={section.label}
								paraOne={section.paraOne}
								paraTwo={section.paraTwo}
								css={css?.fgColor}
							/>
						))}
					</Box>

					{/* <Quote basic={data?.basic}>{data?.content?.aboutPage}</Quote> */}
				</HoverContentContainer>
			</PageLayout>
		</EditorLayoutSuspense>
	);
}
