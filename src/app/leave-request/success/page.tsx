'use client';
import Success from '@/components/attendance/Success';
import React, { Suspense } from 'react';
import { Text, Stack, Flex, Center } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

const SuccessPage = () => {
	const searchParams = useSearchParams();
	const trackingId = searchParams.get('tid');

	return (
		<Suspense
			fallback={
				<Center
					flex={1}
					w='full'
					h='100vh'>
					...Processing
				</Center>
			}>
			<Success
				title='Submitted'
				flex={1}>
				<Center>
					<Stack
						mb={24}
						textAlign='center'
						fontSize='18px'>
						<Text>Leave request submitted successfully</Text>
						<Text>Your Tracking Id is: {trackingId}</Text>
					</Stack>
				</Center>

				<Flex
					flex={0}
					justify='flex-end'>
					<Text>Thank You</Text>
				</Flex>
			</Success>
		</Suspense>
	);
};

export default SuccessPage;
