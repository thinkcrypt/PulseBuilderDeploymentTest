'use client';

import React, { Suspense } from 'react';
import Success from '@/components/attendance/Success';
import { Text, Stack, Flex, Center } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

const SuccessComponent = () => {
	const searchParams = useSearchParams();
	const trackingId = searchParams.get('tid');

	return (
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
	);
};

const SuccessPage = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<SuccessComponent />
		</Suspense>
	);
};

export default SuccessPage;
