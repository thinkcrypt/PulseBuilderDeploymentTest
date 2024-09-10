import React, { FC } from 'react';
import { Skeleton, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { currency, useGetSumQuery } from '../';

type CountProps = {
	title: string;
	path: string;
	field: string;
	price?: boolean;
	filters?: any;
};

const Sum: FC<CountProps> = ({ title, path, field, price, filters = {} }) => {
	const { data, isFetching, isError } = useGetSumQuery({ path, field, filters }, { skip: !path });
	return (
		<Stat
			alignItems='center'
			w='full'
			p={4}
			bg='white'
			boxShadow='0 2px 20px rgba(0,0,0,.07)'
			_dark={{ bg: 'menu.dark' }}
			borderRadius={16}>
			<StatLabel
				w='full'
				fontSize='1.15rem'>
				{title}
			</StatLabel>

			<Skeleton
				isLoaded={!isFetching}
				w={!isFetching ? '100%' : '100px'}>
				<StatNumber fontSize='1.4rem'>
					{isError
						? '--'
						: isFetching
						? '--'
						: price
						? `${currency.symbol}${data?.total.toLocaleString()}`
						: data?.total}
				</StatNumber>
			</Skeleton>
		</Stat>
	);
};

export default Sum;
