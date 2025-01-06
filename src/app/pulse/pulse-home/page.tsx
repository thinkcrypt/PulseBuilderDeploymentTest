"use client";
import {
  EditorLayoutSuspense,
  useAppDispatch,
  resetBuilder,
  push,
} from "@/components/library";
import { useGetContentQuery } from "@/components/library/store/services/contentApi";
import React, { useEffect } from "react";
import { pulseBannerData, PulseHero } from "./_components/Banner";
import pulseHeroData from "./_components/Banner/pulseHeroData";
import ServiceContent from "./_components/services/ServiceContent";
import serviceData from "./_components/services/serviceData";
import Banner from "./_components/Banner/Banner";
import SponsoredBannerTwo from "./_components/Sponsored-Banners/SponsoredBannerTwo";
import sponsoredBannerTwoData from "./_components/Sponsored-Banners/sponsoredBannerTwoData";
import SponsoredBannerThree from "./_components/Sponsored-Banners/SponsoredBannerThree";
import sponsoredBannerThreeData from "./_components/Sponsored-Banners/sponsoredBannerThreeData";
import PulseHeader from "./_components/Header/PulseHeader";
import pulseHeaderData from "./_components/Header/pulseHeaderData";
import basicDataSchema from "./_components/Basic/basicData";
import PulseProductListComponent from "./_components/PulseProductList/PulseProduct";
import PulseFooter from "./_components/footer/Footer";
import pulseFooterSchema from "./_components/footer/components/pulseFooterSchema";
import { FeaturedCategory } from "./_components/featured-category";
import { Box } from "@chakra-ui/react";
import PulseNavbar from "./_components/nav-bar/Navbar";
import navSchema from "./_components/nav-bar/components/navSchema";
import productListSchema from "./_components/PulseProductList/productListSchema";
import SimpleNavBar from "./_components/nav-bar/SimpleNavBar";
import ProductListTwo from "./_components/PulseProductList/ProductListTwo";
import ProductListThree from "./_components/PulseProductList/ProductListThree";
import { featuredCategoriesData } from "./_components/FeatureProduct/Product";

const sidebarData = [
  {
    startOfSection: true,
    sectionTitle: "Pages (PULSE)",
    title: "Home Page",
    href: "/pulse/pulse-home",
    icon: "content",
    path: "pulse/pulse-home",
    type: "page",
  },
  {
    title: "Product Details",
    href: "/pulse/product-details",
    icon: "content",
    path: "product-details",
    type: "page",
  },
  {
    startOfSection: true,
    sectionTitle: "Basic",
    title: "Basic",
    icon: "content",
    dataPath: "basic",
    type: "component",
    path: "pulse",
    // dataModel: storeData,
    dataModel: basicDataSchema,
  },
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
        basic={data?.basic}
        path="pulse"
        content={data?.content}
        dataModel={pulseHeaderData}
      />
      <SimpleNavBar
        data={data}
        basic={data?.basic}
        path="pulse"
        content={data?.content}
        dataModel={navSchema}
      />
      <Box bg={data?.basic?.bgColor}>
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

        <FeaturedCategory
          data={data}
          path="pulse"
          basic={data?.basic}
          content={data?.content}
          dataModel={featuredCategoriesData}
        />

        <PulseProductListComponent
          data={data}
          path="pulse"
          basic={data?.basic}
          content={data?.content}
          dataModel={productListSchema}
        />

        <SponsoredBannerTwo
          data={data}
          path="pulse"
          basic={data?.basic}
          content={data?.content}
          dataModel={sponsoredBannerTwoData}
        />
        <ProductListTwo
          data={data}
          path="pulse"
          basic={data?.basic}
          content={data?.content}
          dataModel={productListSchema}
        />

        <SponsoredBannerThree
          data={data}
          path="pulse"
          basic={data?.basic}
          content={data?.content}
          dataModel={sponsoredBannerThreeData}
        />
        <ProductListThree
          data={data}
          path="pulse"
          basic={data?.basic}
          content={data?.content}
          dataModel={productListSchema}
        />
      </Box>
      <PulseFooter
        data={data}
        path="pulse"
        basic={data?.basic}
        content={data?.content}
        dataModel={pulseFooterSchema}
      />
      {/* <FooterConfig
				data={data}
				path='hongo'
				content={data?.content}
				dataModel={footerData}
			/> */}
    </EditorLayoutSuspense>
  );
};

export default HomeContentPage;
