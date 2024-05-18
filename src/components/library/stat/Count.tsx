import React, { FC } from 'react';
import { Skeleton, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { useGetCountQuery } from '@/store/services/commonApi';

type CountProps = {
	title: string;
	path: string;
};

const Count: FC<CountProps> = ({ title, path }) => {
	const { data, isFetching } = useGetCountQuery(path);
	return (
		<Stat
			w='full'
			p={4}
			bg='white'
			boxShadow='0 2px 20px rgba(0,0,0,.07)'
			_dark={{ bg: 'menu.dark' }}
			borderRadius={16}>
			<StatLabel fontSize='1.25rem'>{title}</StatLabel>

			<Skeleton
				isLoaded={!isFetching}
				w='100px'>
				<StatNumber fontSize='2rem'>{isFetching ? '--' : data}</StatNumber>
			</Skeleton>
		</Stat>
	);
};

export default Count;
