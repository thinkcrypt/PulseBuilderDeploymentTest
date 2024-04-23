import React, { FC, useEffect, useState } from 'react';
import { Button, Flex, FlexProps, Grid, Heading, Text } from '@chakra-ui/react';
import Pagination from './Pagination';
import { useAppSelector } from '@/hooks';
import { currency, sizes } from '@/lib/constants';
import OrderModal from '@/components/pos/OrderModal';

type ResultContainerProps = FlexProps & {
	data: any;
};

const PosResultContainer: FC<ResultContainerProps> = ({ data, ...props }) => {
	const { cartItems, total } = useAppSelector(state => state.cart);
	const [count, setCount] = useState<number>(0);
	useEffect(() => {
		setCount(count + 1);
		console.log(JSON.stringify(cartItems));
	}, [cartItems]);
	return (
		<Flex sx={{ ...styles.container, ...props }}>
			<Grid gridTemplateColumns={sizes.POS_RATIO} w='full' alignItems='center' h='100%'>
				<Flex gap={4} align='center' justify='space-between' w='full' px={6}>
					<Text>
						<b>{data?.totalDocs}</b> results
					</Text>
					<Pagination data={data && data} />
				</Flex>
				<Flex justify='space-between' align='center' flex={1} h='100%'>
					<Heading size='sm'>Total: {`${currency.symbol}${total?.toLocaleString()}`}</Heading>
					<OrderModal />
				</Flex>
			</Grid>
		</Flex>
	);
};

const styles = {
	container: {
		alignItems: 'center',
		borderTop: '1px solid',
		borderTopColor: 'stroke.deepL',
		zIndex: 10,
		position: 'fixed',
		bottom: 0,
		left: 0,
		bg: 'container.light',
		w: 'full',
		_dark: { bg: 'container.dark', borderTopColor: 'stroke.deepD' },
		overflow: 'scroll',
		fontSize: '.9rem',
		h: '52px',
	},
};

export default PosResultContainer;
