'use client';

import React from 'react';
import { Button, Image, Text, Grid, Flex, Link as ChakraLink } from '@chakra-ui/react';
import {
	Column,
	ConfigContainer,
	ConfigContainerBody,
	ConfigContainerFooter,
	styles,
	TextSection,
} from '@/components/library';
import Link from 'next/link';
import moment from 'moment';

const PLACEHOLDER_IMAGE =
	'https://images.pexels.com/photos/20046370/pexels-photo-20046370/free-photo-of-laptop-with-valentines-day-graphics.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const REDIRECT_LIMT = '#';

// Add this utility function
const formatDate = (date: string) => {
	return moment(date).format('D MMM YYYY');
};

const MyThemes = ({ theme }: { theme: any }) => {
	return (
		<ConfigContainer>
			<ConfigContainerBody>
				<Grid
					templateColumns='2fr 3fr'
					gap={6}>
					<Flex {...styles.BORDER}>
						<Image
							objectFit='cover'
							src={theme?.theme?.image || PLACEHOLDER_IMAGE}
							borderRadius={styles.BORDER.borderRadius}
							w='full'
							h='full'
						/>
					</Flex>

					<Column
						py={2}
						gap={4}>
						<TextSection title='Theme'>{theme?.theme?.name}</TextSection>
						{theme?.isDeployed ? (
							<ChakraLink
								href={`https://${theme?.deployment?.domain}`}
								isExternal>
								<TextSection title='Domain'>{theme?.deployment?.domain}</TextSection>
							</ChakraLink>
						) : (
							<TextSection title='Domain'>{'--'}</TextSection>
						)}

						<TextSection title='Status'>{theme?.isDeployed ? 'Ready' : 'Not Deployed'}</TextSection>
						<TextSection title='Date Activated'>{formatDate(theme?.activatedAt)}</TextSection>
						<Text>
							This is the theme currently live on your website. Customize it to match your brand or
							explore new options in the marketplace.
						</Text>
					</Column>
				</Grid>
			</ConfigContainerBody>
			<ConfigContainerFooter justify='space-between'>
				<Link href={REDIRECT_LIMT}>
					<Text>Learn more about Theme Configuration</Text>
				</Link>
				<Link href={`/theme/${theme?.theme?.slug}`}>
					<Button>Configure Theme</Button>
				</Link>
			</ConfigContainerFooter>
		</ConfigContainer>
	);
};

export default MyThemes;
