'use client';
import React from 'react';

import { Column, HeadingSection, Layout, StaticPage, useGetAllQuery } from '@/components/library';
import { Heading, Text } from '@chakra-ui/react';
import { ActiveTheme, MyThemes, NoActiveTheme } from './_components';

const section = {
	title: 'Storefront Settings',
	description: `Welcome to the Storefront Settings! Here, you can customize the look and feel of your store. Choose the colors, fonts, and layout that best represent your brand.`,
};

const ThemePage = () => {
	return (
		<Layout
			title='Storefront Settings'
			path='storefront'>
			<StaticPage>
				<Column gap={4}>
					<Heading size='md'>{section?.title}</Heading>
					<Text>{section?.description}</Text>
				</Column>
				<HeadingSection title='Active Themes'>
					This is the theme currently active on your website. You can configure it, make updates, or
					deploy it for a live preview to see how it looks in real time.
				</HeadingSection>
				<Column gap={6}>
					<ActiveThemeDisplay />
				</Column>
			</StaticPage>
		</Layout>
	);
};

const ActiveThemeDisplay = () => {
	const { data, isFetching, isError } = useGetAllQuery({ path: 'active-theme' });
	if (isFetching) return null;
	if (isError) return <NoActiveTheme />;
	if (data) return <ActiveTheme theme={data} />;
	return null;
};

export default ThemePage;
