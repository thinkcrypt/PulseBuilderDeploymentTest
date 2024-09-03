import React, { FC } from 'react';
import { Skeleton, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { useGetCountQuery } from '../';

type CountProps = {
	title: string;
	path: string;
	filters?: any;
};

const Count: FC<CountProps> = ({ title, path, filters = {} }) => {
	const { data, isFetching, isError } = useGetCountQuery({ path: path, filters }, { skip: !path });
	return (
		<Stat
			w='full'
			p={4}
			bg='white'
			boxShadow='0 2px 20px rgba(0,0,0,.07)'
			_dark={{ bg: 'menu.dark' }}
			borderRadius={16}>
			<StatLabel fontSize='1.15rem'>{title}</StatLabel>

			<Skeleton
				isLoaded={!isFetching}
				w='100px'>
				<StatNumber fontSize='1.4rem'>{isError ? '--' : isFetching ? '--' : data}</StatNumber>
			</Skeleton>
		</Stat>
	);
};

export default Count;
