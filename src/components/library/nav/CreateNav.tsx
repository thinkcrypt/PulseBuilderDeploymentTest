'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Button, Center, CloseButton, Divider, Flex, Heading } from '@chakra-ui/react';
import { Navbar, THEME } from '../index';

type CreateNavProps = {
	title: string;
	path: string;
	isLoading: boolean;
};

const CreateNav: React.FC<CreateNavProps> = ({ title, path, isLoading }) => {
	const router = useRouter();
	const handleBackClick = () => {
		router.replace(`/${path}`);
	};
	return (
		<Navbar
			bg={THEME == 'basic' ? 'navbar.400' : 'navbar.light'}
			px={6}
			justify='space-between'>
			<Flex
				gap={3}
				align='center'
				flex={1}>
				<CloseButton
					colorScheme='brand'
					color='white'
					onClick={handleBackClick}
				/>
				<Divider
					h={6}
					orientation='vertical'
				/>
				<Heading
					color='white'
					size='xs'>
					{title}
				</Heading>
			</Flex>
			<Center
				flex={1}
				justifyContent='flex-end'
				gap={2}>
				<Button
					onClick={handleBackClick}
					size='sm'
					isLoading={isLoading}
					colorScheme='gray'>
					Discard
				</Button>
				<Button
					type='submit'
					size='sm'
					isLoading={isLoading}>
					Save
				</Button>
			</Center>
		</Navbar>
	);
};

export default CreateNav;
