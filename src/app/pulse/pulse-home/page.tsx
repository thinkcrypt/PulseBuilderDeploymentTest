"use client";
import {
  EditorLayoutSuspense,
  useAppDispatch,
  resetBuilder,
  push,
} from "@/components/library";
import { useGetContentQuery } from "@/components/library/store/services/contentApi";
import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";

//////////////////////////// chakra
// import { padding } from '@/lib/config/constants';
// import { BoxProps, Center, CenterProps, Flex } from '@chakra-ui/react';
// import { LogoImage, SearchBox } from './sections/index';
// // import { useGetStoreQuery } from '@/store/services/storeApi';
// import { placeholderImage } from '@/lib/config/constants';
// import { Icon, IconNameOptions } from '../icon';

import PulseHeader from "./_components/Header/PulseHeader";
import pulseHeaderData from "./_components/Header/pulseHeaderData";
import { pulseBannerData, PulseHero } from "./_components/Banner";
import pulseHeroData from "./_components/Banner/pulseHeroData";
import FeaturedCategories from "./_components/featured-categories/FeaturedCategories";
import featuredCategoriesData from "./_components/featured-categories/featuredCategoriesData";
import ServiceContent from "./_components/services/ServiceContent";
import serviceData from "./_components/services/serviceData";
import Banner from "./_components/Banner/Banner";
import SponsoredBannerOne from "./_components/Sponsored-Banners/SponsoredBannerOne";
import sponsoredBannerOneData from "./_components/Sponsored-Banners/sponsoredBannerOneData";
import SponsoredBannerTwo from "./_components/Sponsored-Banners/SponsoredBannerTwo";
import sponsoredBannerTwoData from "./_components/Sponsored-Banners/sponsoredBannerTwoData";
import SponsoredBannerThree from "./_components/Sponsored-Banners/SponsoredBannerThree";
import sponsoredBannerThreeData from "./_components/Sponsored-Banners/sponsoredBannerThreeData";

// import {
// 	heroData,
// 	discoverData,
// 	HeroComponent,
// 	ServicesComponent,
// 	ProductListComponent,
// 	listData,
// 	CategoryComponent,
// 	collectionsData,
// 	BannerConfig,
// 	bannerData,
// 	HeaderConfig,
// 	headerData,
// 	fontData,
// 	colorData,
// 	FooterConfig,
// 	footerData,
// 	storeData,
// } from './_components';

const sidebarData = [
  {
    startOfSection: true,
    sectionTitle: "Pages (HONGO)",
    title: "Home Page",
    href: "/home-content",
    icon: "content",
    path: "home-content",
    type: "page",
  },
  {
    title: "Store Settings",
    href: "/hongo/hongo-store",
    icon: "shop",
    path: "hongo/hongo-store",
    type: "page",
  },
  // {
  // 	startOfSection: true,
  // 	sectionTitle: 'Components (HONGO)',
  // 	title: 'Store',
  // 	icon: 'content',
  // 	dataPath: 'basic',
  // 	type: 'component',
  // 	path: 'hongo',
  // 	dataModel: storeData,
  // },
  // {
  // 	title: 'Header',
  // 	icon: 'content',
  // 	dataPath: 'content',
  // 	type: 'component',
  // 	path: 'hongo',
  // 	dataModel: headerData,
  // },
  // {
  // 	title: 'Fonts',
  // 	icon: 'shop',
  // 	type: 'component',
  // 	path: 'hongo',
  // 	dataPath: 'basic',
  // 	dataModel: fontData,
  // },
  // {
  // 	title: 'Colors',
  // 	icon: 'shop',
  // 	type: 'component',
  // 	path: 'hongo',
  // 	dataPath: 'basic',
  // 	dataModel: colorData,
  // },
];

const HomeContentPage = () => {
  const { data, isLoading, isSuccess, isFetching } = useGetContentQuery({
    path: "pulse",
  });

  console.log("pulse data:::", data);
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

  return (
    <EditorLayoutSuspense
      data={data}
      sidebarData={sidebarData}
      isLoading={isLoading || !data}
      path="/home-content"
      title="Home Content"
      position="relative"
      gap={0}
    >
      <Banner
        data={data}
        path="pulse"
        content={data?.content}
        basic={data?.basic}
        dataModel={pulseBannerData}
      />
      <PulseHeader
        data={data}
        path="pulse"
        content={data?.content}
        dataModel={pulseHeaderData}
      />
      <PulseHero
        data={data}
        path="pulse"
        basic={data?.basic}
        content={data?.content}
        dataModel={pulseHeroData}
      />

      <ServiceContent
        data={data}
        path="pulse"
        basic={data?.basic}
        content={data?.content}
        dataModel={serviceData}
      />

      <FeaturedCategories
        data={data}
        path="pulse"
        basic={data?.basic}
        content={data?.content}
        dataModel={featuredCategoriesData}
      />

      <SponsoredBannerOne
        data={data}
        path="pulse"
        basic={data?.basic}
        content={data?.content}
        dataModel={sponsoredBannerOneData}
      />
      <SponsoredBannerTwo
        data={data}
        path="pulse"
        basic={data?.basic}
        content={data?.content}
        dataModel={sponsoredBannerTwoData}
      />
      <SponsoredBannerThree
        data={data}
        path="pulse"
        basic={data?.basic}
        content={data?.content}
        dataModel={sponsoredBannerThreeData}
      />

      {/* <FooterConfig
				data={data}
				path='hongo'
				content={data?.content}
				dataModel={footerData}
			/>  */}
    </EditorLayoutSuspense>
  );
};

export default HomeContentPage;
