import React, { FC } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useGetAllQuery } from '@/components/library';
import { ProductCard } from '@/app/pulse/pulse-home/_components/FeatureProduct/Product';
import { RiDatabase2Line } from 'react-icons/ri';
import SponsoredBannerTwo from '../Sponsored-Banners/SponsoredBannerTwo';
import SponsoredBannerThree from '../Sponsored-Banners/SponsoredBannerThree';
import sponsoredBannerTwoData from '../Sponsored-Banners/sponsoredBannerTwoData';
import sponsoredBannerThreeData from '../Sponsored-Banners/sponsoredBannerThreeData';

// import { ProductCard } from '.';

type HongoCollectionDetailsProps = {
	id?: string;
	type?: 'collection' | 'category';
	config: any;
	dataModel?: any;
	css?: any;
	content?: any;
	basic?: any;
	path?: any;
	data?: any;
	limit?: number;
};

const PulseCollectionDetails: FC<HongoCollectionDetailsProps> = ({
	id,
	type,
	data:bannerData,
	config,
	css,
	limit = 10,
}) => {
	const { data, isError, isFetching } = useGetAllQuery({
		path: 'products',
		filters: {
			...(type == 'category' && { category_in: id }),
			...(type == 'collection' && { collection_in: id }),
			limit: limit || 10,
			sort: 'priority',
		},
	});
	// console.log('all?::::::', bannerData);
	const data1 = data?.doc.slice(0, 4);
	const data2 = data?.doc.slice(4,4);
	// console.log('all1?::::::', data1);
	// console.log('all2?::::::', data2);
	
	const renderContent = () => {
		if (isError) {
			return (
				<GridItem colSpan={{ base: 2, md: 4 }}>Error fetching data</GridItem>
			);
		}
		if (isFetching) {
			return <GridItem colSpan={{ base: 2, md: 4 }}>Fetching Data...</GridItem>;
		}

		if (data && data?.doc?.length === 0) {
			return (
				<GridItem colSpan={{ base: 2, md: 4 }}>No product to show</GridItem>
			);
		}

		return (
			<>
				{/* Render data1 */}
				{data1?.map((item: any, i: number) => (
					<ProductCard
						data={item}
						key={`data1-${i}`}
						basic={config}
						css={css}
					/>
				))}

				{/* Render SponsoredBannerTwo */}
				<GridItem colSpan={{ base: 2, md: 4 }}>
					<SponsoredBannerTwo
						data={bannerData?.content?.sponsoredBannerTwo}
						path='pulse'
						basic={data?.basic}
						content={data?.content}
						dataModel={sponsoredBannerTwoData}
					/>
				</GridItem>

				{/* Render data2 */}
				{data2?.map((item: any, i: number) => (
					<ProductCard
						data={item}
						key={`data2-${i}`}
						basic={config}
						css={css}
					/>
				))}

				{/* Render SponsoredBannerThree */}
				<GridItem colSpan={{ base: 2, md: 4 }}>
					<SponsoredBannerThree
						data={bannerData?.content?.sponsoredBannerThree}
						path='pulse'
						basic={data?.basic}
						content={data?.content}
						dataModel={sponsoredBannerThreeData}
					/>
				</GridItem>
			</>
		);
	};

	return (
		<Grid
			borderBottom='1px solid'
			borderBottomColor={config?.borderColor}
			gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: '1fr 1fr 1fr 1fr' }}
			py={4}
			gap={4}
		>
			{renderContent()}
		</Grid>
	);
};

export default PulseCollectionDetails;
