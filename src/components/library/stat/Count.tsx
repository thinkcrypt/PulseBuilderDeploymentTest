import React from 'react';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { useGetCountQuery } from '@/store/services/commonApi';

const Count = ({ title, path }: { title: string; path: string }) => {
	const { data, isFetching } = useGetCountQuery(path);
	return (
		<Stat
			p={4}
			borderWidth={2}
			// boxShadow='md'
			borderRadius={16}>
			<StatLabel fontSize='20px'>{title}</StatLabel>
			<StatNumber fontSize='32px'>{isFetching ? '--' : data}</StatNumber>
			{/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
		</Stat>
	);
};

export default Count;
