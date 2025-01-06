'use client';
import React, { useState } from 'react';
import {
	Button,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	Spinner,
	Text,
} from '@chakra-ui/react';
import {
	Column,
	useGetByIdQuery,
	usePostMutation,
	useCustomToast,
	ConfigContainer,
	ConfigContainerBody,
	styles,
	Align,
	ConfigContainerFooter,
	useGetOneQuery,
} from '@/components/library';
import Link from 'next/link';
import { useGetSelfQuery } from '@/store/services/authApi';

const style = {
	addOn: {
		_light: { bg: 'background.light', borderColor: 'background.borderLight' },
	},
};

const REDIRECT_LIMT = '#';

const MyThemes = () => {
	const { data, isFetching } = useGetSelfQuery({});

	return (
		<ConfigContainer heading='Active Theme'>
			<ConfigContainerBody>
				<Column pb={6}>
					<Text>
						This is the theme currently live on your website. Customize it to match your brand or
						explore new options in the marketplace.
					</Text>
				</Column>
			</ConfigContainerBody>
			<ConfigContainerFooter justify='space-between'>
				<Link href={REDIRECT_LIMT}>
					<Text>Learn more about Theme Configuration</Text>
				</Link>
				<Button loadingText='Deploying'>Deploy</Button>
			</ConfigContainerFooter>
		</ConfigContainer>
	);
};

export default MyThemes;
