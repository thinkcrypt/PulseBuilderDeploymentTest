'use client';
import React, { useState } from 'react';
import { Heading, Text, Link as ChakraLink } from '@chakra-ui/react';
import {
	Column,
	useGetByIdQuery,
	usePostMutation,
	useCustomToast,
	ConfigContainer,
	ConfigContainerBody,
	ConfigContainerFooter,
	useGetOneQuery,
} from '@/components/library';
import Link from 'next/link';

const style = {
	addOn: {
		_light: { bg: 'background.light', borderColor: 'background.borderLight' },
	},
};

const REDIRECT_LIMT = '#';

const ExistingSubDomain = () => {
	const { data, isFetching, isError, error, isSuccess }: any = useGetOneQuery({
		path: 'deployments',
	});

	if (!data && isError) return null;

	return (
		<ConfigContainer heading='Your Project is Now Live'>
			<ConfigContainerBody>
				<Column pb={6}>
					<Text>
						Congratulations! Your project has been successfully deployed and is now live on the
						following subdomain:
					</Text>
					<ChakraLink
						isExternal
						href={`https://${data?.domain}`}>
						<Text as='li'>
							<strong>https://{data?.domain}</strong>
						</Text>
					</ChakraLink>
				</Column>
				<Column pb={6}>
					<Heading size='sm'>What’s Next?</Heading>
					<Text as='li'>
						Share your live project link with customers to boost your online presence.
					</Text>
					<Text as='li'>
						Start customizing your website further or explore {`MINT’s`} advanced features, like
						eCommerce customization and analytics.
					</Text>
				</Column>
			</ConfigContainerBody>
			<ConfigContainerFooter justify='space-between'>
				<Link href={REDIRECT_LIMT}>
					<Text>Learn more about managing your project</Text>
				</Link>
			</ConfigContainerFooter>
		</ConfigContainer>
	);
};

export default ExistingSubDomain;
