'use client';
import React from 'react';
import { Button, Center, CloseButton, Divider, Flex, Heading } from '@chakra-ui/react';
import Navbar from '../nav/Navbar';
import { useRouter } from 'next/navigation';

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
		<Navbar px={6} borderBottom='1px solid' borderColor='gray.200' justify='space-between'>
			<Flex gap={3} align='center' flex={1}>
				<CloseButton onClick={handleBackClick} />
				<Divider h={6} orientation='vertical' />
				<Heading size='xs'>{title}</Heading>
			</Flex>
			<Center flex={1} justifyContent='flex-end' gap={2}>
				<Button onClick={handleBackClick} size='sm' isLoading={isLoading} colorScheme='gray'>
					Discard
				</Button>
				<Button type='submit' size='sm' isLoading={isLoading}>
					Save
				</Button>
			</Center>
		</Navbar>
	);
};

export default CreateNav;
